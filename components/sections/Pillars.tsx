"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  Heart,
  Wheat,
  CloudSun,
  Cpu,
  Scale,
  Users,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { pillars } from "@/lib/pillars";

const iconMap: Record<string, LucideIcon> = {
  Heart,
  Wheat,
  CloudSun,
  Cpu,
  Scale,
  Users,
};

// Static maps keep Tailwind JIT from purging these classes
const borderMap: Record<string, string> = {
  "sky-brand": "border-sky-brand",
  forest: "border-forest",
  navy: "border-navy",
  gold: "border-gold",
  sunrise: "border-sunrise",
};

const iconColorMap: Record<string, string> = {
  "sky-brand": "text-sky-brand",
  forest: "text-forest",
  navy: "text-navy",
  gold: "text-gold",
  sunrise: "text-sunrise",
};

const numeralColorMap: Record<string, string> = {
  "sky-brand": "text-sky-brand",
  forest: "text-forest",
  navy: "text-navy",
  gold: "text-gold",
  sunrise: "text-sunrise",
};

export default function Pillars() {
  const shouldReduceMotion = useReducedMotion();

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 28 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.55, ease: "easeOut" },
    },
  };

  return (
    <section className="bg-white py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-14"
        >
          <p className="font-sans font-semibold text-sunrise uppercase tracking-widest text-sm mb-3">
            Our Framework
          </p>
          <h2 className="font-display font-bold text-navy text-3xl sm:text-4xl">
            Six Pillars of Impact
          </h2>
        </motion.div>

        {/* Pillar cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {pillars.map((pillar) => {
            const Icon = iconMap[pillar.iconName];
            const borderClass = borderMap[pillar.tailwindColor] ?? "border-navy";
            const iconClass = iconColorMap[pillar.tailwindColor] ?? "text-navy";
            const numeralClass = numeralColorMap[pillar.tailwindColor] ?? "text-navy";
            const numeral = String(pillar.id).padStart(2, "0");

            return (
              <motion.div
                key={pillar.id}
                variants={cardVariants}
                whileHover={shouldReduceMotion ? {} : { y: -4 }}
                className={`bg-cream rounded-xl p-7 border-t-4 ${borderClass} shadow-sm hover:shadow-md transition-shadow`}
              >
                {/* Large decorative numeral */}
                <span
                  className={`font-display font-black text-6xl leading-none ${numeralClass} opacity-[0.15] select-none`}
                >
                  {numeral}
                </span>

                {/* Icon */}
                {Icon && (
                  <Icon
                    className={`mt-3 mb-5 w-7 h-7 ${iconClass}`}
                    aria-hidden="true"
                  />
                )}

                {/* Name */}
                <h3 className="font-display font-bold text-navy text-xl leading-snug mb-3">
                  {pillar.title}
                </h3>

                {/* Description */}
                <p className="font-sans text-navy/65 text-sm leading-relaxed">
                  {pillar.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
