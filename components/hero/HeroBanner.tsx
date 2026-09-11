"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";

export default function HeroBanner() {
  const rm = useReducedMotion();

  return (
    <section
      className="relative w-full overflow-hidden h-screen [height:100svh]"
      aria-label="Hero — Rising Together Towards a Better Tomorrow"
    >
      {/* Background: video for motion, still image for prefers-reduced-motion */}
      {rm ? (
        <Image
          src="/images/hero-sunrise.jpg"
          alt="Sunrise over misty mountains — symbolising hope and new beginnings for the communities HoCAID serves"
          fill
          priority
          quality={85}
          sizes="100vw"
          className="object-cover object-[center_25%] sm:object-center"
        />
      ) : (
        <video
          autoPlay
          muted
          loop
          playsInline
          poster="/images/hero-sunrise.jpg"
          className="absolute inset-0 w-full h-full object-cover object-[center_25%] sm:object-center"
        >
          <source src="/videos/hero-sunrise.mp4" type="video/mp4" />
        </video>
      )}

      {/* Gradient overlay — bottom dark band keeps white text legible */}
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

      {/* Sun glow pulse — anchored to the sun's position in the frame */}
      {!rm && (
        <div
          className="absolute pointer-events-none"
          style={{ left: "72%", top: "22%", transform: "translate(-50%, -50%)" }}
        >
          <motion.div
            style={{
              width: 300,
              height: 300,
              borderRadius: "50%",
              background:
                "radial-gradient(circle, rgba(251,191,36,0.35) 0%, rgba(249,115,22,0.14) 38%, transparent 68%)",
              willChange: "transform, opacity",
            }}
            animate={{ scale: [1, 1.18, 1], opacity: [0.55, 0.9, 0.55] }}
            transition={{ duration: 5, ease: "easeInOut", repeat: Infinity }}
          />
        </div>
      )}

      {/* Foreground content */}
      <div className="absolute inset-0 flex flex-col items-center justify-end pb-[12%] sm:pb-[10%] lg:pb-[8%] px-6 text-center pointer-events-none">
        <motion.div
          initial={{ opacity: 0, y: rm ? 0 : 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={rm ? { duration: 0 } : { duration: 0.9, delay: 0.4, ease: "easeOut" }}
        >
          <h1
            className="font-display font-bold text-white leading-tight text-3xl sm:text-4xl md:text-5xl lg:text-6xl max-w-[18ch] mx-auto"
            style={{
              textShadow: "0 2px 28px rgba(0,0,0,0.55), 0 1px 6px rgba(0,0,0,0.4)",
            }}
          >
            Rising Together Towards a Better Tomorrow
          </h1>
          <p className="font-sans font-bold mt-4 text-base sm:text-lg md:text-xl text-white/90">
            Aid. Develop. Transform.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: rm ? 0 : 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={rm ? { duration: 0 } : { duration: 0.7, delay: 0.9, ease: "easeOut" }}
          className="flex flex-col sm:flex-row gap-4 mt-8 pointer-events-auto"
        >
          <Link
            href="/programmes"
            className="
              inline-block px-8 py-3 rounded-lg text-center
              font-sans font-semibold text-navy text-sm sm:text-base
              bg-gradient-to-r from-sunrise to-gold
              hover:opacity-90 active:opacity-80 transition-opacity
              focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2
              min-w-[160px]
            "
          >
            Our Programmes
          </Link>
          <Link
            href="/donate"
            className="
              inline-block px-8 py-3 rounded-lg text-center
              font-sans font-semibold text-white text-sm sm:text-base
              border-2 border-white
              hover:bg-white hover:text-navy active:bg-white/90 transition-colors
              focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2
              min-w-[160px]
            "
          >
            Donate Now
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
