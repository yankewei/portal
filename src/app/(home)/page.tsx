import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { apps, keyDock } from '@/lib/apps';
import { siteConfig } from '@/lib/site';

export const metadata: Metadata = {
  alternates: {
    canonical: '/',
  },
  openGraph: {
    url: '/',
  },
};

const personJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: siteConfig.name,
  url: siteConfig.url,
  jobTitle: 'Software Engineer',
  sameAs: [siteConfig.githubUrl],
};

const recentArticles = [
  {
    href: '/articles/building-a-coding-agent-from-scratch',
    year: '2026',
    topic: 'Agent Runtime',
    title: '从零做一个 Coding Agent：我这几天真正学到的东西',
    description: '从工具设计、权限边界和执行流程出发，记录一个小型 coding agent 的实现路径。',
  },
  {
    href: '/articles/laravel-batch-job-deletewhenmissingmodels-issue',
    year: '2026',
    topic: 'Laravel',
    title: 'Laravel Batch Job 的隐藏陷阱：deleteWhenMissingModels 会让 finally 回调失效',
    description: '一次生产问题排查：为什么 Batch 计数无法归零，以及可落地的替代方案。',
  },
  {
    href: '/articles/implementation-principle-of-laravel-job-release-driven-by-redis',
    year: '2025',
    topic: 'Laravel / Redis',
    title: 'Redis 驱动的 Laravel Job Release 实现原理',
    description: '拆解 delayed、reserved 队列和 Lua 脚本之间的协作方式。',
  },
  {
    href: '/articles/php-implementation-of-a-weighted-array_rand-method',
    year: '2025',
    topic: 'PHP',
    title: 'PHP 实现支持权重的 array_rand 方法',
    description: '用一个足够简单的算法实现带权重的随机选择。',
  },
  {
    href: '/articles/redis-simple-dynamic-string',
    year: '2024',
    topic: 'Redis',
    title: 'Redis 简单动态字符串',
    description: '从 SDS 的定义开始，理解它和 C 字符串之间的关键差异。',
  },
];

const currentFocus = [
  ['01', 'Agent Runtime', '研究工具调用、权限边界和可观察性'],
  ['02', 'Laravel Queue', '持续记录队列系统里的边界行为'],
  ['03', 'Rust / Mago', '从 PHP 工具链进入 Rust 工程实践'],
];

function ArrowIcon() {
  return (
    <svg
      aria-hidden="true"
      fill="none"
      height="18"
      viewBox="0 0 18 18"
      width="18"
    >
      <path
        d="M3.75 9h10.5m-4-4 4 4-4 4"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.25"
      />
    </svg>
  );
}

export default function HomePage() {
  return (
    <main className="personal-home flex flex-col text-stone-900 dark:text-stone-100">
      <script
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        type="application/ld+json"
      />
      <section
        className="mx-auto grid w-full max-w-6xl gap-14 px-6 pb-20 pt-20 md:grid-cols-[minmax(0,1fr)_20rem] md:px-10 md:pb-28 md:pt-28"
        id="about"
      >
        <div className="max-w-3xl">
          <p className="font-mono text-[0.68rem] tracking-[0.24em] text-orange-700 uppercase dark:text-orange-400">
            Backend engineer · Technical writer
          </p>
          <h1 className="mt-7 font-display text-[clamp(4.4rem,12vw,9.8rem)] leading-[0.8] tracking-[-0.1em] text-stone-950 dark:text-stone-50">
            Kewei
            <span className="block pl-[0.52em] text-orange-700 dark:text-orange-400">
              Yan.
            </span>
          </h1>
          <p className="mt-10 max-w-2xl font-display text-2xl leading-snug tracking-[-0.03em] text-stone-800 md:text-4xl dark:text-stone-200">
            后端工程师，写代码，
            <br />
            也做工具，记录问题。
          </p>
          <p className="mt-7 max-w-xl text-base leading-8 text-stone-600 dark:text-stone-400">
            主要使用 PHP，关注 Redis 与 Laravel 内部实现。
            最近在用 Rust 和 Mago 探索更可靠的工程工具，也为自己的日常工作做一些 macOS 应用。
          </p>
          <div className="mt-10 flex items-center gap-5">
            <Link
              className="group inline-flex items-center gap-3 text-sm font-semibold text-stone-950 transition-colors hover:text-orange-700 dark:text-stone-100 dark:hover:text-orange-400"
              href="/articles"
            >
              阅读文章
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                <ArrowIcon />
              </span>
            </Link>
            <span className="h-px w-14 bg-orange-700/60 dark:bg-orange-400/70" />
          </div>
        </div>

        <aside className="self-end border-l border-stone-300 pl-6 dark:border-stone-700">
          <div className="flex items-center justify-between border-b border-stone-300 pb-4 dark:border-stone-700">
            <p className="font-mono text-xs tracking-[0.2em] text-stone-500 uppercase dark:text-stone-400">
              Now
            </p>
            <span className="h-2 w-2 rounded-full bg-orange-700 dark:bg-orange-400" />
          </div>
          <ol>
            {currentFocus.map(([number, title, description]) => (
              <li
                className="grid grid-cols-[1.8rem_1fr] gap-3 border-b border-stone-300 py-5 dark:border-stone-700"
                key={number}
              >
                <span className="font-mono text-[0.64rem] text-orange-700 dark:text-orange-400">
                  {number}
                </span>
                <div>
                  <h2 className="text-sm font-semibold tracking-wide">{title}</h2>
                  <p className="mt-2 text-sm leading-6 text-stone-600 dark:text-stone-400">
                    {description}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </aside>
      </section>

      <section className="border-y border-slate-800 bg-slate-950 text-slate-100" id="apps">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 py-16 md:grid-cols-[12rem_1fr_auto] md:items-center md:px-10 md:py-20">
          <div>
            <p className="font-mono text-[0.68rem] tracking-[0.24em] text-emerald-300 uppercase">
              Apps
            </p>
            <p className="mt-3 font-mono text-[0.62rem] tracking-[0.14em] text-slate-500 uppercase">
              {String(apps.length).padStart(2, '0')} released
            </p>
          </div>
          <div className="flex flex-col gap-6 sm:flex-row sm:items-center">
            <Image
              alt="Key Dock icon"
              className="h-24 w-24"
              height={112}
              src={keyDock.icon}
              width={112}
            />
            <div>
              <p className="font-mono text-[0.62rem] tracking-[0.16em] text-emerald-300 uppercase">
                {keyDock.platform} · {keyDock.category}
              </p>
              <h2 className="mt-2 font-display text-5xl tracking-[-0.06em]">Key Dock.</h2>
              <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-400">{keyDock.description}</p>
            </div>
          </div>
          <div className="flex flex-col items-start gap-4 md:items-end">
            <Link
              className="font-mono text-xs tracking-[0.14em] text-emerald-300 uppercase transition-colors hover:text-emerald-100"
              href={keyDock.href}
            >
              了解 Key Dock →
            </Link>
            <Link
              className="font-mono text-[0.62rem] tracking-[0.14em] text-slate-500 uppercase transition-colors hover:text-slate-300"
              href="/apps"
            >
              All apps ↗
            </Link>
          </div>
        </div>
      </section>

      <section
        className="border-y border-stone-300/80 bg-stone-100/55 dark:border-stone-700 dark:bg-stone-900/50"
        id="writing"
      >
        <div className="mx-auto max-w-6xl px-6 py-16 md:px-10 md:py-24">
          <div className="grid gap-7 border-b border-stone-300 pb-8 md:grid-cols-[12rem_1fr_auto] md:items-end dark:border-stone-700">
            <p className="font-mono text-[0.68rem] tracking-[0.24em] text-orange-700 uppercase dark:text-orange-400">
              Notes & investigations
            </p>
            <h2 className="font-display text-4xl tracking-[-0.05em] text-stone-950 md:text-6xl dark:text-stone-50">
              最近写作
            </h2>
            <Link
              className="font-mono text-xs tracking-[0.14em] text-stone-600 uppercase transition-colors hover:text-orange-700 dark:text-stone-400 dark:hover:text-orange-400"
              href="/articles"
            >
              全部文章 <span aria-hidden="true">↗</span>
            </Link>
          </div>

          <ol>
            {recentArticles.map((article, index) => (
              <li key={article.href}>
                <Link
                  className="group grid gap-4 border-b border-stone-300 py-7 transition-colors hover:bg-orange-50/70 md:grid-cols-[12rem_1fr_auto] md:items-center dark:border-stone-700 dark:hover:bg-orange-950/15"
                  href={article.href}
                >
                  <div className="flex items-center gap-4 font-mono text-[0.64rem] tracking-[0.16em] text-stone-500 uppercase dark:text-stone-400">
                    <span className="text-orange-700 dark:text-orange-400">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <span>{article.year}</span>
                    <span>{article.topic}</span>
                  </div>
                  <div>
                    <h3 className="font-display text-xl tracking-[-0.02em] text-stone-900 transition-colors group-hover:text-orange-800 md:text-2xl dark:text-stone-100 dark:group-hover:text-orange-300">
                      {article.title}
                    </h3>
                    <p className="mt-2 max-w-3xl text-sm leading-6 text-stone-600 dark:text-stone-400">
                      {article.description}
                    </p>
                  </div>
                  <span className="hidden text-stone-400 transition-transform duration-300 group-hover:translate-x-1 group-hover:text-orange-700 md:block dark:group-hover:text-orange-400">
                    <ArrowIcon />
                  </span>
                </Link>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <footer className="mx-auto flex w-full max-w-6xl flex-col gap-3 px-6 py-8 font-mono text-[0.64rem] tracking-[0.14em] text-stone-500 uppercase sm:flex-row sm:items-center sm:justify-between md:px-10 dark:text-stone-400">
        <p>© {new Date().getFullYear()} Kewei Yan</p>
        <p>Built for slow reading</p>
      </footer>
    </main>
  );
}
