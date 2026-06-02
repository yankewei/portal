'use client';

import { useEffect, useRef, useState, type ReactNode } from 'react';

export interface TocItem {
  title: ReactNode;
  url: string;
  depth: number;
}

export function TableOfContents({ items }: { items: TocItem[] }) {
  const [activeId, setActiveId] = useState<string>('');
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    // Extract heading IDs from the article body
    const headings = items
      .map((item) => {
        const id = item.url.replace('#', '');
        return document.getElementById(id);
      })
      .filter(Boolean) as HTMLElement[];

    if (headings.length === 0) return;

    observerRef.current = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        }
      },
      {
        rootMargin: '-80px 0px -60% 0px',
        threshold: 0,
      },
    );

    for (const heading of headings) {
      observerRef.current.observe(heading);
    }

    return () => {
      observerRef.current?.disconnect();
    };
  }, [items]);

  if (items.length === 0) return null;

  return (
    <nav className="toc" aria-label="Table of contents">
      <p className="toc-label">On this page</p>
      <ol className="toc-list">
        {items.map((item) => {
          const isActive = activeId === item.url.replace('#', '');
          return (
            <li key={item.url}>
              <a
                className={`toc-link ${isActive ? 'toc-link--active' : ''}`}
                href={item.url}
                style={{ paddingLeft: `${(item.depth - 2) * 0.75}rem` }}
              >
                {item.title}
              </a>
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
