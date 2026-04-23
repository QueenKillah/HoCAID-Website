"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView, animate } from "framer-motion";
import SectionHeading from "@/components/shared/SectionHeading";
import { IMPACT_STATS } from "@/lib/constants";

interface StatCounterProps {
  value: number;
  suffix: string;
  label: string;
  index: number;
}

function StatCounter({ value, suffix, label, index }: StatCounterProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, value, {
      duration: 2.2,
      ease: "easeOut",
      delay: index * 0.12,
      onUpdate(v) {
        setDisplayValue(Math.round(v));
      },
    });
    return () => controls.stop();
  }, [inView, value, index]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" as const }}
      className="rounded-2xl bg-white/5 p-6 text-center ring-1 ring-white/10 md:p-8"
    >
      <p className="font-display text-4xl font-black text-gold md:text-5xl lg:text-6xl">
        {displayValue.toLocaleString()}
        {suffix}
      </p>
      <p className="mt-2 text-sm font-medium text-white/70 md:text-base">
        {label}
      </p>
    </motion.div>
  );
}

const ImpactCounters = () => {
  return (
    <section className="bg-navy px-4 py-16 md:px-8 md:py-24">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Our Impact"
          title="Measuring What Matters"
          description="Real numbers from real communities. Every figure represents lives changed and futures built."
          centered
          light
        />
        <div className="grid grid-cols-2 gap-4 md:gap-6 lg:grid-cols-4 lg:gap-8">
          {IMPACT_STATS.map((stat, i) => (
            <StatCounter
              key={stat.label}
              value={stat.value}
              suffix={stat.suffix}
              label={stat.label}
              index={i}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImpactCounters;
