import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Get Involved",
  description: "Contact HoCAID to ask about future opportunities to get involved.",
};

export default function CareersPage() {
  return (
    <section className="bg-cream py-24 px-6">
      <div className="max-w-2xl mx-auto text-center">
        <p className="font-sans font-semibold text-sunrise uppercase tracking-widest text-sm mb-4">Get involved</p>
        <h1 className="font-display font-bold text-navy text-4xl sm:text-5xl mb-6">Stay in touch with HoCAID</h1>
        <p className="font-sans text-navy/70 text-lg leading-relaxed mb-9">
          HoCAID is not currently publishing vacancies or accepting online volunteer applications. Please contact us directly to ask about future opportunities.
        </p>
        <Link href="/contact" className="inline-block px-8 py-4 rounded-lg bg-gradient-to-r from-sunrise to-gold text-navy font-sans font-semibold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sunrise focus-visible:ring-offset-2">
          Contact HoCAID
        </Link>
      </div>
    </section>
  );
}
