import { type LucideIcon } from "lucide-react";
import { twMerge } from "tailwind-merge";

interface IconProps {
  Component: LucideIcon;
  className?: string;
}

function Icon({ Component, className }: IconProps) {
  return <Component className={twMerge("tw-size-6", className)} />;
}

export default Icon;
