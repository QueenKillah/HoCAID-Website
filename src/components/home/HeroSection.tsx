"use client";

import { motion } from "framer-motion";
import Button from "@/components/shared/Button";

const pillarChips = [
  "Health & Wellbeing",
  "Agriculture",
  "Digital Access",
  "Environment",
  "Gender & Youth",
];

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 32 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: "easeOut" as const },
});

const HeroSection = () => {
  return (
    <section className="relative flex min-h-[88vh] flex-col items-center justify-center overflow-hidden bg-navy px-4 py-24 text-center text-white md:px-8">
      {/* ── Decorative radial blobs ── */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute -left-40 -top-20 h-[640px] w-[640px] rounded-full bg-orange/10 blur-3xl" />
        <div className="absolute -right-40 bottom-0 h-[540px] w-[540px] rounded-full bg-sky/10 blur-3xl" />
        <div className="absolute left-1/2 top-1/2 h-[480px] w-[480px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold/5 blur-3xl" />
      </div>

      {/* ── Subtle grid overlay ── */}
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.6) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* ── Content ── */}
      <div className="relative z-10 flex max-w-4xl flex-col items-center">
        {/* Eyebrow */}
        <motion.div {...fadeUp(0)} className="mb-5 flex items-center gap-2.5">
          <span aria-hidden="true" className="h-px w-8 rounded-full bg-gold/60" />
          <p className="text-xs font-bold uppercase tracking-widest text-gold">
            Horizon Community Initiative for Aid and Development
          </p>
          <span aria-hidden="true" className="h-px w-8 rounded-full bg-gold/60" />
        </motion.div>

        {/* Headline */}
        <motion.h1
          {...fadeUp(0.12)}
          className="font-display text-4xl font-black leading-tight text-balance md:text-5xl lg:text-6xl xl:text-7xl"
        >
          Rising Together Towards{" "}
          <span className="bg-gradient-cta bg-clip-text text-transparent">
            a Better Tomorrow
          </span>
        </motion.h1>

        {/* Sub-heading */}
        <motion.p
          {...fadeUp(0.24)}
          className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-white/75 md:text-lg"
        >
          Empowering communities across Africa through five strategic pillars —
          Health, Agriculture, Digital Access, Environment, and Gender &amp;
          Youth Empowerment.
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          {...fadeUp(0.36)}
          className="mt-8 flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:justify-center"
        >
          <Button href="/our-work" size="lg">
            Our Work
          </Button>
          <Button href="/get-involved" variant="outline-white" size="lg">
            Get Involved
          </Button>
        </motion.div>

        {/* Pillar chips */}
        <motion.div
          {...fadeUp(0.5)}
          className="mt-10 flex flex-wrap justify-center gap-2"
        >
          {pillarChips.map((chip) => (
            <span
              key={chip}
              className="rounded-full border border-white/15 bg-white/5 px-3.5 py-1.5 text-xs font-medium text-white/65 backdrop-blur-sm"
            >
              {chip}
            </span>
          ))}
        </motion.div>
      </div>

      {/* ── Scroll cue ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        aria-hidden="true"
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
          className="flex h-8 w-5 items-start justify-center rounded-full border border-white/25 pt-1.5"
        >
          <div className="h-1.5 w-0.5 rounded-full bg-white/50" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
