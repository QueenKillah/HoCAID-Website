import type { Metadata } from "next";
import { Download, Quote } from "lucide-react";
import PageHero from "@/components/layout/PageHero";
import SectionHeading from "@/components/shared/SectionHeading";
import Button from "@/components/shared/Button";
import FadeUp from "@/components/motion/FadeUp";
import CountUp from "@/components/motion/CountUp";
import { IMPACT_STATS, PILLARS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Impact & Reports | HoCAID",
  description:
    "Explore HoCAID's measurable impact across five pillars — key statistics, field stories, annual reports, and SDG alignment.",
  openGraph: {
    title: "Impact & Reports | HoCAID",
    description:
      "Explore HoCAID's measurable impact across five pillars — key statistics, field stories, annual reports, and SDG alignment.",
    url: "/impact",
  },
};

const testimonials = [
  {
    quote:
      "Before HoCAID came to our community, I had to walk four hours to reach a clinic. Now the mobile clinic visits us every month. My children have received vaccines they never had before.",
    name: "Aisha Musa",
    role: "Farmer & Mother",
    location: "Kaduna State, Nigeria",
  },
  {
    quote:
      "I used to lose half my harvest because I had nowhere to store it. The cooperative taught me post-harvest techniques and connected me to buyers in the city. My income has doubled.",
    name: "Kofi Asante",
    role: "Smallholder Farmer",
    location: "Ashanti Region, Ghana",
  },
  {
    quote:
      "The scholarship kept me in school when my family could not afford the fees. I am now in my final year and I want to become a doctor so I can give back to my community.",
    name: "Fatima Suleiman",
    role: "Secondary School Student",
    location: "Kano State, Nigeria",
  },
];

const reports = [
  {
    year: "2023",
    title: "Annual Impact Report 2023",
    description: "Documenting two years of multi-country expansion and 10,000 lives reached across all five pillars.",
    pages: "48 pages",
  },
  {
    year: "2022",
    title: "Annual Impact Report 2022",
    description: "Our first multi-country report, covering the launch of the Digital Access pillar and Agriculture expansion.",
    pages: "42 pages",
  },
  {
    year: "2021",
    title: "Mid-Year Programme Review 2021",
    description: "An interim review of Health & Wellbeing outcomes and lessons learned from our first two years.",
    pages: "24 pages",
  },
];

const sdgs = [
  { number: "01", label: "No Poverty" },
  { number: "02", label: "Zero Hunger" },
  { number: "03", label: "Good Health & Well-Being" },
  { number: "04", label: "Quality Education" },
  { number: "05", label: "Gender Equality" },
  { number: "13", label: "Climate Action" },
  { number: "15", label: "Life on Land" },
  { number: "17", label: "Partnerships for the Goals" },
];

export default function ImpactPage() {
  return (
    <>
      <PageHero
        title="Impact & Reports"
        breadcrumbs={[{ label: "Impact" }]}
        description="Every number tells a story. Every story represents a life changed."
        size="md"
      />

      {/* ── Key stats ── */}
      <section className="bg-navy px-4 py-16 md:px-8 md:py-24">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="By the Numbers"
            title="Measuring What Matters"
            description="Cumulative results across all programmes and countries since 2018."
            centered
            light
          />
          <div className="grid grid-cols-2 gap-4 md:gap-6 lg:grid-cols-4 lg:gap-8">
            {IMPACT_STATS.map((stat, i) => (
              <FadeUp
                key={stat.label}
                delay={i * 0.1}
                className="rounded-2xl bg-white/5 p-6 text-center ring-1 ring-white/10 md:p-8"
              >
                <p className="font-display text-4xl font-black text-gold md:text-5xl lg:text-6xl">
                  <CountUp value={stat.value} suffix={stat.suffix} delay={i * 0.1} />
                </p>
                <p className="mt-2 text-sm font-medium text-white/70 md:text-base">
                  {stat.label}
                </p>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ── Per-pillar breakdown ── */}
      <section className="bg-white px-4 py-16 md:px-8 md:py-24">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Pillar Impact"
            title="Results Across Five Pillars"
            description="Each pillar delivers targeted, measurable outcomes that together build community-wide resilience."
          />
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {PILLARS.map((pillar, i) => (
              <FadeUp
                key={pillar.id}
                delay={i * 0.07}
                className="rounded-2xl bg-cream p-6 ring-1 ring-black/5"
              >
                <h3 className="font-display text-lg font-bold text-navy">
                  {pillar.title}
                </h3>
                <div className="mt-4 grid grid-cols-2 gap-3">
                  {pillar.stats.map((s) => (
                    <div key={s.label} className="rounded-xl bg-white p-3 text-center shadow-sm">
                      <p className="font-display text-xl font-black text-orange">{s.value}</p>
                      <p className="mt-0.5 text-xs text-grey">{s.label}</p>
                    </div>
                  ))}
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ── Field stories ── */}
      <section className="bg-cream px-4 py-16 md:px-8 md:py-24">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Stories from the Field"
            title="The Faces Behind the Numbers"
            description="Development is not a statistic — it is a mother whose child is no longer hungry, a farmer who can plan for the future, a girl who stays in school."
            centered
          />
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {testimonials.map((t, i) => (
              <FadeUp
                key={t.name}
                delay={i * 0.1}
                className="flex flex-col gap-5 rounded-2xl bg-white p-7 shadow-sm ring-1 ring-black/5"
              >
                <Quote size={28} className="shrink-0 text-orange/30" aria-hidden="true" />
                <p className="flex-1 text-base leading-relaxed text-grey italic">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <footer>
                  <p className="font-display font-bold text-navy">{t.name}</p>
                  <p className="text-xs text-grey">{t.role} · {t.location}</p>
                </footer>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ── Annual reports ── */}
      <section className="bg-white px-4 py-16 md:px-8 md:py-24">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Publications"
            title="Annual Reports"
            description="We publish our results openly — because accountability to the communities we serve is non-negotiable."
          />
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {reports.map((r) => (
              <div
                key={r.year}
                className="flex flex-col gap-4 rounded-2xl border border-grey/15 bg-cream p-7"
              >
                <span className="font-display text-5xl font-black text-navy/10">
                  {r.year}
                </span>
                <div className="flex-1">
                  <h3 className="font-display text-lg font-bold text-navy">{r.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-grey">{r.description}</p>
                  <p className="mt-1 text-xs text-grey/60">{r.pages} · PDF</p>
                </div>
                <button
                  className="flex items-center gap-2 text-sm font-semibold text-orange hover:underline"
                  aria-label={`Download ${r.title}`}
                >
                  <Download size={15} aria-hidden="true" />
                  Download Report
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SDG alignment ── */}
      <section className="bg-navy px-4 py-16 md:px-8 md:py-20">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Global Alignment"
            title="Contributing to the SDGs"
            description="Our work directly advances eight of the UN Sustainable Development Goals."
            centered
            light
          />
          <div className="flex flex-wrap justify-center gap-4">
            {sdgs.map((sdg) => (
              <div
                key={sdg.number}
                className="flex flex-col items-center gap-1 rounded-2xl bg-white/5 px-5 py-4 ring-1 ring-white/10"
              >
                <span className="font-display text-2xl font-black text-gold">
                  SDG {sdg.number}
                </span>
                <span className="text-xs font-medium text-white/70">{sdg.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-cream px-4 py-14 md:px-8 md:py-16">
        <div className="mx-auto flex max-w-2xl flex-col items-center gap-5 text-center">
          <p className="font-display text-2xl font-bold text-navy md:text-3xl">
            Want a deeper look at our data?
          </p>
          <p className="text-base text-grey">
            Reach out to our programmes team for project-level reports, MEL frameworks, and data briefs.
          </p>
          <Button href="/contact" variant="primary" size="lg">
            Request a Data Brief
          </Button>
        </div>
      </section>
    </>
  );
}
