"use client";

import { animate, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

interface CountUpProps {
  value: number;
  suffix?: string;
  delay?: number;
  className?: string;
}

export default function CountUp({ value, suffix = "", delay = 0, className }: CountUpProps) {
  const [display, setDisplay] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, value, {
      duration: 2.2,
      ease: "easeOut" as const,
      delay,
      onUpdate(v) {
        setDisplay(Math.round(v));
      },
    });
    return () => controls.stop();
  }, [inView, value, delay]);

  return (
    <span ref={ref} className={className}>
      {display.toLocaleString()}
      {suffix}
    </span>
  );
}
