import type { FC } from "react";
import Link from "next/link";
import { PILLARS, SOCIAL_LINKS, SITE_TAGLINE, SITE_NAME } from "@/lib/constants";
import Logo from "@/components/shared/Logo";

/* ─── Inline brand SVG icons ─────────────────────────────────────────────── */
const TwitterX = () => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden="true">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const FacebookIcon = () => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden="true">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
  </svg>
);

const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden="true">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
  </svg>
);

const LinkedInIcon = () => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden="true">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const YouTubeIcon = () => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden="true">
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
  </svg>
);

type SocialKey = keyof typeof SOCIAL_LINKS;

const socialConfig: Record<
  SocialKey,
  { Icon: FC; label: string }
> = {
  twitter:   { Icon: TwitterX,    label: "Follow HoCAID on X (Twitter)" },
  facebook:  { Icon: FacebookIcon, label: "Follow HoCAID on Facebook" },
  instagram: { Icon: InstagramIcon, label: "Follow HoCAID on Instagram" },
  linkedin:  { Icon: LinkedInIcon,  label: "Connect with HoCAID on LinkedIn" },
  youtube:   { Icon: YouTubeIcon,   label: "Watch HoCAID on YouTube" },
};

/* ─── Static link lists ───────────────────────────────────────────────────── */
const orgLinks = [
  { label: "About Us",   href: "/about" },
  { label: "Programs",   href: "/programs" },
  { label: "Impact",     href: "/impact" },
  { label: "Consulting", href: "/consulting" },
  { label: "News",       href: "/news" },
];

const involvedLinks = [
  { label: "Volunteer",       href: "/get-involved#volunteer" },
  { label: "Partner With Us", href: "/get-involved#partner" },
  { label: "Donate",          href: "/get-involved#donate" },
  { label: "Contact Us",      href: "/contact" },
];

/* ─── Component ──────────────────────────────────────────────────────────── */
const Footer: FC = () => {
  return (
    <footer className="bg-navy text-white">

      {/* Donate CTA strip */}
      <div className="border-b border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 py-8 text-center sm:flex-row sm:text-left md:px-8">
          <div>
            <p className="font-display text-xl font-bold md:text-2xl">
              Where Every Community Finds Its Horizon
            </p>
            <p className="mt-1 text-sm text-white/60">
              Your support funds life-changing programmes across five pillars.
            </p>
          </div>
          <Link
            href="/get-involved#donate"
            className="flex shrink-0 min-h-[48px] items-center rounded-lg bg-gradient-cta px-7 py-3 text-sm font-bold text-white shadow-md transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-navy"
          >
            Donate Now
          </Link>
        </div>
      </div>

      {/* Main grid */}
      <div className="mx-auto max-w-7xl px-4 py-12 md:px-8 md:py-16">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">

          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="/" aria-label={`${SITE_NAME} — home`} className="mb-4 inline-block">
              <Logo />
            </Link>
            <p className="max-w-[260px] text-sm leading-relaxed text-white/70">
              {SITE_TAGLINE}
            </p>
            <p className="mt-2 text-xs font-bold uppercase tracking-wider text-gold">
              Aid. Develop. Transform.
            </p>

            {/* Social icons */}
            <nav aria-label="Social media links" className="mt-5">
              <ul className="flex items-center gap-2" role="list">
                {(Object.keys(SOCIAL_LINKS) as SocialKey[]).map((platform) => {
                  const config = socialConfig[platform];
                  if (!config) return null;
                  const { Icon, label } = config;
                  return (
                    <li key={platform}>
                      <a
                        href={SOCIAL_LINKS[platform]}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={label}
                        className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white/70 transition-all hover:bg-white/20 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
                      >
                        <Icon />
                      </a>
                    </li>
                  );
                })}
              </ul>
            </nav>
          </div>

          {/* Our Work */}
          <nav aria-labelledby="footer-work-heading">
            <h3
              id="footer-work-heading"
              className="mb-5 text-xs font-bold uppercase tracking-widest text-gold"
            >
              Our Work
            </h3>
            <ul className="space-y-3" role="list">
              <li>
                <Link
                  href="/our-work"
                  className="text-sm font-semibold text-white/90 transition-colors hover:text-white"
                >
                  All Five Pillars
                </Link>
              </li>
              {PILLARS.map((pillar) => (
                <li key={pillar.slug}>
                  <Link
                    href={pillar.href}
                    className="text-sm text-white/60 transition-colors hover:text-white"
                  >
                    {pillar.shortTitle}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Organisation */}
          <nav aria-labelledby="footer-org-heading">
            <h3
              id="footer-org-heading"
              className="mb-5 text-xs font-bold uppercase tracking-widest text-gold"
            >
              Organisation
            </h3>
            <ul className="space-y-3" role="list">
              {orgLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/60 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Get Involved */}
          <nav aria-labelledby="footer-involved-heading">
            <h3
              id="footer-involved-heading"
              className="mb-5 text-xs font-bold uppercase tracking-widest text-gold"
            >
              Get Involved
            </h3>
            <ul className="space-y-3" role="list">
              {involvedLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/60 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 text-xs text-white/40 sm:flex-row">
          <p>
            © {new Date().getFullYear()} Horizon Community Initiative for Aid
            and Development (HoCAID). All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link href="/about" className="transition-colors hover:text-white/70">
              Privacy Policy
            </Link>
            <span aria-hidden="true">·</span>
            <Link href="/contact" className="transition-colors hover:text-white/70">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
