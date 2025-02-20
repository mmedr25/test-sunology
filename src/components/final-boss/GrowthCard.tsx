import { useStore } from "@/store/sunny-store";
import type { CostCardStyleClass } from "../card/CostCard";
import { strConcat } from "@/utils/helper";
import Icon from "../ui/Icon";
import { MoveUpIcon } from "lucide-react";
import CostCard from "../card/CostCard";
import CostEfficiencyInfo from "../card/CostEfficiencyInfo";

export function GrowthCard() {
  const styleClass: CostCardStyleClass = {
    bg: "tw-bg-red-negative/10",
    border: "tw-border-red-negative",
    text: "tw-text-red-negative",
    bar: "tw-bg-red-negative",
  };

  const inflationPercentage = useStore((state) => state.inflationPercentage);
  const period = useStore((state) => state.period);
  const capHViewport = 12;
  const calc = (inflationPercentage * period * capHViewport) / 100 + 1.5;

  return (
    <CostCard
      style={{ gap: strConcat(calc, "vh") }}
      styleClass={styleClass}
      title="Sans PLAY Max"
      icon={<Icon Component={MoveUpIcon} className={styleClass.text} />}
    >
      <PriceFluctuationInfo barColorName={styleClass.bar} />
      <PriceFixedInfo barColorName={styleClass.bar} />
    </CostCard>
  );
}

function PriceFluctuationInfo({ barColorName }: { barColorName: string }) {
  const period = useStore((state) => state.period);
  const inflationPercentage = useStore((state) => state.inflationPercentage);
  const currentPrice = useStore((state) => state.currentPrice);
  const currentDate = new Date();

  const priceVariation = (currentPrice * inflationPercentage * period) / 100;
  const price = new Intl.NumberFormat("fr-FR", {
    minimumFractionDigits: 1,
    maximumFractionDigits: 1,
  }).format(currentPrice + priceVariation);

  return (
    <CostEfficiencyInfo
      barColorName={barColorName}
      info={strConcat(price, "c€")}
      subInfo={strConcat("en", " ", currentDate.getFullYear() + period + "")} // cast to string
    />
  );
}

function PriceFixedInfo({ barColorName }: { barColorName: string }) {
  const currentPrice = useStore((state) => state.currentPrice);
  const price = currentPrice.toFixed(1).replace(".", ",");

  return (
    <div className="tw-opacity-50">
      <CostEfficiencyInfo
        barColorName={barColorName}
        info={strConcat(price, "c€")}
        subInfo="aujourd'hui"
      />
    </div>
  );
}
