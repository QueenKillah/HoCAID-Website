"use client";

import { motion, useReducedMotion } from "framer-motion";
import { copy } from "@/lib/copy";

export default function Intro() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="bg-cream py-24 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <p className="font-sans font-semibold text-sunrise uppercase tracking-widest text-sm mb-5">
            About HoCAID
          </p>

          <h2
            className="font-display font-bold text-navy leading-tight mb-7
                       text-3xl sm:text-4xl md:text-5xl"
          >
            {copy.mission}
          </h2>

          <p className="font-sans text-navy/65 text-lg leading-relaxed max-w-2xl mx-auto">
            Founded in {copy.org.established}, HoCAID is a grassroots-led organisation working at the
            intersection of health, climate, and community development across Africa. We stand
            alongside communities — not above them — to build systems, skills, and structures
            that endure long after our programmes end. Every initiative we run is shaped by the
            people it serves.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
