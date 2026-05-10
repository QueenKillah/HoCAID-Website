import type { Metadata } from "next";
import PillarSections from "./PillarSections";
import FinalCTA from "@/components/sections/FinalCTA";

export const metadata: Metadata = {
  title: "Our Programmes",
  description:
    "Six integrated pillars driving health systems, food security, climate resilience, digital innovation, governance, and community engagement across Africa.",
  openGraph: {
    title: "Our Programmes — HoCAID",
    description:
      "Six integrated pillars driving health systems, food security, climate resilience, digital innovation, governance, and community engagement across Africa.",
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

      <PillarSections />

      <FinalCTA />
    </>
  );
}
