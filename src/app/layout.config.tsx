import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';

export const baseOptions: BaseLayoutProps = {
  nav: {
    title: (
      <span className="font-mono text-xs font-semibold tracking-[0.2em] text-fd-foreground uppercase">
        Yankewei
      </span>
    ),
  },
  githubUrl: 'https://github.com/yankewei',
  links: [
    { text: 'About', url: '/#about' },
    { text: 'Apps', url: '/apps' },
    { text: 'Writing', url: '/articles' },
  ],
};
