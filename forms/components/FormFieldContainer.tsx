import { CS } from "@/components/Typography";
import { View } from "react-native";
import styled from "styled-components/native";

type Props = {
  children: React.ReactNode;
  error?: string;
};
type StyleProps = {
  error?: string;
};
const FormFieldContainer = ({ children, error }: Props) => {
  return (
    <View>
      <Container error={error}>{children}</Container>
      {error && <CS color="red">{error}</CS>}
    </View>
  );
};

const Container = styled.View<StyleProps>`
  
    border-width: 3px;
    border-color: transparent;
  ${(p) =>
    !!p.error &&
    `
    border-color: red;
    border-radius: 5px;
  `}
`;

export default FormFieldContainer;
