import type { FC } from "react";
import Link from "next/link";
import Image from "next/image";
import type { NewsArticle } from "@/lib/types";
import { formatDate } from "@/lib/utils";

interface Props {
  article: NewsArticle;
}

const NewsCard: FC<Props> = ({ article }) => {
  return (
    <article className="flex flex-col rounded-xl bg-white shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-md">
      {article.imageUrl ? (
        <div className="relative h-48 w-full overflow-hidden rounded-t-xl">
          <Image
            src={article.imageUrl}
            alt={article.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover"
            loading="lazy"
          />
        </div>
      ) : (
        <div className="relative flex h-44 w-full items-center justify-center overflow-hidden rounded-t-xl bg-gradient-to-br from-navy/5 to-navy/10">
          <div className="absolute bottom-0 left-0 h-0.5 w-full bg-gradient-to-r from-orange/50 via-gold/40 to-transparent" />
          <div className="absolute left-0 top-0 h-full w-1 rounded-tl-xl bg-gradient-to-b from-orange via-gold to-transparent opacity-60" />
          <p className="text-xs font-semibold uppercase tracking-widest text-navy/35">
            {article.category} Story
          </p>
        </div>
      )}
      <div className="flex flex-1 flex-col p-4 md:p-6">
        <div className="flex items-center gap-2 text-xs text-grey">
          <span>{formatDate(article.date)}</span>
          <span>·</span>
          <span className="font-medium text-orange">{article.category}</span>
        </div>
        <h3 className="mt-2 font-display text-xl font-bold text-navy">
          {article.title}
        </h3>
        <p className="mt-2 flex-1 text-sm text-grey">{article.excerpt}</p>
        <Link
          href={`/news/${article.slug}`}
          className="mt-4 text-sm font-semibold text-orange hover:underline"
        >
          Read more →
        </Link>
      </div>
    </article>
  );
};

export default NewsCard;
