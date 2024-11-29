import { useEffect, useMemo, useState } from "react";
import { Dimensions } from "react-native";

export const BREAKPOINT_MOBILE = 480;
export const BREAKPOINT_TABLET = 768;
export const BREAKPOINT_LAPTOP = 1024;

const useMediaQuery = () => {
  const [currentWidth, setCurrentWidth] = useState(Dimensions.get("window").width);

  useEffect(() => {
    const subscription = Dimensions.addEventListener("change", ({ window }) => {
      setCurrentWidth(window.width);
    });
    return () => subscription?.remove();
  });

  const screenSize = useMemo(() => getScreenType(currentWidth), [currentWidth]);

  const maxWidth = (val: number) => {
    return currentWidth <= val;
  };

  const minWidth = (val: number) => {
    return currentWidth >= val;
  };

  return { screenSize, maxWidth, minWidth };
};

function getScreenType(currentWidth: number): ScreenSize {
  switch (true) {
    case currentWidth > BREAKPOINT_LAPTOP:
      return "desktop";
    case currentWidth > BREAKPOINT_TABLET && currentWidth <= BREAKPOINT_LAPTOP:
      return "laptop";
    case currentWidth > BREAKPOINT_MOBILE && currentWidth <= BREAKPOINT_TABLET:
      return "tablet";
    case currentWidth <= BREAKPOINT_MOBILE:
    default:
      return "mobile";
  }
}

export default useMediaQuery;
