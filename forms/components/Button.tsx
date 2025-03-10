import { ActivityIndicator, ButtonProps, Pressable, StyleProp, StyleSheet, View } from "react-native";

import { CM } from "@/components/Typography";
import withTheme from "@/hocs/withTheme";

type Props = Omit<ButtonProps, "title"> & {
  isLoading?: boolean;
  theme: Theme;
  children: React.ReactNode;
  style?: StyleProp<LayoutProps>;
  isWide?: boolean;
  isSecondary?: boolean;
  label?: string;
  size?: "xsml" | "sml" | "big" | "mid" | "small";
  isCircle?: boolean;
};

const Button = ({ disabled, theme, style, size, label, isWide, isSecondary, isCircle, ...props }: Props) => {
  return (
    <Pressable
      style={[
        styles.main,
        { backgroundColor: theme.colors.button.background, opacity: disabled ? 0.6 : 1 },
        { width: isWide ? "100%" : "auto" },
        style,
      ]}
      disabled={disabled || props.isLoading}
      onPress={props.onPress}
      {...props}>
      {typeof props.children === "string" ? (
        <CM
          style={{
            color: theme.colors.button.primary,
            justifyContent: "center",
            alignItems: "center",
            fontWeight: "700",
          }}>
          {props.isLoading ? (
            <ActivityIndicator
              size={24}
              color={theme.colors.button.primary}
            />
          ) : (
            props.children
          )}
        </CM>
      ) : props.isLoading ? (
        <ActivityIndicator
          size={24}
          color={theme.colors.button.primary}
        />
      ) : (
        <View style={[styles.container]}>{props.children}</View>
      )}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  main: {
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "transparent",
    borderRadius: 25,
    opacity: 1,
  },
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
});

export default withTheme(Button);
