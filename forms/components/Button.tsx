import { ActivityIndicator, ButtonProps, Pressable, StyleProp, StyleSheet } from "react-native";

import { CM } from "@/components/Typography";
import withTheme from "@/hocs/withTheme";

type Props = Omit<ButtonProps, "title"> & {
  isLoading?: boolean;
  theme: Theme;
  children: React.ReactNode;
  style?: StyleProp<LayoutProps>;
};

const Button = ({ disabled, theme, style, ...props }: Props) => {
  return (
    <Pressable
      style={[styles.main, { backgroundColor: theme.colors.button.background, opacity: disabled ? 0.6 : 1 }, style]}
      disabled={disabled || props.isLoading}
      onPress={props.onPress}
      {...props}>
      <CM style={{ color: theme.colors.txt.light }}>
        {props.isLoading ? (
          <ActivityIndicator
            size={24}
            color={theme.colors.button.primary}
          />
        ) : (
          props.children
        )}
      </CM>
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
});

export default withTheme(Button);
