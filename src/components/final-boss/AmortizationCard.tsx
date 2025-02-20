import { CarrotIcon } from "lucide-react";
import Icon from "../ui/Icon";
import CostEfficiencyInfo from "../card/CostEfficiencyInfo";
import CostCard, { type CostCardStyleClass } from "../card/CostCard";

export function AmortizationCard () {
  const styleClass: CostCardStyleClass = {
    bar: "tw-bg-yellow1",
    bg: "tw-bg-yellow1/10",
    border: "tw-border-yellow1",
    text: "tw-text-yellow1",
  };

  return (
    <CostCard
      styleClass={styleClass}
      title="Avec PLAY Max"
      icon={<Icon Component={CarrotIcon} className={styleClass.text} />}
    >
      <CostEfficiencyInfo
        barColorName={styleClass.bar}
        info="en cours"
        subInfo="amortissement"
      />
    </CostCard>
  );
};
