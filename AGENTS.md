# Kewei Yan's Personal Blog

## Project Overview
This is a personal blog/homepage built with Next.js and Fumadocs, belonging to Kewei Yan - a software engineer who writes technical articles primarily in Chinese about PHP, Redis, and Rust.

## Technology Stack
- **Framework**: Next.js 15.3.1 with React 19.1.0
- **Documentation Engine**: Fumadocs UI/Core (15.3.1) and Fumadocs MDX (11.6.3)
- **Styling**: Tailwind CSS 4.1.5
- **Language**: TypeScript 5.8.3
- **Package Manager**: Bun (based on bun.lock presence)

## Project Structure
```
├── content/articles/           # Blog articles organized by year
│   ├── (2024)/                # 2024 articles (PHP, Redis topics)
│   ├── (2025)/                # 2025 articles (Laravel, PHP, Rust)
│   ├── index.mdx              # Articles index page
│   └── meta.json              # Navigation metadata
├── src/
│   ├── app/                   # Next.js App Router
│   │   ├── (home)/           # Homepage layout and content
│   │   ├── articles/         # Article pages with dynamic routing
│   │   ├── privacy/          # Privacy pages
│   │   ├── support/          # Support pages
│   │   └── api/search/       # Search API endpoint
│   ├── lib/                  # Utility libraries
│   └── mdx-components.tsx    # MDX component customizations
├── public/image/             # Static assets (logos, diagrams)
└── [config files]           # Next.js, TypeScript, Tailwind configs
```

## Key Features
1. **Bilingual Content**: Homepage in English, articles primarily in Chinese
2. **Technical Blog**: Focus on backend technologies (PHP, Redis, Laravel, Rust)
3. **Fumadocs Integration**: Professional documentation-style blog layout
4. **Search Functionality**: Built-in search API for articles
5. **MDX Support**: Rich content with embedded components
6. **Mobile Apps**: Has a lunar calendar app "初一到十五" mentioned in privacy/support pages

## Content Categories
- **PHP Development**: JSON handling, array functions, Laravel internals
- **Redis**: Data persistence, data structures (SDS)
- **Rust Learning**: Educational content using Mago PHP toolchain
- **System Architecture**: Job queues, background processing

## Development Commands
- `npm run dev` - Start development server with Turbo
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run postinstall` - Process MDX files with Fumadocs

## Author Information
- **Name**: Kewei Yan (闫可维)
- **Role**: Software Engineer
- **Expertise**: PHP, Redis, Laravel, learning Rust
- **Language**: Articles primarily in Chinese
- **Website**: Personal homepage with professional introduction

## Special Configurations
- **Rewrites**: `.mdx` files are rewritten to `/llms.mdx/` endpoints for better SEO
- **Path Aliases**: `@/*` maps to `src/*`, `@/.source` for generated content
- **Git Integration**: Last modified time sourced from Git commits
- **Strict TypeScript**: Full type checking enabled

## Recent Activity
- Active development on Rust learning content
- Regular PHP and Laravel technical articles
- Redis internals exploration
- Mobile app development (lunar calendar app "初一到十五")

## Notes for Development
- Content is managed through MDX files in `content/articles/`
- Navigation structure defined in `meta.json` files
- Fumadocs handles content processing and routing
- Articles support frontmatter for metadata (title, draft status, etc.)
- Uses modern Next.js App Router with React Server Components