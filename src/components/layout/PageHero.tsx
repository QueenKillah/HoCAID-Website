import type { FC } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";
import { cn } from "@/lib/utils";
import Button from "@/components/shared/Button";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface CTAButton {
  label: string;
  href: string;
  variant?: "primary" | "outline-white";
}

interface Props {
  /** Main page title */
  title: string;
  /** Supporting subtitle / description */
  description?: string;
  /**
   * Single string → rendered as one breadcrumb after Home
   * (kept for backward compatibility with page stubs)
   */
  breadcrumb?: string;
  /** Full breadcrumb trail (takes priority over breadcrumb string) */
  breadcrumbs?: BreadcrumbItem[];
  /** Optional hero background image path (under /public) */
  imageSrc?: string;
  /** Alt text for background image */
  imageAlt?: string;
  /** Call-to-action buttons rendered below the subtitle */
  ctas?: CTAButton[];
  /** Text alignment (default: center) */
  align?: "center" | "left";
  /** Minimum height variant */
  size?: "sm" | "md" | "lg";
}

const sizes = {
  sm: "min-h-[280px] md:min-h-[320px]",
  md: "min-h-[360px] md:min-h-[440px]",
  lg: "min-h-[480px] md:min-h-[580px]",
};

const PageHero: FC<Props> = ({
  title,
  description,
  breadcrumb,
  breadcrumbs,
  imageSrc,
  imageAlt = "",
  ctas,
  align = "center",
  size = "md",
}) => {
  // Normalise breadcrumb trail
  const crumbs: BreadcrumbItem[] =
    breadcrumbs ??
    (breadcrumb ? [{ label: breadcrumb }] : []);

  return (
    <section
      className={cn(
        "relative flex flex-col justify-end overflow-hidden bg-navy text-white",
        sizes[size]
      )}
    >
      {/* ── Background image + overlay ── */}
      {imageSrc ? (
        <>
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            priority
            className="object-cover object-center"
            sizes="100vw"
          />
          {/* Multi-stop gradient: crisp navy at bottom, light tint at top */}
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-gradient-to-t from-navy via-navy/75 to-navy/40"
          />
        </>
      ) : (
        /* Decorative abstract gradient when there is no image */
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-br from-navy via-navy to-[#0e3060] opacity-100"
        >
          {/* Subtle radial accent */}
          <div className="absolute -right-32 -top-32 h-[500px] w-[500px] rounded-full bg-orange/5 blur-3xl" />
          <div className="absolute -bottom-16 -left-16 h-[400px] w-[400px] rounded-full bg-sky/5 blur-3xl" />
        </div>
      )}

      {/* ── Content ── */}
      <div
        className={cn(
          "relative z-10 mx-auto w-full max-w-7xl px-4 py-12 md:px-8 md:py-16",
          align === "center" ? "text-center" : "text-left"
        )}
      >
        {/* Breadcrumb */}
        {crumbs.length > 0 && (
          <nav aria-label="Breadcrumb" className="mb-4">
            <ol
              className={cn(
                "flex flex-wrap items-center gap-1 text-sm text-white/55",
                align === "center" && "justify-center"
              )}
            >
              <li>
                <Link
                  href="/"
                  className="flex items-center gap-1 transition-colors hover:text-gold"
                >
                  <Home size={13} aria-hidden="true" />
                  <span>Home</span>
                </Link>
              </li>
              {crumbs.map((crumb, i) => (
                <li key={i} className="flex items-center gap-1">
                  <ChevronRight
                    size={13}
                    aria-hidden="true"
                    className="text-white/30"
                  />
                  {crumb.href ? (
                    <Link
                      href={crumb.href}
                      className="transition-colors hover:text-gold"
                    >
                      {crumb.label}
                    </Link>
                  ) : (
                    <span
                      aria-current="page"
                      className="font-medium text-white/90"
                    >
                      {crumb.label}
                    </span>
                  )}
                </li>
              ))}
            </ol>
          </nav>
        )}

        {/* Title */}
        <h1
          className={cn(
            "font-display text-3xl font-bold text-balance md:text-4xl lg:text-5xl",
            align === "left" && "max-w-3xl"
          )}
        >
          {title}
        </h1>

        {/* Divider accent */}
        <div
          aria-hidden="true"
          className={cn(
            "mt-4 h-1 w-12 rounded-full bg-gradient-cta",
            align === "center" && "mx-auto"
          )}
        />

        {/* Description */}
        {description && (
          <p
            className={cn(
              "mt-4 text-base text-white/80 md:text-lg",
              align === "center" && "mx-auto max-w-2xl",
              align === "left" && "max-w-2xl"
            )}
          >
            {description}
          </p>
        )}

        {/* CTAs */}
        {ctas && ctas.length > 0 && (
          <div
            className={cn(
              "mt-8 flex flex-col gap-3 sm:flex-row",
              align === "center" && "justify-center"
            )}
          >
            {ctas.map((cta) => (
              <Button
                key={cta.href}
                href={cta.href}
                variant={cta.variant ?? "primary"}
                size="lg"
              >
                {cta.label}
              </Button>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default PageHero;
