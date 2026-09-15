import type { Metadata } from "next";
import { MapPin, Mail, Phone, ShieldCheck } from "lucide-react";
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

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4" aria-hidden="true">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

function LinkedinIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4" aria-hidden="true">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4" aria-hidden="true">
      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
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
      <section className="bg-white py-16 md:py-24 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">

          {/* ── Left (60%) — Form ── */}
          <div className="lg:col-span-3">
            <ContactForm />
          </div>

          {/* ── Right (40%) — Info cards ── */}
          <div className="lg:col-span-2 space-y-4 lg:sticky lg:top-24 lg:self-start">

            {/* Registered office */}
            <div className="rounded-xl border border-navy/10 p-5">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-cream flex items-center justify-center flex-shrink-0 mt-0.5">
                  <MapPin className="w-5 h-5 text-sunrise" aria-hidden="true" />
                </div>
                <div>
                  <p className="font-sans font-bold text-navy text-sm mb-1">
                    Registered Office
                  </p>
                  <p className="font-sans text-navy/60 text-sm leading-relaxed">
                    No. 21, Henry Umahi Street,<br />
                    Trademore Estate, Lugbe,<br />
                    FCT, Nigeria
                  </p>
                </div>
              </div>
            </div>

            {/* Phone */}
            <div className="rounded-xl border border-navy/10 p-5">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-cream flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-sunrise" aria-hidden="true" />
                </div>
                <div>
                  <p className="font-sans font-bold text-navy text-sm mb-1">
                    Phone Number
                  </p>
                  <a
                    href="tel:+2348064749454"
                    className="font-sans text-sunrise text-sm hover:underline focus-visible:outline-none focus-visible:underline"
                  >
                    +234 806 474 9454
                  </a>
                </div>
              </div>
            </div>

            {/* Email */}
            <div className="rounded-xl border border-navy/10 p-5">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-cream flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-sunrise" aria-hidden="true" />
                </div>
                <div>
                  <p className="font-sans font-bold text-navy text-sm mb-1">
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
            </div>

            {/* Registration */}
            <div className="rounded-xl border border-navy/10 p-5">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-cream flex items-center justify-center flex-shrink-0">
                  <ShieldCheck className="w-5 h-5 text-sunrise" aria-hidden="true" />
                </div>
                <div>
                  <p className="font-sans font-bold text-navy text-sm mb-1">
                    Registration
                  </p>
                  <p className="font-sans text-navy/60 text-xs leading-relaxed">
                    CAC Reg. No.: RC&nbsp;9492937<br />
                    Tax ID: 2623728389617
                  </p>
                </div>
              </div>
            </div>

            {/* Follow HoCAID — pill-button social links */}
            <div className="rounded-xl border border-navy/10 bg-cream p-5">
              <p className="font-sans font-bold text-navy text-sm mb-3">
                Follow HoCAID
              </p>
              <div className="flex flex-wrap gap-2">
                <a
                  href="https://www.instagram.com/hocaidng"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="HoCAID on Instagram"
                  className="inline-flex items-center gap-2 px-3 py-2 rounded-lg border border-navy/15 bg-white font-sans text-navy text-xs font-semibold hover:border-sunrise/50 hover:text-sunrise transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sunrise"
                >
                  <InstagramIcon />
                  Instagram
                </a>
                <a
                  href="https://www.linkedin.com/company/116017593/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="HoCAID on LinkedIn"
                  className="inline-flex items-center gap-2 px-3 py-2 rounded-lg border border-navy/15 bg-white font-sans text-navy text-xs font-semibold hover:border-sunrise/50 hover:text-sunrise transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sunrise"
                >
                  <LinkedinIcon />
                  LinkedIn
                </a>
                <a
                  href="https://wa.me/2348064749454"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="HoCAID on WhatsApp"
                  className="inline-flex items-center gap-2 px-3 py-2 rounded-lg border border-navy/15 bg-white font-sans text-navy text-xs font-semibold hover:border-sunrise/50 hover:text-sunrise transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sunrise"
                >
                  <WhatsAppIcon />
                  WhatsApp
                </a>
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
