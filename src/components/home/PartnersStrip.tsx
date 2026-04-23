import type { FC } from "react";
import { PARTNERS } from "@/lib/constants";

const PartnersStrip: FC = () => {
  return (
    <section className="bg-white px-4 py-10 md:px-8 md:py-16">
      <div className="mx-auto max-w-7xl">
        <p className="mb-8 text-center text-xs font-bold uppercase tracking-widest text-grey/60">
          Our Partners &amp; Supporters
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6">
          {PARTNERS.map((partner) => (
            <div
              key={partner.name}
              className="flex min-w-[100px] flex-col items-center justify-center rounded-xl border border-grey/10 bg-grey/5 px-5 py-4 text-center transition-colors hover:bg-grey/10"
            >
              <span className="text-sm font-bold text-navy">{partner.name}</span>
              <span className="mt-0.5 text-xs text-grey/60">{partner.type}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersStrip;
