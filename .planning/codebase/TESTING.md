# Testing
<!-- mapped: 2026-06-14 -->

## Current State

**Zero tests exist in this codebase.** No test files, no test framework configured, no CI test step.

## Framework

- None installed
- No Jest, Vitest, Playwright, Cypress, or Testing Library configuration found
- No `test` script in `package.json`

## Test File Locations

- None — no `__tests__/` directories, no `*.test.tsx`, no `*.spec.tsx` files anywhere in the project

## CI

- No GitHub Actions workflows configured
- No automated build, lint, or type-check on PRs

## Coverage

- 0% — nothing is tested

## What Should Be Tested (if tests are added)

Given this is a static marketing site, priority testing areas would be:

1. **Contact form** — currently a stub; when wired up, form validation and submission handling
2. **Component rendering** — section components render without errors
3. **Accessibility** — ARIA labels, keyboard navigation, focus management
4. **Visual regression** — key sections don't break on content changes

## Recommended Setup (if adding tests)

- **Unit/component**: Vitest + React Testing Library (aligns with Next.js 15+ recommendations)
- **E2E**: Playwright (first-class Next.js support)
- **CI**: GitHub Actions with `npm run build && npm run lint` at minimum

## Notes

No mocking patterns established. No test utilities or fixtures. Starting from scratch.
