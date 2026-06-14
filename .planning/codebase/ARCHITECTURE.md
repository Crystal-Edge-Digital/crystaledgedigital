# Architecture Map
<!-- last_mapped_commit: auto -->
<!-- mapped: 2026-06-14 -->

## Pattern

**Static Marketing SPA** — single scrollable page, anchor-link navigation only, no routing beyond `/`, no API routes, no database.

This is a Next.js App Router project used as a static marketing site. All navigation is anchor-based scroll navigation. No server-side logic, no data fetching, no authentication.

## Layers

### App Shell (`app/`)
- `app/layout.tsx` — Root layout: Google Fonts (Geist, Geist Mono), ThemeProvider wrapper, global metadata
- `app/page.tsx` — Home page: imports and assembles all 8 section components in order
- `app/globals.css` — Tailwind v4 directives + CSS variable design tokens (colors, radius, etc.)

### Page Sections (`components/sections/`)
8 self-contained section components, assembled sequentially in `page.tsx`:
- `navbar.tsx` — Scroll-aware navbar with blur effect, mobile Sheet menu
- `hero.tsx` — Primary hero/headline section
- `services.tsx` — Service cards section
- `stats.tsx` — Animated count-up statistics (IntersectionObserver + `useCountUp` hook co-located here)
- `process.tsx` — Process/how-it-works section
- `testimonial.tsx` — Testimonials section
- `cta-contact.tsx` — Contact form (STUB — `onSubmit` calls `e.preventDefault()` only, no data sent)
- `footer.tsx` — Footer section

### UI Primitives (`components/ui/`)
shadcn components installed as source code (not a package):
- `button.tsx`, `card.tsx`, `field.tsx`, `input.tsx`, `textarea.tsx`, `label.tsx`, `badge.tsx`, `separator.tsx`, `sheet.tsx`

### Utilities
- `lib/utils.ts` — `cn()` helper only (`clsx` + `tailwind-merge`)
- `components/crystal-icon.tsx` — Brand SVG icon component
- `components/theme-provider.tsx` — next-themes wrapper + `ThemeHotkey` (`d`-key dark/light toggle)

## Data Flow

```
page.tsx
  └── <Navbar /> ─── scroll events (window listener) ─── blur effect
  └── <Hero />
  └── <Services />
  └── <Stats /> ─── IntersectionObserver ─── useCountUp (co-located hook)
  └── <Process />
  └── <Testimonial />
  └── <CtaContact /> ─── form submit ─── e.preventDefault() [STUB]
  └── <Footer />
```

No global state management. No context beyond ThemeProvider. Each section is fully isolated.

## Entry Points

- `app/page.tsx` — sole page entry point
- `app/layout.tsx` — root layout wrapper

## Key Interactive Flows

1. **Scroll-aware navbar**: window scroll listener in `navbar.tsx` toggles backdrop blur at scroll threshold
2. **Stats animation**: `IntersectionObserver` in `stats.tsx` triggers `useCountUp` hook for count-up animation
3. **Mobile menu**: Radix `Sheet` component used for mobile nav drawer
4. **Theme toggle**: `d`-key keyboard shortcut via `ThemeHotkey` inside `ThemeProvider`
5. **Contact form**: Present in UI but non-functional — submit handler is a no-op stub

## Known Anti-Patterns

- `useCountUp` hook is co-located in `stats.tsx` rather than extracted to `hooks/`
- `hooks/` directory exists with only a `.gitkeep` (intended but unused)
- Contact form is a complete stub — no backend integration

## Abstractions

- **No routing** — single page, anchor links only
- **No API layer** — no `app/api/` routes
- **No database** — no ORM, no data layer
- **No state management** — no Redux/Zustand/Context beyond theme
