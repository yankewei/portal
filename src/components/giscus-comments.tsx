'use client';

import { useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';

const config = {
  repo: process.env.NEXT_PUBLIC_GISCUS_REPO,
  repoId: process.env.NEXT_PUBLIC_GISCUS_REPO_ID,
  category: process.env.NEXT_PUBLIC_GISCUS_CATEGORY,
  categoryId: process.env.NEXT_PUBLIC_GISCUS_CATEGORY_ID,
  mapping: process.env.NEXT_PUBLIC_GISCUS_MAPPING ?? 'pathname',
  strict: process.env.NEXT_PUBLIC_GISCUS_STRICT ?? '0',
  reactionsEnabled: process.env.NEXT_PUBLIC_GISCUS_REACTIONS ?? '1',
  emitMetadata: process.env.NEXT_PUBLIC_GISCUS_EMIT_METADATA ?? '0',
  inputPosition: process.env.NEXT_PUBLIC_GISCUS_INPUT_POSITION ?? 'top',
  theme: process.env.NEXT_PUBLIC_GISCUS_THEME ?? 'preferred_color_scheme',
  lang: process.env.NEXT_PUBLIC_GISCUS_LANG ?? 'zh-CN',
  loading: process.env.NEXT_PUBLIC_GISCUS_LOADING ?? 'lazy',
};

const hasRequiredConfig =
  config.repo &&
  config.repoId &&
  config.category &&
  config.categoryId;

export default function GiscusComments() {
  const containerRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    if (!hasRequiredConfig) return;
    const container = containerRef.current;
    if (!container) return;

    container.innerHTML = '';

    const script = document.createElement('script');
    script.src = 'https://giscus.app/client.js';
    script.async = true;
    script.crossOrigin = 'anonymous';

    script.setAttribute('data-repo', config.repo ?? '');
    script.setAttribute('data-repo-id', config.repoId ?? '');
    script.setAttribute('data-category', config.category ?? '');
    script.setAttribute('data-category-id', config.categoryId ?? '');
    script.setAttribute('data-mapping', config.mapping);
    script.setAttribute('data-strict', config.strict);
    script.setAttribute('data-reactions-enabled', config.reactionsEnabled);
    script.setAttribute('data-emit-metadata', config.emitMetadata);
    script.setAttribute('data-input-position', config.inputPosition);
    script.setAttribute('data-theme', config.theme);
    script.setAttribute('data-lang', config.lang);
    script.setAttribute('data-loading', config.loading);

    container.appendChild(script);
  }, [pathname]);

  if (!hasRequiredConfig) return null;

  return (
    <div className="mt-12 border-t pt-8">
      <div ref={containerRef} />
    </div>
  );
}
