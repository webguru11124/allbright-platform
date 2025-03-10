import { useCallback, useContext, useEffect, useRef } from "react";
import { Animated } from "react-native";
import DeviceInfo from "react-native-device-info";

import * as Imgs from "@/assets/images/app-start/_index";
import { MediaQueryContext } from "@/contexts/MediaQueryContext";
import { STORE } from "@/features/AppStart/constants";
import { StoreItem } from "@/features/AppStart/types";

export default function useAppStart() {
  const { minWidth } = useContext<MediaQuery>(MediaQueryContext);
  const NOTCH = DeviceInfo.hasNotch();
  const heightOffset = 4.7;

  const nameAnim = useRef(new Animated.Value(0)).current;
  const animY = nameAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [5, -15],
  });

  type ImgType = {
    [key: string]: number;
  };

  const typedImgs: ImgType = { ...Imgs };

  const store: StoreItem[] = STORE.map(
    (el) =>
      ({
        xyc: el.xyc,
        img: typedImgs[el.img],
      }) as StoreItem
  );

  const onInit = useCallback(() => {
    Animated.timing(nameAnim, {
      useNativeDriver: true,
      toValue: 1,
      duration: 1000,
      delay: 500,
    }).start();
  }, [nameAnim]);

  useEffect(() => {
    onInit();
  }, [onInit]);

  return { typedImgs, store, nameAnim, animY, NOTCH, heightOffset, minWidth };
}
