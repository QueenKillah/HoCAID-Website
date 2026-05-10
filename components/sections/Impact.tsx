"use client";

import { useRef, useEffect } from "react";
import { useInView, useReducedMotion } from "framer-motion";

interface Stat {
  start: number;
  end: number;
  suffix: string;
  label: string;
}

const stats: Stat[] = [
  { start: 0, end: 6, suffix: "", label: "Strategic Pillars" },
  { start: 0, end: 1, suffix: "", label: "Mission" },
  { start: 2020, end: 2026, suffix: "", label: "Established" },
  { start: 0, end: 50, suffix: "+", label: "Communities Across Africa" },
];

function StatCounter({ start, end, suffix, label }: Stat) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    if (!ref.current) return;

    if (shouldReduceMotion || !inView) {
      if (inView) ref.current.textContent = `${end}${suffix}`;
      return;
    }

    const duration = 1800;
    const startTime = performance.now();
    let rafId: number;

    function tick(now: number) {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      const value = Math.round(start + (end - start) * eased);
      if (ref.current) ref.current.textContent = `${value}${suffix}`;
      if (progress < 1) rafId = requestAnimationFrame(tick);
    }

    rafId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafId);
  }, [inView, start, end, suffix, shouldReduceMotion]);

  return (
    <div className="text-center px-4 py-2">
      <span
        ref={ref}
        className="font-display font-black text-gold text-5xl sm:text-6xl lg:text-7xl leading-none"
        aria-live="polite"
      >
        {start}{suffix}
      </span>
      <p className="font-sans font-medium text-white/75 mt-3 text-xs sm:text-sm uppercase tracking-widest">
        {label}
      </p>
    </div>
  );
}

export default function Impact() {
  return (
    <>
      <div className="h-3 bg-cream" aria-hidden="true" />

      <section className="bg-navy py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 divide-x divide-white/10">
            {stats.map((stat) => (
              <StatCounter key={stat.label} {...stat} />
            ))}
          </div>
        </div>
      </section>

      <div className="h-3 bg-cream" aria-hidden="true" />
    </>
  );
}
