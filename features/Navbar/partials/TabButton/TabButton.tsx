import { Href, Link } from "expo-router";
import { Animated, Pressable, StyleSheet } from "react-native";

import withTheme from "@/hocs/withTheme";

export type Props = {
  isActive: boolean;
  widthAnim: Animated.Value;
  href: Href<string | object>;
  onHoverIn: MyMouseEvent;
  onHoverOut: MyMouseEvent;
  children: React.ReactNode;
  theme: Theme;
};

const TabButton = ({ isActive, widthAnim, href, onHoverIn, onHoverOut, theme, children }: Props) => (
  <Pressable
    style={[styles.pressable]}
    onHoverIn={onHoverIn}
    onHoverOut={onHoverOut}>
    <Link
      style={[styles.link]}
      href={href}>
      {children}
    </Link>
    <Animated.View
      style={[
        {
          height: 2,
          backgroundColor: theme.colors.txt.dark,
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
  </Pressable>
);

const styles = StyleSheet.create({
  pressable: {
    flexGrow: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 15,
  },
  link: {
    flexDirection: "row",
  },
});

export default withTheme(TabButton);
