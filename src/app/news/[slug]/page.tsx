import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Calendar, User, Tag, ArrowLeft } from "lucide-react";
import PageHero from "@/components/layout/PageHero";
import NewsCard from "@/components/shared/NewsCard";
import Button from "@/components/shared/Button";
import { SAMPLE_NEWS } from "@/lib/constants";
import { formatDate } from "@/lib/utils";

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  return SAMPLE_NEWS.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const article = SAMPLE_NEWS.find((a) => a.slug === params.slug);
  if (!article) return {};
  return {
    title: `${article.title} | HoCAID News`,
    description: article.excerpt,
    openGraph: {
      title: `${article.title} | HoCAID News`,
      description: article.excerpt,
      url: `/news/${params.slug}`,
      type: "article",
    },
  };
}

export default function ArticlePage({ params }: Props) {
  const article = SAMPLE_NEWS.find((a) => a.slug === params.slug);
  if (!article) notFound();

  const related = SAMPLE_NEWS.filter((a) => a.slug !== article.slug).slice(0, 2);

  return (
    <>
      <PageHero
        title={article.title}
        breadcrumbs={[
          { label: "News", href: "/news" },
          { label: article.category },
        ]}
        size="md"
        align="left"
      />

      <section className="bg-white px-4 py-16 md:px-8 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-3 lg:gap-16">

            {/* ── Article body ── */}
            <article className="lg:col-span-2">
              {/* Meta row */}
              <div className="mb-8 flex flex-wrap items-center gap-4 text-sm text-grey">
                <span className="flex items-center gap-1.5">
                  <User size={14} aria-hidden="true" />
                  {article.author}
                </span>
                <span aria-hidden="true">·</span>
                <time dateTime={article.date} className="flex items-center gap-1.5">
                  <Calendar size={14} aria-hidden="true" />
                  {formatDate(article.date)}
                </time>
                <span aria-hidden="true">·</span>
                <span className="flex items-center gap-1.5">
                  <Tag size={14} aria-hidden="true" />
                  <span className="font-semibold text-orange">{article.category}</span>
                </span>
              </div>

              {/* Body — placeholder paragraphs drawn from the excerpt theme */}
              <div className="prose prose-lg max-w-none text-grey">
                <p className="text-lg leading-relaxed">{article.excerpt}</p>

                <p className="mt-6 leading-relaxed">
                  This initiative represents one of the most significant steps forward in HoCAID&apos;s
                  ongoing commitment to community-led development. By working directly with local
                  leaders, health workers, and community members, the programme ensures that
                  interventions are not only effective but sustainable — building capacity that
                  remains long after the project concludes.
                </p>

                <blockquote className="my-8 border-l-4 border-orange pl-6">
                  <p className="font-display text-xl font-bold italic text-navy">
                    &ldquo;The most lasting development happens when communities are not just
                    recipients of aid, but architects of their own transformation.&rdquo;
                  </p>
                  <footer className="mt-2 text-sm text-grey">
                    — Dr. Amira Okafor, Executive Director, HoCAID
                  </footer>
                </blockquote>

                <p className="leading-relaxed">
                  The results to date have exceeded initial projections. Monitoring data collected
                  across all target communities shows significant improvements in key indicators,
                  with particularly strong outcomes among women and young people — the groups most
                  often excluded from the gains of development programmes.
                </p>

                <p className="mt-6 leading-relaxed">
                  HoCAID will publish a full evaluation report later this year. In the meantime,
                  partners and donors interested in learning more about the programme&apos;s
                  methodology and outcomes are encouraged to reach out to the programmes team
                  directly.
                </p>
              </div>

              {/* Back link */}
              <div className="mt-10">
                <Link
                  href="/news"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-orange hover:underline"
                >
                  <ArrowLeft size={15} aria-hidden="true" />
                  Back to all news
                </Link>
              </div>
            </article>

            {/* ── Sidebar ── */}
            <aside className="flex flex-col gap-6">
              <div className="rounded-2xl bg-navy p-6 text-white">
                <p className="text-xs font-bold uppercase tracking-widest text-gold">
                  Support Our Work
                </p>
                <p className="mt-3 text-sm leading-relaxed text-white/75">
                  Stories like this are made possible by donors and partners who believe in
                  community-led change. Join them.
                </p>
                <Button href="/get-involved#donate" variant="primary" size="sm" className="mt-4 w-full">
                  Donate Now
                </Button>
              </div>

              <div className="rounded-2xl bg-cream p-6">
                <p className="mb-4 text-xs font-bold uppercase tracking-widest text-grey/60">
                  Share This Story
                </p>
                <div className="flex gap-2">
                  {["Twitter / X", "LinkedIn", "Facebook"].map((platform) => (
                    <span
                      key={platform}
                      className="rounded-lg bg-white px-3 py-2 text-xs font-semibold text-navy ring-1 ring-black/10"
                    >
                      {platform}
                    </span>
                  ))}
                </div>
              </div>
            </aside>
          </div>

          {/* ── Related articles ── */}
          {related.length > 0 && (
            <div className="mt-16 border-t border-grey/15 pt-12">
              <h2 className="mb-8 font-display text-2xl font-bold text-navy">
                More Stories
              </h2>
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                {related.map((a) => (
                  <NewsCard key={a.slug} article={a} />
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
