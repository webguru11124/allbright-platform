import { ActivityIndicator, ButtonProps, StyleProp } from "react-native";
import styled from "styled-components/native";

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
    <StyledPressable
      style={[style]}
      disabled={disabled || props.isLoading}
      onPress={props.onPress}
      theme={theme}
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
    </StyledPressable>
  );
};

const StyledPressable = styled.Pressable`
  justify-content: center;
  align-items: center;
  height: 50px;
  background-color: ${(p) => p.theme.colors.button.background};
  border-radius: 25px;
  opacity: ${(p) => (p.disabled ? 0.6 : 1)};
`;

export default withTheme(Button);
