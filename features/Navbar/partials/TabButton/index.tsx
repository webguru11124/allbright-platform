import { Href } from "expo-router";
import { Animated } from "react-native";
import useTabButton from "@/features/Navbar/hooks/useTabButton";

import TabButton from "./TabButton";

export type Props = {
  isActive: boolean;
  widthAnim: Animated.Value;
  href: Href<string | object>;
  onHoverIn: MyMouseEvent;
  onHoverOut: MyMouseEvent;
  children: React.ReactNode;
};

const TabButtonContainer = ({
  href,
  children,
  ...rest
}: Pick<Props, "href" | "children">) => {
  const { isActive, widthAnim, onHoverIn, onHoverOut } = useTabButton({
    href: href,
  });

  return (
    <TabButton
      isActive={isActive}
      widthAnim={widthAnim}
      href={href}
      onHoverIn={onHoverIn}
      onHoverOut={onHoverOut}
      {...rest}>
      {children}
    </TabButton>
  );
};

export default TabButtonContainer;
