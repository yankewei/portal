export const siteConfig = {
  name: 'Kewei Yan',
  url: 'https://www.yankewei.site',
  description: 'Kewei Yan 的个人网站，记录后端工程实践、问题排查、技术写作和个人应用。',
  githubUrl: 'https://github.com/yankewei',
} as const;

export function absoluteUrl(path: string) {
  return new URL(path, siteConfig.url).toString();
}
