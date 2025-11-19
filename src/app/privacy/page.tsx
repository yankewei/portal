import Link from "next/link";
import Image from "next/image";

export default function PrivacyPage() {
  const apps = [
    {
      id: "countdown",
      name: "初一到十五",
      description: "记录重要纪念日的倒数日，支持农历和阳历",
      icon: "/image/lunar-loop-logo.png",
      privacyHighlights: [
        "所有数据本地存储，保护隐私安全",
        "无需网络连接，离线使用",
        "绝不向第三方出售个人数据",
        "完全控制您的倒数日数据",
      ],
    },
    {
      id: "chronic-note",
      name: "Chronic Note",
      description: "慢性病数据管理，再也不担心数据丢失",
      icon: "/image/chronic-note-logo.png",
      privacyHighlights: [
        "使用 Sign in with Apple，最小化身份信息共享",
        "仅存储用户主动填写的慢性病数据，不做分析",
        "数据加密存储，可随时导出与删除",
        "绝不与第三方共享或出售健康数据",
      ],
    },
  ];

  return (
    <main className="flex flex-1 flex-col max-w-4xl mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-4">隐私中心</h1>
        <p className="text-fd-muted-foreground text-lg">
          选择应用查看其隐私政策数据处理方式
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {apps.map((app) => (
          <div
            key={app.id}
            className="bg-fd-muted/30 rounded-lg p-6 border border-fd-border"
          >
            <div className="text-center mb-4">
              <div className="mb-2">
                {app.icon.startsWith("/") ? (
                  <Image
                    src={app.icon}
                    alt={`${app.name} logo`}
                    width={64}
                    height={64}
                    className="mx-auto object-contain"
                  />
                ) : (
                  <div className="text-4xl">{app.icon}</div>
                )}
              </div>
              <h2 className="text-xl font-semibold mb-2">{app.name}</h2>
              <p className="text-fd-muted-foreground text-sm mb-4">
                {app.description}
              </p>
            </div>

            <div className="mb-4">
              <h3 className="font-semibold mb-2">隐私亮点：</h3>
              <ul className="text-fd-muted-foreground space-y-1 list-disc list-inside text-sm">
                {app.privacyHighlights.map((highlight, index) => (
                  <li key={index}>{highlight}</li>
                ))}
              </ul>
            </div>

            <div className="flex gap-2">
              <Link
                href={`/privacy/${app.id}`}
                className="flex-1 bg-fd-primary text-fd-primary-foreground px-4 py-2 rounded-md text-center text-sm font-medium hover:bg-fd-primary/90 transition-colors"
              >
                隐私政策
              </Link>
              <Link
                href={`/support/${app.id}`}
                className="flex-1 bg-fd-secondary text-fd-secondary-foreground px-4 py-2 rounded-md text-center text-sm font-medium hover:bg-fd-secondary/90 transition-colors"
              >
                支持
              </Link>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 text-center">
        <h2 className="mb-4 text-xl font-semibold">隐私保护承诺</h2>
        <p className="text-fd-muted-foreground mb-4">
          我们致力于保护您的隐私，确保数据处理过程的透明度。
        </p>
        <div className="bg-fd-muted/30 rounded-lg p-6 max-w-2xl mx-auto">
          <h3 className="font-semibold mb-3">我们的隐私原则：</h3>
          <ul className="text-fd-muted-foreground space-y-2 list-disc list-inside text-left">
            <li>我们只收集提供服务所必需的数据</li>
            <li>您的数据安全存储，传输时进行加密</li>
            <li>我们绝不向第三方出售您的个人信息</li>
            <li>您完全控制您的数据，可随时删除</li>
            <li>我们对数据处理方式保持透明</li>
          </ul>
        </div>
      </div>
    </main>
  );
}
