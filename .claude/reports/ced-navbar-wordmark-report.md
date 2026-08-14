# Implementation Report — CED Frosted Signal redesign

**Plan**: User-directed visual redesign **Branch**: `agent/ced-navbar-wordmark` **Status**: COMPLETE
**Review Tier**: standard — site-wide design-token and component-shape changes with no dependency, data, or infrastructure changes.

## Summary

Replaced the previous faceted crystal and sans-serif navigation label with the supplied editorial wordmark on tablet and desktop, plus the supplied etched crystal and serif company name on mobile. Removed the service chooser, engagement-path, and FAQ sections; tightened the project cards; simplified the portfolio copy; updated contact to the public info address; and corrected the footer identity, social marks, and tagline. Added a ten-option theme explorer, then applied Ben's selected hybrid, **Frosted Signal**: Frosted Graphite as the cool-white/mineral-blue foundation with Sky & Marigold used as a restrained signal accent.

## Tasks completed

- Imported the supplied Canva SVG → `public/brand/ced-wordmark.svg` (CREATE)
- Imported the supplied compact PNG → `public/brand/ced-compact-mark.png` (CREATE)
- Updated the primary navigation identity → `components/sections/navbar.tsx` (UPDATE)
- Added responsive navigation-logo coverage → `tests/e2e/home.spec.ts` (UPDATE)
- Removed the chooser, engagement-path, and FAQ sections → `app/page.tsx` and section modules (UPDATE/DELETE)
- Tightened portfolio cards and copy → `components/sections/work.tsx` (UPDATE)
- Updated public inquiry routing → `components/sections/cta-contact.tsx` (UPDATE)
- Added real LinkedIn/GitHub marks and simplified the footer → `components/sections/footer.tsx` (UPDATE)
- Updated canonical page-structure documentation → `README.md` and `spec/design-system.md` (UPDATE)
- Created the ten-direction visual comparison artifact → `public/theme-explorer.html` (CREATE)
- Rebuilt the color, radius, border, shadow, and focus tokens around Frosted Signal → `app/globals.css` (UPDATE)
- Applied the system to navigation, hero, credentials, service/project cards, process, founder, contact, and footer surfaces (UPDATE)
- Updated buttons, cards, inputs, and textareas to the rounded Frosted Signal component language (UPDATE)
- Promoted Frosted Signal to the canonical brand direction → `spec/design-system.md` v1.1.0 (UPDATE)

## Tests added

- Confirms the responsive editorial identity assets render in primary navigation at mobile, tablet, and desktop widths.
- Confirms the legacy `ced-logo` image is absent from primary navigation.
- Confirms removed sections stay absent, project-card bottom whitespace stays bounded, the public email is correct, and the footer uses brand social marks without the removed tagline.

## Validation results

- `pnpm typecheck` — PASS
- `pnpm lint` — PASS
- Prettier check — PASS
- Full Playwright suite — PASS, 32 passed / 1 expected desktop skip across mobile, tablet, and desktop
- Production build — PASS as part of the Playwright web-server startup

## Deviations from the plan

No standalone plan was needed for this user-directed asset swap.

## Issues encountered

The base checkout contains Ben's pre-existing untracked `architecture/` directory, so implementation used a clean temporary worktree instead of moving or stashing that work. Canva's compact `.svg` export embeds a 2.2 MB raster image, so the smaller 213 KB PNG is used instead; its opaque white background is integrated with the light navigation using multiply blending.

The first accessibility pass found the new muted text missed AA contrast by 0.06 on a frosted contact panel (4.44:1 versus 4.5:1). The muted ink token was darkened from `#667178` to `#5F6A71`; the complete suite then passed at all three widths.

Ben rejected the repeated yellow-dot treatment after reviewing the applied theme. Removed every marigold circle from eyebrows, the hero, credentials, and founder panel. Replaced the local hero decoration with a single fixed, low-contrast drafting texture behind translucent page sections so the content scrolls over one continuous minimal surface. Marigold remains limited to short linear details.
