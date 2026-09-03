"use client";

import { usePathname, useSearchParams } from "next/navigation";
import { useEffect, useRef, useState, Suspense } from "react";

function Bar() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [active, setActive] = useState(false);
  const firstRender = useRef(true);

  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
      return;
    }
    setActive(true);
    const timer = setTimeout(() => setActive(false), 500);
    return () => clearTimeout(timer);
  }, [pathname, searchParams]);

  if (!active) return null;

  return (
    <div
      aria-hidden="true"
      className="fixed top-0 left-0 right-0 z-[9999] h-[3px] origin-left bg-gradient-to-r from-sunrise to-gold"
      style={{ animation: "nav-progress 0.5s ease-out forwards" }}
    />
  );
}

export default function NavigationProgress() {
  return (
    <Suspense>
      <Bar />
    </Suspense>
  );
}
