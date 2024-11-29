import { DimensionValue } from "react-native";

import { AppStartImgProps } from "@/features/AppStart/types";

const useAppStartImg = ({ heightOffsetPercent, elm }: Pick<AppStartImgProps, "heightOffsetPercent" | "elm">) => {
  const [x, y, c]: [x: number, y: number, c: number] = elm.xyc;
  const xDim: DimensionValue = `${x}%`;
  const yDim: DimensionValue = `${y - heightOffsetPercent}%`;

  return { xDim, yDim, c };
};

export default useAppStartImg;
