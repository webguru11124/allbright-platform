import { Image } from "expo-image";
import React from "react";

import withAppStartImg from "../hocs/withAppStartImg";
import { AppStartImgProps } from "@/features/AppStart/types";

const AppStartImg = ({ elm, xDim, yDim, c, idx }: AppStartImgProps) => (
  <Image
    key={idx}
    style={[
      { position: "absolute", borderRadius: 50 },
      {
        left: xDim,
        top: yDim,
      },
      { width: c, height: c },
    ]}
    source={elm.img}
    transition={{
      duration: 1000,
      effect: "cross-dissolve",
      timing: "ease-in",
    }}
    blurRadius={0.01}
  />
);

export default withAppStartImg(AppStartImg);
