import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { apps } from '@/lib/apps';

export const metadata: Metadata = {
  title: 'Apps',
  description: 'Kewei Yan 开发的 macOS 应用与个人工具。',
  alternates: {
    canonical: '/apps',
  },
  openGraph: {
    title: 'Apps',
    description: 'Kewei Yan 开发的 macOS 应用与个人工具。',
    url: '/apps',
  },
  twitter: {
    card: 'summary',
    title: 'Apps',
    description: 'Kewei Yan 开发的 macOS 应用与个人工具。',
  },
};

export default function AppsPage() {
  return (
    <main className="personal-home flex flex-1 flex-col text-stone-900 dark:text-stone-100">
      <section className="mx-auto w-full max-w-6xl px-6 pb-14 pt-20 md:px-10 md:pb-20 md:pt-28">
        <p className="font-mono text-[0.68rem] tracking-[0.24em] text-orange-700 uppercase dark:text-orange-400">
          Personal software
        </p>
        <h1 className="mt-6 font-display text-6xl tracking-[-0.08em] text-stone-950 md:text-8xl dark:text-stone-50">
          Apps.
        </h1>
        <p className="mt-7 max-w-2xl text-base leading-8 text-stone-600 dark:text-stone-400">
          除了写文章，我也会做一些解决自己问题的应用。它们从真实使用场景开始，尽量保持功能明确、界面克制。
        </p>
      </section>

      <section className="border-y border-stone-300/80 bg-stone-100/55 dark:border-stone-700 dark:bg-stone-900/50">
        <div className="mx-auto max-w-6xl px-6 py-5 md:px-10">
          <p className="font-mono text-[0.64rem] tracking-[0.2em] text-stone-500 uppercase dark:text-stone-400">
            {String(apps.length).padStart(2, '0')} released {apps.length === 1 ? 'app' : 'apps'}
          </p>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-6 py-10 md:px-10 md:py-16">
        <ol>
          {apps.map((app, index) => (
            <li className="border-b border-stone-300 dark:border-stone-700" key={app.slug}>
              <Link
                className="group grid gap-6 py-8 transition-colors hover:bg-orange-50/70 md:grid-cols-[5rem_1fr_auto] md:items-center dark:hover:bg-orange-950/15"
                href={app.href}
              >
                <div className="flex items-center gap-4">
                  <span className="font-mono text-[0.64rem] text-orange-700 dark:text-orange-400">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <Image
                    alt={`${app.name} icon`}
                    className="h-12 w-12"
                    height={64}
                    src={app.icon}
                    width={64}
                  />
                </div>
                <div>
                  <div className="flex flex-wrap items-center gap-3">
                    <h2 className="font-display text-3xl tracking-[-0.04em] text-stone-950 dark:text-stone-50">
                      {app.name}
                    </h2>
                    <span className="font-mono text-[0.62rem] tracking-[0.16em] text-stone-500 uppercase dark:text-stone-400">
                      {app.platform} · {app.category}
                    </span>
                  </div>
                  <p className="mt-3 max-w-3xl text-sm leading-7 text-stone-600 dark:text-stone-400">
                    {app.description}
                  </p>
                </div>
                <span className="font-mono text-xs tracking-[0.14em] text-stone-500 uppercase transition-transform duration-300 group-hover:translate-x-1 group-hover:text-orange-700 dark:text-stone-400 dark:group-hover:text-orange-400">
                  View app →
                </span>
              </Link>
            </li>
          ))}
        </ol>
        <p className="mt-10 max-w-xl text-sm leading-7 text-stone-500 dark:text-stone-400">
          新应用会继续加入这里。每个应用都会有独立页面，用于说明用途、设计取舍和下载方式。
        </p>
      </section>
    </main>
  );
}
