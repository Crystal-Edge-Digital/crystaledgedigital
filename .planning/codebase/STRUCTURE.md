# Directory Structure
<!-- mapped: 2026-06-14 -->

## Root Layout

```
crystaledgedigital/
├── app/                        # Next.js App Router root
│   ├── layout.tsx              # Root layout: fonts, ThemeProvider, metadata
│   ├── page.tsx                # Home page: assembles all section components
│   ├── globals.css             # Tailwind v4 directives + CSS variable design tokens
│   └── favicon.ico
├── components/
│   ├── sections/               # Page section components (one file per section)
│   │   ├── navbar.tsx
│   │   ├── hero.tsx
│   │   ├── services.tsx
│   │   ├── about.tsx
│   │   ├── cta-contact.tsx
│   │   └── footer.tsx
│   ├── ui/                     # shadcn primitive components (source-installed)
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   ├── field.tsx
│   │   ├── input.tsx
│   │   ├── textarea.tsx
│   │   ├── label.tsx
│   │   ├── badge.tsx
│   │   ├── separator.tsx
│   │   └── sheet.tsx
│   ├── crystal-icon.tsx        # Brand SVG icon component
│   └── theme-provider.tsx      # next-themes wrapper + keyboard toggle
├── hooks/                      # Empty (only .gitkeep) — intended for custom hooks
├── lib/
│   └── utils.ts                # cn() utility only (clsx + tailwind-merge)
├── public/                     # Static assets
│   ├── ced-logo.png            # Company logo
│   └── founder-photo.png       # Founder photo (used in About section)
├── .agents/skills/shadcn/      # shadcn skill definition for Claude Code
├── .planning/codebase/         # GSD codebase map documents (this folder)
├── components.json             # shadcn config (style: radix-nova, aliases)
├── tsconfig.json               # TypeScript config — path alias @/* → ./*
├── next.config.mjs             # Minimal Next.js config (empty object)
├── eslint.config.mjs           # ESLint: next/core-web-vitals + next/typescript
└── .prettierrc                 # Prettier config
```

## Key Locations

| What | Where |
|------|-------|
| Page entry point | `app/page.tsx` |
| Root layout | `app/layout.tsx` |
| Global styles / design tokens | `app/globals.css` |
| Page sections | `components/sections/` |
| shadcn UI primitives | `components/ui/` |
| Path alias root (`@/`) | `./*` (repo root) |
| Static images | `public/` |

## Naming Conventions

- **Files**: `kebab-case.tsx` for all components and pages
- **Components**: PascalCase exports matching the file concept (e.g. `navbar.tsx` → `export default function Navbar`)
- **Sections**: named after the page section they represent, no prefix
- **UI primitives**: named after the shadcn component they implement
- **Imports**: `@/` alias used for all internal imports (e.g. `@/components/ui/button`)
- **CSS variables**: `--` prefixed, defined in `globals.css`, consumed via Tailwind utilities

## What Lives Where

- **New page sections** → `components/sections/`
- **Reusable UI primitives** → `components/ui/` (add via shadcn CLI)
- **Custom hooks** → `hooks/` (currently empty)
- **Shared utilities** → `lib/`
- **Static assets** → `public/`
- **No API routes** — this is a static marketing site
