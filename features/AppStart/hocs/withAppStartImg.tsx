import React from "react";

import { AppStartImgProps } from "@/features/AppStart/types";
import useAppStartImg from "../hooks/useAppStartImg";

const withAppStartImg = (WrappedComponent: React.FC<AppStartImgProps>) => {
  const WC = ({
    heightOffsetPercent,
    elm,
    idx,
    ...rest
  }: Pick<AppStartImgProps, "heightOffsetPercent" | "elm" | "idx">) => {
    const { xDim, yDim, c } = useAppStartImg({
      heightOffsetPercent: heightOffsetPercent,
      elm: elm,
    });

    return (
      <WrappedComponent
        elm={elm}
        xDim={xDim}
        yDim={yDim}
        heightOffsetPercent={heightOffsetPercent}
        c={c}
        idx={idx}
        {...rest}
      />
    );
  };

  WC.displayName = "AppStartImg";
  return WC;
};

export default withAppStartImg;
