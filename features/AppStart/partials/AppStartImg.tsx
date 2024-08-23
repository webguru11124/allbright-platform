import { Image } from "expo-image";
import React from "react";
import { DimensionValue, ImageStyle, StyleProp } from "react-native";

/*eslint import/namespace: ['error', { allowComputed: true }]*/
import { StoreItem } from "..";

type Props = {
  elm: StoreItem;
  heightOffsetPercent: number;
  idx: number;
};

export default function AppStartImg({ elm, heightOffsetPercent, idx }: Props) {
  const [x, y, c]: [x: number, y: number, c: number] = elm.xyc;
  const xDim: DimensionValue = `${x}%`;
  const yDim: DimensionValue = `${y - heightOffsetPercent}%`;
  const currStyle: StyleProp<ImageStyle> = [
    { position: "absolute", borderRadius: 50 },
    {
      left: xDim,
      top: yDim,
    },
    { width: c, height: c },
  ];

  return (
    <Image
      key={idx}
      style={currStyle}
      source={elm.img}
      transition={{
        duration: 1000,
        effect: "cross-dissolve",
        timing: "ease-in",
      }}
      blurRadius={0.01}
    />
  );
}
