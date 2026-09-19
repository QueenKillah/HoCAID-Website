import { copy } from "@/lib/copy";

export default function Intro() {
  return (
    <section className="bg-cream py-24 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <p className="font-sans font-semibold text-sunrise uppercase tracking-widest text-sm mb-5">
          About HoCAID
        </p>

        <p className="font-sans text-navy text-lg leading-relaxed max-w-2xl mx-auto">
          HoCAID is a nonprofit organization working to create a world where every community has
          the knowledge, resources, and agency to thrive. Established in {copy.org.established},
          we develop and deliver practical, evidence-based solutions to the health, social,
          economic, and environmental challenges facing communities across Nigeria and beyond,
          through locally led interventions in health, agriculture, education, climate resilience,
          governance, digital innovation, and economic empowerment.
        </p>
      </div>
    </section>
  );
}
