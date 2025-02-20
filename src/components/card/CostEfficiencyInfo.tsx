import { twMerge } from "tailwind-merge";
import Text from "../ui/Text";

interface CostEfficiencyInfoProps {
  barColorName: string;
  info: string;
  subInfo: string;
  className?: string;
}

function CostEfficiencyInfo(props: CostEfficiencyInfoProps) {
  const { barColorName, info, subInfo, className = "" } = props;
  return (
    <div className={twMerge("tw-flex tw-gap-2", className)}>
      <div className={twMerge("tw-w-1 tw-rounded-2xl", barColorName)}></div>
      <div className="tw-space-y-2">
        <Text className="tw-text-body-large-desktop tw-text-white/80">
          {subInfo}
        </Text>
        <Text className="tw-text-small-desktop">{info}</Text>
      </div>
    </div>
  );
}

export default CostEfficiencyInfo;
