# CLAUDE.md — HoCAID Website Project

> This file provides Claude Code with full project context, brand guidelines, architecture decisions, and coding standards. Read this before making any changes.

---

## 🏢 Project Overview

**Organisation:** Horizon Community Initiative for Aid and Development (HoCAID)
**Tagline:** "Rising Together Towards a Better Tomorrow"
**Short form:** HoCAID (use full name on first mention, then abbreviate)
**Type:** Non-profit NGO website
**Purpose:** Public-facing website to communicate mission, showcase programs, attract donors/volunteers, and offer humanitarian consulting services.

---

## 🎯 Brand Identity

### Voice & Tone
- **Hopeful** — Speak of possibilities and futures, not problems alone
- **Human-Centred** — Lead with real stories and community voices
- **Action-Oriented** — Use strong active verbs: empower, build, drive, champion
- **Evidence-Based** — Balance emotion with measurable outcomes and data
- **Inclusive** — Represent all genders, ages, and groups; avoid jargon

### Taglines (use contextually)
- **Primary:** "Rising Together Towards a Better Tomorrow" — hero sections, headers
- "Where Every Community Finds Its Horizon" — fundraising & events
- "Aid. Develop. Transform." — short form, badges, social
- "Empowering People. Sustaining Futures." — programme reports
- "Lighting the Path for Communities in Need" — donor-facing copy
- "One Initiative. Five Pillars. Infinite Impact." — awareness campaigns

### Five Strategic Pillars
1. **Health & Wellbeing** — Improving physical and mental health services and preventive care
2. **Agriculture & Livelihoods** — Boosting food security and climate-smart economic development
3. **Digital Access & Technology** — Expanding digital inclusion for education, health, and governance
4. **Environment & Renewable Energy** — Promoting conservation and community-led climate resilience
5. **Gender & Youth Empowerment** — Championing equality and participation of marginalized groups

---

## 🎨 Design System

### Colour Palette
```css
:root {
  --color-navy:   #0C2340;   /* Primary brand / backgrounds / nav */
  --color-orange: #F97316;   /* CTAs / action / energy */
  --color-gold:   #FBBF24;   /* Hope / warmth / highlights */
  --color-sky:    #0EA5E9;   /* Trust / health / water */
  --color-green:  #166534;   /* Environment / agriculture */
  --color-cream:  #FEF9F0;   /* Page backgrounds / cards */
  --color-white:  #FFFFFF;
  --color-grey:   #6B7280;   /* Muted text / captions */
}
```

### Typography
```css
/* Headlines / Display */
font-family: 'Playfair Display', Georgia, serif;
/* H1: 48px | H2: 32px | H3: 24px */
/* Weights: 400, 700, 900 */

/* Body / UI */
font-family: 'DM Sans', Arial, sans-serif;
/* Minimum body: 14px digital */
/* Weights: 300, 400, 500, 600 */
```

Import from Google Fonts:
```html
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700;900&family=DM+Sans:wght@300;400;500;600&display=swap" rel="stylesheet">
```

### Logo
- File: `public/images/logo.png`
- Minimum size: 32px height (digital)
- Clear space: Always provide adequate padding around the logo
- Never stretch, distort, rotate, or place on busy backgrounds without overlay
- Use white version on dark/navy backgrounds

### Gradient (CTAs & accents)
```css
background: linear-gradient(135deg, var(--color-orange), var(--color-gold));
```

---

## 🗂️ Site Architecture

```
/                          → Home
/about                     → About HoCAID
/our-work                  → Our Work (5 Pillars overview)
/our-work/health           → Health & Wellbeing
/our-work/agriculture      → Agriculture & Livelihoods
/our-work/digital-access   → Digital Access & Technology
/our-work/environment      → Environment & Renewable Energy
/our-work/gender-youth     → Gender & Youth Empowerment
/programs                  → Programs & Projects
/programs/[slug]           → Individual project detail page
/consulting                → Humanitarian Consulting
/impact                    → Impact & Reports
/news                      → News & Insights
/news/[slug]               → Individual article/blog post
/get-involved              → Get Involved (Volunteer / Partner / Donate)
/contact                   → Contact
```

### Page Content Breakdown

#### `/` — Home
- Hero: Full-width with tagline, subheading, two CTAs ("Our Work" + "Get Involved")
- Mission Snapshot: 2–3 sentence overview of HoCAID
- Five Pillars: Icon grid linking to each pillar page
- Impact Numbers: Animated counters (communities reached, countries, projects, etc.)
- Latest News: 3 most recent posts
- Partners/Donors Strip: Logo carousel
- Footer CTA: Donate / Volunteer banner

#### `/about`
- Hero with breadcrumb
- Who We Are (narrative section)
- Vision & Mission statements
- Our Story (timeline)
- Core Values
- Team grid (name, title, photo, bio)
- Partners & Affiliates logos

#### `/our-work`
- Overview hero
- 5 Pillar cards (icon, title, short description, link)
- Each pillar sub-page: Hero, description, activities, stats, related projects, photo gallery

#### `/programs`
- Filterable project grid (by pillar, status: active/completed, region)
- Each project detail: Title, pillar tag, location, timeline, description, outcomes, photo gallery, related projects

#### `/consulting`
- Hero: "Humanitarian Development Consulting"
- Services list (capacity building, M&E, policy advisory, community engagement, etc.)
- Methodology / Approach section
- Client sectors
- Engagement process (numbered steps)
- CTA: "Start a Conversation"

#### `/impact`
- Key statistics (large, animated)
- Stories from the field (featured testimonials/case studies)
- Annual Reports section (PDF download cards)
- SDG alignment section (optional)

#### `/news`
- Blog/article grid with filter (category, date)
- Featured post hero
- Each article: Title, author, date, category, body, related posts

#### `/get-involved`
- Three sections: Volunteer, Partner with Us, Donate
- Volunteer: Form with interest areas
- Partner: Partnership tiers and CTA
- Donate: Donation options (one-time / monthly), payment integration placeholder

#### `/contact`
- Office address, phone, email
- Contact form (name, email, subject, message)
- Embedded map (Google Maps or Mapbox)
- Social media links

---

## 🛠️ Tech Stack

| Layer | Choice | Reason |
|---|---|---|
| Framework | Next.js 14 (App Router) | SEO, performance, Vercel-native |
| Styling | Tailwind CSS | Rapid, consistent, utility-first |
| Language | TypeScript | Type safety, maintainability |
| CMS | Markdown files (MDX) or Sanity.io | Blog/news content management |
| Forms | React Hook Form + email via Resend or Formspree | Contact & volunteer forms |
| Animation | Framer Motion | Smooth, modern UI motion |
| Icons | Lucide React | Clean, consistent icon set |
| Images | next/image | Optimised, responsive images |
| Deployment | Vercel (via GitHub) | Zero-config, automatic previews |

---

## 📁 Project File Structure

```
hocaid-website/
├── public/
│   ├── images/
│   │   ├── logo.png
│   │   ├── logo-white.png
│   │   └── og-image.png
│   └── favicon.ico
├── src/
│   ├── app/                        # Next.js App Router pages
│   │   ├── layout.tsx              # Root layout (nav + footer)
│   │   ├── page.tsx                # Home
│   │   ├── about/page.tsx
│   │   ├── our-work/
│   │   │   ├── page.tsx
│   │   │   └── [pillar]/page.tsx
│   │   ├── programs/
│   │   │   ├── page.tsx
│   │   │   └── [slug]/page.tsx
│   │   ├── consulting/page.tsx
│   │   ├── impact/page.tsx
│   │   ├── news/
│   │   │   ├── page.tsx
│   │   │   └── [slug]/page.tsx
│   │   ├── get-involved/page.tsx
│   │   └── contact/page.tsx
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.tsx          # Sticky nav with mobile menu
│   │   │   ├── Footer.tsx          # Full footer with links + social
│   │   │   └── PageHero.tsx        # Reusable page hero banner
│   │   ├── home/
│   │   │   ├── HeroSection.tsx
│   │   │   ├── MissionSection.tsx
│   │   │   ├── PillarsGrid.tsx
│   │   │   ├── ImpactCounters.tsx
│   │   │   ├── LatestNews.tsx
│   │   │   └── PartnersStrip.tsx
│   │   ├── shared/
│   │   │   ├── Button.tsx
│   │   │   ├── SectionHeading.tsx
│   │   │   ├── PillarCard.tsx
│   │   │   ├── ProjectCard.tsx
│   │   │   ├── NewsCard.tsx
│   │   │   └── DonateButton.tsx
│   │   └── forms/
│   │       ├── ContactForm.tsx
│   │       └── VolunteerForm.tsx
│   ├── lib/
│   │   ├── constants.ts            # Pillars, nav links, social links
│   │   ├── types.ts                # TypeScript interfaces
│   │   └── utils.ts                # Helper functions
│   ├── content/
│   │   ├── news/                   # MDX blog posts
│   │   └── programs/               # MDX project pages
│   └── styles/
│       └── globals.css             # Tailwind base + CSS variables
├── CLAUDE.md                       # ← This file
├── .env.local                      # Environment variables (never commit)
├── tailwind.config.ts
├── next.config.ts
├── tsconfig.json
└── package.json
```

---

## 📱 Mobile-First Design — MANDATORY

> **This is a mobile-first project.** The primary audience will access this site on smartphones. Every component, page, and layout MUST be designed for mobile screens first, then enhanced for tablet and desktop. Never design desktop-first and adapt down.

### Breakpoint Strategy
```
Default (no prefix) = Mobile       → 0px–639px    (375px is the design target)
sm:                  = Large phone  → 640px+
md:                  = Tablet       → 768px+
lg:                  = Laptop       → 1024px+
xl:                  = Desktop      → 1280px+
```

### Rules — Enforce on EVERY component

**Layout**
- Stack everything vertically on mobile — use `flex-col` as default, `md:flex-row` to go horizontal
- Full-width elements on mobile: `w-full`, narrowed on larger screens with `md:w-1/2`, `lg:max-w-4xl`
- Generous padding on mobile: minimum `px-4 py-8`, increase at `md:px-8 lg:px-16`
- No horizontal scrolling — ever. Test every component at 375px width

**Navigation**
- Navbar must be a hamburger menu on mobile (`block md:hidden` for toggle, `hidden md:flex` for desktop links)
- Mobile menu must be full-screen overlay or slide-in drawer
- Touch targets (buttons, links) must be at least **44×44px** — use `min-h-[44px] min-w-[44px]`
- Sticky top navbar on mobile for easy navigation

**Typography — Mobile Sizes First**
```
H1: text-3xl (mobile) → md:text-4xl → lg:text-5xl
H2: text-2xl (mobile) → md:text-3xl → lg:text-4xl
H3: text-xl  (mobile) → md:text-2xl → lg:text-3xl
Body: text-base (16px minimum on mobile — never smaller)
```

**Grids & Cards**
- Pillar cards: `grid-cols-1` (mobile) → `sm:grid-cols-2` → `lg:grid-cols-3`
- News cards: `grid-cols-1` (mobile) → `md:grid-cols-2` → `lg:grid-cols-3`
- Team grid: `grid-cols-1` (mobile) → `sm:grid-cols-2` → `lg:grid-cols-4`
- Never use more than 1 column on mobile unless content explicitly requires it

**Images**
- Always use `width="100%"` or `fill` with a sized container on mobile
- Hero images: use `object-cover` with a defined `h-[60vh]` on mobile, taller on desktop
- Avoid large decorative images that slow mobile load

**Forms**
- All form inputs must be `w-full` on mobile
- Input fields minimum height `h-12` (48px) for easy tapping
- Labels above inputs (never inline/floating on mobile)
- Submit buttons must be `w-full` on mobile, `md:w-auto` on desktop

**CTAs & Buttons**
- Primary CTAs: `w-full` on mobile, `md:w-auto` on desktop
- Stack multiple CTA buttons vertically on mobile (`flex flex-col gap-3 sm:flex-row`)

**Spacing**
- Sections: `py-12 md:py-20 lg:py-28`
- Cards inner padding: `p-4 md:p-6`
- Gap between grid items: `gap-4 md:gap-6 lg:gap-8`

**Performance on Mobile**
- Use `next/image` with proper `sizes` attribute for responsive images
- Lazy-load all images below the fold (`loading="lazy"`)
- Avoid heavy animations on mobile — use `motion-reduce` or disable Framer Motion effects on small screens with a `useMediaQuery` check
- Fonts already loaded from Google Fonts with `display=swap` to prevent layout shift

### Quick Checklist — Run Before Marking Any Component Done
- [ ] Looks correct at 375px width (iPhone SE)
- [ ] Looks correct at 390px width (iPhone 14)
- [ ] Looks correct at 768px width (iPad)
- [ ] No horizontal scroll on any screen size
- [ ] All tap targets are at least 44×44px
- [ ] Text is readable without zooming on mobile
- [ ] Images are not cropped awkwardly on mobile
- [ ] Forms are easy to fill on a touchscreen

---

## ⚙️ Coding Standards

### General
- Use TypeScript for all files (`.tsx` / `.ts`)
- Use functional components with hooks only — no class components
- All components must be responsive (mobile-first with Tailwind)
- Use `next/image` for ALL images — never raw `<img>` tags
- Use `next/link` for ALL internal links — never raw `<a>` tags
- All pages must have metadata (title, description, OG tags) via Next.js Metadata API

### Naming
- Components: `PascalCase` (e.g. `PillarCard.tsx`)
- Utilities/hooks: `camelCase` (e.g. `useScrollAnimation.ts`)
- CSS variables: `--color-navy`, `--color-orange` (kebab-case)
- Constants: `UPPER_SNAKE_CASE` for true constants, `camelCase` for config objects

### Accessibility
- All images must have descriptive `alt` text
- All interactive elements must be keyboard-navigable
- Use semantic HTML: `<nav>`, `<main>`, `<section>`, `<article>`, `<header>`, `<footer>`
- Maintain colour contrast ratios (WCAG AA minimum)
- Forms must have associated `<label>` elements

### Tailwind Usage
- Define brand colours in `tailwind.config.ts` under `extend.colors` using the hex values above
- Do not use arbitrary values (`[#0C2340]`) — always use design token class names
- Use Tailwind's responsive prefixes: `sm:`, `md:`, `lg:`, `xl:`

### Component Pattern
```tsx
// Always structure components like this:
import type { FC } from 'react'

interface Props {
  title: string
  description?: string
}

const MyComponent: FC<Props> = ({ title, description }) => {
  return (
    <section className="...">
      <h2 className="font-display text-3xl font-bold text-navy">{title}</h2>
      {description && <p className="text-grey mt-4">{description}</p>}
    </section>
  )
}

export default MyComponent
```

---

## 🚀 Deployment

- **Platform:** Vercel
- **Repo:** GitHub (push to `main` triggers production deploy)
- **Branch strategy:** `main` = production, `dev` = staging, feature branches for new work
- **Environment variables:** Set in Vercel dashboard (never hardcode secrets)
- **Domain:** Configure custom domain in Vercel project settings

---

## 🔑 Key Decisions & Constraints

1. **No inline styles** — all styling via Tailwind classes or CSS variables in `globals.css`
2. **No external UI libraries** (e.g. MUI, Chakra) — keep the bundle lean and the design custom
3. **Framer Motion** for animations only — no CSS keyframe animations for complex motion
4. **MDX for content** — news posts and project pages are `.mdx` files in `/src/content/`
5. **Static generation preferred** — use `generateStaticParams` for dynamic routes where possible
6. **Mobile-first always** — design for 375px width first, then scale up. See the dedicated 📱 Mobile-First section above — these rules are mandatory on every component
7. **Logo file lives at** `public/images/logo.png` — reference as `/images/logo.png`

---

## 📋 Development Phases

### Phase 1 — Foundation
- [ ] Init Next.js 14 project with TypeScript + Tailwind
- [ ] Configure `tailwind.config.ts` with HoCAID brand tokens
- [ ] Set up `globals.css` with CSS variables and Google Fonts
- [ ] Build `Navbar` and `Footer` components
- [ ] Build reusable `Button`, `SectionHeading`, `PageHero` components

### Phase 2 — Core Pages
- [ ] Home page (all sections)
- [ ] About page
- [ ] Our Work overview + 5 pillar sub-pages
- [ ] Contact page with working form

### Phase 3 — Programs & Content
- [ ] Programs/Projects listing + detail pages (MDX)
- [ ] News/Blog listing + article pages (MDX)
- [ ] Impact page with animated counters
- [ ] Consulting page

### Phase 4 — Get Involved & Polish
- [ ] Get Involved page (Volunteer, Partner, Donate sections)
- [ ] Animation pass with Framer Motion
- [ ] SEO metadata for all pages
- [ ] Performance audit (Lighthouse)
- [ ] Accessibility audit

### Phase 5 — Deploy
- [ ] Push to GitHub
- [ ] Connect repo to Vercel
- [ ] Configure environment variables
- [ ] Set up custom domain

---

*Last updated: 2025 · HoCAID Brand Identity Kit v1.0*
