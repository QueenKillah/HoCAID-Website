import type { Metadata } from "next";
import PageHero from "@/components/layout/PageHero";
import SectionHeading from "@/components/shared/SectionHeading";
import ProgramsFilterGrid from "@/components/programs/ProgramsFilterGrid";

export const metadata: Metadata = {
  title: "Programs & Projects | HoCAID",
  description:
    "Explore HoCAID's active and completed programmes across all five strategic pillars — from mobile health clinics to girls' scholarships.",
  openGraph: {
    title: "Programs & Projects | HoCAID",
    description:
      "Explore HoCAID's active and completed programmes across all five strategic pillars — from mobile health clinics to girls' scholarships.",
    url: "/programs",
  },
};

export default function ProgramsPage() {
  return (
    <>
      <PageHero
        title="Programs & Projects"
        breadcrumbs={[{ label: "Programs" }]}
        description="Targeted programmes that deliver measurable change on the ground — across health, agriculture, digital access, environment, and gender equity."
        size="md"
      />

      <section className="bg-white px-4 py-16 md:px-8 md:py-24">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Our Projects"
            title="From the Ground Up"
            description="Each programme is co-designed with the communities it serves, measured rigorously, and structured to build lasting capacity."
          />
          <ProgramsFilterGrid />
        </div>
      </section>
    </>
  );
}
