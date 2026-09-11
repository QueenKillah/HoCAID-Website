"use client";

import { motion, useReducedMotion } from "framer-motion";
import { pillars } from "@/lib/pillars";

export default function PillarSections() {
  const reduce = useReducedMotion();

  return (
    <div>
      {pillars.map((pillar, index) => {
        const isEven = index % 2 === 0;
        return (
          <section
            key={pillar.id}
            id={`pillar-${pillar.id}`}
            className={`${isEven ? "bg-cream" : "bg-white"} py-20 md:py-28 px-6`}
          >
            <motion.div
              className="max-w-5xl mx-auto grid lg:grid-cols-[auto_1fr] gap-8 lg:gap-14 items-start"
              initial={{ opacity: 0, y: reduce ? 0 : 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.55, ease: "easeOut" }}
            >
              <span className="font-display font-black text-7xl sm:text-8xl text-navy/10 leading-none" aria-hidden="true">
                {String(pillar.id).padStart(2, "0")}
              </span>
              <div>
                <p className="font-sans font-semibold text-sunrise uppercase tracking-widest text-sm mb-4">
                  Strategic priority
                </p>
                <h2 className="font-display font-bold text-navy text-3xl sm:text-4xl leading-tight mb-5">
                  {pillar.title}
                </h2>
                <p className="font-sans text-navy/70 text-lg leading-relaxed max-w-3xl">
                  {pillar.description}
                </p>
              </div>
            </motion.div>
          </section>
        );
      })}
    </div>
  );
}
