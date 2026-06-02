import type { MDXComponents } from 'mdx/types';
import type { AnchorHTMLAttributes, DetailedHTMLProps, ReactNode } from 'react';

function HeadingLink({
  as: Tag,
  id,
  children,
  className,
  ...props
}: {
  as: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  id?: string;
  children?: ReactNode;
  className?: string;
} & Record<string, unknown>) {
  const headingId =
    id ??
    (typeof children === 'string'
      ? children.toLowerCase().replace(/[^a-z0-9\u4e00-\u9fa5]+/g, '-').replace(/(^-|-$)/g, '')
      : undefined);

  return (
    <Tag id={headingId} className={className}>
      {children}
      {headingId ? (
        <a
          className="anchor-link"
          href={`#${headingId}`}
          aria-label="Link to this section"
        >
          #
        </a>
      ) : null}
    </Tag>
  );
}

export function getMDXComponents(): MDXComponents {
  return {
    h1: (props) => <HeadingLink as="h1" {...props} />,
    h2: (props) => <HeadingLink as="h2" {...props} />,
    h3: (props) => <HeadingLink as="h3" {...props} />,
    h4: (props) => <HeadingLink as="h4" {...props} />,
    h5: (props) => <HeadingLink as="h5" {...props} />,
    h6: (props) => <HeadingLink as="h6" {...props} />,
    p: (props) => <p className="article-p" {...props} />,
    a: (props: DetailedHTMLProps<AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>) => (
      <a className="article-link" {...props} />
    ),
    code: ({ className, ...props }) => {
      // Inline code vs block code: block code is inside <pre>, inline has no 'language-' class
      const isInline = !className?.startsWith('language-');
      if (isInline) {
        return <code className="article-inline-code" {...props} />;
      }
      return <code className={className} {...props} />;
    },
    pre: (props) => <pre className="article-code-block" {...props} />,
    blockquote: (props) => <blockquote className="article-blockquote" {...props} />,
    hr: (props) => <hr className="article-hr" {...props} />,
    img: ({ alt, ...props }) => (
      <figure className="article-figure">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img alt={alt ?? ''} className="article-img" {...props} />
        {alt ? <figcaption className="article-figcaption">{alt}</figcaption> : null}
      </figure>
    ),
    ul: (props) => <ul className="article-ul" {...props} />,
    ol: (props) => <ol className="article-ol" {...props} />,
    li: (props) => <li className="article-li" {...props} />,
    table: (props) => (
      <div className="article-table-wrapper">
        <table className="article-table" {...props} />
      </div>
    ),
  };
}
