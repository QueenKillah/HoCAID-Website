import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/layout/PageHero";
import SectionHeading from "@/components/shared/SectionHeading";
import NewsCard from "@/components/shared/NewsCard";
import FadeUp from "@/components/motion/FadeUp";
import { SAMPLE_NEWS } from "@/lib/constants";
import { formatDate } from "@/lib/utils";

export const metadata: Metadata = {
  title: "News & Insights | HoCAID",
  description:
    "The latest news, stories, and insights from HoCAID and the communities we serve across Africa.",
  openGraph: {
    title: "News & Insights | HoCAID",
    description:
      "The latest news, stories, and insights from HoCAID and the communities we serve across Africa.",
    url: "/news",
  },
};

const [featured, ...rest] = SAMPLE_NEWS;

export default function NewsPage() {
  return (
    <>
      <PageHero
        title="News & Insights"
        breadcrumbs={[{ label: "News" }]}
        description="Updates, stories, and perspectives from across our programmes and the communities we serve."
        size="md"
      />

      {/* ── Featured article ── */}
      <section className="bg-white px-4 py-16 md:px-8 md:py-20">
        <div className="mx-auto max-w-7xl">
          <p className="mb-6 text-xs font-bold uppercase tracking-widest text-orange">
            Featured Story
          </p>
          <FadeUp>
          <Link
            href={`/news/${featured.slug}`}
            className="group grid grid-cols-1 gap-8 rounded-2xl bg-cream p-8 ring-1 ring-black/5 transition-shadow hover:shadow-md lg:grid-cols-5 lg:gap-12"
          >
            <div className="lg:col-span-3">
              <span className="inline-block rounded-full bg-orange/10 px-3 py-1 text-xs font-bold text-orange">
                {featured.category}
              </span>
              <h2 className="mt-3 font-display text-2xl font-bold text-navy group-hover:text-orange md:text-3xl">
                {featured.title}
              </h2>
              <p className="mt-3 text-base leading-relaxed text-grey">
                {featured.excerpt}
              </p>
              <div className="mt-5 flex items-center gap-3 text-sm text-grey">
                <span>{featured.author}</span>
                <span aria-hidden="true">·</span>
                <time dateTime={featured.date}>{formatDate(featured.date)}</time>
              </div>
              <span className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-orange group-hover:underline">
                Read full story →
              </span>
            </div>
            <div
              aria-hidden="true"
              className="hidden rounded-xl bg-navy/5 lg:col-span-2 lg:block"
            />
          </Link>
          </FadeUp>
        </div>
      </section>

      {/* ── All articles ── */}
      {rest.length > 0 && (
        <section className="bg-cream px-4 pb-20 md:px-8">
          <div className="mx-auto max-w-7xl">
            <SectionHeading eyebrow="All Stories" title="Latest from HoCAID" />
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {rest.map((article, i) => (
                <FadeUp key={article.slug} delay={i * 0.08}>
                  <NewsCard article={article} />
                </FadeUp>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── MDX notice ── */}
      <section className="bg-navy px-4 py-12 md:px-8 md:py-16">
        <div className="mx-auto flex max-w-2xl flex-col items-center gap-4 text-center">
          <p className="font-display text-xl font-bold text-white md:text-2xl">
            More stories are on the way.
          </p>
          <p className="text-sm text-white/65">
            Our full editorial archive will be published from MDX content in the next phase. In the meantime, follow us on social media for the latest updates.
          </p>
        </div>
      </section>
    </>
  );
}
