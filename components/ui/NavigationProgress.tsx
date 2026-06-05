"use client";

import { usePathname, useSearchParams } from "next/navigation";
import { useEffect, useRef, useState, Suspense } from "react";
import { motion, AnimatePresence } from "framer-motion";

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

  return (
    <AnimatePresence>
      {active && (
        <motion.div
          key="nav-progress"
          className="fixed top-0 left-0 right-0 z-[9999] h-[3px] origin-left bg-gradient-to-r from-sunrise to-gold"
          initial={{ scaleX: 0, opacity: 1 }}
          animate={{ scaleX: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.25, delay: 0.1 } }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        />
      )}
    </AnimatePresence>
  );
}

export default function NavigationProgress() {
  return (
    <Suspense>
      <Bar />
    </Suspense>
  );
}
