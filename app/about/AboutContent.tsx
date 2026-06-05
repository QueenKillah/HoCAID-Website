"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ShieldCheck, Users, Lightbulb, Leaf, Scale, Globe } from "lucide-react";
import { copy } from "@/lib/copy";

const coreValues = [
  {
    icon: ShieldCheck,
    name: "Integrity",
    description:
      "We operate with honesty, transparency, and accountability in every action — toward our communities, partners, and donors.",
  },
  {
    icon: Users,
    name: "Community First",
    description:
      "Every decision begins and ends with the voices and leadership of the communities we serve. We follow; we do not impose.",
  },
  {
    icon: Lightbulb,
    name: "Innovation",
    description:
      "We embrace creative, evidence-based approaches to tackle complex development challenges — leveraging data, technology, and local wisdom equally.",
  },
  {
    icon: Leaf,
    name: "Sustainability",
    description:
      "We build capacities, systems, and institutions designed to endure long after our direct involvement ends.",
  },
  {
    icon: Scale,
    name: "Equity",
    description:
      "We address root causes of inequality, not just symptoms — centring those who are furthest from opportunity in everything we do.",
  },
  {
    icon: Globe,
    name: "Collaboration",
    description:
      "We partner deeply across sectors, borders, and disciplines, because no organisation solves complex challenges alone.",
  },
];

function FadeUp({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      initial={{ opacity: 0, y: reduce ? 0 : 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: reduce ? 0 : 0.65, delay: reduce ? 0 : delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

const principles = [
  {
    title: "Community-Led",
    body: "Every programme begins with listening. We follow the direction of the communities we serve, not the other way around.",
    icon: "🤝",
  },
  {
    title: "Evidence-Based",
    body: "Our interventions are grounded in local data, participatory research, and rigorous monitoring and evaluation.",
    icon: "📊",
  },
  {
    title: "Lasting Systems",
    body: "We build structures, skills, and institutions that endure long after our direct support ends.",
    icon: "🏗️",
  },
  {
    title: "Radical Transparency",
    body: "We are accountable to our donors, partners, and — above all — to the communities we work alongside.",
    icon: "🔍",
  },
];

export default function AboutContent() {
  return (
    <>
      {/* ── 1. Navy page header ─────────────────────────────────────────────── */}
      <section className="bg-navy pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          <FadeUp>
            <nav aria-label="Breadcrumb" className="mb-6">
              <ol className="flex items-center gap-2 font-sans text-sm text-white/50">
                <li>
                  <Link href="/" className="hover:text-gold transition-colors">
                    Home
                  </Link>
                </li>
                <li aria-hidden="true">/</li>
                <li className="text-gold font-medium">About</li>
              </ol>
            </nav>

            <h1
              className="font-display font-bold text-white leading-tight
                         text-4xl sm:text-5xl md:text-6xl mb-6"
            >
              Who We Are
            </h1>
            <div
              className="h-1 w-20 rounded-full bg-gradient-to-r from-sunrise to-gold"
              aria-hidden="true"
            />
          </FadeUp>
        </div>
      </section>

      {/* ── 2. Vision pull-quote ────────────────────────────────────────────── */}
      <section className="bg-cream py-24 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <FadeUp>
            <p className="font-sans font-semibold text-sunrise uppercase tracking-widest text-sm mb-6">
              Our Vision
            </p>
            <blockquote
              className="font-display font-bold text-navy leading-tight
                         text-3xl sm:text-4xl md:text-5xl"
            >
              &ldquo;{copy.vision}&rdquo;
            </blockquote>
          </FadeUp>
        </div>
      </section>

      {/* ── 3. Mission — alternating on navy ────────────────────────────────── */}
      <section className="bg-navy py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <FadeUp delay={0.1}>
              <p className="font-sans font-semibold text-gold uppercase tracking-widest text-sm mb-5">
                Our Mission
              </p>
              <p className="font-display font-bold text-white leading-snug text-2xl sm:text-3xl mb-6">
                {copy.mission}
              </p>
              <p className="font-sans text-white/65 text-base leading-relaxed">
                We pursue this mission through six integrated pillars — Health, Agriculture &amp;
                Food Security, Environment &amp; Climate, Livelihoods &amp; Economic Empowerment,
                Education &amp; Youth Development, and Humanitarian Aid — each reinforcing the
                others to create lasting, systemic change.
              </p>
            </FadeUp>

            <FadeUp delay={0.2}>
              <div className="relative rounded-2xl overflow-hidden aspect-[4/3]">
                <Image
                  src="/hanna-morris-6BhCI5uWiFQ-unsplash.jpg"
                  alt="Community members working together on a development initiative"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/60 to-transparent" />
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* ── 4. Core Values ──────────────────────────────────────────────────── */}
      <section className="bg-cream py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <FadeUp>
            <p className="font-sans font-semibold text-sunrise uppercase tracking-widest text-sm mb-4 text-center">
              What We Stand For
            </p>
            <h2
              className="font-display font-bold text-navy leading-tight text-center mb-16
                         text-3xl sm:text-4xl"
            >
              Our Core Values
            </h2>
          </FadeUp>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {coreValues.map((v, i) => (
              <FadeUp key={v.name} delay={i * 0.08}>
                <div className="bg-white rounded-2xl p-8 h-full border border-navy/8 hover:border-sunrise/30 transition-colors">
                  <v.icon
                    size={28}
                    className="text-sunrise mb-5"
                    aria-hidden="true"
                  />
                  <h3 className="font-display font-bold text-navy text-xl mb-3">
                    {v.name}
                  </h3>
                  <p className="font-sans text-navy/65 text-sm leading-relaxed">
                    {v.description}
                  </p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. Our Story ────────────────────────────────────────────────────── */}
      <section className="bg-cream py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <FadeUp>
            <p className="font-sans font-semibold text-sunrise uppercase tracking-widest text-sm mb-4 text-center">
              Our Story
            </p>
            <h2
              className="font-display font-bold text-navy leading-tight text-center mb-16
                         text-3xl sm:text-4xl"
            >
              From a Conviction to a Movement
            </h2>
          </FadeUp>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="space-y-6">
              <FadeUp delay={0.1}>
                <p className="font-sans text-navy/75 text-base leading-relaxed">
                  HoCAID was founded in {copy.org.established} with a conviction that communities
                  already hold the answers to their own challenges — they simply need the right
                  resources, networks, and belief to act. We were established not to impose
                  solutions but to stand alongside people and amplify what they are already
                  building.
                </p>
              </FadeUp>

              <FadeUp delay={0.15}>
                <p className="font-sans text-navy/75 text-base leading-relaxed">
                  From the outset, we built our six-pillar framework around the interconnected
                  realities of life in underserved communities. Food insecurity cannot be solved
                  without addressing health. Climate resilience is inseparable from livelihood.
                  Education and economic empowerment feed each other. Our integrated approach
                  reflects that truth.
                </p>
              </FadeUp>

              <FadeUp delay={0.2}>
                <p className="font-sans text-navy/75 text-base leading-relaxed">
                  Today HoCAID is growing — in reach, in partnerships, and in ambition. But our
                  model has not changed: show up, listen deeply, co-design, build, and leave
                  behind something stronger than we found.
                </p>
              </FadeUp>
            </div>

            <FadeUp delay={0.25} className="space-y-4">
              <div className="relative rounded-2xl overflow-hidden aspect-[4/3]">
                <Image
                  src="/hanna-morris-3EkT6xb4K9w-unsplash.jpg"
                  alt="Community gathering supported by HoCAID"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="relative rounded-2xl overflow-hidden aspect-video">
                <Image
                  src="/martin-sanchez-j2c7yf223Mk-unsplash.jpg"
                  alt="HoCAID programme in action"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* ── 5. Approach / Principles ────────────────────────────────────────── */}
      <section className="bg-white py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <FadeUp>
            <p className="font-sans font-semibold text-sunrise uppercase tracking-widest text-sm mb-4 text-center">
              How We Work
            </p>
            <h2
              className="font-display font-bold text-navy leading-tight text-center mb-16
                         text-3xl sm:text-4xl"
            >
              Our Guiding Principles
            </h2>
          </FadeUp>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {principles.map((p, i) => (
              <FadeUp key={p.title} delay={i * 0.1}>
                <div className="bg-cream rounded-2xl p-8 h-full border border-navy/8 hover:border-sunrise/30 transition-colors">
                  <span className="text-3xl block mb-4" role="img" aria-label={p.title}>
                    {p.icon}
                  </span>
                  <h3 className="font-display font-bold text-navy text-lg mb-3">{p.title}</h3>
                  <p className="font-sans text-navy/65 text-sm leading-relaxed">{p.body}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ── 6. Where We Work ────────────────────────────────────────────────── */}
      <section className="bg-cream py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <FadeUp delay={0.1} className="order-2 md:order-1">
              <p className="font-sans font-semibold text-sunrise uppercase tracking-widest text-sm mb-5">
                Where We Work
              </p>
              <h2
                className="font-display font-bold text-navy leading-tight mb-6
                           text-2xl sm:text-3xl"
              >
                Rooted in Nigeria, Rising Across Africa
              </h2>
              <p className="font-sans text-navy/70 text-base leading-relaxed mb-4">
                Our programmes are currently concentrated in Nigeria, where we work with
                grassroots partners, local government authorities, and community-based
                organisations to deliver targeted interventions across our six pillars.
              </p>
              <p className="font-sans text-navy/70 text-base leading-relaxed">
                As we grow, our vision extends across the continent — building a network of
                resilient communities rising together toward a better tomorrow.
              </p>
            </FadeUp>

            <FadeUp delay={0.2} className="order-1 md:order-2">
              <div className="relative rounded-2xl overflow-hidden aspect-[4/3]">
                <Image
                  src="/sadek-husein-H7zmvS9X3yY-unsplash.jpg"
                  alt="Aerial view of a community where HoCAID operates"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/40 to-transparent" />
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* ── 7. CTA strip ────────────────────────────────────────────────────── */}
      <section className="bg-navy py-20 px-6 text-center">
        <div className="max-w-2xl mx-auto">
          <FadeUp>
            <h2 className="font-display font-bold text-white text-3xl sm:text-4xl leading-tight mb-6">
              Ready to Rise With Us?
            </h2>
            <p className="font-sans text-white/65 text-lg mb-10">
              Explore our work or support a community today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/programmes"
                className="
                  inline-block px-10 py-4 rounded-lg text-center
                  font-sans font-semibold text-navy text-sm sm:text-base
                  bg-gradient-to-r from-sunrise to-gold
                  hover:opacity-90 active:opacity-80 transition-opacity
                  focus-visible:outline-none focus-visible:ring-2
                  focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-navy
                  min-w-[180px]
                "
              >
                Our Programmes
              </Link>
              <Link
                href="/donate"
                className="
                  inline-block px-10 py-4 rounded-lg text-center
                  font-sans font-semibold text-white text-sm sm:text-base
                  border-2 border-white
                  hover:bg-white hover:text-navy active:bg-white/90 transition-colors
                  focus-visible:outline-none focus-visible:ring-2
                  focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-navy
                  min-w-[180px]
                "
              >
                Donate Now
              </Link>
            </div>
          </FadeUp>
        </div>
      </section>
    </>
  );
}
