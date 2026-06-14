# Concerns & Technical Debt
<!-- mapped: 2026-06-14 -->

## Critical (Broken Functionality)

### Contact Form is a Stub
- **File:** `components/sections/cta-contact.tsx`
- **Issue:** `onSubmit` calls `e.preventDefault()` only — no data is ever sent anywhere
- **Impact:** Users filling out the contact form receive no confirmation and nothing reaches the business
- **Fix:** Wire up to an email service (Resend, EmailJS) or a form backend (Formspree)

### All Social/Logo Links are Placeholders
- **File:** `components/sections/footer.tsx`, `components/sections/navbar.tsx`
- **Issue:** Social links and some nav links use `href="#"` — they don't go anywhere
- **Impact:** Live on the public site; clicking social icons does nothing

## High (Missing Basics for a Live Marketing Site)

### No HTTP Security Headers
- **File:** `next.config.mjs` (currently empty `{}`)
- **Issue:** No CSP, X-Frame-Options, X-Content-Type-Options, Referrer-Policy
- **Fix:** Add `headers()` to `next.config.mjs`

### No SEO Metadata
- **Issue:** No Open Graph tags, no Twitter card, no canonical URL, no `robots.txt`, no `sitemap.xml`
- **Impact:** Poor search indexing and unfurling — ironic given SEO is an advertised service
- **Fix:** Add metadata to `app/layout.tsx`, generate `sitemap.ts` and `robots.ts`

### No Analytics
- **Issue:** No way to measure visits, conversions, or engagement
- **Fix:** Add Vercel Analytics or Google Analytics

### No Error Pages
- **Issue:** No `app/not-found.tsx` or `app/error.tsx`
- **Impact:** Next.js default unstyled error pages shown on 404/500
- **Fix:** Add branded error pages

## Medium (Code Quality)

### Unused Font Loaded on Every Page
- **File:** `app/layout.tsx`
- **Issue:** `fontMono` (Geist Mono) is loaded but never referenced in CSS or className
- **Fix:** Remove `fontMono` from the font import

### `useCountUp` Anti-Pattern
- **Note:** `stats.tsx` was removed in Ben's brand refresh — this concern is now resolved if the section stays removed. If revived, move the hook to `hooks/useCountUp.ts`

### `hooks/` Directory is Empty
- **File:** `hooks/.gitkeep`
- **Issue:** Directory exists as intent but has no implementation
- **Note:** Low priority — just organizational

### `"d"` Key Global Theme Toggle on Public Site
- **File:** `components/theme-provider.tsx`
- **Issue:** `ThemeHotkey` listens for the `d` key globally — this fires for any user on the live site, not just developers
- **Fix:** Remove or gate behind dev-only env check

## Low (Technical Debt)

### Zero Tests
- No unit tests, no integration tests, no E2E tests
- No CI pipeline to catch regressions
- See `TESTING.md` for recommended setup

### All Content Hardcoded
- Services, stats, testimonials all require a code change to update
- No CMS integration
- Acceptable for v1; becomes painful as content evolves

### `next` Version Pinning
- **Issue:** `next` pinned to `16.1.7` — verify this is a published stable release (current stable is 15.x; 16.x is pre-release)
- **Fix:** Confirm version or align to a stable release

## Fragile Areas

- **Navbar scroll state**: Initializes `scrolled=false`, can cause transparent flash on mid-scroll page loads or browser back navigation
- **Image assets in `public/`**: `ced-logo.png` (1.4MB) and `founder-photo.png` (1MB) are unoptimized — large for a marketing page; consider using Next.js `<Image>` with compression
