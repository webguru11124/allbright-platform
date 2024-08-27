import { Href, usePathname } from "expo-router";
import { useMemo, useRef } from "react";
import { Animated, Easing } from "react-native";

const useTabButton = ({ href }: { href: Href<string | object> }) => {
  const pathName = usePathname();
  const widthAnim = useRef(new Animated.Value(0)).current;
  const ANIMATION_DURATION = 150;

  const isActive = useMemo(() => pathName === href, [pathName, href]);

  const onHoverIn = () => {
    Animated.timing(widthAnim, {
      toValue: 100,
      duration: ANIMATION_DURATION,
      useNativeDriver: false,
    }).start();
  };

  const onHoverOut = () => {
    Animated.timing(widthAnim, {
      toValue: 0,
      duration: ANIMATION_DURATION,
      useNativeDriver: false,
      easing: Easing.ease,
    }).start();
  };

  return { isActive, widthAnim, onHoverIn, onHoverOut };
};

export default useTabButton;
