import { type ForwardedRef, forwardRef, type HTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

interface RangeTrack extends HTMLAttributes<HTMLDivElement> {}

function RangeTrack(
  { className, ...rest }: Omit<RangeTrack, "children">,
  ref: ForwardedRef<any>
) {
  return (
    <div
      className={twMerge(
        "tw-absolute tw-h-1 tw-left-0 tw-right-0 tw-rounded-4xl",
        className
      )}
      {...rest}
      ref={ref}
    />
  );
}

export default forwardRef(RangeTrack);
