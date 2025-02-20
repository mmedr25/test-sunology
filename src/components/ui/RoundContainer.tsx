import { type HTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

export interface RoundContainerProps extends HTMLAttributes<HTMLDivElement> {}

function RoundContainer({ children, className, ...rest }: RoundContainerProps) {
  return (
    <div className={twMerge("tw-rounded-3xl tw-border-2", className)} {...rest}>
      {children}
    </div>
  );
}

export default RoundContainer;
