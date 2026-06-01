import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { keyDock } from '@/lib/apps';
import { siteConfig } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Key Dock',
  description: keyDock.detail,
  alternates: {
    canonical: keyDock.href,
  },
  openGraph: {
    title: 'Key Dock',
    description: keyDock.detail,
    url: keyDock.href,
    images: [
      {
        url: keyDock.icon,
        alt: 'Key Dock icon',
      },
    ],
  },
  twitter: {
    card: 'summary',
    title: 'Key Dock',
    description: keyDock.detail,
    images: [keyDock.icon],
  },
};

const softwareApplicationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: keyDock.name,
  applicationCategory: 'DeveloperApplication',
  operatingSystem: keyDock.requirements,
  description: keyDock.detail,
  downloadUrl: keyDock.downloadUrl,
  author: {
    '@type': 'Person',
    name: siteConfig.name,
    url: siteConfig.url,
  },
};

const previewCredentials = [
  ['OpenAI', 'Production', 'Verified'],
  ['DeepSeek', 'Personal', 'Verified'],
  ['Anthropic', 'Research', 'Locked'],
];

export default function KeyDockPage() {
  return (
    <main className="personal-home flex flex-1 flex-col text-stone-900 dark:text-stone-100">
      <script
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareApplicationJsonLd) }}
        type="application/ld+json"
      />
      <section className="mx-auto grid w-full max-w-6xl gap-12 px-6 pb-20 pt-20 md:grid-cols-[minmax(0,1fr)_25rem] md:px-10 md:pb-28 md:pt-28">
        <div>
          <Link
            className="font-mono text-[0.68rem] tracking-[0.18em] text-orange-700 uppercase transition-colors hover:text-orange-900 dark:text-orange-400 dark:hover:text-orange-300"
            href="/apps"
          >
            ← All apps
          </Link>
          <div className="mt-10 flex items-center gap-5">
            <Image
              alt="Key Dock icon"
              className="h-24 w-24 md:h-28 md:w-28"
              height={128}
              priority
              src={keyDock.icon}
              width={128}
            />
            <div>
              <p className="font-mono text-[0.64rem] tracking-[0.2em] text-stone-500 uppercase dark:text-stone-400">
                {keyDock.platform} · {keyDock.category}
              </p>
              <h1 className="mt-2 font-display text-6xl tracking-[-0.08em] text-stone-950 md:text-8xl dark:text-stone-50">
                Key Dock.
              </h1>
            </div>
          </div>
          <p className="mt-10 max-w-2xl font-display text-2xl leading-snug tracking-[-0.03em] text-stone-800 md:text-4xl dark:text-stone-200">
            把 API 密钥放回它们应该在的地方。
          </p>
          <p className="mt-7 max-w-2xl text-base leading-8 text-stone-600 dark:text-stone-400">
            {keyDock.detail}
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-5">
            <a
              className="inline-flex items-center gap-3 bg-stone-950 px-5 py-3 font-mono text-xs tracking-[0.14em] text-stone-50 uppercase transition-colors hover:bg-orange-800 dark:bg-stone-100 dark:text-stone-950 dark:hover:bg-orange-300"
              href={keyDock.downloadUrl}
              rel="noreferrer"
              target="_blank"
            >
              下载最新版 <span aria-hidden="true">↗</span>
            </a>
            <span className="font-mono text-[0.64rem] tracking-[0.14em] text-stone-500 uppercase dark:text-stone-400">
              {keyDock.requirements}
            </span>
          </div>
        </div>

        <KeyDockPreview />
      </section>

      <section className="border-y border-stone-300/80 bg-stone-100/55 dark:border-stone-700 dark:bg-stone-900/50">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 py-16 md:grid-cols-[12rem_1fr] md:px-10 md:py-24">
          <p className="font-mono text-[0.68rem] tracking-[0.24em] text-orange-700 uppercase dark:text-orange-400">
            Why it exists
          </p>
          <div>
            <h2 className="font-display text-4xl tracking-[-0.05em] text-stone-950 md:text-6xl dark:text-stone-50">
              为日常开发准备的凭证底座
            </h2>
            <p className="mt-6 max-w-3xl text-base leading-8 text-stone-600 dark:text-stone-400">
              开发者经常需要在不同服务之间切换 API 密钥。Key Dock 把存储、查找、验证和锁定放进一个原生 macOS 应用里，减少密钥被复制到临时文本中的机会。
            </p>
            <ol className="mt-12 grid gap-x-10 md:grid-cols-2">
              {keyDock.features.map((feature, index) => (
                <li
                  className="grid grid-cols-[2rem_1fr] gap-4 border-t border-stone-300 py-5 dark:border-stone-700"
                  key={feature}
                >
                  <span className="font-mono text-[0.64rem] text-orange-700 dark:text-orange-400">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <p className="text-sm leading-7 text-stone-700 dark:text-stone-300">{feature}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section className="mx-auto grid w-full max-w-6xl gap-10 px-6 py-16 md:grid-cols-[12rem_1fr] md:px-10 md:py-24">
        <p className="font-mono text-[0.68rem] tracking-[0.24em] text-orange-700 uppercase dark:text-orange-400">
          Provider coverage
        </p>
        <div>
          <h2 className="font-display text-4xl tracking-[-0.05em] text-stone-950 md:text-6xl dark:text-stone-50">
            直接服务与 Gateway
          </h2>
          <p className="mt-6 max-w-3xl text-base leading-8 text-stone-600 dark:text-stone-400">
            当前版本已经覆盖常用模型服务，也允许添加自定义 Gateway。验证操作只在你主动触发时进行。
          </p>
          <ul className="mt-10 grid gap-0 border-t border-stone-300 sm:grid-cols-2 lg:grid-cols-3 dark:border-stone-700">
            {keyDock.providers.map((provider, index) => (
              <li
                className="flex items-center gap-3 border-b border-stone-300 py-4 font-mono text-xs tracking-[0.08em] text-stone-700 dark:border-stone-700 dark:text-stone-300"
                key={provider}
              >
                <span className="text-orange-700 dark:text-orange-400">
                  {String(index + 1).padStart(2, '0')}
                </span>
                {provider}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-stone-950 text-stone-100 dark:bg-black">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 py-16 md:grid-cols-[12rem_1fr] md:px-10 md:py-20">
          <p className="font-mono text-[0.68rem] tracking-[0.24em] text-orange-400 uppercase">
            Privacy by design
          </p>
          <div>
            <h2 className="font-display text-4xl tracking-[-0.05em] md:text-5xl">
              密钥由系统能力保护。
            </h2>
            <p className="mt-5 max-w-3xl text-sm leading-7 text-stone-400">
              密钥存储使用 macOS Keychain 或 iCloud Keychain。查看敏感内容前需要通过 Touch ID 或系统密码验证，自动锁定时间可以在应用内配置。
            </p>
            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 font-mono text-[0.64rem] tracking-[0.14em] text-stone-400 uppercase">
              <span>Keychain storage</span>
              <span>Device authentication</span>
              <span>Configurable auto-lock</span>
            </div>
          </div>
        </div>
      </section>

      <footer className="mx-auto flex w-full max-w-6xl flex-col gap-4 px-6 py-8 font-mono text-[0.64rem] tracking-[0.14em] text-stone-500 uppercase sm:flex-row sm:items-center sm:justify-between md:px-10 dark:text-stone-400">
        <p>{keyDock.requirements}</p>
        <a
          className="transition-colors hover:text-orange-700 dark:hover:text-orange-400"
          href="mailto:yankewei1993@gmail.com?subject=Key%20Dock%20Support"
        >
          Support: yankewei1993@gmail.com
        </a>
      </footer>
    </main>
  );
}

function KeyDockPreview() {
  return (
    <aside className="self-center overflow-hidden rounded-xl border border-slate-600/70 bg-slate-950 text-slate-100 shadow-2xl shadow-slate-900/25">
      <div className="flex items-center gap-2 border-b border-slate-700 bg-slate-900 px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
        <span className="h-2.5 w-2.5 rounded-full bg-amber-300" />
        <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
        <span className="ml-auto font-mono text-[0.58rem] tracking-[0.16em] text-slate-400 uppercase">
          Key Dock · Unlocked
        </span>
      </div>
      <div className="grid grid-cols-[7.5rem_1fr]">
        <div className="border-r border-slate-800 bg-slate-900/75 p-4">
          <p className="font-mono text-[0.58rem] tracking-[0.16em] text-slate-500 uppercase">
            Credentials
          </p>
          <ul className="mt-4 space-y-3 font-mono text-[0.62rem] text-slate-400">
            <li className="text-emerald-300">All Keys · 03</li>
            <li>Favorites · 01</li>
            <li className="pt-3 text-slate-500 uppercase">Providers</li>
            <li>OpenAI</li>
            <li>DeepSeek</li>
            <li>Anthropic</li>
          </ul>
        </div>
        <div className="p-4">
          <div className="flex items-center justify-between">
            <p className="font-mono text-[0.58rem] tracking-[0.16em] text-slate-500 uppercase">
              Stored securely
            </p>
            <span className="h-2 w-2 rounded-full bg-emerald-300" />
          </div>
          <ul className="mt-4 space-y-3">
            {previewCredentials.map(([provider, name, status]) => (
              <li className="border-b border-slate-800 pb-3" key={provider}>
                <div className="flex items-center justify-between gap-3">
                  <p className="text-xs font-semibold">{name}</p>
                  <span
                    className={`font-mono text-[0.55rem] tracking-[0.08em] uppercase ${
                      status === 'Locked' ? 'text-amber-300' : 'text-emerald-300'
                    }`}
                  >
                    {status}
                  </span>
                </div>
                <p className="mt-1 font-mono text-[0.58rem] text-slate-500">
                  {provider} · ••••••••••••••••
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </aside>
  );
}
