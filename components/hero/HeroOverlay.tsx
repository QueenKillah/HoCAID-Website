"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import type { Transition } from "framer-motion";

export default function HeroOverlay() {
  const shouldReduceMotion = useReducedMotion();

  const instant: Transition = { duration: 0 };

  const headlineTransition: Transition = shouldReduceMotion
    ? instant
    : { duration: 0.9, delay: 3, ease: "easeOut" };

  const ctaTransition: Transition = shouldReduceMotion
    ? instant
    : { duration: 0.7, delay: 3.5, ease: "easeOut" };

  const headlineVariants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 18 },
    visible: { opacity: 1, y: 0 },
  };

  const ctaVariants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 14 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    // pointer-events-none on wrapper so the SVG scene underneath stays
    // interactive; re-enabled on the CTA div so buttons are clickable
    <div className="absolute inset-0 flex flex-col items-center justify-end pb-[12%] sm:pb-[10%] lg:pb-[8%] px-6 text-center pointer-events-none">

      {/* H1 + tagline */}
      <motion.div
        variants={headlineVariants}
        initial="hidden"
        animate="visible"
        transition={headlineTransition}
      >
        <h1
          className="font-display font-bold text-white leading-tight
                     text-3xl sm:text-4xl md:text-5xl lg:text-6xl
                     max-w-[18ch] mx-auto"
          style={{
            textShadow:
              "0 2px 28px rgba(0,0,0,0.5), 0 1px 6px rgba(0,0,0,0.35)",
          }}
        >
          Rising Together Towards a Better Tomorrow
        </h1>

        <p className="font-sans font-bold mt-4 text-base sm:text-lg md:text-xl text-white">
          Aid. Develop. Transform.
        </p>
      </motion.div>

      {/* CTA buttons */}
      <motion.div
        variants={ctaVariants}
        initial="hidden"
        animate="visible"
        transition={ctaTransition}
        className="flex flex-col sm:flex-row gap-4 mt-8 pointer-events-auto"
      >
        <Link
          href="/donate"
          className="
            inline-block px-8 py-3 rounded-lg text-center
            font-sans font-semibold text-navy text-sm sm:text-base
            bg-gradient-to-r from-sunrise to-gold
            hover:opacity-90 active:opacity-80 transition-opacity
            focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2
            min-w-[160px]
          "
        >
          Donate Now
        </Link>

        <Link
          href="/programmes"
          className="
            inline-block px-8 py-3 rounded-lg text-center
            font-sans font-semibold text-white text-sm sm:text-base
            border-2 border-white
            hover:bg-white hover:text-navy active:bg-white/90 transition-colors
            focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2
            min-w-[160px]
          "
        >
          Our Programmes
        </Link>
      </motion.div>
    </div>
  );
}
