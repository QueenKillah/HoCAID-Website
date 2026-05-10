import SunriseHero from "@/components/hero/SunriseHero";
import Intro from "@/components/sections/Intro";
import Pillars from "@/components/sections/Pillars";
import Impact from "@/components/sections/Impact";
import Gallery from "@/components/sections/Gallery";
import Newsletter from "@/components/sections/Newsletter";
import FinalCTA from "@/components/sections/FinalCTA";

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
