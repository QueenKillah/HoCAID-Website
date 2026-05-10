import type { Metadata } from "next";
import SunriseHero from "@/components/hero/SunriseHero";
import Intro from "@/components/sections/Intro";
import Pillars from "@/components/sections/Pillars";
import Impact from "@/components/sections/Impact";
import Gallery from "@/components/sections/Gallery";
import Newsletter from "@/components/sections/Newsletter";
import FinalCTA from "@/components/sections/FinalCTA";

export const metadata: Metadata = {
  // Use absolute to avoid "Home — HoCAID" — the root page IS the brand
  title: {
    absolute: "HoCAID — Rising Together Towards a Better Tomorrow",
  },
  description:
    "HoCAID strengthens health systems, drives food security, champions climate resilience, and empowers communities across Africa. Aid. Develop. Transform.",
  openGraph: {
    title: "HoCAID — Rising Together Towards a Better Tomorrow",
    description:
      "Strengthening health systems, driving food security, and championing climate resilience across Africa.",
    url: "/",
  },
  twitter: { card: "summary_large_image" },
};

export default function Home() {
  return (
    <>
      <SunriseHero />
      <Intro />
      <Pillars />
      <Impact />
      <Gallery />
      <Newsletter />
      <FinalCTA />
    </>
  );
}
