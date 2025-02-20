import { type HTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

interface TextProps extends HTMLAttributes<HTMLParagraphElement> {}

function Text({ children, className, ...rest }: TextProps) {
  return (
    <p className={twMerge("first-letter:tw-uppercase", className)} {...rest}>
      {children}
    </p>
  );
}

export default Text;
