import { useStore } from "@/store/sunny-store";
import RangeTrack from "./RangeTrack";
import { strConcat } from "@/utils/helper";

export function RangeProgressTrack() {
  const maxPeriod = useStore((state) => state.maxPeriod);
  const period = useStore((state) => state.period);

  return (
    <RangeTrack
      style={{
        width: strConcat(period * 100 / maxPeriod + 25, "%"),
      }}
      className="tw-bg-yellow-energy-gradient-to-l tw-z-[1]"
    />
  );
}
