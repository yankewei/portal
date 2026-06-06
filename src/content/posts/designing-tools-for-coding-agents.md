---
title: "给 Coding Agent 设计 Tool：从能跑到好用"
pubDatetime: 2026-06-06T10:00:00+08:00
description: Tool 设计会直接影响 Coding Agent 的调用准确率和安全边界。这篇从意图封装、原子操作、上下文控制、安全默认和 MCP 标准化几个角度，讲讲 Tool 怎么从能跑变成好用。
draft: false
tags:
  - Agent
  - MCP
---

> *工具缺位，模型只能聊天；工具设计得乱，Agent 就会在错误的方向上越跑越远。*

---

## 一、为什么 Coding Agent 的 Tool 设计很重要？

Coding Agent 和普通聊天机器人不一样。它不只是回答问题，还要读代码、改文件、跑命令、处理依赖关系。Tool 设计得粗糙，问题很快就会暴露出来：

- **调用错工具**：用户想提交代码，Agent 却把 `git commit` 和 `git push` 混着用
- **上下文失控**：为了找一个函数，把整个项目都塞进 Prompt，token 很快烧完
- **权限边界不清**：一个 shell 工具没有限制，什么命令都能跑
- **修复循环**：改 A 破坏 B，修 B 又破坏 A，最后在同一个问题里来回打转

Google 的《Agent Tools & Interoperability with MCP》白皮书里提到过一个很直接的点：Tool 的文档质量会影响 Agent 的调用准确率。放到 Coding Agent 里，这件事更明显，因为每一次调用都可能读写文件、执行命令，甚至改变项目状态。

---

## 二、Coding Agent Tool 的四个设计原则

### 原则 1：封装意图，不要只暴露 API

**❌ 反模式：直接包装底层命令**

```python
# 烂设计：Agent 需要理解 git 的所有参数
def run_git_command(command: str):
    """执行 git 命令"""
    os.system(f"git {command}")
```

这个工具看起来很通用，但它把判断压力都丢给了 Agent。Agent 不但要理解用户想做什么，还要知道 Git 命令怎么拼、哪些参数危险、失败后怎么恢复。

**✅ 正例：封装开发者意图**

```python
def create_feature_branch(feature_name: str, base_branch: str = "main"):
    """
    基于指定分支创建功能分支，用于开发新功能。

    使用时机：当用户说要"开发新功能"、"开始一个任务"或"创建分支"时调用。

    Args:
        feature_name: 功能名称，将用作分支名（如 "add-login-page"）
        base_branch: 基于哪个分支创建，默认 main

    Returns:
        {
            "branch_name": "feature/add-login-page",
            "created_from": "main",
            "current_commit": "a1b2c3d"
        }
    """
```

更好的接口不是“执行一段 Git 命令”，而是“开始一个功能分支”。Agent 不需要完整掌握 Git，只要判断当前任务是不是在开始新功能。

---

### 原则 2：一个 Tool 只做一个原子操作

**❌ 反模式：万能工具**

```python
def manage_code(action: str, path: str, content: str = "", options: dict = None):
    """万能代码管理工具：支持读、写、删、改、移动..."""
```

这类工具参数多、分支多，Agent 很容易填错。`action` 写什么、`content` 什么时候必填、`options` 里支持哪些字段，都要靠模型自己猜。

**✅ 正例：拆成几个清楚的小工具**

```python
def read_file(file_path: str, offset: int = 0, limit: int = 100) -> str:
    """读取文件内容，用于理解现有代码逻辑。适合查看类定义、函数实现。"""

def edit_file(file_path: str, old_string: str, new_string: str) -> dict:
    """
    精确替换文件中的文本片段。
    必须提供 old_string 作为锚点，确保修改位置准确。
    """

def insert_after(file_path: str, anchor: str, new_content: str) -> dict:
    """在指定锚点代码之后插入新内容，适合添加新函数或配置项。"""

def run_tests(test_path: str = "", verbose: bool = False) -> dict:
    """
    运行测试用例。无参数时运行全部测试。
    返回：通过数、失败数、失败详情（用于定位问题）
    """
```

拆开以后，Agent 的选择会稳定很多。要看代码就读文件，要改代码就精确替换，要验证就跑测试。哪个环节失败，也能直接定位到具体工具，而不是在一个万能接口里猜是哪条分支出了问题。

---

### 原则 3：按需给上下文，不要一次性堆满

Coding Agent 很容易犯一个错：为了让模型“理解项目”，直接把一堆文件塞进上下文。

**❌ 反模式：无差别读取**

```python
def read_project_files():
    """读取项目所有文件内容返回给 Agent"""
    # 结果：一个 10 万 token 的 React 项目直接塞爆上下文
```

真正有用的上下文通常很小。Agent 需要先定位，再深入，而不是一上来读完整个项目。

**✅ 正例：按需检索 + 符号索引**

```python
def search_symbols(query: str, type: str = "all") -> list:
    """
    搜索代码符号（函数、类、变量），返回定义位置和摘要。
    用于快速定位代码，无需读取完整文件。

    Args:
        query: 搜索关键词（支持模糊匹配）
        type: 符号类型：function | class | variable | all
    """

def get_symbol_definition(file_path: str, symbol_name: str) -> dict:
    """
    获取特定符号的完整定义（仅该函数/类的代码，而非整个文件）。
    用于深入理解单个组件的实现。
    """

def get_file_outline(file_path: str) -> list:
    """
    获取文件大纲：类、函数、导入列表及其行号。
    用于快速理解文件结构，决定是否需要深入读取。
    """
```

这类工具可以配合 Tree-sitter 或 LSP 做符号级检索。Agent 先搜索“用户认证”相关逻辑，拿到文件和函数位置，再读取目标函数的实现。上下文少了，判断反而更准。

---

### 原则 4：默认安全，危险操作不要交给自觉

Coding Agent 的 Tool 权限通常很高：读写文件、执行命令、访问网络。只靠 Prompt 里写一句“请谨慎操作”不够，工具本身要有边界。

**权限控制示例**：

```python
def write_file(file_path: str, content: str, require_confirmation: bool = True) -> dict:
    """
    写入文件内容。危险操作！

    安全规则：
    - 禁止写入 .env 文件（防止泄露密钥）
    - 禁止覆盖未备份的文件（自动创建 .backup）
    - 路径必须在工作区内（防止 ../../etc/passwd 攻击）
    - 修改超过 50 行时，必须设置 require_confirmation=False（需用户确认）
    """
```

**执行隔离示例**：

```python
def run_shell_command(command: str, timeout: int = 30, allowed_commands: list = None) -> dict:
    """
    在隔离容器中执行 shell 命令。

    安全限制：
    - 默认禁止：rm, chmod, sudo, curl | sh 等危险命令
    - 网络访问默认关闭（需显式开启）
    - 超时强制终止（防止死循环）
    - 工作目录锁定在项目根目录
    """
```

能执行 shell，就要考虑删库、泄密、卡死这些风险。安全规则最好写在工具层，而不是期待 Agent 每次都记得避开危险命令。

---

## 三、Tool 文档要写到能指导调用

Tool 的 description 是 Agent 判断“该不该调用、怎么调用”的主要依据。对 Coding Agent 来说，好的文档至少要讲清楚四件事：

| 问题 | 好的文档示例 |
| ---- | ------------ |
| **这是什么？** | “在指定文件的特定位置插入代码片段，不覆盖现有内容” |
| **什么时候用？** | “当用户说‘添加一个函数’、‘插入日志’、‘在这里加段代码’时调用” |
| **参数怎么填？** | `anchor`: “必须完全匹配文件中已有的代码行，作为插入定位点” |
| **失败了怎么办？** | “如果 anchor 找不到，返回错误并建议先用 search_symbols 查找正确位置” |

错误消息也要能让 Agent 接着处理，而不是只返回一句失败。

```python
# ❌ 烂错误
{"error": "File not found"}

# ✅ 好错误
{
    "error": "File 'src/utils/auth.js' not found in workspace",
    "suggestion": "Did you mean 'src/utils/authentication.js'? Use search_symbols('auth') to find the correct file.",
    "available_files": ["src/utils/authentication.js", "src/helpers/auth-helper.js"]
}
```

第二种错误消息里有失败原因、可能的正确路径和下一步建议。Agent 不需要重新猜，可以直接改用搜索工具或换路径。

---

## 四、用 MCP 暴露 Tool 时要更严格

如果你在用 Model Context Protocol（MCP）暴露 Coding Tool，工具定义最好写得更严格一些。

### 1. Schema 必须明确

```json
{
  "name": "refactor_function",
  "description": "重构指定函数，提取重复逻辑为独立函数...",
  "inputSchema": {
    "type": "object",
    "properties": {
      "file_path": {
        "type": "string",
        "description": "包含目标函数的绝对路径（必须在项目根目录下）"
      },
      "function_name": {
        "type": "string",
        "description": "要重构的函数名（精确匹配）"
      }
    },
    "required": ["file_path", "function_name"]
  },
  "annotations": {
    "readOnlyHint": false,
    "destructiveHint": true,
    "idempotentHint": false
  }
}
```

### 2. 标清工具的行为属性

- `destructiveHint: true` 表示会修改代码，调用前要更谨慎
- `readOnlyHint: false` 表示不是只读操作，可能有副作用
- `idempotentHint: false` 表示重复调用可能产生不同结果，比如多次重构会越改越乱

### 3. 动态能力要能管住

MCP 服务器可能在运行时动态添加 Tool。对 Coding Agent 来说，这里至少要有几层限制：只允许调用预审批的 Tool；Tool 定义变更时要告警或断开连接；带有 `destructiveHint=true` 的操作要进入人工确认流程。

---

## 五、设计完 Tool 后可以这样自查

做完一个 Coding Tool，可以用这几个问题过一遍：

1. **意图是否清楚**：用户说“帮我改下登录逻辑”，Agent 能选到正确工具吗？
2. **参数是否足够少**：必填参数能不能控制在 3 个以内，每个参数有没有示例？
3. **输出是否可继续处理**：返回值里有没有成功/失败状态，以及下一步建议？
4. **默认是否安全**：危险操作有没有确认机制、路径限制和备份策略？
5. **错误是否可恢复**：失败时有没有说明为什么失败、接下来该怎么修？

这些问题看起来简单，但很容易在“先跑起来”的阶段被跳过。Tool 一旦被 Agent 高频调用，小问题会被放大很多次。

---

## 六、结语

Coding Agent 的 Tool 设计，是把开发者的工作习惯翻译成 Agent 能稳定调用的接口。

好的 Tool 会让 Agent 更像一个守规矩的工程同事：先定位，再读取；先小范围修改，再验证；遇到危险操作，知道停下来确认。Tool 设计得太散，Agent 就只能靠猜，猜错以后还会把项目状态改得更乱。

模型能力很重要，但在工程环境里，Tool 往往决定了 Agent 能不能稳定工作。

---

> 📌 **参考**：Google《Agent Tools & Interoperability with MCP》(2025)
> 🔗 **MCP 协议**：https://modelcontextprotocol.io

---

*如果你正在设计 Coding Agent 的 Tool，欢迎评论区交流你的场景和踩过的坑。*
