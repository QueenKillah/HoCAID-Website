# HoCAID Website — Setup & Build Guide

This is your step-by-step playbook. Work through it top to bottom. Each phase has the **prompt to paste into Claude Code** in a code block.

---

## Phase 0 — Prerequisites (one-time, on your machine)

Make sure you have:
- **Node.js 18+** — check with `node --version`
- **Git** — check with `git --version`
- **Claude Code installed** — `npm install -g @anthropic-ai/claude-code`
- **A GitHub account**
- **A Vercel account** (free tier is fine — sign in with GitHub)
- **A Paystack account** (for donation keys — sign up at paystack.com)

Pick a folder for your project, e.g. `~/Projects/hocaid-website`, open a terminal there, and run `claude` to start Claude Code.

---

## Phase 1 — Drop in CLAUDE.md and your assets

Before running any prompts:

1. Save the **CLAUDE.md** file (provided alongside this guide) into the empty project folder.
2. Create a `public/` subfolder and drop your logo PNGs in:
   - `public/logo.png` (the full-colour logo for light backgrounds)
   - `public/logo-white.png` (a white version for the navy header — if you don't have this, Claude Code will generate a CSS-filtered version from the original until you make one)
3. Save the brand kit PDF and organisational profile PDF into a `docs/` folder. Claude Code can reference them when writing copy.

Your folder should look like this:

```
hocaid-website/
├── CLAUDE.md
├── docs/
│   ├── HoCAID_Brand_Kit_Official.pdf
│   └── H_O_C_A_I_D_Organisational_Profile.pdf
└── public/
    ├── logo.png
    └── logo-white.png
```

---

## Phase 2 — Scaffold the Next.js project

**Prompt to paste into Claude Code:**

```
Read CLAUDE.md before doing anything else.

Then scaffold a new Next.js 14 project in this directory using the App Router and TypeScript. Set up:

1. Tailwind CSS configured with the HoCAID brand tokens from CLAUDE.md §3.1 (navy, sunrise, gold, sky-brand, forest, cream).
2. next/font Google Fonts: Playfair Display (display) and DM Sans (body), exposed as CSS variables.
3. The folder structure exactly as defined in CLAUDE.md §10.
4. A root layout with metadata defaults, the fonts wired up, and a placeholder Header + Footer.
5. A globals.css with Tailwind directives, smooth scrolling, and the prefers-reduced-motion baseline.
6. Install: framer-motion, lucide-react, react-hook-form, zod, react-paystack.
7. Add a .gitignore, .env.example, and a README with setup instructions.

Don't build any pages yet — just the skeleton. Confirm by running the dev server and showing me what's at localhost:3000.
```

When this is done, run `npm run dev` and check the site loads at `http://localhost:3000`.

---

## Phase 3 — Build the cinematic sunrise hero

This is the most involved component. Give it its own prompt so Claude Code focuses.

**Prompt to paste into Claude Code:**

```
Read CLAUDE.md §6 carefully — this is the build spec for the homepage hero.

Build the sunrise hero exactly as specified:
- Layered SVG scene (sky gradient, atmospheric haze, sun core + glow, light bloom, far hills, near hills, hill rim light).
- Framer Motion animations with the specified easings.
- ~6-second sequence, then settles with the sun gently pulsing.
- Headline overlay fades in at ~3s with the primary tagline, secondary tagline, and two CTAs.
- Honours prefers-reduced-motion (renders the final settled frame statically).
- Responsive at mobile (85vh, sun rises ~30% less distance), tablet (90vh), desktop (100vh).
- No video files, no external images. Pure SVG + Framer Motion.

Split into three components per CLAUDE.md §10:
- components/hero/SunriseHero.tsx (the wrapper)
- components/hero/SunriseScene.tsx (the animated SVG)
- components/hero/HeroOverlay.tsx (headline + CTAs)

Mount it on app/(marketing)/page.tsx. Show me the result running locally.
```

After this runs, **open the site and watch the sunrise**. If anything looks off (sun rises too fast, hills too dark, headline appears too early, etc.), iterate with focused prompts:

> "The sun is rising too fast — slow it down to about 4 seconds for the rise itself, and delay the headline fade-in to 3.5s so the sun is mostly visible before the text appears."

> "The hills look too flat. Add a second subtle hill range slightly behind the main one with a different green tone, and increase the rim-light highlight when the sun crests."

---

## Phase 4 — Build the rest of the homepage sections

**Prompt:**

```
Read CLAUDE.md.

Build the remaining homepage sections below the hero, in this order:
1. A short "Who We Are" intro section using the mission from CLAUDE.md.
2. The Six Pillars grid (CLAUDE.md §4) — each pillar as a card with its colour accent, an icon from lucide-react, the title, and the description. Hover lifts the card slightly.
3. An Impact Stats strip — three or four big numbers (use placeholders like "Communities Reached: 50+", "Active Programmes: 6", "Established: 2026") that animate on scroll.
4. A Photo Gallery / Impact Stories section — masonry layout reading from /lib/gallery.ts. Use 4-6 placeholder images for now (you can use solid-colour SVG placeholders matching brand tokens).
5. A Newsletter signup strip (Sunrise→Gold gradient background, white form, no backend yet — just collect to a placeholder API route that logs).
6. A final CTA band: "Ready to make a difference?" with Donate + Contact buttons.

Each section must:
- Use brand tokens, never raw hex.
- Animate in on scroll with subtle Framer Motion (respect reduced motion).
- Be fully responsive.
- Pass the §12 checklist.
```

---

## Phase 5 — Build the inner pages

Do these one at a time so each gets proper attention.

**About page prompt:**

```
Read CLAUDE.md and the organisational profile in docs/H_O_C_A_I_D_Organisational_Profile.pdf.

Build app/(marketing)/about/page.tsx with:
- A page header (sunrise→gold gradient strip, page title, breadcrumb).
- Vision and Mission sections (full text from CLAUDE.md and the brand kit).
- "Our Story" — a short narrative drawn from the organisational profile.
- A values/principles section.
- A "Where We Work" section if the profile mentions geography, otherwise a placeholder.
- Page metadata configured.
```

**Programmes page prompt:**

```
Read CLAUDE.md §4.

Build app/(marketing)/programmes/page.tsx — a detailed page where each of the six pillars gets its own section:
- Pillar number + name in Playfair Display.
- Pillar colour accent strip on the left.
- Long description (expand the short ones from §4 with relevant detail from docs/H_O_C_A_I_D_Organisational_Profile.pdf).
- 2-4 bullet points of activities under each pillar.
- A subtle illustration or icon.
Sections alternate background (cream / white) for rhythm.
```

**Donate page prompt:**

```
Read CLAUDE.md §11.

Build app/(marketing)/donate/page.tsx with:
- An emotional headline using the donor-facing tagline.
- Donation tier cards: ₦5,000 / ₦15,000 / ₦50,000 / Custom — each with an impact statement.
- Paystack integration via react-paystack — public key from NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY.
- Email field, name field, optional message field — validated with React Hook Form + Zod.
- A success page at app/(marketing)/donate/thank-you/page.tsx with confetti animation.
- Server route at app/api/paystack/webhook/route.ts that verifies the Paystack signature using PAYSTACK_SECRET_KEY and logs the donation (we'll wire it to a database later if needed).

Add the env vars to .env.example with comments explaining what each is.
```

**Contact page prompt:**

```
Read CLAUDE.md.

Build app/(marketing)/contact/page.tsx with:
- A contact form (name, email, subject, message) using React Hook Form + Zod.
- Submission goes to app/api/contact/route.ts which validates and (for now) logs to console — we can wire to email later.
- Office address, email, phone, social links section alongside the form.
- An embedded map placeholder (or Google Maps iframe if I provide the address).
- Success/error toast feedback after submission.
```

---

## Phase 6 — Polish

**Prompt:**

```
Read CLAUDE.md §7, §8, §9, §12.

Run a polish pass on the whole site:
1. Run `npm run build` and fix any errors or warnings.
2. Audit every page against the §12 checklist.
3. Verify Lighthouse scores by running `npx @lhci/cli autorun` if available, otherwise list any obvious performance issues you can spot.
4. Add proper metadata + OpenGraph to every page.
5. Generate sitemap.xml and robots.txt.
6. Add an Organization JSON-LD structured data block to the root layout.
7. Check all forms work and submit successfully.
8. Verify the sunrise animation respects prefers-reduced-motion.

Report what you found and fixed, and flag anything that needs my decision.
```

---

## Phase 7 — Push to GitHub

In your terminal (outside Claude Code):

```bash
git init
git add .
git commit -m "Initial HoCAID website build"
```

Then on GitHub:
1. Create a new repository called `hocaid-website` (private or public — your choice).
2. Don't initialize it with a README — your local project already has files.
3. Copy the two commands GitHub shows you under "push an existing repository":

```bash
git remote add origin https://github.com/YOUR_USERNAME/hocaid-website.git
git branch -M main
git push -u origin main
```

---

## Phase 8 — Deploy to Vercel

1. Go to **vercel.com/new**.
2. Sign in with GitHub if you haven't already.
3. Click **Import** next to your `hocaid-website` repository.
4. Vercel auto-detects Next.js — you don't need to change build settings.
5. Before clicking Deploy, expand **Environment Variables** and add:
   - `NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY` = your Paystack public key (starts with `pk_`)
   - `PAYSTACK_SECRET_KEY` = your Paystack secret key (starts with `sk_`)
6. Click **Deploy**. Wait ~2 minutes.
7. You get a URL like `hocaid-website.vercel.app`.

**To use a custom domain** (e.g. `hocaid.org`):
- In Vercel project → Settings → Domains → Add `hocaid.org`.
- Vercel shows you DNS records to add at your domain registrar.
- Once DNS propagates (usually under an hour), you're live.

**Auto-deploy is now active.** Every `git push` to `main` redeploys the site automatically. For experimentation, create a branch — Vercel gives you a preview URL for each branch.

---

## Phase 9 — Iterating later

Whenever you want to change something, in Claude Code:

```
Read CLAUDE.md.

[your change request here]
```

Always start with that line. It's the single most important habit — it keeps Claude Code aligned with the brand and stack rules every session.

Examples:

> "Read CLAUDE.md. Add a 'Partners' section to the About page with a logo grid. Logos go in /public/partners/."

> "Read CLAUDE.md. The hero animation on mobile feels slightly delayed — tighten the timings to start the sun rise 0.3s earlier and finish 0.5s sooner."

> "Read CLAUDE.md. Add a blog. Use MDX files in /content/blog/, route at /blog and /blog/[slug]."

---

## Troubleshooting

**Sunrise looks flat or cartoonish.** Iterate on §6 specifics — increase blur on the haze layer, soften the hill silhouettes with a slight gradient (top edge ~5% lighter), boost the light bloom opacity. The naturalism comes from layering and soft edges, not from adding more elements.

**Paystack popup blocked.** Make sure you're calling it from a user-initiated event handler (button onClick), not on page load.

**Build fails on Vercel but works locally.** Usually a missing env var. Check Vercel project → Settings → Environment Variables.

**Fonts flash on first load.** Confirm `next/font` is used (not a `<link>` tag), and `display: 'swap'` is set.

**Animation janky on cheap Android.** Profile in Chrome DevTools mobile emulation. Common causes: animating `width`/`height` instead of `transform`, too many simultaneous blurs. The spec uses transforms throughout — verify nothing was changed.

---

That's it. Work through Phases 1–8 in order and you'll have a deployed, on-brand website. Phases 4–6 are where you'll spend most time iterating; the others are largely mechanical.
