import type { Metadata } from "next";
import PageHero from "@/components/layout/PageHero";
import SectionHeading from "@/components/shared/SectionHeading";
import PillarCard from "@/components/shared/PillarCard";
import FadeUp from "@/components/motion/FadeUp";
import { PILLARS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Our Work | HoCAID",
  description:
    "HoCAID works across five strategic pillars to drive sustainable development and lasting change in communities across Africa.",
  openGraph: {
    title: "Our Work | HoCAID",
    description:
      "HoCAID works across five strategic pillars to drive sustainable development and lasting change in communities across Africa.",
    url: "/our-work",
  },
};

export default function OurWorkPage() {
  return (
    <>
      <PageHero
        title="Our Work"
        breadcrumbs={[{ label: "Our Work" }]}
        description="One initiative. Five pillars. A singular commitment to communities that are too often left behind."
        size="md"
        ctas={[
          { label: "Get Involved", href: "/get-involved", variant: "primary" },
          { label: "View Impact", href: "/impact", variant: "outline-white" },
        ]}
      />

      {/* ── Intro ── */}
      <section className="bg-white px-4 py-16 md:px-8 md:py-20">
        <div className="mx-auto max-w-3xl text-center">
          <SectionHeading
            eyebrow="Five Pillars"
            title="Integrated. Sustainable. Community-Led."
            description="Our five programme pillars are not siloes — they are interconnected levers. A farmer with digital access can sell to wider markets. A girl who stays in school becomes a leader who shapes policy. We design for these connections deliberately."
            centered
          />
        </div>
      </section>

      {/* ── Pillars grid ── */}
      <section className="bg-cream px-4 pb-20 md:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {PILLARS.map((pillar) => (
              <PillarCard key={pillar.id} pillar={pillar} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Approach strip ── */}
      <section className="bg-navy px-4 py-16 md:px-8 md:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
            {[
              {
                label: "Co-Design",
                text: "Every programme is shaped by the communities it serves — never imposed from the outside.",
              },
              {
                label: "Evidence-Based",
                text: "We set baseline metrics, monitor rigorously, and publish results openly — good or otherwise.",
              },
              {
                label: "Sustainable Exit",
                text: "We build local capacity so communities continue to thrive long after our direct involvement ends.",
              },
            ].map((item, i) => (
              <FadeUp key={item.label} delay={i * 0.12} className="flex flex-col gap-3">
                <div className="h-0.5 w-10 rounded-full bg-gold" aria-hidden="true" />
                <h3 className="font-display text-xl font-bold text-white md:text-2xl">
                  {item.label}
                </h3>
                <p className="text-sm leading-relaxed text-white/70 md:text-base">
                  {item.text}
                </p>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
