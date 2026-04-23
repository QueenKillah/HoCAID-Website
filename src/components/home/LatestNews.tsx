import type { FC } from "react";
import Link from "next/link";
import SectionHeading from "@/components/shared/SectionHeading";
import NewsCard from "@/components/shared/NewsCard";
import { SAMPLE_NEWS } from "@/lib/constants";

const LatestNews: FC = () => {
  return (
    <section className="bg-cream px-4 py-12 md:px-8 md:py-20">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading
            eyebrow="News & Insights"
            title="Stories from the Field"
          />
          <Link
            href="/news"
            className="mb-10 shrink-0 text-sm font-semibold text-orange transition-colors hover:text-orange/80 md:mb-14"
          >
            View all news →
          </Link>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {SAMPLE_NEWS.map((article) => (
            <NewsCard key={article.slug} article={article} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default LatestNews;
