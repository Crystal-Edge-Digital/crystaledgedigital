# Technology Stack

**Analysis Date:** 2026-06-14

## Languages

**Primary:**
- TypeScript 5.9.x - All application code (`app/`, `components/`, `lib/`, `hooks/`)

**Secondary:**
- CSS - Global styles via Tailwind CSS v4 (`app/globals.css`)

## Runtime

**Environment:**
- Node.js v22.13.1 (system runtime; no `.nvmrc` or `.node-version` pinfile present)

**Package Manager:**
- pnpm 11.1.2
- Lockfile: `pnpm-lock.yaml` present (lockfileVersion 9.0)

## Frameworks

**Core:**
- Next.js 16.1.7 - Full-stack React framework; App Router with RSC enabled (`app/`)
- React 19.2.4 - UI rendering (`react`, `react-dom`)

**UI Component System:**
- shadcn/ui (radix-nova style) - Component primitives generated into `components/ui/`; configured via `components.json`
- Radix UI 1.4.3 - Headless primitives underlying shadcn components (`radix-ui`)
- next-themes 0.4.6 - Dark/light theme management (`components/theme-provider.tsx`)

**Styling:**
- Tailwind CSS 4.2.1 - Utility-first CSS; v4 PostCSS plugin (`@tailwindcss/postcss`)
- tw-animate-css 1.4.0 - Animation utilities imported in `app/globals.css`
- CSS variables for theming (defined in `app/globals.css` `@theme inline` block)

**Icons:**
- lucide-react 1.7.0 - Icon library (configured as `"iconLibrary": "lucide"` in `components.json`)

**Build/Dev:**
- Turbopack - Dev server (`next dev --turbopack` in `package.json` scripts)
- PostCSS 8 - CSS processing pipeline (`postcss.config.mjs`)
- ESLint 9.39.4 - Linting (`eslint.config.mjs`; uses `eslint-config-next` core-web-vitals + TypeScript)
- Prettier 3.8.1 - Code formatting with `prettier-plugin-tailwindcss` 0.7.2

## Key Dependencies

**Critical:**
- `class-variance-authority` 0.7.1 - Variant-based className management for UI components (`components/ui/button.tsx`, `components/ui/badge.tsx`)
- `clsx` 2.1.1 + `tailwind-merge` 3.5.0 - Conditional className merging via `cn()` helper (`lib/utils.ts`)
- `shadcn` 4.1.2 (devDependency) - CLI for adding/updating shadcn components

**Fonts:**
- Google Fonts via `next/font/google`: Geist (sans) and Geist Mono loaded in `app/layout.tsx`

## Configuration

**TypeScript:**
- Config: `tsconfig.json`
- Target: ES2017; strict mode enabled
- Path alias: `@/*` → project root (e.g., `@/components/ui/button`)
- Module resolution: `bundler`

**Build:**
- `next.config.mjs` - Minimal config (no custom options set)
- `postcss.config.mjs` - PostCSS with `@tailwindcss/postcss` plugin
- `components.json` - shadcn config: style `radix-nova`, RSC enabled, CSS variables, base color `neutral`

**Skills:**
- `skills-lock.json` - Tracks `shadcn` skill sourced from `shadcn/ui` GitHub

**Environment:**
- No `.env` files present; no environment variables required by current codebase (static landing page with no backend calls)

## Platform Requirements

**Development:**
- Node.js ≥ 22 (system version)
- pnpm ≥ 11
- Run: `pnpm dev` (Turbopack dev server)

**Production:**
- Deployment target: Vercel (inferred from commit history referencing Vercel deploy pipeline; `eslint-config-next` aligns with Vercel-recommended setup)
- Build: `pnpm build` → `next build`
- Start: `pnpm start`

---

*Stack analysis: 2026-06-14*
