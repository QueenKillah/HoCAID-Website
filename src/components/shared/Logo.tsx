import type { FC } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface Props {
  className?: string;
  priority?: boolean;
  onError?: () => void;
}

const Logo: FC<Props> = ({ className, priority, onError }) => (
  <div className={cn("h-[36px] w-[108px] overflow-hidden", className)}>
    <Image
      src="/images/logo.png"
      alt="HoCAID"
      width={120}
      height={40}
      className="h-full w-auto scale-[1.15] origin-center"
      style={{ filter: "brightness(0) invert(1)" }}
      priority={priority}
      onError={onError}
    />
  </div>
);

export default Logo;
