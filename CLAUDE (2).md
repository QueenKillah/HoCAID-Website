# CLAUDE.md — HoCAID Website Project

This file is the persistent context document for Claude Code. Read this **first** in every session before making changes. It encodes the organisation's brand, voice, technical stack, and non-negotiable design rules.

---

## 1. Project Overview

**Organisation:** Horizon Community Initiative for Aid and Development (HoCAID)
**Type:** Non-profit / NGO website
**Established:** April 2026
**Purpose:** Public-facing website to communicate mission, showcase programmes, accept donations, share impact stories, and enable contact.
**Deployment target:** Vercel (via GitHub auto-deploy)
**Repository:** GitHub → main branch deploys to production

### Tagline hierarchy (use in this order of precedence)
1. **Primary:** "Rising Together Towards a Better Tomorrow"
2. **Short-form / badges:** "Aid. Develop. Transform."
3. **Donor-facing:** "Lighting the Path for Communities in Need"
4. **Campaigns:** "One Initiative. Five Pillars. Infinite Impact." *(note: brand kit says five but lists six pillars — use "Six Pillars" on the website)*

---

## 2. Tech Stack (do not deviate without explicit instruction)

- **Framework:** Next.js 14 (App Router, TypeScript)
- **Styling:** Tailwind CSS with custom HoCAID theme tokens
- **Animation:** Framer Motion (for the hero sunrise and scroll reveals)
- **Icons:** lucide-react
- **Fonts:** `next/font/google` — Playfair Display (display) + DM Sans (body)
- **Images:** `next/image` for everything in `/public`
- **Forms:** React Hook Form + Zod validation
- **Donations:** Paystack (primary, NGN) — Stripe as future option
- **Deployment:** Vercel
- **Node:** 18+ (Vercel default)

**Why this stack:** Next.js gives us SEO + image optimisation out of the box, Tailwind + Framer Motion lets us build the cinematic sunrise without a heavy video file (critical for mobile data users in target communities), and Vercel deploys automatically from GitHub on every push.

---

## 3. Brand Identity — Single Source of Truth

### 3.1 Colour palette
All colours must be referenced through Tailwind tokens defined in `tailwind.config.ts`. Never use raw hex in components except inside the sunrise SVG gradients.

| Token            | Hex       | Tailwind class             | Usage                                    |
|------------------|-----------|----------------------------|------------------------------------------|
| Deep Navy        | `#0C2340` | `bg-navy` / `text-navy`    | Primary brand, headers, footer, body text|
| Sunrise Orange   | `#F97316` | `bg-sunrise` / `text-sunrise` | CTAs, action elements, accents       |
| Horizon Gold     | `#FBBF24` | `bg-gold` / `text-gold`    | Highlights, hover states, sun core       |
| Sky Blue         | `#0EA5E9` | `bg-sky-brand`             | Health pillar, links                     |
| Forest Green     | `#166534` | `bg-forest`                | Environment/agriculture pillar, hills    |
| Warm Cream       | `#FEF9F0` | `bg-cream`                 | Page backgrounds, cards                  |

**Signature gradient (CTAs, accent strips):** `bg-gradient-to-r from-sunrise to-gold`. This is the brand's signature gradient per the stationery rules — use it for primary buttons and the 3px accent strip under headers.

### 3.2 Typography
- **Display (headlines, taglines, pull quotes):** Playfair Display — weights 400, 700, 900
- **Body (paragraphs, UI, forms):** DM Sans — weights 300, 400, 500, 600
- **Hierarchy:** H1 = 48px desktop / 36px mobile; H2 = 32px / 28px; H3 = 24px / 20px; Body = 16px minimum
- **Never** introduce a third typeface. Never use system serif/sans defaults.

### 3.3 Voice & tone (apply to all copy)
- **Hopeful** — possibilities, futures, transformation. Not pity or problem-dwelling.
- **Human-centred** — real stories, community voices, named people where possible.
- **Action-oriented** — strong verbs: *empower, build, drive, champion, strengthen, advance*.
- **Evidence-based** — pair emotion with numbers, outcomes, data points.
- **Inclusive** — gender-balanced, jargon-free, accessible to non-specialists.

### 3.4 Logo rules
- Logo files live at `/public/logo.png` (full colour, for cream/white backgrounds) and `/public/logo-white.png` (for navy backgrounds).
- Minimum digital height: **32px**.
- Maintain clear space equal to the height of the "H" in the wordmark on all sides.
- Never stretch, recolour, rotate, or place on busy backgrounds without an overlay.
- The logo already contains a rising-sun motif — the homepage hero animation echoes this; do not place the logo *inside* the animated sun.

---

## 4. The Six Pillars (use exact wording on Programmes page)

1. **Health Systems Strengthening** — Equitable healthcare, primary care systems, pandemic preparedness, workforce capacity, universal health coverage. Pillar colour: Sky Blue.
2. **Food Security, Agriculture & Sustainable Livelihoods** — Food security, climate-smart agriculture, agribusiness, value chains, nutrition, livelihoods. Pillar colour: Forest Green.
3. **Climate Change & Environmental Health** — Climate–health intersection, adaptation, environmental sustainability, disaster preparedness, resilience. Pillar colour: Forest Green / Sky Blue blend.
4. **Digital Innovation, AI & Data Intelligence** — Digital tools, AI, data systems, monitoring, evidence-driven interventions. Pillar colour: Deep Navy.
5. **Governance & Policy Innovation** — Accountability, policy reform, citizen participation, innovative financing. Pillar colour: Horizon Gold.
6. **Community Engagement, SBC & Risk Communication** — Grassroots participation, behaviour change, advocacy, culturally responsive communication. Pillar colour: Sunrise Orange.

---

## 5. Site Architecture

```
/                  Home (with cinematic sunrise hero)
/about             About — vision, mission, story, team
/programmes        The six pillars in detail
/donate            Paystack donation flow + impact tiers
/contact           Contact form + office details + map
```

A photo gallery / impact stories section lives **inline on the homepage** below the pillars, and is linked from /about. Images are stored in `/public/gallery/` — to add new ones, drop the file in and add an entry to `/lib/gallery.ts`. No CMS required.

---

## 6. The Homepage Sunrise Hero — Build Specification

This is the signature element of the site. Treat it as a **scene**, not a graphic. It must feel cinematic, naturalistic, and on-brand (the logo itself is a rising sun, so this animation *is* the brand brought to life).

### 6.1 Behaviour
- Plays **automatically** on page load. No user interaction required.
- Total animation length: **~6 seconds** from start to settled state. Then it holds steady (sun gently pulsing, light shimmering).
- Respects `prefers-reduced-motion`: if the user has reduced motion enabled, render the **final settled frame** as a static SVG with no animation.
- Renders smoothly at 60fps on mid-range Android phones. **No video files.** SVG layers + Framer Motion only.
- Headline + CTA fade in on top of the scene at ~3 seconds (when the sun is roughly 60% risen).

### 6.2 Layered scene structure (back to front)
Each layer is a separate `<motion.div>` or `<motion.g>` inside an SVG, so they can animate independently:

1. **Sky gradient layer** — full viewport. Animates from pre-dawn (deep indigo `#1a1f3a` at top, dusty rose `#3d2540` at horizon) to morning (soft cream `#FEF9F0` at top, warm peach `#FFD9A8` at horizon) over 5 seconds. Use `linearGradient` inside SVG with `<animate>` on stop colours, OR Framer Motion animating CSS variables on a div with a CSS gradient.
2. **Distant atmospheric haze** — a soft horizontal band at the horizon, blurred (`filter: blur(20px)`), warm orange `#F97316` at 30% opacity. Fades in as the sun rises.
3. **The sun** — begins **below** the hill silhouette (translateY out of view) and rises smoothly to sit above the crest. Three parts:
   - **Sun core:** a small, intensely bright point of light (~50 SVG units on a 1440×810 viewBox). Radial gradient: centre solid white `#FFFFFF` (overexposed — inner 30% is pure white) → `#FFF4D6` → `#FBBF24` (Horizon Gold) at the edge.
   - **Sun rays:** 12 alternating long/short rays radiating from the core as thin tapered triangles (wider at the base, tapering to a point at the tip). Long rays at 0°/60°/120°/180°/240°/300° (30° spacing); short rays between at 30°/90°/150°/210°/270°/330°. Cardinal rays at 0° (top) and 180° (bottom) are 1.2× the diagonal long rays (240 vs 200 SVG units). Short rays are 100 SVG units. Fill: radial gradient white→transparent gold (`gradientUnits="userSpaceOnUse"` centred on the sun) so tips dissolve into the sky. A feGaussianBlur (stdDeviation=3) on the ray group softens them. The entire ray group rotates 360° over 60 s (barely perceptible). Rays bloom in from t=2 s to t=4 s (opacity 0→1, scale 0.4→1.1→1 with easing [0.22, 1, 0.36, 1] — the 1.1 overshoot at t=3.8 s creates a "blooming" expansion).
   - **Outer glow / corona:** a large soft circle (r=600 SVG units, ~3× long-ray length), blurred heavily (feGaussianBlur stdDeviation=35), `#FBBF24` at ~25% opacity — atmospheric scattering around the rayed sun. The entire sun group (core + rays + halo) pulses together: scale 1 ↔ 1.05, 3-second loop, easeInOut, starting at ~5.2 s once the rise settles.
4. **Light bloom** — a radial gradient overlay centred where the sun sits, golden at the centre fading to transparent at the edges. Fades in to ~50% opacity as the sun rises, brightening the entire hero. This is what makes the scene feel *bright* rather than just decorated.
5. **Far hills** — soft silhouette in `#1a3a2e` (very dark forest green) at ~40% opacity, slightly blurred. Static.
6. **Near hills** — sharper silhouette in `#0C2340` (Deep Navy) at full opacity. Static. The horizon line where these meet the sky is where the sun rises from.
7. **Hill rim light** — as the sun crests the hills, a thin highlight of `#FBBF24` appears along the top edge of the near hills. Animates in at ~3.5s with opacity fade. This is the detail that sells the realism.

### 6.3 Easing & feel
- Sun rise motion: `ease: [0.22, 1, 0.36, 1]` (Framer Motion's "ease-out-expo" feel) — slow start, smooth settle. Do not use `linear` or default `easeInOut`; the sun must feel like it's climbing against gravity, not sliding.
- Sky gradient: `ease: 'easeInOut'` over 5s.
- Light bloom: `ease: 'easeOut'`, delayed 1s after sun starts rising.
- Sun pulse (post-rise): infinite loop, 3s, `ease: 'easeInOut'`. Applies to core + rays as a group.
- Ray rotation: `ease: 'linear'`, 60 s per full revolution, `repeat: Infinity`. Not rendered for `prefers-reduced-motion` users (they see the SettledScene static frame).
- Ray shimmer (post-rise): opacity 0.85 ↔ 1, 4 s loop, `ease: 'easeInOut'`, `delay: 5.2 s` — intentionally offset from the scale pulse so they never synchronise.
- Ray bloom (during rise): opacity 0→1, scale 0.4→1.1→1, between t=2 s and t=4 s, `ease: [0.22, 1, 0.36, 1]`.

### 6.4 Headline overlay
Positioned over the lower-middle of the scene, fades in at 3s:
- **H1:** "Rising Together Towards a Better Tomorrow" — Playfair Display, white with subtle text-shadow for legibility against the gradient.
- **Sub:** "Aid. Develop. Transform." — DM Sans Medium, gold (`#FBBF24`).
- **CTA buttons:** "Donate Now" (sunrise→gold gradient) and "Our Programmes" (outline white). Both fade in at 3.5s.

### 6.5 Responsive behaviour
- Desktop: hero is `100vh` tall, scene fills the full width.
- Tablet: `90vh`, scene scales proportionally.
- Mobile: `85vh`, hills shift down slightly so the sun has room to rise without crowding the headline. Reduce sun rise distance by ~30%.

### 6.6 Performance budget
- Total hero JavaScript: under 30KB gzipped (Framer Motion is ~25KB; we have headroom).
- No external image requests for the scene itself. Everything is inline SVG.
- Lazy-load everything below the hero.

---

## 7. Accessibility — Non-Negotiable

- **WCAG 2.1 AA minimum.** Aim for AAA on text contrast.
- All interactive elements reachable by keyboard, with visible focus rings (use `focus-visible:ring-2 focus-visible:ring-sunrise`).
- All images have meaningful `alt` text. Decorative images use `alt=""`.
- `prefers-reduced-motion` honoured throughout — not just the hero.
- Forms have proper labels, error messages tied via `aria-describedby`, and announce validation errors.
- Colour is never the sole indicator of state (always pair with text or icon).
- Site works on screen readers (NVDA, VoiceOver tested mentally during builds).
- Mobile tap targets minimum 44×44px.

---

## 8. Performance Targets

- **Lighthouse Performance:** ≥ 90 mobile, ≥ 95 desktop.
- **LCP:** < 2.5s on 4G.
- **CLS:** < 0.1.
- All images via `next/image` with explicit width/height.
- Fonts loaded via `next/font` with `display: 'swap'`.

---

## 9. SEO Defaults

- Every page sets `metadata` export (title, description, OpenGraph, Twitter card).
- Site title pattern: `{Page} — HoCAID`
- Default OG image: `/public/og-default.png` (1200×630, navy background, white logo, gradient strip).
- `sitemap.xml` and `robots.txt` generated via Next.js conventions.
- Structured data: `Organization` schema in root layout.

---

## 10. File & Folder Conventions

```
/app
  /(marketing)         Route group for public pages
    /page.tsx          Home
    /about/page.tsx
    /programmes/page.tsx
    /donate/page.tsx
    /contact/page.tsx
  /api
    /paystack          Donation init + webhook
    /contact           Contact form handler
  /layout.tsx          Root layout, fonts, metadata
  /globals.css         Tailwind directives + CSS variables
/components
  /hero
    /SunriseHero.tsx   The cinematic scene
    /SunriseScene.tsx  The SVG layers
    /HeroOverlay.tsx   Headline + CTAs
  /layout
    /Header.tsx
    /Footer.tsx
    /MobileNav.tsx
  /sections
    /Pillars.tsx
    /Gallery.tsx
    /ImpactStats.tsx
    /Newsletter.tsx
  /ui                  Buttons, inputs, cards (small reusables)
/lib
  /gallery.ts          Gallery image manifest
  /pillars.ts          The six pillars data
  /paystack.ts         Donation helpers
/public
  /logo.png
  /logo-white.png
  /gallery/            Drop photos here
  /og-default.png
/tailwind.config.ts
/next.config.mjs
/CLAUDE.md             ← this file
/README.md
/.env.local            (gitignored)
```

### Naming
- Components: PascalCase (`SunriseHero.tsx`)
- Utilities/data: camelCase (`pillars.ts`)
- Routes: lowercase with hyphens (`/about`, `/programmes`)

---

## 11. Donation Flow (Paystack)

- Button on `/donate` opens an inline Paystack popup using `react-paystack`.
- Suggested tiers: ₦5,000 / ₦15,000 / ₦50,000 / Custom — each with an "impact statement" ("₦5,000 funds X for one family").
- Public key: `NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY` (env var).
- Secret key: `PAYSTACK_SECRET_KEY` (server-only, used for webhook verification at `/api/paystack/webhook`).
- On success: redirect to `/donate/thank-you` with confetti animation.
- All amounts in NGN (kobo internally — multiply by 100).

---

## 12. What "Done" Looks Like for Any Component

Before marking a component complete, verify:
- [ ] Uses brand tokens, no raw hex codes (except inside the hero SVG gradients).
- [ ] Responsive at 360px, 768px, 1024px, 1440px.
- [ ] Keyboard navigable with visible focus.
- [ ] Honours `prefers-reduced-motion` if it animates.
- [ ] All images have alt text.
- [ ] Copy follows the voice pillars in §3.3.
- [ ] No console errors or TypeScript errors.

---

## 13. What NOT to Do

- ❌ Don't introduce new dependencies without justification — every package adds bundle weight.
- ❌ Don't use stock-photo clichés (smiling-children-in-a-row, hands-cupping-soil). Real community photos only.
- ❌ Don't use the word "beneficiaries" — say "communities," "participants," or "people we work with."
- ❌ Don't autoplay audio. Ever.
- ❌ Don't add cookie banners unless we add tracking — we currently don't.
- ❌ Don't hardcode strings that might be translated later — keep copy in `/lib/copy.ts` for easy extraction.
- ❌ Don't replace the cinematic hero with a static image "for performance." Performance is achieved through the SVG-only approach, not by removing the signature element.

---

## 14. Working with Claude Code on This Project

When asked to add or modify a feature:
1. Re-read this file to confirm the brand and stack rules.
2. Check existing components for patterns before creating new ones.
3. If introducing a new pattern, justify it briefly in the response.
4. Run `pnpm build` (or `npm run build`) after changes that touch routing or config.
5. For any animation, confirm `prefers-reduced-motion` is handled.
6. For any new copy, confirm tone matches §3.3.

---

*Last updated: project initialisation. Update this file when stack, brand, or architecture decisions change.*
