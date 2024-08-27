import { Href, Link, usePathname } from "expo-router";
import { useMemo, useRef } from "react";
import { Animated, Easing, Pressable } from "react-native";
import styled from "styled-components/native";

type Props = {
  isActive: boolean;
  widthAnim: Animated.Value;
  href: Href<string | object>;
  onHoverIn: MyMouseEvent;
  onHoverOut: MyMouseEvent;
  children: React.ReactNode;
};

type TabButtonProps = {
  href: Href<string | object>;
  children: React.ReactNode;
};

const TabButton = ({
  isActive,
  widthAnim,
  href,
  onHoverIn,
  onHoverOut,
  children,
}: Props) => (
  <StyledPressable onHoverIn={onHoverIn} onHoverOut={onHoverOut}>
    <StyledLink href={href}>{children}</StyledLink>
    <Animated.View
      style={[
        {
          height: 2,
          backgroundColor: "black",
          marginTop: 3,
          width: isActive
            ? "100%"
            : widthAnim.interpolate({
                inputRange: [0, 100],
                outputRange: ["0%", "100%"],
              }),
          alignSelf: "flex-start",
        },
      ]}
    />
  </StyledPressable>
);

const StyledPressable = styled(Pressable)`
  flex: 1;
  align-items: center;
  justify-content: center;
  max-width: fit-content;
  padding: 0 15px;
`;

const StyledLink = styled(Link)`
  display: flex;
`;

const withTabButtonProps = (WrappedComponent: React.FC<Props>) => {
  const WC = ({ href, children, ...rest }: TabButtonProps) => {
    const { isActive, widthAnim, onHoverIn, onHoverOut } = useTabButton({
      href: href,
    });

    return (
      <WrappedComponent
        isActive={isActive}
        widthAnim={widthAnim}
        href={href}
        onHoverIn={onHoverIn}
        onHoverOut={onHoverOut}
        {...rest}>
        {children}
      </WrappedComponent>
    );
  };

  WC.displayName = "TabButton";
  return WC;
};

const useTabButton = ({ href }: { href: Href<string | object> }) => {
  const pathName = usePathname();
  const widthAnim = useRef(new Animated.Value(0)).current;

  const isActive = useMemo(() => {
    return pathName === href;
  }, [pathName, href]);

  const onHoverIn = () => {
    Animated.timing(widthAnim, {
      toValue: 100,
      duration: 150,
      useNativeDriver: false,
    }).start();
  };

  const onHoverOut = () => {
    Animated.timing(widthAnim, {
      toValue: 0,
      duration: 150,
      useNativeDriver: false,
      easing: Easing.ease,
    }).start();
  };

  return { isActive, widthAnim, onHoverIn, onHoverOut };
};

export default withTabButtonProps(TabButton);
