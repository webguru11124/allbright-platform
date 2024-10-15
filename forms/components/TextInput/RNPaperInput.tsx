import {
  TextInput as RNPaperTextInput,
  TextInputProps,
} from "react-native-paper";
import styled from "styled-components/native";
import FormFieldContainer from "../FormFieldContainer";

type Props = Omit<TextInputProps, "error"> & {
  error?: string;
};
const TextInput = ({ error, ...props }: Props) => {
  return (
    <FormFieldContainer error={error}>
      <InputContainer>
        <RNPaperTextInput
          {...props}
          style={{
            borderRadius: 20,
            borderTopLeftRadius: 5,
            borderTopRightRadius: 5,
            borderBottomLeftRadius: 10,
            borderBottomRightRadius: 10,
            height: 57,
            overflow: "hidden",
            backgroundColor: "#fff",
          }}
        />
      </InputContainer>
    </FormFieldContainer>
  );
};

const InputContainer = styled.View`
  height: 55px;
  overflow: hidden;
`;

export default TextInput;
