import type { FC } from "react";
import Button from "@/components/shared/Button";

const DonateCTABanner: FC = () => {
  return (
    <section className="relative overflow-hidden px-4 py-16 md:px-8 md:py-24">
      {/* Gradient background */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-cta"
      />
      {/* Decorative blobs */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute -left-20 -top-20 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
        <div className="absolute -bottom-20 -right-20 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto flex max-w-3xl flex-col items-center gap-6 text-center">
        <p className="text-xs font-bold uppercase tracking-widest text-white/70">
          Aid. Develop. Transform.
        </p>

        <h2 className="font-display text-3xl font-black leading-tight text-white text-balance md:text-4xl lg:text-5xl">
          Lighting the Path for Communities in Need
        </h2>

        <p className="max-w-xl text-base leading-relaxed text-white/85 md:text-lg">
          Every donation funds mobile clinics, farmer cooperatives, digital
          hubs, and girls&apos; scholarships. Every volunteer multiplies our
          reach. Join thousands already making a difference.
        </p>

        <div className="flex flex-col gap-3 sm:flex-row">
          <Button href="/get-involved#donate" variant="outline-white" size="lg">
            Donate Now
          </Button>
          <Button
            href="/get-involved#volunteer"
            size="lg"
            className="bg-white text-orange hover:bg-white/90"
          >
            Volunteer
          </Button>
        </div>
      </div>
    </section>
  );
};

export default DonateCTABanner;
