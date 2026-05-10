import type { Metadata } from "next";
import dynamic from "next/dynamic";

// react-paystack accesses `window` at module level — skip SSR to avoid the error
const DonateClient = dynamic(() => import("./DonateClient"), { ssr: false });

export const metadata: Metadata = {
  title: "Donate — Light the Path",
  description:
    "Every gift fuels a community on its way to a better tomorrow. Donate to HoCAID today and help us strengthen health systems, drive food security, and champion climate resilience across Africa.",
  openGraph: {
    title: "Light the Path — Donate to HoCAID",
    description:
      "Every gift fuels a community on its way to a better tomorrow.",
  },
  twitter: { card: "summary_large_image" },
};

export default function DonatePage() {
  return (
    <>
      {/* ── Page header — sunrise→gold gradient ── */}
      <header className="relative bg-gradient-to-r from-sunrise to-gold pt-16 pb-20 md:pt-20 md:pb-24 px-6 text-center">
        <div className="max-w-2xl mx-auto">
          <p className="font-sans font-semibold text-white/75 uppercase tracking-widest text-sm mb-5">
            Make a Difference
          </p>
          <h1
            className="font-display font-bold text-white leading-tight mb-5
                       text-4xl sm:text-5xl md:text-6xl"
          >
            Light the Path
          </h1>
          <p className="font-sans text-white/90 text-lg sm:text-xl leading-relaxed">
            Every gift fuels a community on its way to a better tomorrow.
          </p>
        </div>
        {/* Separator strip */}
        <div className="absolute left-0 right-0 bottom-0 h-[3px] bg-white/25" />
      </header>

      <DonateClient />
    </>
  );
}
