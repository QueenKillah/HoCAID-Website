import type { Metadata } from "next";
import Link from "next/link";
import PillarSections from "./PillarSections";
import FinalCTA from "@/components/sections/FinalCTA";

export const metadata: Metadata = {
  title: "Our Programmes",
  description:
    "Six integrated pillars driving health systems, food security, climate resilience, digital innovation, governance, and community engagement in Nigeria.",
  openGraph: {
    title: "Our Programmes — HoCAID",
    description:
      "Six integrated pillars driving health systems, food security, climate resilience, digital innovation, governance, and community engagement in Nigeria.",
  },
  twitter: { card: "summary_large_image" },
};

export default function ProgrammesPage() {
  return (
    <>
      {/* ── Page header band ── */}
      <header className="relative bg-navy pt-16 pb-20 md:pt-20 md:pb-24 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <p className="font-sans font-semibold text-sunrise uppercase tracking-widest text-sm mb-5">
            What We Do
          </p>
          <h1
            className="font-display font-bold text-white leading-tight
                       text-4xl sm:text-5xl md:text-6xl mb-6"
          >
            Our Programmes
          </h1>
          <p className="font-sans text-white/70 text-lg sm:text-xl leading-relaxed">
            Six integrated pillars. One mission. Infinite impact.
          </p>
        </div>

        {/* Accent strip */}
        <div className="absolute left-0 right-0 bottom-0 h-[3px] bg-gradient-to-r from-sunrise to-gold" />
      </header>

      {/* ── Shared approach statement ── */}
      <section className="bg-white border-b border-navy/10 py-10 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="border-l-4 border-sunrise bg-navy/5 px-5 py-4">
            <h2 className="font-sans font-semibold text-navy text-sm mb-1">Our approach</h2>
            <p className="font-sans text-navy/70 text-sm leading-relaxed">
              We are building our programme portfolio through community-centred learning,
              responsible collaboration, and evidence-informed planning.
            </p>
          </div>
        </div>
      </section>

      <PillarSections />

      {/* ── Partnership CTA ── */}
      <section className="bg-cream py-16 px-6 text-center border-t border-navy/10">
        <div className="max-w-xl mx-auto">
          <p className="font-sans text-navy/80 text-lg leading-relaxed mb-6">
            Interested in partnering with us on any of these priorities?
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-3 rounded-lg font-sans font-semibold text-navy text-sm bg-gradient-to-r from-sunrise to-gold hover:opacity-90 transition-opacity focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sunrise focus-visible:ring-offset-2"
          >
            Get in touch
          </Link>
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
