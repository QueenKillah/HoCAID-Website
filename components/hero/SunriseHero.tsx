"use client";

import { useState, useEffect } from "react";
import SunriseScene from "./SunriseScene";
import HeroOverlay from "./HeroOverlay";

export default function SunriseHero() {
  // Detect mobile after mount to pass reduced rise distance.
  // Initial false means desktop riseDistance renders on SSR — acceptable
  // since the difference is subtle and the animation starts immediately.
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 767px)");
    setIsMobile(mq.matches);
    const handler = (e: MediaQueryListEvent) => setIsMobile(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  return (
    <section
      // 85vh mobile / 90vh tablet / 100vh desktop — CLAUDE.md §6.5
      className="relative w-full overflow-hidden h-[85vh] md:h-[90vh] lg:h-[100vh]"
      aria-label="Hero — Rising Together Towards a Better Tomorrow"
    >
      <SunriseScene mobileRise={isMobile} />
      <HeroOverlay />
    </section>
  );
}
