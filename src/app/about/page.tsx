import type { Metadata } from "next";
import Image from "next/image";
import {
  Heart,
  Shield,
  Users,
  BarChart2,
  Leaf,
  Handshake,
} from "lucide-react";
import PageHero from "@/components/layout/PageHero";
import SectionHeading from "@/components/shared/SectionHeading";
import PartnersStrip from "@/components/home/PartnersStrip";
import FadeUp from "@/components/motion/FadeUp";
import { CORE_VALUES, TIMELINE, TEAM, SITE_MISSION, SITE_VISION } from "@/lib/constants";

export const metadata: Metadata = {
  title: "About HoCAID",
  description:
    "Learn about Horizon Community Initiative for Aid and Development — our story, mission, vision, core values, and the team behind our work.",
  openGraph: {
    title: "About HoCAID",
    description:
      "Learn about Horizon Community Initiative for Aid and Development — our story, mission, vision, core values, and the team behind our work.",
    url: "/about",
  },
};

const iconMap = {
  Heart,
  Shield,
  Users,
  BarChart2,
  Leaf,
  Handshake,
} as const;

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="About HoCAID"
        breadcrumbs={[{ label: "About" }]}
        description="Who we are, where we came from, and where we are going."
        size="md"
      />

      {/* ── Who We Are ── */}
      <section className="bg-white px-4 py-16 md:px-8 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-20">
            <div>
              <SectionHeading
                eyebrow="Who We Are"
                title="A Community-Led Development Organisation"
              />
              <div className="space-y-4 text-base leading-relaxed text-grey md:text-lg">
                <p>
                  Horizon Community Initiative for Aid and Development (HoCAID)
                  is a pan-African development organisation working at the
                  intersection of health, agriculture, digital access,
                  environmental sustainability, and gender equity.
                </p>
                <p>
                  Founded in 2018 by a group of development professionals, we
                  believe lasting change is built from the ground up — by
                  communities, with communities. Every programme we run is
                  co-designed with the people it serves, measured rigorously,
                  and structured to leave lasting capacity rather than
                  dependency.
                </p>
                <p>
                  Today we operate across five countries with 30+ active
                  projects and a growing team of 40 staff and 150 volunteers
                  committed to a single purpose: rising together towards a
                  better tomorrow.
                </p>
              </div>
            </div>

            {/* Mission / Vision cards */}
            <div className="flex flex-col gap-6">
              <div className="rounded-2xl bg-navy p-7 text-white">
                <p className="mb-2 text-xs font-bold uppercase tracking-widest text-gold">
                  Our Mission
                </p>
                <p className="font-display text-xl font-bold leading-snug md:text-2xl">
                  {SITE_MISSION}
                </p>
              </div>
              <div className="rounded-2xl bg-orange/5 p-7 ring-1 ring-orange/20">
                <p className="mb-2 text-xs font-bold uppercase tracking-widest text-orange">
                  Our Vision
                </p>
                <p className="font-display text-xl font-bold leading-snug text-navy md:text-2xl">
                  {SITE_VISION}
                </p>
              </div>
            </div>
          </div>

          {/* Community photo */}
          <div className="relative mt-14 h-64 w-full overflow-hidden rounded-2xl lg:h-80">
            <Image
              src="/images/sadek-husein-H7zmvS9X3yY-unsplash.jpg"
              alt="HoCAID community — aerial view of a hillside settlement"
              fill
              sizes="(max-width: 1280px) 100vw, 1280px"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* ── Core Values ── */}
      <section className="bg-cream px-4 py-16 md:px-8 md:py-24">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Our Values"
            title="What We Stand For"
            description="Six principles that shape every decision we make and every programme we run."
            centered
          />
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {CORE_VALUES.map((value, i) => {
              const Icon = iconMap[value.icon as keyof typeof iconMap] ?? Heart;
              return (
                <FadeUp
                  key={value.title}
                  delay={i * 0.08}
                  className="flex flex-col gap-4 rounded-2xl bg-white p-7 shadow-sm ring-1 ring-black/5"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-orange/10">
                    <Icon size={22} className="text-orange" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-bold text-navy">
                      {value.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-grey">
                      {value.description}
                    </p>
                  </div>
                </FadeUp>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Timeline ── */}
      <section className="bg-white px-4 py-16 md:px-8 md:py-24">
        <div className="mx-auto max-w-3xl">
          <SectionHeading
            eyebrow="Our History"
            title="From Idea to Impact"
            description="Six years of growth, partnerships, and lives changed."
            centered
          />
          <ol className="relative border-l-2 border-orange/20">
            {TIMELINE.map((event, i) => (
              <li
                key={event.year}
                className={`ml-6 ${i < TIMELINE.length - 1 ? "mb-10" : ""}`}
              >
                {/* Dot */}
                <span
                  aria-hidden="true"
                  className="absolute -left-[9px] flex h-4 w-4 items-center justify-center rounded-full bg-orange ring-4 ring-white"
                />
                <time className="mb-1 block text-xs font-bold uppercase tracking-widest text-orange">
                  {event.year}
                </time>
                <h3 className="font-display text-lg font-bold text-navy md:text-xl">
                  {event.title}
                </h3>
                <p className="mt-1 text-sm leading-relaxed text-grey md:text-base">
                  {event.description}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ── Team ── */}
      <section className="bg-cream px-4 py-16 md:px-8 md:py-24">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Our People"
            title="The Team Behind the Work"
            description="Experienced development professionals committed to community-led change."
            centered
          />
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {TEAM.map((member, i) => (
              <FadeUp
                key={member.name}
                delay={i * 0.08}
                className="flex flex-col items-center rounded-2xl bg-white p-6 text-center shadow-sm ring-1 ring-black/5"
              >
                {/* Team member photo */}
                <div className="mb-4 h-20 w-20 overflow-hidden rounded-full ring-2 ring-orange/20">
                  <Image
                    src={`/images/profile-${i}.jpg`}
                    alt={member.name}
                    width={80}
                    height={80}
                    className="h-full w-full object-cover"
                  />
                </div>
                <h3 className="font-display text-lg font-bold text-navy">
                  {member.name}
                </h3>
                <p className="mt-0.5 text-xs font-semibold uppercase tracking-wider text-orange">
                  {member.title}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-grey">
                  {member.bio}
                </p>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ── Partners ── */}
      <PartnersStrip />
    </>
  );
}
