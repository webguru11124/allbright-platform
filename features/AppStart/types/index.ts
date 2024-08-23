import { Animated, ViewProps } from "react-native";

export type StoreItem = {
  img: number;
  xyc: [x: number, y: number, c: number];
};

export type AppStartStyleProps = ViewProps & { marginBottom: number };

export type AppStartProps = {
  store: StoreItem[];
  nameAnim: Animated.Value;
  animY: Animated.AnimatedInterpolation<string | number>;
  NOTCH: boolean;
  HEIGHT_OFFSET_PERCENT: number;
};

export type AppStartImgProps = {
  elm: StoreItem;
  heightOffsetPercent: number;
  idx: number;
};

export type BackgroundImageMasonryProps = {
  store: StoreItem[];
  heightOffset: number;
};
