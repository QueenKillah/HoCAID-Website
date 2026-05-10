"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import confetti from "canvas-confetti";
import { Home, Share2, Check } from "lucide-react";

export default function ThankYouContent() {
  const searchParams = useSearchParams();
  const ref = searchParams.get("ref") ?? "";
  const shouldReduceMotion = useReducedMotion();

  const [copied, setCopied] = useState(false);

  // Confetti on mount — skipped when prefers-reduced-motion
  useEffect(() => {
    if (shouldReduceMotion) return;
    confetti({
      particleCount: 130,
      spread: 90,
      origin: { y: 0.5 },
      colors: ["#F97316", "#FBBF24", "#FEF9F0", "#0EA5E9"],
      disableForReducedMotion: true,
    });
  }, [shouldReduceMotion]);

  const handleShare = async () => {
    const url =
      typeof window !== "undefined" ? window.location.origin : "https://hocaid.org";
    const shareData = {
      title: "HoCAID — Rising Together Towards a Better Tomorrow",
      text: "I just donated to HoCAID. Join me in supporting communities across Africa.",
      url,
    };

    if (typeof navigator !== "undefined" && typeof navigator.share === "function") {
      try {
        await navigator.share(shareData);
      } catch {
        // user cancelled or browser blocked — fail silently
      }
    } else {
      try {
        await navigator.clipboard.writeText(url);
        setCopied(true);
        setTimeout(() => setCopied(false), 3500);
      } catch {
        // clipboard unavailable — no-op
      }
    }
  };

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center px-6 py-20 text-center"
      // Radial gradient — hex values intentional here (same visual intent as hero SVG gradients)
      style={{
        background:
          "radial-gradient(ellipse at 50% 40%, #FBBF24 0%, #F97316 55%, #0C2340 100%)",
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 32 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-xl"
      >
        {/* Headline */}
        <h1
          className="font-display font-bold text-white leading-tight mb-5
                     text-4xl sm:text-5xl md:text-6xl"
          style={{
            textShadow: "0 2px 24px rgba(12,35,64,0.4)",
          }}
        >
          Thank you for rising with us.
        </h1>

        {/* Body */}
        <p className="font-sans text-white/90 text-lg leading-relaxed mb-4">
          Your generosity is lighting the path for communities across Africa.
          Every naira you gave brings us one step closer to a world where every
          community has the knowledge, resources, and agency to thrive.
        </p>

        {/* Reference */}
        {ref && (
          <p className="font-sans text-white/65 text-sm mb-10">
            Payment reference:{" "}
            <span className="font-mono tracking-wide text-white/85">{ref}</span>
          </p>
        )}

        {/* Action buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="
              inline-flex items-center justify-center gap-2
              px-8 py-3 rounded-xl font-sans font-semibold text-navy bg-white
              hover:bg-cream active:bg-cream/80 transition-colors
              focus-visible:outline-none focus-visible:ring-2
              focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-navy
              min-w-[160px]
            "
          >
            <Home className="w-4 h-4" aria-hidden="true" />
            Back to Home
          </Link>

          <button
            onClick={handleShare}
            className="
              inline-flex items-center justify-center gap-2
              px-8 py-3 rounded-xl font-sans font-semibold text-white
              border-2 border-white
              hover:bg-white/10 active:bg-white/20 transition-colors
              focus-visible:outline-none focus-visible:ring-2
              focus-visible:ring-white focus-visible:ring-offset-2
              min-w-[160px]
            "
          >
            {copied ? (
              <>
                <Check className="w-4 h-4" aria-hidden="true" />
                Link copied!
              </>
            ) : (
              <>
                <Share2 className="w-4 h-4" aria-hidden="true" />
                Share HoCAID
              </>
            )}
          </button>
        </div>
      </motion.div>

      {/* Inline copy toast for browsers that don't support Web Share API */}
      <AnimatePresence>
        {copied && (
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="fixed bottom-8 left-1/2 -translate-x-1/2
                       bg-navy text-white font-sans text-sm
                       px-5 py-2.5 rounded-xl shadow-lg"
            role="status"
            aria-live="polite"
          >
            Link copied to clipboard!
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  );
}
