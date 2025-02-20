import { type RefObject, useState, useRef, type MouseEventHandler, useCallback, useEffect } from "react";
import Icon from "../ui/Icon";
import { MoveLeft } from "lucide-react";
import { useRangeCalc } from "@/hooks/range-calc";

// TODO: handle changes in the size of the track
export function RangeThumb({ trackRef }: { trackRef: RefObject<HTMLDivElement | null> }) {
  const [isDragging, setIsDragging] = useState(false);
  const [position, setPosition] = useState(0);
  const [offset, setOffset] = useState(0);
  const {period, calcPeriod} = useRangeCalc();
  const thumbRef = useRef<HTMLDivElement>(null);


  // stop or release mouse
  const handleMouseUp = () => {
    setIsDragging(false);
  }


  // start dragging
  const handleMouseDown: MouseEventHandler<HTMLDivElement> = useCallback((event) => {
    event.preventDefault();
    event.stopPropagation();

    setIsDragging(true);
    setOffset(event.clientX - position); // Calculate the offset from the cursor to the slider position
  }, [position]);


  // calculate position of the thumb and period
  const handleMouseMove = useCallback((event: MouseEvent) => {
    if (isDragging && trackRef.current && thumbRef.current) {
      const trackRect = trackRef.current.getBoundingClientRect();
      const sliderRect = thumbRef.current.getBoundingClientRect();
      
      let newPosition = event.clientX - offset;
      newPosition = Math.max(0, Math.min(newPosition, trackRect.width - sliderRect.width)); // Set boundaries within the track
      
      setPosition(newPosition);
      calcPeriod(trackRect.width, sliderRect.width, newPosition)
    }
  }, [isDragging, offset]);


  // Add event listeners for mouse events
  useEffect(() => {
    const abortController = new AbortController();

    document.addEventListener("mouseup", handleMouseUp, {
      signal: abortController.signal,
    });
    document.addEventListener("mousemove", handleMouseMove, {
      signal: abortController.signal,
    });

    return () => abortController.abort();
  }, [handleMouseUp, handleMouseMove]);

  return (
    <div
      ref={thumbRef}
      onMouseDown={handleMouseDown}
      style={{ left: `${position}px` }}
      className="tw-flex tw-gap-1 tw-relative tw-z-[2] tw-bg-yellow1 hover:tw-bg-yellow1/95 tw-px-4 tw-py-2 tw-rounded-full tw-text-black tw-w-fit tw-cursor-grab tw-uppercase tw-shadow-xl"
    >
      <Icon Component={MoveLeft} /> 
      <span>{`${period} ${period < 2 ? "an" : "ans"}`}</span>
      <Icon Component={MoveLeft} className="tw-rotate-180" />
    </div>
  );
}
