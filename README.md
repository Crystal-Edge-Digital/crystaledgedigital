# Crystal Edge Digital

The public Crystal Edge Digital company website, built with Next.js 16,
React 19, TypeScript, Tailwind CSS 4, and shadcn/ui.

## Brand and interface source of truth

Read [`spec/design-system.md`](spec/design-system.md) before changing visual
styles, page content, brand assets, or reusable components. The site is
light-only and uses Manrope, restrained Instrument Serif accents, warm-white
surfaces, ink text, and crystal teal actions. Dark-first, gradient-text,
glassmorphism, and neon-glow treatments are superseded.

The homepage order is:

1. Navigation and hero
2. Guided service chooser and credentials
3. Services and selected work
4. Process and engagement paths
5. Founder/editorial artwork
6. FAQ and contact
7. Footer

## Commands

```bash
pnpm dev
pnpm typecheck
pnpm lint
pnpm build
pnpm test:e2e
```

The contact form intentionally opens a prepared draft in the visitor's email
application. The website does not claim a message was sent. A server-side
delivery integration requires a separately approved provider and destination.
