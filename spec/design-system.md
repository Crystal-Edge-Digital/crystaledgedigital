---
name: Crystal Edge Digital Brand Design System
version: 1.1.0
updated: 2026-08-14
status: canonical
supersedes: warm-white teal guidance
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

The visual register is named **Frosted Signal**. It combines a cool-white
service interface, precise crystal geometry, restrained editorial serif
moments, a mineral blue primary color, and a sparingly used marigold signal.
The intended
customer response is: “I can explain my problem in plain language, and
Benjamin will help me find the right solution.”

## Brand attributes

| Attribute | Express through                                    | Avoid                                     |
| --------- | -------------------------------------------------- | ----------------------------------------- |
| Clear     | Plain-language outcomes and visible hierarchy      | Dense jargon and vague agency language    |
| Capable   | Real work, certifications, precise layouts         | Invented metrics or oversized claims      |
| Personal  | Benjamin's name and first-person copy              | Faceless agency language                  |
| Calm      | Cool white, measured spacing, restrained motion    | Neon glow and urgency theater             |
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

The approved etched crystal illustration is the compact mark for navigation
and small identity placements. Preserve its aspect ratio and clear space.
Never stretch, rotate, recolor with gradients, add glow, or redraw it.

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

| Token          |     Value | Purpose                               |
| -------------- | --------: | ------------------------------------- |
| `canvas`       | `#F7FAFB` | Main cool-white background            |
| `surface`      | `#FFFFFF` | Cards, navigation, forms              |
| `frost`        | `#E6F0F2` | Branded and selected surfaces         |
| `mist`         | `#EDF3F5` | Alternate information panels          |
| `ink`          | `#15191B` | Primary text and controls             |
| `ink-muted`    | `#5F6A71` | Secondary text                        |
| `border`       | `#CCD8DC` | Dividers and outlines                 |
| `mineral`      | `#2C5865` | Primary action and focus boundary     |
| `mineral-deep` | `#1F4652` | Hover and pressed state               |
| `marigold`     | `#E7B849` | Small signal accents; never body text |
| `error`        | `#B42318` | Error text and borders                |
| `success`      | `#18794E` | Confirmed success only                |

### Semantic tokens

```css
--background: #f7fafb;
--foreground: #15191b;
--card: #ffffff;
--card-foreground: #15191b;
--popover: #ffffff;
--popover-foreground: #15191b;
--primary: #2c5865;
--primary-foreground: #ffffff;
--primary-hover: #1f4652;
--secondary: #e6f0f2;
--secondary-foreground: #15191b;
--muted: #edf3f5;
--muted-foreground: #5f6a71;
--accent: #2c5865;
--accent-foreground: #ffffff;
--signal: #e7b849;
--signal-foreground: #2b2516;
--border: #ccd8dc;
--input: #c4d2d7;
--ring: #2c5865;
--crystal-soft: #8fb0ba;
--destructive: #b42318;
--success: #18794e;
```

Marigold is a signal, not the primary action color. Keep it to approximately
5% of a composition: short rules and small linear details only. Do not use
marigold circles, dots, bubbles, or large fields. Never use marigold alone for
body text, focus boundaries, or critical status. The system is light-only;
contained dark ink inside approved artwork does not create a dark page theme.

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

- Control radius: 16px; action buttons use a full pill.
- Card radius: 24px.
- Pill radius: 999px for actions, chips, badges, and compact icon controls.
- Border: 1px `#CCD8DC`.
- Default shadow: `0 14px 38px rgba(36, 61, 69, 0.07)`.
- Elevated shadow: `0 20px 52px rgba(36, 61, 69, 0.12)`.
- Frosted panels use opaque cool gradients, not background blur or transparent
  glassmorphism.

## Graphic language

Use fine crystal-facet lines, subtle drafting grids, directional lines, cool
frost fields, 1.5px Lucide icons, and bordered editorial project imagery.
Marigold may appear as a short rule, never as a decorative dot or circle. The
page uses one fixed, low-contrast drafting texture behind translucent section
surfaces so content appears to move over a continuous physical field. Avoid
neon glow, multi-color gradients, generic 3D prisms, autoplay animation, mobile
carousels, or decoration that competes with content.

## Motion

- Fast: 160ms; standard: 220ms; slow: 320ms sparingly.
- Easing: `cubic-bezier(0.2, 0.8, 0.2, 1)`.
- Hover translation: no more than 2px.
- Never gate important content behind entrance animation.
- Under `prefers-reduced-motion: reduce`, disable smooth scrolling and
  nonessential transitions/transforms.

## Accessibility and interaction standards

- Buttons and form controls are at least 44px high.
- Focus has a minimum 2px `#2C5865` boundary.
- Selected states use at least two signals such as border + fill + icon.
- Errors use text plus icon/border, `aria-invalid`, and descriptions.
- Status changes use `aria-live`.
- Mobile navigation has an accessible trigger name.
- Provide a skip link and focusable main content.
- Meet WCAG 2.2 AA and verify at 375, 768, and 1440px.

## Component system

### Navigation

Cool-white sticky surface, compact mark plus wordmark, links to Services, Work,
Process, About, and Contact, and primary “Start a project” action. Support
default, hover, focus, scrolled, and mobile-open states.

### Buttons

- Primary: mineral-blue fill, white label, deep-mineral hover.
- Secondary: white/canvas fill, ink label, border, frost hover.
- Text: ink or mineral blue with underline/arrow reinforcement.
- Support hover, active, focus, disabled, and loading states.

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

### Founder treatment

Use a clear typographic panel with Benjamin's name, certifications,
first-person biography, and LinkedIn. Never render his portrait or a
replacement headshot, and do not duplicate the primary lockup from the hero.

### Contact

Fields: name, email, company (optional), project type, and project description.
Do not claim delivery, response time, success, or failure until a real path
confirms it. A mail-client handoff must be labeled as opening a draft and must
never imply the site sent it. Public inquiries route to
`info@crystal-edge-digital.com`.

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
eight words maximum, 96px safe area, and no more than one marigold signal.

### LinkedIn landscape — 1200 × 627

Use a 60/40 message/artwork split, Manrope headline, at most one Instrument
Serif phrase, a small wordmark, and no paragraph longer than two lines.

### Case-study cover — 1600 × 900

Project name/type and a verified one-sentence problem on the left; project
image or editorial art on the right. Technology is secondary metadata.

### Proposal cover — US Letter / A4

Use the editorial lockup generously with client name, proposal title, date,
and wordmark on cool white. Never fill the entire cover with mineral blue or
marigold.

## Master prompt for future brand assets

```text
Create a [ASSET TYPE] for Crystal Edge Digital at [DIMENSIONS].

Brand character: clear, capable, personal, calm, modern, and practical.
Audience: small and growing businesses that need websites, workflow
automation, cloud, application, or AI help without enterprise complexity.

Use the Crystal Edge Digital light design system:
- canvas #F7FAFB; surface #FFFFFF
- frost #E6F0F2; mist #EDF3F5
- ink #15191B; secondary ink #5F6A71; border #CCD8DC
- mineral blue #2C5865; deep mineral #1F4652
- marigold signal #E7B849 used on less than 5% of the composition, as short
  linear details only
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
