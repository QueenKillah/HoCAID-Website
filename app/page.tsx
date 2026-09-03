import type { Metadata } from "next";
import dynamic from "next/dynamic";
import SunriseHero from "@/components/hero/SunriseHero";
import Intro from "@/components/sections/Intro";

// Below-fold sections: split into separate lazy chunks so their JS is not
// parsed/executed on initial page load, reducing mobile TBT significantly.
const Pillars = dynamic(() => import("@/components/sections/Pillars"));
const Impact = dynamic(() => import("@/components/sections/Impact"));
const Gallery = dynamic(() => import("@/components/sections/Gallery"));
const Newsletter = dynamic(() => import("@/components/sections/Newsletter"));
const FinalCTA = dynamic(() => import("@/components/sections/FinalCTA"));

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
