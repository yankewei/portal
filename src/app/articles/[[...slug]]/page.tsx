import { source } from '@/lib/source';
import { notFound } from 'next/navigation';
import { getMDXComponents } from '@/mdx-components';
import { TableOfContents } from '@/components/table-of-contents';
import GiscusComments from '@/components/giscus-comments';

export default async function Page(props: {
  params: Promise<{ slug?: string[] }>;
}) {
  const params = await props.params;
  const page = source.getPage(params.slug);
  if (!page) notFound();

  const MDXContent = page.data.body;
  const hasToc = page.data.toc && page.data.toc.length > 0;
  const hasSlug = !!params.slug?.length;

  return (
    <main className="article-page">
      <article className="article-container">
        <header className="article-header">
          <a className="article-breadcrumb" href="/articles">
            ← Writing
          </a>
          <h1 className="article-title">{page.data.title}</h1>
          {page.data.description ? (
            <p className="article-description">{page.data.description}</p>
          ) : null}
          {page.data.lastModified ? (
            <time
              className="article-date"
              dateTime={
                page.data.lastModified instanceof Date
                  ? page.data.lastModified.toISOString()
                  : page.data.lastModified
              }
            >
              {new Date(page.data.lastModified).toLocaleDateString('zh-CN', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </time>
          ) : null}
        </header>

        <div className="article-content-layout">
          <div className="article-body" id="article-body">
            <MDXContent components={getMDXComponents()} />
            {hasSlug ? <GiscusComments /> : null}
          </div>
          {hasToc ? (
            <aside className="article-toc">
              <TableOfContents items={page.data.toc} />
            </aside>
          ) : null}
        </div>
      </article>

      <footer className="article-footer">
        <p>© {new Date().getFullYear()} Kewei Yan</p>
        <p>Built for slow reading</p>
      </footer>
    </main>
  );
}

export async function generateStaticParams() {
  return source.generateParams();
}

export async function generateMetadata(props: {
  params: Promise<{ slug?: string[] }>;
}) {
  const params = await props.params;
  const page = source.getPage(params.slug);
  if (!page) notFound();

  const description =
    page.data.description ?? `${page.data.title}。Kewei Yan 的技术文章。`;

  return {
    title: page.data.title,
    description,
    alternates: {
      canonical: page.url,
    },
    openGraph: {
      type: params.slug?.length ? 'article' : 'website',
      title: page.data.title,
      description,
      url: page.url,
    },
    twitter: {
      card: 'summary',
      title: page.data.title,
      description,
    },
  };
}
