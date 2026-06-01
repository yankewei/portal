import type { MetadataRoute } from 'next';
import { apps } from '@/lib/apps';
import { source } from '@/lib/source';
import { absoluteUrl } from '@/lib/site';

function normalizeLastModified(value: Date | string | number | undefined) {
  if (value === undefined) return undefined;

  return new Date(value instanceof Date ? value.getTime() : value);
}

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: absoluteUrl('/'),
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: absoluteUrl('/apps'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    ...apps.map((app) => ({
      url: absoluteUrl(app.href),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    })),
  ];

  const articles: MetadataRoute.Sitemap = source.getPages().map((page) => ({
    url: absoluteUrl(page.url),
    lastModified: normalizeLastModified(page.data.lastModified),
    changeFrequency: 'yearly',
    priority: page.url === '/articles' ? 0.8 : 0.6,
  }));

  return [...staticPages, ...articles];
}
