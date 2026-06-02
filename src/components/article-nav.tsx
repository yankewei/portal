import Link from 'next/link';

export function ArticleNav() {
  return (
    <nav className="article-nav">
      <div className="article-nav-inner">
        <Link href="/" className="article-nav-logo">
          Yankewei
        </Link>
        <div className="article-nav-links">
          <Link href="/#about">Home</Link>
          <Link href="/apps">Apps</Link>
          <Link href="/articles">Writing</Link>
          <a
            className="article-nav-gh"
            href="https://github.com/yankewei"
            rel="noreferrer"
            target="_blank"
          >
            GitHub ↗
          </a>
        </div>
      </div>
    </nav>
  );
}
