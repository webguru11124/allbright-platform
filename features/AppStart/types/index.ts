import { Animated, DimensionValue, ViewProps } from "react-native";

export type StoreItem = {
  img: number;
  xyc: [x: number, y: number, c: number];
};

export type AppStartStyleProps = ViewProps & { marginBottom: number };

export type EntryButtonsProps = {
  nameAnim: Animated.Value;
};

export type BackgroundImageMasonryProps = {
  store: StoreItem[];
  heightOffset: number;
};

export type AppStartProps = EntryButtonsProps &
  BackgroundImageMasonryProps & {
    animY: Animated.AnimatedInterpolation<string | number>;
    NOTCH: boolean;
  };

export type AppStartImgProps = {
  elm: StoreItem;
  heightOffsetPercent: number;
  xDim: DimensionValue;
  yDim: DimensionValue;
  c: number;
  idx: number;
};
