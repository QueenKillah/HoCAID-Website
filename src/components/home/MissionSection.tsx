import type { FC } from "react";
import SectionHeading from "@/components/shared/SectionHeading";
import Button from "@/components/shared/Button";
import { SITE_MISSION, SITE_VISION } from "@/lib/constants";

const MissionSection: FC = () => {
  return (
    <section className="bg-cream px-4 py-16 md:px-8 md:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center lg:gap-20">

          {/* ── Left: narrative ── */}
          <div>
            <SectionHeading
              eyebrow="Who We Are"
              title="Empowering People. Sustaining Futures."
            />
            <div className="space-y-4 text-base leading-relaxed text-grey md:text-lg">
              <p>
                HoCAID is a pan-African non-profit organisation committed to
                driving sustainable development across underserved communities.
                Through our five strategic pillars, we deliver targeted
                programmes that improve health outcomes, expand economic
                opportunity, close the digital divide, protect the environment,
                and champion gender equality and youth participation.
              </p>
              <p>
                We believe that every community holds the potential for
                transformation. Our role is to provide the tools, partnerships,
                and resources to unlock it — and then step back, leaving
                capacity rather than dependency.
              </p>
            </div>
            <div className="mt-8">
              <Button href="/about" variant="secondary">
                Our Story
              </Button>
            </div>
          </div>

          {/* ── Right: mission + vision cards ── */}
          <div className="flex flex-col gap-5">
            <div className="rounded-2xl bg-navy p-7 text-white">
              <p className="mb-3 text-xs font-bold uppercase tracking-widest text-gold">
                Our Mission
              </p>
              <p className="font-display text-xl font-bold leading-snug md:text-2xl">
                {SITE_MISSION}
              </p>
            </div>

            <div className="rounded-2xl bg-orange/5 p-7 ring-1 ring-orange/20">
              <p className="mb-3 text-xs font-bold uppercase tracking-widest text-orange">
                Our Vision
              </p>
              <p className="font-display text-xl font-bold leading-snug text-navy md:text-2xl">
                {SITE_VISION}
              </p>
            </div>

            {/* Quick stats row */}
            <div className="grid grid-cols-3 gap-3">
              {[
                { value: "5", label: "Countries" },
                { value: "30+", label: "Projects" },
                { value: "10k+", label: "Lives Impacted" },
              ].map((s) => (
                <div
                  key={s.label}
                  className="rounded-xl bg-white p-4 text-center shadow-sm ring-1 ring-black/5"
                >
                  <p className="font-display text-2xl font-black text-navy">
                    {s.value}
                  </p>
                  <p className="mt-0.5 text-xs text-grey">{s.label}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default MissionSection;
