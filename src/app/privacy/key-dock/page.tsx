import Link from "next/link";
import Image from "next/image";

export default function KeyDockPrivacyPage() {
  const lastUpdated = `${new Date().getFullYear()} 年 ${
    new Date().getMonth() + 1
  } 月 ${new Date().getDate()} 日`;

  return (
    <main className="flex flex-1 flex-col max-w-3xl mx-auto px-4 py-8">
      <div className="mb-6">
        <Link
          href="/privacy"
          className="text-fd-muted-foreground hover:text-fd-foreground transition-colors flex items-center gap-2"
        >
          ← Back to Privacy Center
        </Link>
      </div>

      <div className="text-center mb-8">
        <div className="mb-4">
          <Image
            src="/image/key-dock-logo.png"
            alt="Key Dock logo"
            width={80}
            height={80}
            className="mx-auto object-contain"
          />
        </div>
        <h1 className="text-3xl font-bold mb-4">Key Dock - 隐私政策</h1>
        <p className="text-fd-muted-foreground text-lg">
          了解我们如何保护您的 API 密钥和凭证数据
        </p>
      </div>

      <div className="space-y-8">
        {/* Introduction */}
        <section className="bg-fd-muted/30 rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">简介</h2>
          <p className="text-fd-muted-foreground mb-4">
            最后更新：{lastUpdated}
          </p>
          <p className="text-fd-muted-foreground">
            本隐私政策解释 Key
            Dock（&ldquo;我们&rdquo;）在您使用应用时如何处理数据。Key Dock
            是一款 macOS
            凭证管理工具，您的 API 密钥通过系统钥匙串加密存储，凭证元数据通过
            iCloud 在您的设备间安全同步。
          </p>
        </section>

        {/* Information We Collect */}
        <section className="bg-fd-muted/30 rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">我们收集的信息</h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold mb-2">凭证元数据</h3>
              <p className="text-fd-muted-foreground">
                Key Dock 通过 SwiftData
                存储凭证记录的元数据，包括凭证名称、API
                提供商类型和创建时间等。这些数据通过 iCloud
                在您的 Apple 设备间安全同步，托管在 Apple 基础设施中。
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">API 密钥</h3>
              <p className="text-fd-muted-foreground">
                您的 API 密钥通过 macOS
                系统钥匙串（Keychain）进行加密存储，与操作系统的其他安全凭证使用相同的加密机制。密钥永远不会以明文形式写入应用数据库。
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">生物识别数据</h3>
              <p className="text-fd-muted-foreground">
                Key Dock 使用 macOS 的 LocalAuthentication
                框架进行身份验证。您的 Touch ID
                指纹数据由操作系统管理，Key Dock
                无法访问或存储任何生物识别原始数据。
              </p>
            </div>
          </div>
        </section>

        {/* How We Use Information */}
        <section className="bg-fd-muted/30 rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">我们如何使用您的信息</h2>
          <p className="text-fd-muted-foreground mb-4">
            所有数据仅在本地使用，用于以下目的：
          </p>
          <ul className="text-fd-muted-foreground space-y-2 list-disc list-inside">
            <li>在应用内展示和管理您保存的 API 凭证</li>
            <li>通过系统钥匙串安全读写密钥，在您授权后显示密钥内容</li>
            <li>验证 API 密钥时，向对应的 API 提供商发送验证请求</li>
            <li>通过 Touch ID 或密码验证您的身份，防止未授权访问</li>
          </ul>
        </section>

        {/* Data Storage and Security */}
        <section className="bg-fd-muted/30 rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">数据存储与安全</h2>
          <div className="space-y-4 text-fd-muted-foreground">
            <p>我们采取以下措施保护您的隐私：</p>
            <ul className="space-y-2 list-disc list-inside">
              <li>
                API 密钥通过 macOS 系统钥匙串加密存储，受硬件级安全保护
              </li>
              <li>
                应用内置 5 分钟会话超时，超时后需重新进行身份验证
              </li>
              <li>
                查看密钥内容需通过 Touch ID 或密码验证
              </li>
              <li>
                凭证元数据通过 iCloud 安全同步，托管在 Apple 加密基础设施中
              </li>
              <li>
                删除凭证时，密钥会从系统钥匙串中彻底移除
              </li>
            </ul>
          </div>
        </section>

        {/* Network Communication */}
        <section className="bg-fd-muted/30 rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">网络通信</h2>
          <p className="text-fd-muted-foreground mb-4">
            Key Dock 仅在以下情况下进行网络通信：
          </p>
          <ul className="text-fd-muted-foreground space-y-2 list-disc list-inside">
            <li>
              当您主动验证 API 密钥时，应用会向对应的 API
              提供商发送验证请求
            </li>
            <li>
              除密钥验证外，应用不会进行任何其他网络请求
            </li>
            <li>
              不包含任何第三方分析、广告或追踪 SDK
            </li>
          </ul>
        </section>

        {/* Data Sharing */}
        <section className="bg-fd-muted/30 rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">数据共享</h2>
          <p className="text-fd-muted-foreground mb-4">
            我们不会向第三方共享您的任何数据：
          </p>
          <ul className="text-fd-muted-foreground space-y-2 list-disc list-inside">
            <li>不会向任何第三方共享或出售您的数据</li>
            <li>iCloud 同步仅限您自己的 Apple 账户设备之间</li>
            <li>不使用任何远程分析或遥测服务</li>
          </ul>
        </section>

        {/* Your Rights */}
        <section className="bg-fd-muted/30 rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">您的权利</h2>
          <ul className="text-fd-muted-foreground space-y-2 list-disc list-inside">
            <li>随时查看、修改或删除您保存的任何凭证</li>
            <li>删除凭证后，对应的密钥会从系统钥匙串中彻底清除</li>
            <li>卸载应用即可移除所有本地存储的凭证元数据</li>
            <li>如果您对隐私政策有疑问，可随时联系我们</li>
          </ul>
        </section>

        {/* Contact Information */}
        <section className="bg-fd-muted/30 rounded-lg p-6 text-center">
          <h2 className="text-xl font-semibold mb-4">联系我们</h2>
          <p className="text-fd-muted-foreground mb-4">
            如需进一步了解数据处理方式，请发送邮件联系我们：
          </p>
          <div className="space-y-2">
            <p className="text-fd-muted-foreground">Email:</p>
            <a
              href="mailto:yankewei1993@gmail.com?subject=Key%20Dock%20Privacy%20Policy%20Question"
              className="text-fd-foreground font-semibold text-lg hover:underline"
            >
              yankewei1993@gmail.com
            </a>
          </div>
        </section>

        {/* Support Link */}
        <section className="text-center">
          <Link
            href="/support/key-dock"
            className="text-fd-muted-foreground hover:text-fd-foreground transition-colors"
          >
            ← 返回支持页面
          </Link>
        </section>
      </div>
    </main>
  );
}
