import { cn } from "@/lib/utils";

interface Props {
  label: string;
  className?: string;
}

export default function ImagePlaceholder({ label, className }: Props) {
  return (
    <div
      aria-hidden="true"
      className={cn(
        "relative flex items-center justify-center overflow-hidden rounded-2xl",
        "bg-gradient-to-br from-navy/6 to-navy/10",
        className
      )}
    >
      <div className="absolute left-0 top-0 h-full w-1 rounded-l-2xl bg-gradient-to-b from-orange via-gold to-transparent opacity-70" />
      <div className="absolute bottom-0 left-0 h-1 w-full bg-gradient-to-r from-orange/40 via-gold/30 to-transparent" />
      <p className="px-8 text-center text-xs font-semibold uppercase tracking-widest text-navy/35">
        {label}
      </p>
    </div>
  );
}
