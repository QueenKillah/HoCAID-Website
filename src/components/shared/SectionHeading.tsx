import type { FC, ElementType } from "react";
import { cn } from "@/lib/utils";

interface Props {
  /** Small label rendered above the main title */
  eyebrow?: string;
  /** Main headline — rendered in Playfair Display */
  title: string;
  /** Supporting paragraph below the title */
  description?: string;
  /** Center-aligns all text */
  centered?: boolean;
  /** Inverts colours for use on dark/navy backgrounds */
  light?: boolean;
  /** HTML heading level (default: h2) */
  as?: "h1" | "h2" | "h3" | "h4";
  /** Extra classes on the wrapper div */
  className?: string;
}

const SectionHeading: FC<Props> = ({
  eyebrow,
  title,
  description,
  centered = false,
  light = false,
  as,
  className,
}) => {
  const Tag = (as ?? "h2") as ElementType;

  return (
    <div
      className={cn(
        "mb-10 md:mb-14",
        centered && "text-center",
        className
      )}
    >
      {/* Eyebrow with accent line */}
      {eyebrow && (
        <div
          className={cn(
            "mb-3 flex items-center gap-2.5",
            centered && "justify-center"
          )}
        >
          <span
            aria-hidden="true"
            className={cn(
              "h-0.5 w-6 shrink-0 rounded-full",
              light ? "bg-gold" : "bg-orange"
            )}
          />
          <p
            className={cn(
              "text-xs font-bold uppercase tracking-widest",
              light ? "text-gold" : "text-orange"
            )}
          >
            {eyebrow}
          </p>
        </div>
      )}

      {/* Headline */}
      <Tag
        className={cn(
          "font-display text-2xl font-bold leading-tight text-balance md:text-3xl lg:text-4xl",
          light ? "text-white" : "text-navy"
        )}
      >
        {title}
      </Tag>

      {/* Description */}
      {description && (
        <p
          className={cn(
            "mt-4 max-w-2xl text-base leading-relaxed md:text-lg",
            light ? "text-white/75" : "text-grey",
            centered && "mx-auto"
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
};

export default SectionHeading;
