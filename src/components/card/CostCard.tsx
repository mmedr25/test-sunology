import { twMerge } from "tailwind-merge";
import RoundContainer, { type RoundContainerProps } from "../ui/RoundContainer";
import Text from "../ui/Text";
import { type ReactNode } from "react";

export interface CostCardStyleClass {
  bg: string;
  border: string;
  text: string;
  bar: string;
}

interface CostCardProps extends RoundContainerProps {
  title: string;
  icon: ReactNode;
  styleClass: CostCardStyleClass;
}

function CostCard(props: CostCardProps) {
  const { children, title, icon, styleClass, className, ...rest } = props;

  return (
    <RoundContainer
      className={twMerge(
        "tw-flex tw-flex-col tw-w-fit tw-gap-4 tw-p-6",
        className,
        styleClass.bg,
        styleClass.border
      )}
      {...rest}
    >
      <div className="tw-flex tw-gap-4">
        <div className="tw-space-y-6">{children}</div>
        {icon}
      </div>
      <Text className={twMerge("tw-text-tiny-mobile", styleClass.text)}>
        {title}
      </Text>
    </RoundContainer>
  );
}

export default CostCard;
