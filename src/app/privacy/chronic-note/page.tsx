import Link from "next/link";
import Image from "next/image";

export default function ChronicNotePrivacyPage() {
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
            src="/image/chronic-note-logo.png"
            alt="Chronic Note logo"
            width={80}
            height={80}
            className="mx-auto object-contain"
          />
        </div>
        <h1 className="text-3xl font-bold mb-4">Chronic Note - 隐私政策</h1>
        <p className="text-fd-muted-foreground text-lg">
          了解我们如何收集、存储和保护您的慢性病数据
        </p>
      </div>

      <div className="space-y-8">
        {/* Introduction */}
        <section className="bg-fd-muted/30 rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">简介</h2>
          <p className="text-fd-muted-foreground mb-4">最后更新：{lastUpdated}</p>
          <p className="text-fd-muted-foreground">
            本隐私政策解释 Chronic Note（&ldquo;我们&rdquo;）在您使用应用时如何处理数据。Chronic
            Note 仅收集运行服务所必需的信息，并不会对您的健康数据进行任何自动分析或广告用途。
          </p>
        </section>

        {/* Information We Collect */}
        <section className="bg-fd-muted/30 rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">我们收集的信息</h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold mb-2">账户信息</h3>
              <p className="text-fd-muted-foreground">
                我们使用 Sign in with Apple 提供身份验证，仅保存 Apple 返回的唯一用户标识符以及您允许共享的邮箱（如有）。该信息用于识别账户并同步数据。
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">慢性病数据</h3>
              <p className="text-fd-muted-foreground">
                仅当您主动输入时才会保存数据，如血压、血糖、体重、用药记录、医生诊断、复诊提醒等。您可以随时新增、编辑或删除这些数据。
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">诊断日志</h3>
              <p className="text-fd-muted-foreground">
                为了排查崩溃，我们可能收集匿名的错误日志和应用版本号。这些信息不包含任何个人数据或健康信息。
              </p>
            </div>
          </div>
        </section>

        {/* How We Use Information */}
        <section className="bg-fd-muted/30 rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">我们如何使用您的信息</h2>
          <p className="text-fd-muted-foreground mb-4">
            所有数据仅用于向您展示记录、生成报告并在设备间同步：
          </p>
          <ul className="text-fd-muted-foreground space-y-2 list-disc list-inside">
            <li>通过 Apple 登录识别用户并加密存储数据</li>
            <li>在应用内展示您录入的慢性病数据，帮助您与医生沟通</li>
            <li>在 iCloud 等安全云端备份数据，防止意外丢失</li>
            <li>不会对健康数据进行画像、推荐或广告分析</li>
          </ul>
        </section>

        {/* Data Storage and Security */}
        <section className="bg-fd-muted/30 rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">数据存储与安全</h2>
          <div className="space-y-4 text-fd-muted-foreground">
            <p>我们采取以下措施保护您的隐私：</p>
            <ul className="space-y-2 list-disc list-inside">
              <li>传输与存储均使用加密，防止未授权访问</li>
              <li>所有云端数据托管在 Apple 基础设施中，符合平台安全要求</li>
              <li>您可以在应用内导出和下载数据备份，方便与医生共享</li>
              <li>如需删除云端数据或注销账户，请发送邮件提出申请，我们将人工处理</li>
            </ul>
          </div>
        </section>

        {/* Data Sharing */}
        <section className="bg-fd-muted/30 rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">数据共享</h2>
          <p className="text-fd-muted-foreground mb-4">
            我们不会出售或出租您的个人信息，也不会将任何健康数据分享给第三方。
          </p>
          <ul className="text-fd-muted-foreground space-y-2 list-disc list-inside">
            <li>除非法律要求，否则不会与任何组织共享数据</li>
            <li>若您选择导出数据并与医生或家人分享，这些操作完全由您发起</li>
            <li>我们不集成任何第三方广告或追踪 SDK</li>
          </ul>
        </section>

        {/* Your Rights */}
        <section className="bg-fd-muted/30 rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">您的权利</h2>
          <ul className="text-fd-muted-foreground space-y-2 list-disc list-inside">
            <li>随时查看、修改或删除您录入的任何数据</li>
            <li>导出全部记录，用于备份或与医生共享</li>
            <li>如需撤回 Apple 登录授权或注销账户，请联系我们协助处理</li>
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
              href="mailto:yankewei1993@gmail.com?subject=Chronic%20Note%20Privacy%20Policy%20Question"
              className="text-fd-foreground font-semibold text-lg hover:underline"
            >
              yankewei1993@gmail.com
            </a>
          </div>
        </section>

        {/* Support Link */}
        <section className="text-center">
          <Link
            href="/support/chronic-note"
            className="text-fd-muted-foreground hover:text-fd-foreground transition-colors"
          >
            ← 返回支持页面
          </Link>
        </section>
      </div>
    </main>
  );
}
