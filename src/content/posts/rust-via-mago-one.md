---
title: 基于 Mago 学习 Rust（一）
pubDatetime: 2025-07-21T10:00:00+08:00
modDatetime: 2025-07-21T10:00:00+08:00
description: 什么是 Mago Mago 是一个基于 Rust 这门语言为 PHP 写的一套现代化工具链，支持代码格式化，静态检查。
draft: true
tags:
  - PHP
  - Rust
  - Mago
---

# 什么是 Mago
[Mago](https://github.com/carthage-software/mago) 是一个基于 Rust 这门语言为 PHP 写的一套现代化工具链，支持代码格式化，静态检查。
# 为什么基于 Mago 学习 Rust
作者本人的主力语言是 PHP，所以从 Mago 入手应该会更加容易且形成好的 Rust 工程化，本人是基于 Mago 0.26.1 学习的，代码不能保证和未来的一样。
# 如何开始
Mago 提供了很多的 [Library](https://github.com/carthage-software/mago/tree/main/crates)，可以从这里看到，我们从一些简单的 Library 开始学习。从名字上看 php-version 应该是如何解析 PHP 版本号的一个 Library，先从它入手。
## 创建一个单独的项目
使用 Cargo 创建一个空项目`cargo new rust-study-one && cd rust-study-one`，然后添加依赖，`cargo add mago-php-version@0.26.1`，打开 Cargo.toml 可以看到类似于如下的内容，会根据版本不同有所差异
```toml
[package]
name = "rust-study-one"
version = "0.1.0"
edition = "2024"

[dependencies]
mago-php-version = "0.26.1"
```
根据文档我们写一个简单的使用 php-versin 的 demo，打开 src/main.rs 文件，改成以下内容：
```rust
use mago_php_version::PHPVersion;

fn main() {
    let version = PHPVersion::new(8, 4, 0);
    println!("Major version: {}", version.major());
    println!("Minor version: {}", version.minor());
    println!("Patch version: {}", version.patch());
    println!("Version ID: {}", version.to_version_id());
    println!("Version string: {}", version.to_string());
}
```
`use mago_php_version::PHPVersion;` 和 PHP 的 use 很像，也有其它的不一样的地方，暂时不去了解那么多细节，先用起来。跳转到 PHPVersion 的定义处，可以看到这是一个 struct:
```rust
pub struct PHPVersion(32);
```
### 关键字 pub
pub 是一个关键字，可以控制在一个 Library 中定义模块的可见性。如果我们把 pub 去掉，再次执行 cargo run，会发现编译失败，提示 PHPVersion 是一个私有结构体，无法在外部访问。
### 关键字 struct
#### **定义和实例化**
从 PHP 开发者的角度来看，Rust struct 像是一个类的属性的集合，语法也比较简单
```rust
struct User {
    id: u32,
    name: String,
    email: String,
}
// 实例化
let user = User {
    id: 1,
    name: String::from("Kewei Ya"),
    email: String::from("kewei.yan@example.com"),
};
```
#### **struct 元组**
Mago 中的 PHPVersion 是一个 Struct 元组，可以不需要为字段进行命名，例如一个长方形可以定义为，第一个元素就是长度，第二个元素就是宽度：
```rust
struct Rectangle(u32, u32);
let rect = Rectangle(10, 20);
let with = rect.0;
let height = rect.1;
```
#### **为 struct 定义方法**
和大多数面向对象的语言一样，Rust 也支持为一个 Struct 定义一系列的方法，语法如下, PHPVersion 就定义了 new，major, minor, patch 等方法，
```rust
impl PHPVersion {
    #[inline]
    pub const fn new(major: u32, minor: u32, patch: u32) -> Self {
        Self((major << 16) | (minor << 8) | patch)
    }
    #[inline]
    pub const fn major(&self) -> u32 {
        self.0 >> 16
    }
    #[inline]
    pub const fn minor(&self) -> u32 {
        (self.0 >> 8) & 0xff
    }
    #[inline]
    pub const fn patch(&self) -> u32 {
        self.0 & 0xff
    }
}
```
#### **impl**
impl 关键字表示为 struct 定义方法，这里边的方法都和 PHPVersion 有关系。暂时先不关注 Attribute `#[inline]`，有几个新概念和语法：
1. 可以用 `const fn` 修饰函数，这样可以保证在编译时就能计算出结果，而不需要在运行时计算，提高性能。
2. new 方法的参数和其它方法的参数不一样，这点和 PHP 的静态方法有点像。
3. 其它作用在实例的方法，&self 其实是 `self: &Self` 的简写，因为第一个参数必须是 struct 的类型，所以可以直接写成 &self, 这里的 & 表示这个方法对实例的不可变借用，可以理解为一个 PHP 对象的引用，但是你不能改变这个对象。
### trait
假设我知道了 PHP 的版本号 8.4.1，是否能直接根据这个版本号来实例化一个 struct 呢？可以，Mago 的作者利用 trait 实现了这个功能。

下面的代码表示为 PHPVersion 实现了 FromStr 的 trait
```rust
impl FromStr for PHPVersion {
    type Err = ParsingError;

    fn from_str(s: &str) -> Result<Self, Self::Err> {
        if s.is_empty() {
            return Err(ParsingError::InvalidFormat);
        }

        let parts = s.split('.').collect::<Vec<_>>();
        match parts.len() {
            1 => {
                let major = parts[0].parse()?;

                Ok(Self::new(major, 0, 0))
            }
            2 => {
                let major = parts[0].parse()?;
                let minor = parts[1].parse()?;

                Ok(Self::new(major, minor, 0))
            }
            3 => {
                let major = parts[0].parse()?;
                let minor = parts[1].parse()?;
                let patch = parts[2].parse()?;

                Ok(Self::new(major, minor, patch))
            }
            _ => Err(ParsingError::InvalidFormat),
        }
    }
}
```
trait，和 PHP 的 trait 有点像，但又不完全一样，Rust 的 trait 更像是 PHP 的 interface，但是可以包含一些默认实现。 上述的代码就是为 PHPVersion 实现 FromStr 的特征，这样你就可以使用 from_str 的方法。示例：
```rust
use mago_php_version::PHPVersion;
use std::str::FromStr;

let version = PHPVersion::from_str("8.4.1").unwrap();
```
因为 FromStr 是 trait，我们需要先导入。但其实有另一个写法:
```rust
let version = "8.4.1".parse().unwrap()
```
unwrap 是作用在 Result 枚举类型的。之后我们再介绍枚举类型。

#### **to_string 方法怎么来的**
to_string 方法是通过实现 ToString trait 来实现的。在 Rust 中，ToString 是一个 trait，它定义了一个 to_string 方法，用于将一个 struct 转换为字符串。但是 PHPVersion 并没有像 FromStr 一样为 PHPVersion 实现 ToString 啊。

源代码中有一段是为 PHPVersion 实现了 std::fmt::Display
```rust
impl std::fmt::Display for PHPVersion {
    fn fmt(&self, f: &mut std::fmt::Formatter) -> std::fmt::Result {
        write!(f, "{}.{}.{}", self.major(), self.minor(), self.patch())
    }
}
```
Rust 在源码中自动为 Display 的类型实现了 to_string 的方法。感兴趣的可以自己查一查。
这种感觉有点像 PHP 的类 use 了某个 trait A，trait A 又 use 了其它 trait B，那么类就自动拥有了 trait B 中的方法。
--TBC--