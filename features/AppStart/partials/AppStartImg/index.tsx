import React from "react";
import { AppStartImgProps } from "@/features/AppStart/types";
import useAppStartImg from "@/features/AppStart/hooks/useAppStartImg";

import AppStartImg from "./AppStartImg";

const AppStartImgContainer = ({
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
    <AppStartImg
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

export default AppStartImgContainer;
