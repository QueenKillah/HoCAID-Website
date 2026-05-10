"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";

export default function FinalCTA() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="bg-navy py-28 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <h2
            className="font-display font-bold text-white leading-tight mb-5
                       text-3xl sm:text-4xl md:text-5xl"
          >
            Ready to make a difference?
          </h2>

          <p className="font-sans text-white/70 text-lg mb-10 leading-relaxed">
            Every contribution lights the path for a community in need.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/donate"
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
              Donate Now
            </Link>

            <Link
              href="/contact"
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
              Get in Touch
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
