"use client";

import { motion } from "framer-motion";
import Button from "@/components/shared/Button";

const RAY_COUNT = 12;
const SUN_RISE_DURATION = 2.4;
const CONTENT_DELAY = SUN_RISE_DURATION + 0.15;

const pillarChips = [
  "Health & Wellbeing",
  "Agriculture",
  "Digital Access",
  "Environment",
  "Gender & Youth",
];

const rays = Array.from({ length: RAY_COUNT }, (_, i) => i);

const HeroSection = () => {
  return (
    <section className="relative min-h-screen overflow-hidden flex items-center justify-center bg-gradient-hero-sky">

      {/* Sun assembly — anchored at horizon, rises upward */}
      <div className="absolute z-[2]" style={{ bottom: "35%", left: "50%", marginLeft: "-40px" }}>
        <motion.div
          initial={{ y: 260 }}
          animate={{ y: -240 }}
          transition={{ duration: SUN_RISE_DURATION, ease: [0.16, 1, 0.3, 1] }}
          className="relative"
        >
          {/* Bloom glow */}
          <motion.div
            initial={{ opacity: 0, scale: 0.3 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: SUN_RISE_DURATION - 0.3, ease: "easeOut" }}
            className="absolute rounded-full pointer-events-none"
            style={{
              width: 480,
              height: 480,
              left: -200,
              top: -200,
              background: "radial-gradient(circle, rgba(251,191,36,0.55) 0%, rgba(249,115,22,0.32) 35%, rgba(249,115,22,0.1) 60%, transparent 75%)",
            }}
          />

          {/* Light rays */}
          {rays.map((i) => (
            <div
              key={i}
              className="absolute origin-[0_50%]"
              style={{ left: 40, top: 39, transform: `rotate(${i * (360 / RAY_COUNT)}deg)` }}
            >
              <motion.div
                initial={{ scaleX: 0, opacity: 0 }}
                animate={{ scaleX: 1, opacity: 0.55 }}
                transition={{ delay: 1.65 + i * 0.06, duration: 0.9, ease: "easeOut" }}
                className="origin-[0_50%]"
                style={{
                  width: 160,
                  height: 2,
                  background: "linear-gradient(to right, rgba(251,191,36,0.9), transparent)",
                }}
              />
            </div>
          ))}

          {/* Sun disk */}
          <div
            className="relative z-[1] w-20 h-20 rounded-full"
            style={{
              background: "radial-gradient(circle, #fffde7 0%, #FBBF24 48%, #F97316 100%)",
              boxShadow: "0 0 30px 12px rgba(251,191,36,0.8), 0 0 70px 35px rgba(249,115,22,0.45), 0 0 130px 60px rgba(249,115,22,0.15)",
            }}
          />
        </motion.div>
      </div>

      {/* Horizon line */}
      <div
        className="absolute inset-x-0 z-[6]"
        style={{
          bottom: "35%",
          height: 1,
          background: "linear-gradient(to right, transparent 0%, rgba(251,191,36,0.5) 20%, rgba(249,115,22,0.85) 50%, rgba(251,191,36,0.5) 80%, transparent 100%)",
        }}
      />

      {/* Earth overlay — masks sun below horizon */}
      <div className="absolute inset-x-0 bottom-0 z-[5] bg-gradient-earth" style={{ height: "35%" }} />

      {/* Content — fades in after sun animation completes */}
      <motion.div
        initial={{ opacity: 0, y: 22 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: CONTENT_DELAY, ease: "easeOut" }}
        className="relative z-10 flex flex-col items-center text-center px-4 max-w-4xl mx-auto"
      >
        <div className="mb-5 flex items-center gap-2.5">
          <span aria-hidden="true" className="h-px w-8 rounded-full bg-gold/60" />
          <p className="text-xs font-bold uppercase tracking-widest text-gold">
            Horizon Community Initiative for Aid and Development
          </p>
          <span aria-hidden="true" className="h-px w-8 rounded-full bg-gold/60" />
        </div>

        <h1 className="font-display text-4xl font-black leading-tight text-balance text-white md:text-5xl lg:text-6xl">
          Rising Together Towards{" "}
          <span className="bg-gradient-to-r from-orange to-gold bg-clip-text text-transparent">
            a Better Tomorrow
          </span>
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-white/75 md:text-lg">
          Empowering communities across Africa through five strategic pillars —
          Health, Agriculture, Digital Access, Environment, and Gender &amp;
          Youth Empowerment.
        </p>

        <div className="mt-8 flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:justify-center">
          <Button href="/our-work" variant="primary" size="lg">
            Our Work
          </Button>
          <Button href="/get-involved" variant="outline-white" size="lg">
            Get Involved
          </Button>
        </div>

        <div className="mt-10 flex flex-wrap justify-center gap-2">
          {pillarChips.map((chip) => (
            <span
              key={chip}
              className="rounded-full border border-white/15 bg-white/5 px-3.5 py-1.5 text-xs font-medium text-white/65 backdrop-blur-sm"
            >
              {chip}
            </span>
          ))}
        </div>
      </motion.div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: CONTENT_DELAY + 0.9, duration: 0.8 }}
        aria-hidden="true"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
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
