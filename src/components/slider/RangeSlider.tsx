import { useRef, type ReactNode } from "react";
import RangeTrack from "./RangeTrack";
import { RangeThumb } from "./RangeThumb";
import { RangeProgressTrack } from "./RangeProgressTrack";

function RangeSlider({ children }: { children?: ReactNode }) {
  const trackRef = useRef<HTMLDivElement>(null);

  return (
    <div className="tw-relative">
      <div className="tw-flex tw-items-center tw-h-max tw-relative tw-overflow-hidden">
        <RangeThumb trackRef={trackRef} />
        <RangeProgressTrack />
        <RangeTrack ref={trackRef} className="tw-bg-gray-300" />
      </div>
      {children}
    </div>
  );
}

export default RangeSlider;
