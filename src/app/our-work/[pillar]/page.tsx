import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import PageHero from "@/components/layout/PageHero";
import SectionHeading from "@/components/shared/SectionHeading";
import Button from "@/components/shared/Button";
import ImagePlaceholder from "@/components/shared/ImagePlaceholder";
import { PILLARS } from "@/lib/constants";

interface Props {
  params: { pillar: string };
}

export async function generateStaticParams() {
  return PILLARS.map((p) => ({ pillar: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const pillar = PILLARS.find((p) => p.slug === params.pillar);
  if (!pillar) return {};
  return {
    title: `${pillar.title} | HoCAID`,
    description: pillar.description,
    openGraph: {
      title: `${pillar.title} | HoCAID`,
      description: pillar.description,
      url: `/our-work/${params.pillar}`,
    },
  };
}

export default function PillarPage({ params }: Props) {
  const pillar = PILLARS.find((p) => p.slug === params.pillar);
  if (!pillar) notFound();

  return (
    <>
      <PageHero
        title={pillar.title}
        breadcrumbs={[
          { label: "Our Work", href: "/our-work" },
          { label: pillar.shortTitle },
        ]}
        description={pillar.description}
        size="md"
        ctas={[
          { label: "Get Involved", href: "/get-involved", variant: "primary" },
          { label: "Contact Us", href: "/contact", variant: "outline-white" },
        ]}
      />

      {/* ── Full description ── */}
      <section className="bg-white px-4 py-16 md:px-8 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-5 lg:gap-20">
            {/* Left: description + activities */}
            <div className="lg:col-span-3">
              <SectionHeading
                eyebrow={pillar.shortTitle}
                title="What We Do"
              />
              <p className="text-base leading-relaxed text-grey md:text-lg">
                {pillar.fullDescription}
              </p>

              <h3 className="mt-10 font-display text-xl font-bold text-navy md:text-2xl">
                Programme Activities
              </h3>
              <ul className="mt-5 space-y-3">
                {pillar.activities.map((activity) => (
                  <li key={activity} className="flex items-start gap-3">
                    <CheckCircle2
                      size={18}
                      className="mt-0.5 shrink-0 text-orange"
                      aria-hidden="true"
                    />
                    <span className="text-sm leading-relaxed text-grey md:text-base">
                      {activity}
                    </span>
                  </li>
                ))}
              </ul>

              {pillar.imageUrl ? (
                <div className="relative mt-10 h-52 w-full overflow-hidden rounded-2xl">
                  <Image
                    src={pillar.imageUrl}
                    alt={`${pillar.title} field work`}
                    fill
                    sizes="(max-width: 1024px) 100vw, 60vw"
                    className="object-cover"
                  />
                </div>
              ) : (
                <ImagePlaceholder
                  label={`${pillar.shortTitle} Field Work Photo`}
                  className="mt-10 h-52"
                />
              )}
            </div>

            {/* Right: stats + focus chips */}
            <div className="lg:col-span-2">
              {/* Stats */}
              <div className="rounded-2xl bg-navy p-7 text-white">
                <p className="mb-5 text-xs font-bold uppercase tracking-widest text-gold">
                  Impact to Date
                </p>
                <div className="grid grid-cols-2 gap-5">
                  {pillar.stats.map((stat) => (
                    <div key={stat.label}>
                      <p className="font-display text-3xl font-black text-gold">
                        {stat.value}
                      </p>
                      <p className="mt-0.5 text-xs leading-snug text-white/70">
                        {stat.label}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Key focus chips */}
              <div className="mt-6 rounded-2xl bg-cream p-7">
                <p className="mb-4 text-xs font-bold uppercase tracking-widest text-grey/60">
                  Key Focus Areas
                </p>
                <div className="flex flex-wrap gap-2">
                  {pillar.keyFocus.map((focus) => (
                    <span
                      key={focus}
                      className="rounded-full bg-white px-3 py-1 text-xs font-semibold text-navy ring-1 ring-navy/10"
                    >
                      {focus}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA strip ── */}
      <section className="bg-orange/5 px-4 py-12 md:px-8 md:py-16">
        <div className="mx-auto flex max-w-3xl flex-col items-center gap-6 text-center">
          <h2 className="font-display text-2xl font-bold text-navy md:text-3xl">
            Want to support our {pillar.shortTitle} work?
          </h2>
          <p className="text-base text-grey">
            Whether you want to volunteer, partner with us, or fund a programme,
            there are many ways to get involved and make a difference.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Button href="/get-involved" variant="primary" size="lg">
              Get Involved
            </Button>
            <Button href="/contact" variant="secondary" size="lg">
              Contact Us
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
