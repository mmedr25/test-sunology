import RoundContainer from "./components/ui/RoundContainer";
import RangeSlider from "./components/slider/RangeSlider";
import { AmortizationCard } from "./components/final-boss/AmortizationCard";
import { GrowthCard } from "./components/final-boss/GrowthCard";
import { GradientButton } from "./components/final-boss/GradientButton";
import { ZapIcon } from "lucide-react";
import Icon from "./components/ui/Icon";
import Text from "./components/ui/Text";

function Marker() {
  return (
    <div className="tw-flex tw-flex-col tw-items-center tw-gap-2 tw-absolute tw-left-[40%] tw-top-0">
      <div className="tw-inline-block tw-border-2 tw-p-1 tw-rounded-full tw-bg-black-pure/70 tw-border-yellow1">
        <Icon Component={ZapIcon} className="tw-text-yellow1"/>
      </div>
      <Text className="tw-text-yellow1">seuil de rentabilité</Text>
    </div>
  );
}


export default function App() {
  return (
    <div className="tw-flex tw-justify-center tw-items-end tw-py-12 tw-w-screen tw-h-screen tw-min-w-[600px] tw-font-britanica">
      <div className="tw-w-[80%] tw-space-y-6">
        <div className="tw-text-center tw-space-y-6">
          <GradientButton>Rentabilisé</GradientButton>
          <h1 className="tw-text-4xl">Calculez votre rentabilité</h1>
        </div>
        <RoundContainer className="tw-flex tw-flex-col tw-justify-end tw-h-[550px] tw-space-y-8 tw-px-12 tw-py-16 tw-border-grey-hover tw-bg-gradient-to-tr tw-from-black-background tw-from-20% tw-via-black tw-via-47% tw-to-black-background/50 tw-to-90%">
          <div className="tw-flex tw-justify-center tw-items-end tw-gap-8">
            <AmortizationCard />
            <GrowthCard />
          </div>
          <RangeSlider>
            <Marker />
          </RangeSlider>
        </RoundContainer>
      </div>
    </div>
  );
}
