import type { FC } from "react";
import Link from "next/link";
import SectionHeading from "@/components/shared/SectionHeading";
import PillarCard from "@/components/shared/PillarCard";
import { PILLARS } from "@/lib/constants";

const PillarsGrid: FC = () => {
  return (
    <section className="bg-white px-4 py-16 md:px-8 md:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading
            eyebrow="Our Work"
            title="Five Pillars. Infinite Impact."
            description="Every programme we run sits within one of five strategic pillars, each designed to address root causes of inequality and build long-term resilience."
          />
          <Link
            href="/our-work"
            className="mb-10 shrink-0 text-sm font-semibold text-orange transition-colors hover:text-orange/80 md:mb-14"
          >
            View all pillars →
          </Link>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {PILLARS.map((pillar) => (
            <PillarCard key={pillar.id} pillar={pillar} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PillarsGrid;
