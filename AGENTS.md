<!-- From: /Users/yankewei/Documents/Github/portal/AGENTS.md -->
# Kewei Yan's Personal Blog

## Project Overview
This is a personal blog/homepage built with Astro and AstroPaper, belonging to Kewei Yan - a software engineer who writes technical articles primarily in Chinese about PHP, Redis, and Rust.

## Technology Stack
- **Framework**: Astro 6.4.2
- **Theme**: AstroPaper v6 (minimal, responsive, SEO-friendly blog theme)
- **Styling**: Tailwind CSS 4.3.0
- **Language**: TypeScript 6.0.3
- **Package Manager**: pnpm

## Project Structure
```
├── src/
│   ├── assets/              # Icons and images
│   ├── components/          # Reusable Astro components
│   ├── content/
│   │   ├── posts/          # Blog articles
│   │   └── pages/          # Static pages (about, etc.)
│   ├── i18n/               # Internationalization (zh, en)
│   ├── layouts/            # Page layouts
│   ├── pages/              # Astro routes
│   ├── scripts/            # Theme toggle script
│   ├── styles/             # Global CSS
│   ├── types/              # TypeScript types
│   └── utils/              # Utility functions
├── public/                 # Static assets
│   └── image/             # Blog images and app icons
├── astro-paper.config.ts   # Theme configuration
├── astro.config.ts         # Astro configuration
└── [config files]         # TypeScript, ESLint, Prettier configs
```

## Key Features
1. **Bilingual Content**: Homepage in Chinese, articles primarily in Chinese
2. **Technical Blog**: Focus on backend technologies (PHP, Redis, Laravel, Rust)
3. **AstroPaper Integration**: Professional blog layout with dark/light mode
4. **Search Functionality**: Static search with PageFind
5. **MDX Support**: Rich content with embedded components
6. **Dynamic OG Images**: Automatic social image generation
7. **RSS Feed**: Built-in RSS feed generation
8. **Mobile Apps**: Has a lunar calendar app "初一到十五" mentioned in privacy/support pages

## Content Categories
- **PHP Development**: JSON handling, array functions, Laravel internals
- **Redis**: Data persistence, data structures (SDS)
- **Rust Learning**: Educational content using Mago PHP toolchain
- **System Architecture**: Job queues, background processing

## Development Commands
- `pnpm run dev` - Start development server
- `pnpm run build` - Build for production (includes PageFind indexing)
- `pnpm run preview` - Preview production build
- `pnpm run format` - Format code with Prettier
- `pnpm run lint` - Lint with ESLint

## Author Information
- **Name**: Kewei Yan
- **Role**: Software Engineer
- **Expertise**: PHP, Redis, Laravel, learning Rust
- **Language**: Articles primarily in Chinese
- **Website**: Personal homepage with professional introduction

## Special Configurations
- **Language**: Chinese (zh) as default locale
- **Timezone**: Asia/Shanghai
- **Path Aliases**: `@/*` maps to `src/*`
- **Edit Links**: Posts link to GitHub edit page
- **Social Links**: GitHub, Email

## Custom Pages
- **Homepage**: Personal intro + recent posts
- **Apps**: List of macOS applications (Key Dock)
- **Apps/Key Dock**: Detailed app page with download link
- **About**: Personal bio and blog description

## Notes for Development
- Content is managed through MDX/MD files in `src/content/posts/`
- Posts require frontmatter: title, pubDatetime, description, tags
- Draft posts are excluded from production builds
- PageFind indexes content automatically during build
- Uses modern Astro features: ClientRouter, font optimization, SVG optimization
