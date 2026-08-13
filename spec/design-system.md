---
name: Crystal Edge Digital Brand Design System
version: 1.0.0
updated: 2026-08-13
status: canonical
supersedes: dark-first glass and gradient guidance
---

# Crystal Edge Digital Brand Design System

This is the reusable visual and verbal source of truth for the Crystal Edge
Digital website, proposals, case studies, social graphics, invoices, and
presentations. It supersedes the previous dark-first, cyan-glow,
glassmorphism, and gradient-text direction.

## Design thesis

Crystal Edge Digital is a clear, capable, founder-led consultancy for small
and growing businesses. Technical work should feel understandable and well
guided—not mysterious, futuristic, or enterprise-heavy.

The visual register combines a warm-white service interface, precise crystal
geometry, restrained editorial serif moments, a calm teal accent, and
practical pathways that help a customer choose a next step. The intended
customer response is: “I can explain my problem in plain language, and
Benjamin will help me find the right solution.”

## Brand attributes

| Attribute | Express through                                    | Avoid                                     |
| --------- | -------------------------------------------------- | ----------------------------------------- |
| Clear     | Plain-language outcomes and visible hierarchy      | Dense jargon and vague agency language    |
| Capable   | Real work, certifications, precise layouts         | Invented metrics or oversized claims      |
| Personal  | Benjamin's name and first-person copy              | Faceless agency language                  |
| Calm      | Warm white, measured spacing, restrained motion    | Neon glow and urgency theater             |
| Modern    | Strong type pairing and modular responsive layouts | Generic AI-template gradients and blobs   |
| Practical | Problem-led choices and concrete deliverables      | Technology lists without customer context |

## Audience

- Small-business owners who need a credible website or digital workflow.
- Growing organizations that need cloud, application, or AI support without a
  large consultancy.
- Operators who understand the business problem but do not have a technical
  specification.

## Brand asset architecture

### Compact crystal mark

The existing teal faceted crystal is the compact mark for navigation, favicon
candidates, and small identity placements. Preserve its aspect ratio and clear
space. Never stretch, rotate, outline, recolor with gradients, add glow, or
redraw it.

### Primary company lockup

Approved source: `Crystal Edge Digital (1).png`, 2000 × 2000 RGBA.
Website destination: `public/brand/ced-editorial-lockup.png`.

This is the primary company logo. Give it a prominent, generous placement at
the top of the homepage hero and use it for proposal, case-study, social, and
presentation covers. On mobile, it appears before the hero message; on desktop,
it anchors the hero beside that message. Do not shrink the square art into the
navigation bar, place text over its fine lines, crop away critical artwork, or
regenerate it. Recommended minimum rendered widths are 520px on desktop and
280px on mobile.

### Founder treatment

Keep Benjamin Corbett's name, first-person voice, Microsoft and AWS
certifications, software-development expertise, and LinkedIn proof. Do not use
his portrait, a headshot placeholder, or an AI-generated replacement. Use
typography, certifications, and founder copy to carry this section while the
primary company lockup remains at the top of the page.

## Color system

### Raw palette

| Token             |     Value | Purpose                           |
| ----------------- | --------: | --------------------------------- |
| `canvas`          | `#F7F8F5` | Main warm-white background        |
| `surface`         | `#FFFFFF` | Cards, navigation, forms          |
| `surface-crystal` | `#EAF7F5` | Selected and branded panels       |
| `surface-frost`   | `#EAF1FA` | Alternate information panels      |
| `ink`             | `#141718` | Primary text and controls         |
| `ink-muted`       | `#5F696D` | Secondary text                    |
| `border`          | `#DCE5E3` | Dividers and outlines             |
| `teal`            | `#087F73` | Primary action and focus boundary |
| `teal-hover`      | `#05665E` | Hover and pressed state           |
| `teal-soft`       | `#42B7AA` | Decoration only                   |
| `error`           | `#B42318` | Error text and borders            |
| `success`         | `#18794E` | Confirmed success only            |

### Semantic tokens

```css
--background: #f7f8f5;
--foreground: #141718;
--card: #ffffff;
--card-foreground: #141718;
--popover: #ffffff;
--popover-foreground: #141718;
--primary: #087f73;
--primary-foreground: #ffffff;
--primary-hover: #05665e;
--secondary: #eaf7f5;
--secondary-foreground: #141718;
--muted: #eaf1fa;
--muted-foreground: #5f696d;
--accent: #087f73;
--accent-foreground: #ffffff;
--border: #dce5e3;
--input: #dce5e3;
--ring: #087f73;
--crystal-soft: #42b7aa;
--destructive: #b42318;
--success: #18794e;
```

`#141718` on `#F7F8F5` is approximately 16.9:1. `#5F696D` on the
canvas is approximately 5.28:1. `#087F73` on white is approximately 4.89:1.
`#42B7AA` on white is only approximately 2.45:1, so it must never be the
only focus or control boundary. The system is light-only; contained dark ink
inside approved artwork does not create a dark page theme.

## Typography

- Interface and body: **Manrope**, variable weights 400–800.
- Editorial accent: **Instrument Serif**, weight 400.
- Use `next/font/google` so fonts are self-hosted at build time.

| Role                | Desktop |  Mobile | Treatment                               |
| ------------------- | ------: | ------: | --------------------------------------- |
| Display hero        | 64–76px | 42–50px | Manrope 650–750; limited serif phrase   |
| Section title       | 40–48px | 32–38px | Manrope 650–700                         |
| Editorial statement | 52–72px | 38–48px | Instrument Serif 400                    |
| Card title          | 20–24px | 19–22px | Manrope 650                             |
| Body large          | 18–20px | 17–18px | Manrope 400–500, 1.55 line height       |
| Body                |    16px |    16px | Manrope 400, 1.6 line height            |
| Label               |    14px |    14px | Manrope 600                             |
| Eyebrow             | 12–13px |    12px | Manrope 700, uppercase, 0.12em tracking |

Use the serif as a voice, not as the universal heading font. Do not use
gradient text. Keep body lines around 55–72 characters and use sentence case.

## Layout and spacing

- Maximum content width: 1248px.
- Desktop: 12 columns, 24px gutters.
- Tablet: 8 columns, 20px gutters.
- Mobile: 4 columns, 16px gutters, 24px page margins.
- Text-heavy content maximum: 720px.
- Spacing scale: `4, 8, 12, 16, 24, 32, 40, 48, 64, 72, 88, 104, 120`.
- Section padding: 88–120px desktop and 56–72px mobile.
- Card padding: 24–32px.
- Avoid viewport-height hero gaps.

## Shape, border, and depth

- Control radius: 12px.
- Card radius: 16–20px.
- Pill radius: 999px only for chips and badges.
- Border: 1px `#DCE5E3`.
- Default shadow: `0 10px 30px rgba(20, 23, 24, 0.06)`.
- Elevated shadow: `0 16px 44px rgba(20, 23, 24, 0.10)`.
- Prefer borders to shadows; do not use glassmorphism.

## Graphic language

Use fine crystal-facet lines, subtle drafting grids, directional lines, small
frost/crystal color fields, 1.5px Lucide icons, and bordered editorial project
imagery. Avoid neon glow, blurred orbs, generic 3D prisms, autoplay animation,
mobile carousels, or decoration that competes with content.

## Motion

- Fast: 160ms; standard: 220ms; slow: 320ms sparingly.
- Easing: `cubic-bezier(0.2, 0.8, 0.2, 1)`.
- Hover translation: no more than 2px.
- Never gate important content behind entrance animation.
- Under `prefers-reduced-motion: reduce`, disable smooth scrolling and
  nonessential transitions/transforms.

## Accessibility and interaction standards

- Buttons and form controls are at least 44px high.
- Focus has a minimum 2px `#087F73` boundary.
- Selected states use at least two signals such as border + fill + icon.
- Errors use text plus icon/border, `aria-invalid`, and descriptions.
- Status changes use `aria-live`.
- Mobile navigation has an accessible trigger name.
- Provide a skip link and focusable main content.
- Meet WCAG 2.2 AA and verify at 375, 768, and 1440px.

## Component system

### Navigation

Warm-white sticky surface, compact mark plus wordmark, links to Services, Work,
Process, About, and Contact, and primary “Start a project” action. Support
default, hover, focus, scrolled, and mobile-open states.

### Buttons

- Primary: teal fill, white label, deep-teal hover.
- Secondary: white/canvas fill, ink label, border, crystal hover.
- Text: ink or teal with underline/arrow reinforcement.
- Support hover, active, focus, disabled, and loading states.

### Service-choice control

Use native radios within `fieldset`/`legend`. Each target is at least 44px.
Selection updates a recommendation panel and carries into contact. Default to
“I’m not sure yet.”

### Service cards

Each communicates the customer problem, plain-language outcome, two or three
deliverables, and contextual next action. Technology is supporting detail.

### Project cards

Show project type, verified problem, what was built, technology tags, and a
safe external action. Never invent revenue, conversion, testimonials, or
outcomes.

### Process steps

1. Tell me what is slowing you down.
2. Receive a clear recommendation and scope.
3. Build, launch, and improve.

### Engagement paths

- Quick Win: audits, improvements, and small automations.
- Build: websites, applications, AI integrations, and cloud projects.
- Ongoing Partner: support, optimization, and iteration.

Use “Request a scope.” Do not invent prices or support terms.

### Founder treatment

Use a clear typographic panel with Benjamin's name, certifications,
first-person biography, and LinkedIn. Never render his portrait or a
replacement headshot, and do not duplicate the primary lockup from the hero.

### FAQ

Use native disclosure semantics or accessible primitives. Answers are concise,
direct, indexable, and available to assistive technology.

### Contact

Fields: name, email, company (optional), service interest, and project
description. Carry the chooser selection into contact. Do not claim delivery,
response time, success, or failure until a real path confirms it. A mail-client
handoff must be labeled as opening a draft and must never imply the site sent it.

## Homepage content system

Eyebrow: `Cloud • AI • Web`

Headline: `Clear digital solutions for the way your business really works.`

Support: Crystal Edge Digital helps small and growing businesses launch better
websites, automate repetitive work, and build reliable cloud and AI
solutions—without the enterprise runaround.

Primary action: `Tell us what you need`. Secondary action: `See our work`.

Trust: `Microsoft & AWS certified • Practical, founder-led delivery`.

Final headline: `You do not need a technical specification to start.`

Final support: Tell me what you are trying to accomplish or what is currently
getting in the way. I’ll help identify the most practical next step.

## Voice and copy

Be direct, reassuring, appropriately technical, and specific about what is
built and what happens next. Use first person for Benjamin's customer
relationship.

Prefer “Tell me what is slowing you down,” “I’ll recommend the most practical
next step,” and “Automate repetitive work.” Avoid “leverage cutting-edge
innovation,” “we are passionate,” unsupported superlatives, invented metrics,
deadlines, outcomes, or urgency.

## Reusable brand-asset templates

### Social announcement — 1080 × 1080

Canvas/frost background, editorial lockup at 35–50%, one Manrope headline of
eight words maximum, 96px safe area, and no more than one teal emphasis area.

### LinkedIn landscape — 1200 × 627

Use a 60/40 message/artwork split, Manrope headline, at most one Instrument
Serif phrase, a small wordmark, and no paragraph longer than two lines.

### Case-study cover — 1600 × 900

Project name/type and a verified one-sentence problem on the left; project
image or editorial art on the right. Technology is secondary metadata.

### Proposal cover — US Letter / A4

Use the editorial lockup generously with client name, proposal title, date,
and wordmark on warm white. Never fill the entire cover with teal.

## Master prompt for future brand assets

```text
Create a [ASSET TYPE] for Crystal Edge Digital at [DIMENSIONS].

Brand character: clear, capable, personal, calm, modern, and practical.
Audience: small and growing businesses that need websites, workflow
automation, cloud, application, or AI help without enterprise complexity.

Use the Crystal Edge Digital light design system:
- canvas #F7F8F5; surface #FFFFFF
- crystal #EAF7F5; frost #EAF1FA
- ink #141718; secondary ink #5F696D; border #DCE5E3
- teal #087F73; deep teal #05665E
- Manrope for interface/headlines
- Instrument Serif only as a restrained editorial accent
- fine crystal geometry, directional lines, subtle drafting grids
- clean borders, restrained depth, generous whitespace

Use the approved editorial crystal artwork without redrawing, regenerating,
stretching, recoloring, or cropping critical elements. Do not use Benjamin's
portrait or an AI-generated headshot.

Message: [MESSAGE]
Primary action, if any: [CTA]
Required content: [CONTENT]

Avoid neon glow, gradient text, glassmorphism, generic 3D blobs, fake metrics,
fake client logos, stock photography, dense copy, and unsupported claims.
Keep all text readable, preserve generous safe areas, and produce a layout
that works at its smallest intended viewing size.
```

## Governance

- This file is the website's canonical brand decision record.
- Changes to raw colors, typography, asset roles, or founder treatment require
  a dated amendment.
- New components map to semantic tokens rather than one-off colors.
- If a generated asset conflicts with this system, this system wins.

## Amendment history

- 2026-08-13 — Version 1.0.0 created from the approved light-site direction,
  supplied editorial artwork, and current production content. Founder portrait
  explicitly removed while founder name, certifications, and voice remain.
