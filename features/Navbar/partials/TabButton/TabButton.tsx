import { Href, Link } from "expo-router";
import { Animated, Pressable } from "react-native";
import styled from "styled-components/native";

export type Props = {
  isActive: boolean;
  widthAnim: Animated.Value;
  href: Href<string | object>;
  onHoverIn: MyMouseEvent;
  onHoverOut: MyMouseEvent;
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
  <StyledPressable
    onHoverIn={onHoverIn}
    onHoverOut={onHoverOut}>
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

export default TabButton;
