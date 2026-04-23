import type { FC, ButtonHTMLAttributes, ReactNode } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  /** Visual style */
  variant?: "primary" | "secondary" | "outline" | "outline-white" | "ghost";
  /** Size preset */
  size?: "sm" | "md" | "lg";
  /** Renders as a Next.js <Link> when provided */
  href?: string;
  /** Stretches button to 100% width of its container */
  fullWidth?: boolean;
  /** Icon rendered before the label */
  leftIcon?: ReactNode;
  /** Icon rendered after the label */
  rightIcon?: ReactNode;
  /** Shows a spinner and disables interaction */
  loading?: boolean;
  /** Opens href in a new tab (only applies when href is set) */
  external?: boolean;
}

const Spinner = () => (
  <svg
    className="animate-spin"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    aria-hidden="true"
  >
    <circle
      className="opacity-25"
      cx="12"
      cy="12"
      r="10"
      stroke="currentColor"
      strokeWidth="4"
    />
    <path
      className="opacity-75"
      fill="currentColor"
      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
    />
  </svg>
);

const Button: FC<Props> = ({
  variant = "primary",
  size = "md",
  href,
  fullWidth = false,
  leftIcon,
  rightIcon,
  loading = false,
  external = false,
  className,
  children,
  disabled,
  ...props
}) => {
  const base = [
    "inline-flex items-center justify-center gap-2 rounded-lg font-semibold",
    "min-h-[44px] min-w-[44px]",
    "transition-all duration-200",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
    "disabled:cursor-not-allowed disabled:opacity-50",
  ].join(" ");

  const variants: Record<NonNullable<Props["variant"]>, string> = {
    primary:
      "bg-gradient-cta text-white shadow-sm hover:opacity-90 active:scale-[0.98] focus-visible:ring-orange",
    secondary:
      "bg-navy text-white hover:bg-navy/90 active:scale-[0.98] focus-visible:ring-navy",
    outline:
      "border-2 border-navy text-navy hover:bg-navy hover:text-white active:scale-[0.98] focus-visible:ring-navy",
    "outline-white":
      "border-2 border-white text-white hover:bg-white hover:text-navy active:scale-[0.98] focus-visible:ring-white",
    ghost:
      "text-navy hover:bg-navy/10 active:scale-[0.98] focus-visible:ring-navy",
  };

  const sizes: Record<NonNullable<Props["size"]>, string> = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  const classes = cn(
    base,
    variants[variant],
    sizes[size],
    fullWidth && "w-full",
    loading && "cursor-wait",
    className
  );

  const content = (
    <>
      {loading ? <Spinner /> : leftIcon}
      <span>{children}</span>
      {!loading && rightIcon}
    </>
  );

  if (href) {
    return (
      <Link
        href={href}
        className={classes}
        {...(external
          ? { target: "_blank", rel: "noopener noreferrer" }
          : {})}
        aria-disabled={loading || disabled}
      >
        {content}
      </Link>
    );
  }

  return (
    <button
      className={classes}
      disabled={disabled || loading}
      aria-busy={loading}
      {...props}
    >
      {content}
    </button>
  );
};

export default Button;
