# HoCAID Website

Public-facing website for **Horizon Community Initiative for Aid and Development (HoCAID)** — an NGO strengthening health systems, driving food security, championing climate resilience, and empowering communities across Africa.

## Tech Stack

- **Framework:** Next.js 14 (App Router, TypeScript)
- **Styling:** Tailwind CSS with custom brand tokens
- **Animation:** Framer Motion (cinematic SVG sunrise hero)
- **Fonts:** Playfair Display + DM Sans via `next/font/google`
- **Donations:** Paystack (NGN)
- **Deployment:** Vercel (auto-deploy from `main` branch)

## Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Configure environment variables

```bash
cp .env.example .env.local
```

Edit `.env.local` and fill in real values. See [Environment Variables](#environment-variables) below.

### 3. Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### 4. Build for production

```bash
npm run build
```

### 5. Run the production build locally

```bash
npm start
```

## Environment Variables

| Variable | Required | Description |
|---|---|---|
| `NEXT_PUBLIC_SITE_URL` | Yes | Canonical site URL, no trailing slash. Used for sitemap, robots.txt, and OG metadata. Example: `https://hocaid.org` |
| `NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY` | Yes | Paystack publishable key (`pk_live_…` in production, `pk_test_…` in dev). Safe to expose to the browser. |
| `PAYSTACK_SECRET_KEY` | Yes | Paystack secret key (`sk_live_…` / `sk_test_…`). **Server-only — never expose to the browser or commit to version control.** |

All variables are documented with examples in `.env.example`. Copy that file to `.env.local` — it is gitignored and will never be committed.

On Vercel, add these under **Project → Settings → Environment Variables**.

## Project Structure

```
app/                  Next.js App Router pages and API routes
  about/              About page
  contact/            Contact page + form
  donate/             Paystack donation flow
  donate/thank-you/   Post-donation confirmation
  programmes/         The six pillars
  api/contact/        Contact form handler (POST)
  api/newsletter/     Newsletter signup handler (POST)
  api/paystack/       Donation init + webhook verification
components/
  hero/               Cinematic SVG sunrise animation
  layout/             Header, Footer, MobileNav
  sections/           Homepage sections
lib/                  Data: pillars, gallery manifest, copy
public/               Static assets: logos, images, OG image
```

## Deployment

Push to the `main` branch on GitHub. Vercel auto-deploys on every push.

Before going live:
1. Swap Paystack test keys (`pk_test_` / `sk_test_`) for live keys (`pk_live_` / `sk_live_`) in Vercel environment variables.
2. Set `NEXT_PUBLIC_SITE_URL=https://hocaid.org` in Vercel.
3. Register the webhook URL `https://hocaid.org/api/paystack/webhook` in the Paystack dashboard under **Settings → Webhooks**.

## Donation Testing

Use Paystack test credentials in the `pk_test_` environment:

| Field | Value |
|---|---|
| Card number | 4084 0840 8408 4081 |
| Expiry | Any future date |
| CVV | 408 |
| OTP | 123456 |

## Licence

© 2026 Horizon Community Initiative for Aid and Development. All rights reserved.
