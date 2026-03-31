import Link from "next/link";
import Image from "next/image";

export default function KeyDockSupportPage() {
  return (
    <main className="flex flex-1 flex-col max-w-3xl mx-auto px-4 py-8">
      <div className="mb-6">
        <Link
          href="/support"
          className="text-fd-muted-foreground hover:text-fd-foreground transition-colors flex items-center gap-2"
        >
          ← Back to Support Center
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
        <h1 className="text-3xl font-bold mb-4">Key Dock - 支持</h1>
        <p className="text-fd-muted-foreground text-lg">
          安全管理和验证您的 API 密钥
        </p>
      </div>

      <div className="space-y-8">
        {/* App Description */}
        <section className="bg-fd-muted/30 rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">应用简介</h2>
          <p className="text-fd-muted-foreground mb-4">
            Key Dock 是一款 macOS
            凭证管理工具，专为开发者设计，用于安全存储和验证各类 API
            密钥。所有密钥通过系统钥匙串加密保存，并支持 Touch ID
            或密码进行生物识别锁定，确保您的凭证安全无忧。
          </p>
          <div>
            <h3 className="font-semibold mb-2">核心能力：</h3>
            <ul className="text-fd-muted-foreground space-y-2 list-disc list-inside">
              <li>支持 DeepSeek、Kimi Code、OpenAI 等多种 API 提供商</li>
              <li>通过 macOS 系统钥匙串安全存储密钥</li>
              <li>一键验证 API 密钥有效性</li>
              <li>Touch ID / 密码生物识别锁定，5 分钟会话超时自动锁定</li>
              <li>按提供商分类管理，快速筛选查找</li>
            </ul>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="bg-fd-muted/30 rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">常见问题</h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold mb-2">Key Dock 如何存储我的密钥？</h3>
              <p className="text-fd-muted-foreground">
                所有 API 密钥都通过 macOS
                系统钥匙串进行加密存储，与您的银行卡密码、Wi-Fi
                密码使用相同的安全机制。密钥不会以明文形式保存在应用数据库中。
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">支持哪些 API 提供商？</h3>
              <p className="text-fd-muted-foreground">
                目前支持 DeepSeek、Kimi Code 和 OpenAI。我们会持续添加更多提供商支持。
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">
                什么是会话锁定？
              </h3>
              <p className="text-fd-muted-foreground">
                Key Dock 使用 5
                分钟会话超时机制。验证身份后，您可以在 5
                分钟内自由查看密钥；超时后需要重新通过 Touch ID
                或密码验证，防止他人在您离开后查看密钥。
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">如何验证 API 密钥是否有效？</h3>
              <p className="text-fd-muted-foreground">
                在凭证详情页中点击验证按钮，Key Dock
                会向对应的 API 提供商发送验证请求，确认密钥是否仍然有效。
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">密钥会上传到云端吗？</h3>
              <p className="text-fd-muted-foreground">
                不会。所有数据完全存储在本地，包括系统钥匙串中的密钥和
                SwiftData 中的凭证记录。Key Dock
                不会将您的密钥上传到任何服务器。
              </p>
            </div>
          </div>
        </section>

        {/* System Requirements */}
        <section className="bg-fd-muted/30 rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">系统要求</h2>
          <ul className="text-fd-muted-foreground space-y-2 list-disc list-inside">
            <li>macOS 14.0 (Sonoma) 或更高版本</li>
            <li>支持 Touch ID 的 Mac（可选，也可使用密码验证）</li>
          </ul>
        </section>

        {/* Contact Support */}
        <section className="bg-fd-muted/30 rounded-lg p-6 text-center">
          <h2 className="text-xl font-semibold mb-4">需要更多帮助？</h2>
          <p className="text-fd-muted-foreground mb-4">
            如果您需要额外支持或有关于 Key Dock 的问题，请随时联系我们。
          </p>
          <div className="space-y-2">
            <p className="text-fd-muted-foreground">Email:</p>
            <a
              href="mailto:yankewei1993@gmail.com?subject=Key%20Dock%20App%20Support"
              className="text-fd-foreground font-semibold text-lg hover:underline"
            >
              yankewei1993@gmail.com
            </a>
          </div>
        </section>

        {/* Privacy Link */}
        <section className="text-center">
          <Link
            href="/privacy/key-dock"
            className="text-fd-muted-foreground hover:text-fd-foreground transition-colors"
          >
            查看隐私政策 →
          </Link>
        </section>
      </div>
    </main>
  );
}
