import withTheme from "@/hocs/withTheme";
import { TextInputProps } from "react-native";
import styled from "styled-components/native";

type Props = TextInputProps & { theme: Theme };

const TextInput = ({ theme, ...rest }: Props) => {
  return <StyledTextInput {...rest} theme={theme} />;
};

export default withTheme(TextInput);

const StyledTextInput = styled.TextInput<TextInputProps>`
  height: 50px;
  font-size: 16px;
  color: ${(p) => p.theme.colors.inputs.text};
  background-color: ${(p) => p.theme.colors.inputs.background};
  border: black;
  border-radius: 4px;
  padding-left: 15px;
`;
