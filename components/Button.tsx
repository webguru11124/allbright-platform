import { ButtonProps } from "react-native";
import styled from "styled-components/native";

import { CM } from "@/components/Typography";
import withTheme from "@/hocs/withTheme";

type Props = Omit<ButtonProps, "title"> & {
  theme: Theme;
  children: React.ReactNode;
};

const Button = (props: Props) => {
  return (
    <StyledPressable theme={props.theme}>
      <CM color={props.theme.colors.button.primary}>{props.children}</CM>
    </StyledPressable>
  );
};

const StyledPressable = styled.Pressable`
  justify-content: center;
  align-items: center;
  height: 50px;
  background-color: ${(p) => p.theme.colors.button.background};
  border-radius: 25px;
`;

export default withTheme(Button);
