import type { ReactNode } from "react";
import Text from "../ui/Text";

export const GradientButton = ({ children }: { children: ReactNode }) => {
  return (
    <button className="tw-h-10 tw-w-32 tw-p-[0.15em] tw-rounded-full tw-bg-white hover:tw-animate-sunny">
      <Text className="tw-h-full tw-w-full tw-grid tw-place-items-center tw-bg-black-background tw-rounded-full">
        {children}
      </Text>
    </button>
  );
};
