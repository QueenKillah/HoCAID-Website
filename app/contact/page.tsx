import type { Metadata } from "next";
import ContactForm from "./ContactForm";

export const metadata: Metadata = {
  title: "Get in Touch",
  description:
    "Contact HoCAID — whether you're a partner, a donor, or simply curious, we'd love to hear from you.",
  openGraph: {
    title: "Get in Touch — HoCAID",
    description:
      "Whether you're a partner, a donor, or simply curious — we'd love to hear from you.",
  },
  twitter: { card: "summary_large_image" },
};

// ── Social icon SVG paths (inline — lucide-react does not include brand icons) ──
// TODO: Update all href values below with official HoCAID social profile URLs.
const SOCIALS = [
  {
    label: "Twitter / X",
    href: "#", // TODO: replace with https://x.com/hocaid
    // X (formerly Twitter) logo path
    path: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.713 6.068zm-1.161 17.52h1.833L7.084 4.126H5.117z",
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/company/hocaid-ng",
    path: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z",
  },
  {
    label: "Instagram",
    href: "https://instagram.com/hocaidng",
    path: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z",
  },
  {
    label: "Facebook",
    href: "#", // TODO: replace with https://facebook.com/hocaid
    path: "M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z",
  },
];

// ── Contact info rows ─────────────────────────────────────────────────────────
// TODO: Replace placeholder values with official HoCAID contact details.

function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4" aria-hidden="true">
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4" aria-hidden="true">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.63 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.54 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6.16 6.16l.88-.87a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

function MapPinIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4" aria-hidden="true">
      <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}


export default function ContactPage() {
  return (
    <>
      {/* ── Page header — navy band ── */}
      <header className="relative bg-navy pt-16 pb-20 md:pt-20 md:pb-24 px-6 text-center">
        <div className="max-w-2xl mx-auto">
          <p className="font-sans font-semibold text-white/60 uppercase tracking-widest text-sm mb-5">
            Contact
          </p>
          <h1
            className="font-display font-bold text-white leading-tight mb-5
                       text-4xl sm:text-5xl md:text-6xl"
          >
            Get in Touch
          </h1>
          <p className="font-sans text-white/80 text-lg sm:text-xl leading-relaxed">
            Whether you&apos;re a partner, a donor, or simply curious — we&apos;d
            love to hear from you.
          </p>
        </div>
        {/* Sunrise→gold accent strip */}
        <div className="absolute left-0 right-0 bottom-0 h-[3px] bg-gradient-to-r from-sunrise to-gold" />
      </header>

      {/* ── Two-column section ── */}
      <section className="py-16 md:py-24 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">

          {/* ── Left (60%) — Form ── */}
          <div className="lg:col-span-3">
            <h2 className="font-display font-bold text-navy text-2xl mb-8">
              Send us a message
            </h2>
            <ContactForm />
          </div>

          {/* ── Right (40%) — Contact info card ── */}
          <div className="lg:col-span-2">
            <div className="bg-cream rounded-2xl p-8 space-y-6 lg:sticky lg:top-8">
              <h2 className="font-display font-bold text-navy text-xl">
                Our details
              </h2>

              {/* Email — TODO: replace with official address */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-navy flex items-center justify-center flex-shrink-0 text-white mt-0.5">
                  <MailIcon />
                </div>
                <div>
                  <p className="font-sans font-semibold text-navy text-sm mb-0.5">
                    Email
                  </p>
                  <a
                    href="mailto:info@hocaid.org"
                    className="font-sans text-sunrise text-sm hover:underline focus-visible:outline-none focus-visible:underline"
                  >
                    info@hocaid.org
                  </a>
                </div>
              </div>

              {/* Phone — TODO: replace with official number */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-navy flex items-center justify-center flex-shrink-0 text-white mt-0.5">
                  <PhoneIcon />
                </div>
                <div>
                  <p className="font-sans font-semibold text-navy text-sm mb-0.5">
                    Phone
                  </p>
                  <a
                    href="tel:+2348064749454"
                    className="font-sans text-navy/60 text-sm hover:text-sunrise transition-colors focus-visible:outline-none focus-visible:underline"
                  >
                    +234 806 474 9454
                  </a>
                </div>
              </div>

              {/* Address — TODO: replace with official office address */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-navy flex items-center justify-center flex-shrink-0 text-white mt-0.5">
                  <MapPinIcon />
                </div>
                <div>
                  <p className="font-sans font-semibold text-navy text-sm mb-0.5">
                    Office
                  </p>
                  {/* TODO: replace with confirmed street address */}
                  <p className="font-sans text-navy/60 text-sm leading-relaxed">
                    Address to be confirmed,
                    <br />
                    Nigeria
                  </p>
                </div>
              </div>

              {/* Divider */}
              <div className="h-px bg-navy/10" />

              {/* Social icons */}
              <div>
                <p className="font-sans font-semibold text-navy text-sm mb-4">
                  Follow us
                </p>
                {/* TODO: Update href values in the SOCIALS array at the top of this file */}
                <div className="flex items-center gap-3">
                  {SOCIALS.map(({ label, href, path }) => (
                    <a
                      key={label}
                      href={href}
                      aria-label={label}
                      className={[
                        "w-10 h-10 rounded-full bg-navy flex items-center justify-center",
                        "text-white hover:bg-sunrise transition-colors duration-150",
                        "focus-visible:outline-none focus-visible:ring-2",
                        "focus-visible:ring-sunrise focus-visible:ring-offset-2",
                      ].join(" ")}
                    >
                      <svg
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-4 h-4"
                        aria-hidden="true"
                      >
                        <path d={path} />
                      </svg>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Map placeholder ── */}
      {/*
        TODO: Replace this block with a Google Maps iframe once the office address is confirmed.
        Example:
          <iframe
            src="https://www.google.com/maps/embed?pb=..."
            width="100%" height="400" style={{ border: 0 }} loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="HoCAID Office Location"
            className="w-full h-64 md:h-80 rounded-2xl"
          />
      */}
      <section className="px-6 pb-20">
        <div className="max-w-6xl mx-auto">
          <div className="w-full h-64 md:h-80 rounded-2xl bg-cream border border-navy/10 flex flex-col items-center justify-center gap-3">
            <MapPinIcon />
            <p className="font-sans text-navy/50 text-sm text-center max-w-xs">
              Map will be added when the office address is finalised.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
