import Link from 'next/link';
import Image from 'next/image';

export default function SupportPage() {
  const apps = [
    {
      id: 'countdown',
      name: '初一到十五',
      description: '一款专注于农历日期的应用，帮助您追踪农历月份的初一到十五阶段。',
      icon: '/image/lunar-loop-logo.png',
      features: [
        '显示当前农历日期和时间',
        '追踪农历月份从初一到十五的进度',
        '提供农历节气和传统节日信息',
        '简洁直观的用户界面',
      ],
    },
    {
      id: 'chronic-note',
      name: 'Chronic Note',
      description: '慢性病数据管理，再也不担心数据丢失。',
      icon: '/image/chronic-note-logo.png',
      features: [
        '支持 Sign in with Apple，保证账户安全',
        '记录血压、血糖、用药等慢性病关键数据',
        '自动备份与加密存储，避免数据丢失',
        '导出数据，与医生共享病情变化',
      ],
    },
  ];

  return (
    <main className="flex flex-1 flex-col max-w-4xl mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-4">支持中心</h1>
        <p className="text-fd-muted-foreground text-lg">
          选择应用获取支持信息和联系方式
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {apps.map((app) => (
          <div key={app.id} className="bg-fd-muted/30 rounded-lg p-6 border border-fd-border">
            <div className="text-center mb-4">
              <div className="mb-2">
                {app.icon.startsWith('/') ? (
                  <Image src={app.icon} alt={`${app.name} logo`} width={64} height={64} className="mx-auto object-contain" />
                ) : (
                  <div className="text-4xl">{app.icon}</div>
                )}
              </div>
              <h2 className="text-xl font-semibold mb-2">{app.name}</h2>
              <p className="text-fd-muted-foreground text-sm mb-4">{app.description}</p>
            </div>

            <div className="mb-4">
              <h3 className="font-semibold mb-2">主要功能：</h3>
              <ul className="text-fd-muted-foreground space-y-1 list-disc list-inside text-sm">
                {app.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>

            <div className="flex gap-2">
              <Link
                href={`/support/${app.id}`}
                className="flex-1 bg-fd-primary text-fd-primary-foreground px-4 py-2 rounded-md text-center text-sm font-medium hover:bg-fd-primary/90 transition-colors"
              >
                支持
              </Link>
              <Link
                href={`/privacy/${app.id}`}
                className="flex-1 bg-fd-secondary text-fd-secondary-foreground px-4 py-2 rounded-md text-center text-sm font-medium hover:bg-fd-secondary/90 transition-colors"
              >
                隐私政策
              </Link>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 text-center">
        <h2 className="mb-4 text-xl font-semibold">联系我们</h2>
        <p className="text-fd-muted-foreground mb-4">
          如果您对我们的应用有任何疑问或需要帮助，请随时联系我们。
        </p>
        <div>
          <p className="text-fd-muted-foreground mb-2">Email:</p>
          <a 
            href="mailto:yankewei1993@gmail.com" 
            className="text-fd-foreground font-semibold text-lg hover:underline"
          >
            yankewei1993@gmail.com
          </a>
        </div>
      </div>
    </main>
  );
} 
