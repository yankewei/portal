import Link from "next/link";
import Image from "next/image";

export default function ChronicNoteSupportPage() {
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
            src="/image/chronic-note-logo.png"
            alt="Chronic Note logo"
            width={80}
            height={80}
            className="mx-auto object-contain"
          />
        </div>
        <h1 className="text-3xl font-bold mb-4">Chronic Note - 支持</h1>
        <p className="text-fd-muted-foreground text-lg">
          慢性病数据管理，再也不担心数据丢失
        </p>
      </div>

      <div className="space-y-8">
        {/* App Description */}
        <section className="bg-fd-muted/30 rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">应用简介</h2>
          <p className="text-fd-muted-foreground mb-4">
            Chronic Note 通过结构化数据记录，帮助您持续追踪慢性病指标、用药和症状，确保每一次就诊都有完整资料。应用支持
            Sign in with Apple 登录，数据在云端安全存储并可跨设备同步，避免意外丢失。
          </p>
          <div>
            <h3 className="font-semibold mb-2">核心能力：</h3>
            <ul className="text-fd-muted-foreground space-y-2 list-disc list-inside">
              <li>自定义血压、血糖、体重等多种指标，按日记形式记录</li>
              <li>保存医生诊断、用药方案、复诊提醒等关键信息</li>
              <li>支持导出 PDF/CSV，与家人或医生共享</li>
              <li>通过 iCloud 同步保存，切换设备也能延续记录</li>
            </ul>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="bg-fd-muted/30 rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">常见问题</h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold mb-2">如何登录 Chronic Note？</h3>
              <p className="text-fd-muted-foreground">
                点击应用首页的 &ldquo;继续使用 Apple 登录&rdquo; 按钮即可完成身份验证。我们不会获取您的邮箱或姓名，只会存储
                Apple 提供的匿名标识符用于创建账户。
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">我可以录入哪些数据？</h3>
              <p className="text-fd-muted-foreground">
                您可以录入血压、血糖、体重、用药记录、症状描述、检查结果等所有与慢性病管理相关的信息，并可自定义字段。
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">数据会被分析或用于广告吗？</h3>
              <p className="text-fd-muted-foreground">
                不会。Chronic Note
                仅保存您主动提交的数据，用于在应用内展示。我们不会进行任何自动化分析、画像或广告用途。
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">如何备份或导出数据？</h3>
              <p className="text-fd-muted-foreground">
                应用自动在云端保存您的记录，您也可以在设置 &gt; 数据管理中手动导出 CSV 或 PDF 文件，方便打印或分享给医生。
              </p>
            </div>
          </div>
        </section>

        {/* Data & Security */}
        <section className="bg-fd-muted/30 rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">数据与安全</h2>
          <ul className="text-fd-muted-foreground space-y-2 list-disc list-inside">
            <li>Sign in with Apple 提供身份验证，确保只有您可以访问数据</li>
            <li>所有慢性病数据在传输和存储时均采用加密</li>
            <li>如需删除云端数据或注销账户，请发送邮件联系我们处理</li>
            <li>我们不会向第三方共享或出售任何健康信息</li>
          </ul>
        </section>

        {/* Contact Support */}
        <section className="bg-fd-muted/30 rounded-lg p-6 text-center">
          <h2 className="text-xl font-semibold mb-4">需要更多帮助？</h2>
          <p className="text-fd-muted-foreground mb-4">
            如果您需要额外支持或有关于 Chronic Note 的问题，请随时联系我们。
          </p>
          <div className="space-y-2">
            <p className="text-fd-muted-foreground">Email:</p>
            <a
              href="mailto:yankewei1993@gmail.com?subject=Chronic%20Note%20App%20Support"
              className="text-fd-foreground font-semibold text-lg hover:underline"
            >
              yankewei1993@gmail.com
            </a>
          </div>
        </section>

        {/* Privacy Link */}
        <section className="text-center">
          <Link
            href="/privacy/chronic-note"
            className="text-fd-muted-foreground hover:text-fd-foreground transition-colors"
          >
            查看隐私政策 →
          </Link>
        </section>
      </div>
    </main>
  );
}
