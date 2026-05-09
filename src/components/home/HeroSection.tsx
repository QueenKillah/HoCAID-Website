"use client";

import { motion } from "framer-motion";
import Link from "next/link";

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

const HeroSection = () => {
  return (
    <section
      className="relative min-h-screen overflow-hidden flex items-center justify-center"
      style={{
        background:
          "linear-gradient(to bottom, #0C2340 0%, #0C2340 22%, #1a3a6b 40%, #7c2d12 57%, #F97316 71%, #FBBF24 81%, #F97316 91%, #c2440f 100%)",
      }}
    >
      {/* ── Sun assembly — positioned at horizon, rises upward ── */}
      <div
        style={{
          position: "absolute",
          bottom: "35%",
          left: "50%",
          marginLeft: "-40px",
          zIndex: 2,
        }}
      >
        <motion.div
          initial={{ y: 260 }}
          animate={{ y: -240 }}
          transition={{ duration: SUN_RISE_DURATION, ease: [0.16, 1, 0.3, 1] }}
          style={{ position: "relative" }}
        >
          {/* Bloom glow — expands as sun rises */}
          <motion.div
            initial={{ opacity: 0, scale: 0.3 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: SUN_RISE_DURATION - 0.3, ease: "easeOut" }}
            style={{
              position: "absolute",
              width: 480,
              height: 480,
              left: -200,
              top: -200,
              borderRadius: "50%",
              background:
                "radial-gradient(circle, rgba(251,191,36,0.55) 0%, rgba(249,115,22,0.32) 35%, rgba(249,115,22,0.1) 60%, transparent 75%)",
              pointerEvents: "none",
            }}
          />

          {/* Light rays fanning outward from sun center */}
          {Array.from({ length: RAY_COUNT }, (_, i) => (
            <div
              key={i}
              style={{
                position: "absolute",
                left: 40,
                top: 39,
                transformOrigin: "0 50%",
                transform: `rotate(${i * (360 / RAY_COUNT)}deg)`,
              }}
            >
              <motion.div
                initial={{ scaleX: 0, opacity: 0 }}
                animate={{ scaleX: 1, opacity: 0.55 }}
                transition={{
                  delay: 1.65 + i * 0.06,
                  duration: 0.9,
                  ease: "easeOut",
                }}
                style={{
                  width: 160,
                  height: 2,
                  background:
                    "linear-gradient(to right, rgba(251,191,36,0.9), transparent)",
                  transformOrigin: "0 50%",
                }}
              />
            </div>
          ))}

          {/* Sun disk */}
          <div
            style={{
              position: "relative",
              zIndex: 1,
              width: 80,
              height: 80,
              borderRadius: "50%",
              background:
                "radial-gradient(circle, #fffde7 0%, #FBBF24 48%, #F97316 100%)",
              boxShadow:
                "0 0 30px 12px rgba(251,191,36,0.8), 0 0 70px 35px rgba(249,115,22,0.45), 0 0 130px 60px rgba(249,115,22,0.15)",
            }}
          />
        </motion.div>
      </div>

      {/* ── Horizon line ── */}
      <div
        style={{
          position: "absolute",
          bottom: "35%",
          left: 0,
          right: 0,
          height: 1,
          background:
            "linear-gradient(to right, transparent 0%, rgba(251,191,36,0.5) 20%, rgba(249,115,22,0.85) 50%, rgba(251,191,36,0.5) 80%, transparent 100%)",
          zIndex: 6,
        }}
      />

      {/* ── Earth / ground overlay — masks sun below horizon ── */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: "35%",
          background:
            "linear-gradient(to top, #05101e 0%, #091828 55%, transparent 100%)",
          zIndex: 5,
        }}
      />

      {/* ── Content — fades in after sun animation completes ── */}
      <motion.div
        initial={{ opacity: 0, y: 22 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: CONTENT_DELAY, ease: "easeOut" }}
        className="relative flex flex-col items-center text-center px-4 max-w-4xl mx-auto"
        style={{ zIndex: 10 }}
      >
        {/* Eyebrow */}
        <div className="mb-5 flex items-center gap-2.5">
          <span aria-hidden="true" className="h-px w-8 rounded-full bg-gold/60" />
          <p className="text-xs font-bold uppercase tracking-widest text-gold">
            Horizon Community Initiative for Aid and Development
          </p>
          <span aria-hidden="true" className="h-px w-8 rounded-full bg-gold/60" />
        </div>

        {/* Tagline — fades in only after sun animation finishes */}
        <h1 className="font-display text-4xl font-black leading-tight text-balance text-white md:text-5xl lg:text-6xl">
          Rising Together Towards{" "}
          <span
            style={{
              background: "linear-gradient(to right, #F97316, #FBBF24)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            a Better Tomorrow
          </span>
        </h1>

        {/* Sub-heading */}
        <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-white/75 md:text-lg">
          Empowering communities across Africa through five strategic pillars —
          Health, Agriculture, Digital Access, Environment, and Gender &amp;
          Youth Empowerment.
        </p>

        {/* CTA buttons */}
        <div className="mt-8 flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:justify-center">
          <Link
            href="/our-work"
            className="flex min-h-[52px] items-center justify-center rounded-xl px-8 text-base font-bold text-white shadow-lg transition-opacity hover:opacity-90"
            style={{ background: "linear-gradient(to right, #F97316, #FBBF24)" }}
          >
            Our Work
          </Link>
          <Link
            href="/get-involved"
            className="flex min-h-[52px] items-center justify-center rounded-xl border-2 border-white/40 px-8 text-base font-semibold text-white backdrop-blur-sm transition-colors hover:bg-white/10"
          >
            Get Involved
          </Link>
        </div>

        {/* Pillar chips */}
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

      {/* ── Scroll cue ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: CONTENT_DELAY + 0.9, duration: 0.8 }}
        aria-hidden="true"
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        style={{ zIndex: 10 }}
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
