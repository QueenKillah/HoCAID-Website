import type { Metadata } from "next";
import { MapPin, Mail } from "lucide-react";
import ContactForm from "./ContactForm";

export const metadata: Metadata = {
  title: "Get in Touch",
  description:
    "Contact HoCAID — Horizon Community Initiative for Aid and Development. Email, phone, and office address for enquiries, partnerships, and donations.",
  openGraph: {
    title: "Get in Touch — HoCAID",
    description:
      "Contact Horizon Community Initiative for Aid and Development (HoCAID). Email info@hocaid.org or call +234 806 474 9454.",
  },
  twitter: { card: "summary_large_image" },
};

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

function IdCardIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4" aria-hidden="true">
      <rect x="2" y="5" width="20" height="14" rx="2" />
      <path d="M16 10h2M16 14h2M7 10a2 2 0 1 0 4 0 2 2 0 0 0-4 0M7 14s.5-1 2-1 2 1 2 1" />
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
              Contact HoCAID directly
            </h2>
            <ContactForm />
          </div>

          {/* ── Right (40%) — Contact info card ── */}
          <div className="lg:col-span-2">
            <div className="bg-cream rounded-2xl p-8 space-y-6 lg:sticky lg:top-8">
              <h2 className="font-display font-bold text-navy text-xl">
                Our details
              </h2>

              {/* Email */}
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

              {/* Phone */}
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

              {/* Address */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-navy flex items-center justify-center flex-shrink-0 text-white mt-0.5">
                  <MapPinIcon />
                </div>
                <div>
                  <p className="font-sans font-semibold text-navy text-sm mb-0.5">
                    Office
                  </p>
                  <p className="font-sans text-navy/60 text-sm leading-relaxed">
                    No. 21, Henry Umahi Street,<br />
                    Trademore Estate, Lugbe,<br />
                    FCT, Nigeria
                  </p>
                </div>
              </div>

              {/* Website */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-navy flex items-center justify-center flex-shrink-0 text-white mt-0.5">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4" aria-hidden="true">
                    <circle cx="12" cy="12" r="10" />
                    <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                  </svg>
                </div>
                <div>
                  <p className="font-sans font-semibold text-navy text-sm mb-0.5">
                    Website
                  </p>
                  <a
                    href="https://hocaid.org"
                    className="font-sans text-sunrise text-sm hover:underline focus-visible:outline-none focus-visible:underline"
                  >
                    hocaid.org
                  </a>
                </div>
              </div>

              {/* Divider */}
              <div className="h-px bg-navy/10" />

              {/* Registration info */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-navy flex items-center justify-center flex-shrink-0 text-white mt-0.5">
                  <IdCardIcon />
                </div>
                <div>
                  <p className="font-sans font-semibold text-navy text-sm mb-1">
                    Registration
                  </p>
                  <p className="font-sans text-navy/60 text-xs leading-relaxed">
                    CAC Reg. No.: RC 9492937<br />
                    Tax ID: 2623728389617
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Organisation identity card ── */}
      <section className="px-6 pb-20">
        <div className="max-w-[600px] mx-auto">
          <div className="bg-navy rounded-2xl overflow-hidden">

            {/* Organisation name */}
            <div className="flex items-start gap-4 px-6 md:px-10 py-6 border-l-4 border-sunrise">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-sunrise flex-shrink-0 mt-0.5" aria-hidden="true">
                <rect x="2" y="7" width="20" height="14" rx="2" />
                <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
              </svg>
              <div>
                <p className="font-sans font-semibold text-gold text-xs uppercase tracking-widest mb-1">Organisation</p>
                <p className="font-sans text-white text-sm leading-relaxed font-semibold">Horizon Community Initiative for Aid and Development (HoCAID)</p>
              </div>
            </div>

            <div className="h-px bg-white/10" aria-hidden="true" />

            {/* Location */}
            <div className="flex items-start gap-4 px-6 md:px-10 py-6 border-l-4 border-sunrise">
              <MapPin className="w-5 h-5 text-sunrise flex-shrink-0 mt-0.5" aria-hidden="true" />
              <div>
                <p className="font-sans font-semibold text-gold text-xs uppercase tracking-widest mb-1">Office Address</p>
                <p className="font-sans text-white text-sm leading-relaxed">
                  No. 21, Henry Umahi Street, Trademore Estate,<br />
                  Lugbe, FCT, Nigeria
                </p>
              </div>
            </div>

            <div className="h-px bg-white/10" aria-hidden="true" />

            {/* Email */}
            <div className="flex items-start gap-4 px-6 md:px-10 py-6 border-l-4 border-sunrise">
              <Mail className="w-5 h-5 text-sunrise flex-shrink-0 mt-0.5" aria-hidden="true" />
              <div>
                <p className="font-sans font-semibold text-gold text-xs uppercase tracking-widest mb-1">Email</p>
                <a
                  href="mailto:info@hocaid.org"
                  className="font-sans text-white text-sm hover:text-gold transition-colors focus-visible:outline-none focus-visible:underline"
                >
                  info@hocaid.org
                </a>
              </div>
            </div>

            <div className="h-px bg-white/10" aria-hidden="true" />

            {/* CAC Registration */}
            <div className="flex items-start gap-4 px-6 md:px-10 py-6 border-l-4 border-sunrise">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-sunrise flex-shrink-0 mt-0.5" aria-hidden="true">
                <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0 1 12 2.944a11.955 11.955 0 0 1-8.618 3.04A12.02 12.02 0 0 0 3 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              <div>
                <p className="font-sans font-semibold text-gold text-xs uppercase tracking-widest mb-1">CAC / Charity Registration</p>
                <p className="font-sans text-white text-sm">RC 9492937</p>
                <p className="font-sans text-white/60 text-xs mt-1">Tax ID: 2623728389617</p>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
