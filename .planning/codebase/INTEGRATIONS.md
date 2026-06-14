# External Integrations

**Analysis Date:** 2026-06-14

## APIs & External Services

**None currently integrated.**

The codebase is a static marketing landing page. No API calls, fetch requests, or third-party SDK imports exist in application code. The contact form in `components/sections/cta-contact.tsx` calls `e.preventDefault()` and does not submit data anywhere.

## Data Storage

**Databases:** None

**File Storage:** None (static assets served from `public/`)

**Caching:** None (Next.js default caching only)

## Authentication & Identity

**Auth Provider:** None

No authentication system is implemented. The site has no login, session management, or protected routes.

## Fonts

**Google Fonts (next/font/google):**
- Provider: Google Fonts CDN via Next.js font optimization
- Fonts loaded: Geist (sans) and Geist Mono
- Implementation: `app/layout.tsx`
- No API key required; handled automatically by Next.js at build time

## Monitoring & Observability

**Error Tracking:** None

**Logs:** None (no logging library or service configured)

## CI/CD & Deployment

**Hosting:**
- Platform: Vercel (referenced in commit history: "verify org transfer and Vercel deploy pipeline")
- No `vercel.json` config file present (uses Vercel's zero-config Next.js detection)

**CI Pipeline:** Not detected (no `.github/workflows/`, `.circleci/`, or equivalent directories present)

## Environment Configuration

**Required env vars:** None (no `.env` files, no `process.env` references in application code)

**Secrets location:** Not applicable

## Webhooks & Callbacks

**Incoming:** None

**Outgoing:** None

## Future Integration Points

The contact form at `components/sections/cta-contact.tsx` is the most likely place to add integrations. It is a client component (`"use client"`) with a form submit handler that currently only prevents the default browser submission. To wire up a backend:

- **Email delivery** (e.g., Resend, SendGrid): add a Next.js Route Handler at `app/api/contact/route.ts`
- **Form submission service** (e.g., Formspree, EmailJS): add client-side `fetch` inside `onSubmit` in `cta-contact.tsx`
- **Analytics** (e.g., Vercel Analytics, PostHog): add provider in `app/layout.tsx` alongside `ThemeProvider`

---

*Integration audit: 2026-06-14*
