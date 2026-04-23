import type { Metadata } from "next";
import {
  Users,
  BarChart2,
  BookOpen,
  MessageSquare,
  FileText,
  Presentation,
  Search,
  PenLine,
  Cog,
  ClipboardCheck,
  TrendingUp,
} from "lucide-react";
import PageHero from "@/components/layout/PageHero";
import SectionHeading from "@/components/shared/SectionHeading";
import Button from "@/components/shared/Button";
import FadeUp from "@/components/motion/FadeUp";

export const metadata: Metadata = {
  title: "Humanitarian Consulting | HoCAID",
  description:
    "HoCAID offers expert humanitarian development consulting — from monitoring & evaluation to policy advisory and community engagement strategy.",
  openGraph: {
    title: "Humanitarian Consulting | HoCAID",
    description:
      "HoCAID offers expert humanitarian development consulting — from monitoring & evaluation to policy advisory and community engagement strategy.",
    url: "/consulting",
  },
};

const services = [
  {
    Icon: Users,
    title: "Capacity Building & Training",
    description:
      "Strengthening the technical and organisational capacity of local NGOs, CBOs, and government agencies to deliver effective, sustainable programmes.",
  },
  {
    Icon: BarChart2,
    title: "Monitoring, Evaluation & Learning",
    description:
      "Designing robust MEL frameworks, developing indicators, conducting baseline and endline studies, and producing evaluation reports that drive evidence-based decision making.",
  },
  {
    Icon: BookOpen,
    title: "Policy Advisory & Advocacy",
    description:
      "Providing technical input on development policy, legislative reform, and community-centred governance frameworks at national and sub-national levels.",
  },
  {
    Icon: MessageSquare,
    title: "Community Engagement Strategy",
    description:
      "Designing participatory approaches — community dialogues, co-design workshops, and stakeholder mapping — that ensure communities are active agents in their own development.",
  },
  {
    Icon: FileText,
    title: "Grant Writing & Proposal Development",
    description:
      "Supporting organisations to conceptualise, design, and write competitive proposals for bilateral, multilateral, and philanthropic funding opportunities.",
  },
  {
    Icon: Presentation,
    title: "Training & Facilitation",
    description:
      "Delivering bespoke workshops on development best practices, safeguarding, gender-responsive programming, and adaptive management.",
  },
];

const methodology = [
  {
    step: "01",
    Icon: Search,
    title: "Assess",
    description:
      "Deep-dive needs assessment and stakeholder mapping to understand context, power dynamics, and existing community assets.",
  },
  {
    step: "02",
    Icon: PenLine,
    title: "Design",
    description:
      "Co-create a tailored programme framework with a clear theory of change, measurable indicators, and risk considerations.",
  },
  {
    step: "03",
    Icon: Cog,
    title: "Implement",
    description:
      "Support deployment with embedded monitoring, adaptive management protocols, and regular learning reviews.",
  },
  {
    step: "04",
    Icon: ClipboardCheck,
    title: "Evaluate",
    description:
      "Independent, rigorous evaluation against agreed metrics — covering process, outcome, and impact dimensions with transparent reporting.",
  },
  {
    step: "05",
    Icon: TrendingUp,
    title: "Learn & Scale",
    description:
      "Embed learnings institutionally and support scale-up planning so impact multiplies beyond the initial engagement.",
  },
];

const sectors = [
  "National & Sub-national Governments",
  "International NGOs & CSOs",
  "UN Agencies & Multilateral Bodies",
  "Bilateral Development Agencies",
  "Private Sector & Foundations",
  "Academic & Research Institutions",
];

export default function ConsultingPage() {
  return (
    <>
      <PageHero
        title="Humanitarian Development Consulting"
        breadcrumbs={[{ label: "Consulting" }]}
        description="Expert advisory services that strengthen organisations, sharpen programmes, and multiply impact across the development sector."
        size="md"
        ctas={[
          { label: "Start a Conversation", href: "/contact", variant: "primary" },
        ]}
      />

      {/* ── Services ── */}
      <section className="bg-white px-4 py-16 md:px-8 md:py-24">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="What We Offer"
            title="Services Built for the Development Sector"
            description="Every engagement is tailored — we bring practitioner experience, not off-the-shelf consultancy frameworks."
            centered
          />
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map(({ Icon, title, description }, i) => (
              <FadeUp
                key={title}
                delay={i * 0.07}
                className="flex flex-col gap-4 rounded-2xl bg-cream p-7 ring-1 ring-black/5"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-orange/10">
                  <Icon size={22} className="text-orange" aria-hidden="true" />
                </div>
                <h3 className="font-display text-lg font-bold text-navy">{title}</h3>
                <p className="text-sm leading-relaxed text-grey">{description}</p>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ── Methodology ── */}
      <section className="bg-navy px-4 py-16 md:px-8 md:py-24">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Our Approach"
            title="How We Work"
            description="A five-stage methodology honed over years of field experience — rigorous, participatory, and adaptive."
            centered
            light
          />
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {methodology.map(({ step, Icon, title, description }, i) => (
              <FadeUp
                key={step}
                delay={i * 0.1}
                className="flex flex-col gap-3 rounded-2xl bg-white/5 p-6 ring-1 ring-white/10"
              >
                <span className="font-display text-4xl font-black text-white/10">
                  {step}
                </span>
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-orange/20">
                  <Icon size={20} className="text-orange" aria-hidden="true" />
                </div>
                <h3 className="font-display text-lg font-bold text-white">{title}</h3>
                <p className="text-sm leading-relaxed text-white/65">{description}</p>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ── Sectors ── */}
      <section className="bg-cream px-4 py-16 md:px-8 md:py-20">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Client Sectors"
            title="Who We Work With"
            description="We partner with organisations across the full development ecosystem — from grassroots CBOs to multilateral agencies."
            centered
          />
          <div className="flex flex-wrap justify-center gap-3">
            {sectors.map((sector) => (
              <span
                key={sector}
                className="rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-navy shadow-sm ring-1 ring-black/5"
              >
                {sector}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-white px-4 py-16 md:px-8 md:py-20">
        <div className="mx-auto flex max-w-2xl flex-col items-center gap-6 text-center">
          <SectionHeading
            eyebrow="Get in Touch"
            title="Ready to Start a Conversation?"
            description="Tell us about your challenge. We will respond within 2 business days with our initial thoughts and a proposed next step."
            centered
          />
          <Button href="/contact" variant="primary" size="lg">
            Start a Conversation
          </Button>
        </div>
      </section>
    </>
  );
}
