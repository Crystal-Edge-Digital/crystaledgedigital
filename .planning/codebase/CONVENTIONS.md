# Code Conventions
<!-- mapped: 2026-06-14 -->

## Language & Runtime

- **TypeScript** with strict mode enabled (`"strict": true` in tsconfig)
- **React 19** functional components only — no class components
- **Next.js App Router** — no Pages Router patterns

## Code Style (Prettier)

- No semicolons (`"semi": false`)
- Double quotes for strings (`"singleQuote": false`)
- 2-space indentation
- Trailing commas in ES5 positions
- 80 char print width
- LF line endings
- Tailwind classes sorted automatically via `prettier-plugin-tailwindcss`

## Component Patterns

- **Default exports** for all page sections and components
- **Named exports** for shadcn UI primitives
- Props typed inline with TypeScript interfaces where needed
- `"use client"` directive at top of files that use hooks or browser APIs
- No explicit `React` import (JSX transform handles it)

## Styling

- **Tailwind CSS v4** utility classes — primary styling method
- **CSS variables** defined in `app/globals.css` for design tokens (colors, radius)
- `cn()` from `lib/utils.ts` for conditional class merging (`clsx` + `tailwind-merge`)
- shadcn `cva` pattern used in UI primitives for variant-based styling
- No CSS Modules, no styled-components, no inline style objects

## Import Conventions

- Path alias `@/` maps to repo root — use for all internal imports
- Example: `import { Button } from "@/components/ui/button"`
- No relative `../` imports used in practice

## Naming

| Thing | Convention | Example |
|-------|-----------|---------|
| Files | kebab-case | `cta-contact.tsx` |
| Components | PascalCase | `function CtaContact()` |
| Variables/functions | camelCase | `isScrolled`, `handleSubmit` |
| CSS variables | `--kebab-case` | `--primary`, `--card-radius` |
| Tailwind classes | utility-first | `bg-background text-foreground` |

## State & Hooks

- `useState` / `useEffect` / `useRef` used directly — no abstraction layer
- Custom hooks intended for `hooks/` directory (currently unused)
- `useCountUp` was previously co-located in `stats.tsx` — if revived, move to `hooks/`
- No global state library (Zustand, Redux, etc.)

## Error Handling

- No global error boundary implemented
- No `error.tsx` or `not-found.tsx` custom pages
- Form submission is currently a stub (`e.preventDefault()` only)

## Linting

- ESLint with `next/core-web-vitals` + `next/typescript` rules
- No custom rule overrides beyond default Next.js config
