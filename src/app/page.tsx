import type { Metadata } from "next";
import HeroSection from "@/components/home/HeroSection";
import MissionSection from "@/components/home/MissionSection";
import PillarsGrid from "@/components/home/PillarsGrid";
import ImpactCounters from "@/components/home/ImpactCounters";
import LatestNews from "@/components/home/LatestNews";
import PartnersStrip from "@/components/home/PartnersStrip";
import DonateCTABanner from "@/components/home/DonateCTABanner";

export const metadata: Metadata = {
  title: "HoCAID — Rising Together Towards a Better Tomorrow",
  description:
    "Horizon Community Initiative for Aid and Development — empowering communities across Africa through health, agriculture, digital access, environment, and gender & youth programmes.",
  openGraph: {
    title: "HoCAID — Rising Together Towards a Better Tomorrow",
    description:
      "Horizon Community Initiative for Aid and Development — empowering communities across Africa through health, agriculture, digital access, environment, and gender & youth programmes.",
    url: "/",
  },
};

export default function HomePage() {
  return (
    <>
      {/* 1. Hero — tagline + two CTAs */}
      <HeroSection />

      {/* 2. Mission Snapshot — who we are, mission + vision cards */}
      <MissionSection />

      {/* 3. Five Pillars grid — icons from Lucide React, links to sub-pages */}
      <PillarsGrid />

      {/* 4. Impact Counters — Framer Motion scroll-triggered count-up */}
      <ImpactCounters />

      {/* 5. Latest News — 3 cards from placeholder data */}
      <LatestNews />

      {/* 6. Partners strip — 8 partner organisations */}
      <PartnersStrip />

      {/* 7. Footer CTA banner — Donate + Volunteer */}
      <DonateCTABanner />
    </>
  );
}
