import type { ReactNode } from 'react';
import { ArticleNav } from '@/components/article-nav';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <ArticleNav />
      {children}
    </>
  );
}
