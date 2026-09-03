import { copy } from "@/lib/copy";

export default function Intro() {
  return (
    <section className="bg-cream py-24 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <p className="font-sans font-semibold text-sunrise uppercase tracking-widest text-sm mb-5">
          About HoCAID
        </p>

        <h2
          className="font-display font-bold text-navy leading-tight mb-7
                     text-3xl sm:text-4xl md:text-5xl"
        >
          {copy.mission}
        </h2>

        <p className="font-sans text-navy/65 text-lg leading-relaxed max-w-2xl mx-auto">
          Founded in {copy.org.established}, HoCAID is a grassroots-led organisation working at the
          intersection of health, climate, and community development across Africa. We stand
          alongside communities — not above them — to build systems, skills, and structures
          that endure long after our programmes end. Every initiative we run is shaped by the
          people it serves.
        </p>
      </div>
    </section>
  );
}
