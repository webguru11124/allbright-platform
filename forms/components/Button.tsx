import { ActivityIndicator, ButtonProps } from "react-native";
import styled from "styled-components/native";

import { CM } from "@/components/Typography";
import withTheme from "@/hocs/withTheme";

type Props = Omit<ButtonProps, "title"> & {
  isLoading?: boolean;
  theme: Theme;
  children: React.ReactNode;
};

const Button = ({ disabled, theme, ...props }: Props) => {
  return (
    <StyledPressable
      disabled={disabled || props.isLoading}
      onPress={props.onPress}
      theme={theme}
      {...props}>
      <CM style={{ color: theme.colors.button.primary }}>
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
