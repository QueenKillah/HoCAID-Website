import type { Metadata } from "next";
import Image from "next/image";
import { CheckCircle2, Mail } from "lucide-react";
import PageHero from "@/components/layout/PageHero";
import SectionHeading from "@/components/shared/SectionHeading";
import Button from "@/components/shared/Button";
import VolunteerForm from "@/components/forms/VolunteerForm";

export const metadata: Metadata = {
  title: "Get Involved | HoCAID",
  description:
    "Join HoCAID — volunteer your skills, partner with us, or donate to support our mission across Africa.",
  openGraph: {
    title: "Get Involved | HoCAID",
    description:
      "Join HoCAID — volunteer your skills, partner with us, or donate to support our mission across Africa.",
    url: "/get-involved",
  },
};

const partnerTiers = [
  {
    type: "Implementation Partner",
    description:
      "Co-design and co-deliver field programmes with HoCAID. Ideal for local NGOs, CBOs, and government agencies working in our programme areas.",
    benefits: [
      "Joint programme design and co-branding",
      "Access to HoCAID's MEL framework and tools",
      "Inclusion in donor reports and impact publications",
      "Capacity building and technical support",
    ],
  },
  {
    type: "Funding Partner",
    description:
      "Provide grants, donations, or in-kind support to fund specific programmes or operational costs. Ideal for foundations, bilateral agencies, and corporate CSR programmes.",
    benefits: [
      "Named recognition in annual reports and communications",
      "Quarterly programme updates and financial reporting",
      "Site visit opportunities",
      "Direct input on programme priorities",
    ],
  },
  {
    type: "Knowledge Partner",
    description:
      "Contribute research, technical expertise, or training to strengthen our evidence base and programme quality. Ideal for universities, think tanks, and specialist consultancies.",
    benefits: [
      "Joint research and publication opportunities",
      "Access to programme data for academic use",
      "Co-facilitation of training and workshops",
      "Speaking opportunities at HoCAID events",
    ],
  },
];

const donateAmounts = [25, 50, 100, 250];

export default function GetInvolvedPage() {
  return (
    <>
      <PageHero
        title="Get Involved"
        breadcrumbs={[{ label: "Get Involved" }]}
        description="Whether you volunteer, partner, or donate — every contribution drives real change in communities across Africa."
        size="md"
        ctas={[
          { label: "Volunteer", href: "#volunteer", variant: "primary" },
          { label: "Partner With Us", href: "#partner", variant: "outline-white" },
          { label: "Donate", href: "#donate", variant: "outline-white" },
        ]}
      />

      {/* ── Volunteer ── */}
      <section id="volunteer" className="scroll-mt-20 bg-white px-4 py-16 md:px-8 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-20">
            <div>
              <SectionHeading
                eyebrow="Volunteer"
                title="Bring Your Skills Where They're Needed Most"
              />
              <p className="text-base leading-relaxed text-grey md:text-lg">
                HoCAID volunteers work alongside our teams in the field and remotely — from health outreach to digital literacy training, from agricultural coaching to communications support. No two volunteer journeys are the same.
              </p>
              <ul className="mt-6 space-y-3">
                {[
                  "Field programme support across all five pillars",
                  "Remote roles in communications, research, and design",
                  "Short-term and long-term placements available",
                  "Full induction, supervision, and support provided",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle2 size={17} className="mt-0.5 shrink-0 text-orange" aria-hidden="true" />
                    <span className="text-sm text-grey">{item}</span>
                  </li>
                ))}
              </ul>

              <div className="relative mt-8 h-48 w-full overflow-hidden rounded-2xl">
                <Image
                  src="/images/hanna-morris-3EkT6xb4K9w-unsplash.jpg"
                  alt="Children in a HoCAID community programme"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </div>
            <div>
              <VolunteerForm />
            </div>
          </div>
        </div>
      </section>

      {/* ── Partner ── */}
      <section id="partner" className="scroll-mt-20 bg-cream px-4 py-16 md:px-8 md:py-24">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Partner With Us"
            title="Build the Change Together"
            description="HoCAID partners with organisations across the development ecosystem. We work with you — not around you — to design partnerships that multiply impact."
            centered
          />
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
            {partnerTiers.map((tier) => (
              <div
                key={tier.type}
                className="flex flex-col gap-5 rounded-2xl bg-white p-7 shadow-sm ring-1 ring-black/5"
              >
                <div>
                  <h3 className="font-display text-xl font-bold text-navy">{tier.type}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-grey">{tier.description}</p>
                </div>
                <ul className="flex-1 space-y-2">
                  {tier.benefits.map((b) => (
                    <li key={b} className="flex items-start gap-2 text-sm text-grey">
                      <CheckCircle2 size={15} className="mt-0.5 shrink-0 text-orange" aria-hidden="true" />
                      {b}
                    </li>
                  ))}
                </ul>
                <a
                  href="mailto:partnerships@hocaid.ng"
                  className="flex items-center gap-2 text-sm font-semibold text-orange hover:underline"
                >
                  <Mail size={14} aria-hidden="true" />
                  partnerships@hocaid.ng
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Donate ── */}
      <section id="donate" className="scroll-mt-20 bg-navy px-4 py-16 md:px-8 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center lg:gap-20">
            <div>
              <SectionHeading
                eyebrow="Donate"
                title="Fund the Change You Want to See"
                description="Every donation goes directly to programme delivery — mobile clinics, farmer cooperatives, digital hubs, and girls' scholarships."
                light
              />
              <ul className="space-y-3">
                {[
                  "$25 trains a community health worker for one day",
                  "$50 provides a month of digital access for a family",
                  "$100 equips a girl with a full school-term scholarship",
                  "$250 funds a farmer cooperative meeting and training session",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle2 size={17} className="mt-0.5 shrink-0 text-gold" aria-hidden="true" />
                    <span className="text-sm text-white/80">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl bg-white p-8">
              <p className="mb-1 text-xs font-bold uppercase tracking-widest text-grey/60">
                Choose an amount
              </p>
              <div className="mt-4 grid grid-cols-4 gap-3">
                {donateAmounts.map((amt) => (
                  <div
                    key={amt}
                    className="flex h-14 cursor-pointer items-center justify-center rounded-xl border-2 border-grey/15 text-base font-bold text-navy transition-colors hover:border-orange hover:text-orange"
                  >
                    ${amt}
                  </div>
                ))}
              </div>
              <div className="mt-3">
                <input
                  type="number"
                  placeholder="Custom amount ($)"
                  className="h-12 w-full rounded-xl border border-grey/30 px-4 text-base text-navy placeholder:text-grey/50 focus:border-navy focus:outline-none focus:ring-1 focus:ring-navy"
                  min={1}
                />
              </div>
              <div className="mt-4 flex gap-3">
                {["One-time", "Monthly"].map((freq) => (
                  <div
                    key={freq}
                    className={`flex-1 cursor-pointer rounded-xl border-2 py-2 text-center text-sm font-semibold transition-colors ${
                      freq === "One-time"
                        ? "border-navy bg-navy text-white"
                        : "border-grey/20 text-grey hover:border-navy hover:text-navy"
                    }`}
                  >
                    {freq}
                  </div>
                ))}
              </div>

              <Button href="/contact" variant="primary" size="lg" fullWidth className="mt-5">
                Donate Now
              </Button>
              <p className="mt-3 text-center text-xs text-grey">
                Secure payment integration coming soon. To donate now, please{" "}
                <a href="mailto:donate@hocaid.ng" className="font-semibold text-orange hover:underline">
                  contact us directly
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
