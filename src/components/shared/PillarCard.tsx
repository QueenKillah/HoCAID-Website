import type { FC } from "react";
import Link from "next/link";
import { Heart, Sprout, Monitor, Leaf, Users, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import type { Pillar } from "@/lib/types";

const iconMap = { Heart, Sprout, Monitor, Leaf, Users } as const;

const colorStyles: Record<
  string,
  { iconBg: string; iconText: string; bar: string }
> = {
  sky:    { iconBg: "bg-sky/10",    iconText: "text-sky",    bar: "bg-sky"    },
  green:  { iconBg: "bg-green/10",  iconText: "text-green",  bar: "bg-green"  },
  navy:   { iconBg: "bg-navy/10",   iconText: "text-navy",   bar: "bg-navy"   },
  orange: { iconBg: "bg-orange/10", iconText: "text-orange", bar: "bg-orange" },
};

interface Props {
  pillar: Pillar;
}

const PillarCard: FC<Props> = ({ pillar }) => {
  const Icon = iconMap[pillar.icon as keyof typeof iconMap] ?? Heart;
  const colors = colorStyles[pillar.color] ?? colorStyles.navy;

  return (
    <Link
      href={pillar.href}
      className="group flex flex-col rounded-2xl bg-white p-6 shadow-sm ring-1 ring-black/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg md:p-7"
    >
      {/* Icon container */}
      <div
        className={cn(
          "mb-5 flex h-12 w-12 items-center justify-center rounded-xl",
          colors.iconBg
        )}
      >
        <Icon
          size={24}
          className={cn("shrink-0", colors.iconText)}
          aria-hidden="true"
        />
      </div>

      {/* Colour accent bar */}
      <div
        aria-hidden="true"
        className={cn(
          "mb-4 h-0.5 w-8 rounded-full transition-all duration-300 group-hover:w-14",
          colors.bar
        )}
      />

      <h3 className="font-display text-xl font-bold text-navy md:text-2xl">
        {pillar.title}
      </h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-grey md:text-base">
        {pillar.description}
      </p>

      <span className="mt-5 flex items-center gap-1.5 text-sm font-semibold text-orange">
        Learn more
        <ArrowRight
          size={15}
          aria-hidden="true"
          className="transition-transform duration-200 group-hover:translate-x-1"
        />
      </span>
    </Link>
  );
};

export default PillarCard;
