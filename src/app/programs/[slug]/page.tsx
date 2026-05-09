import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import { CheckCircle2, MapPin, Calendar, Tag } from "lucide-react";
import PageHero from "@/components/layout/PageHero";
import Button from "@/components/shared/Button";
import ImagePlaceholder from "@/components/shared/ImagePlaceholder";
import { SAMPLE_PROJECTS } from "@/lib/constants";
import { formatDate } from "@/lib/utils";

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  return SAMPLE_PROJECTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const project = SAMPLE_PROJECTS.find((p) => p.slug === params.slug);
  if (!project) return {};
  return {
    title: `${project.title} | HoCAID Programs`,
    description: project.description,
    openGraph: {
      title: `${project.title} | HoCAID Programs`,
      description: project.description,
      url: `/programs/${params.slug}`,
    },
  };
}

export default function ProjectDetailPage({ params }: Props) {
  const project = SAMPLE_PROJECTS.find((p) => p.slug === params.slug);
  if (!project) notFound();

  const dateRange = project.endDate
    ? `${formatDate(project.startDate + "-01")} – ${formatDate(project.endDate + "-01")}`
    : `${formatDate(project.startDate + "-01")} – Present`;

  return (
    <>
      <PageHero
        title={project.title}
        breadcrumbs={[
          { label: "Programs", href: "/programs" },
          { label: project.title },
        ]}
        description={project.pillar}
        size="md"
      />

      <section className="bg-white px-4 py-16 md:px-8 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-3 lg:gap-16">

            {/* ── Main content ── */}
            <div className="lg:col-span-2">
              {project.imageUrl ? (
                <div className="relative mb-8 h-56 w-full overflow-hidden rounded-2xl">
                  <Image
                    src={project.imageUrl}
                    alt={project.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 66vw"
                    className="object-cover"
                    priority
                  />
                </div>
              ) : (
                <ImagePlaceholder
                  label={`${project.title} — Project Photo`}
                  className="mb-8 h-56"
                />
              )}

              {/* Status badge */}
              <span
                className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wider ${
                  project.status === "active"
                    ? "bg-green/10 text-green"
                    : "bg-grey/10 text-grey"
                }`}
              >
                <span
                  aria-hidden="true"
                  className={`h-1.5 w-1.5 rounded-full ${
                    project.status === "active" ? "bg-green" : "bg-grey"
                  }`}
                />
                {project.status === "active" ? "Active Project" : "Completed"}
              </span>

              <h2 className="mt-6 font-display text-2xl font-bold text-navy md:text-3xl">
                About This Project
              </h2>
              <p className="mt-4 text-base leading-relaxed text-grey md:text-lg">
                {project.description}
              </p>

              {/* Outcomes */}
              {project.outcomes && project.outcomes.length > 0 && (
                <div className="mt-10">
                  <h3 className="font-display text-xl font-bold text-navy md:text-2xl">
                    Key Outcomes
                  </h3>
                  <ul className="mt-5 space-y-3">
                    {project.outcomes.map((outcome) => (
                      <li key={outcome} className="flex items-start gap-3">
                        <CheckCircle2
                          size={18}
                          className="mt-0.5 shrink-0 text-orange"
                          aria-hidden="true"
                        />
                        <span className="text-sm leading-relaxed text-grey md:text-base">
                          {outcome}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* CTA */}
              <div className="mt-12 flex flex-col gap-3 sm:flex-row">
                <Button href="/get-involved" variant="primary">
                  Get Involved
                </Button>
                <Button href="/contact" variant="secondary">
                  Enquire About This Project
                </Button>
              </div>
            </div>

            {/* ── Sidebar ── */}
            <aside className="flex flex-col gap-4">
              <div className="rounded-2xl bg-cream p-6">
                <h3 className="mb-4 text-xs font-bold uppercase tracking-widest text-grey/60">
                  Project Details
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <Tag size={16} className="mt-0.5 shrink-0 text-orange" aria-hidden="true" />
                    <div>
                      <p className="text-xs font-semibold text-grey/60">Pillar</p>
                      <p className="text-sm font-medium text-navy">{project.pillar}</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <MapPin size={16} className="mt-0.5 shrink-0 text-orange" aria-hidden="true" />
                    <div>
                      <p className="text-xs font-semibold text-grey/60">Location</p>
                      <p className="text-sm font-medium text-navy">{project.location}</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Calendar size={16} className="mt-0.5 shrink-0 text-orange" aria-hidden="true" />
                    <div>
                      <p className="text-xs font-semibold text-grey/60">Timeline</p>
                      <p className="text-sm font-medium text-navy">{dateRange}</p>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="rounded-2xl bg-navy p-6 text-white">
                <p className="text-xs font-bold uppercase tracking-widest text-gold">
                  Support This Work
                </p>
                <p className="mt-3 text-sm leading-relaxed text-white/75">
                  Your contribution directly funds programmes like this one — bringing real change to communities that need it most.
                </p>
                <Button href="/get-involved#donate" variant="primary" size="sm" className="mt-4 w-full">
                  Donate Now
                </Button>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}
