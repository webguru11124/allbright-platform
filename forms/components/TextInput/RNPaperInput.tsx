import React from "react";
import {
  TextInput as RNPaperTextInput,
  TextInputProps,
} from "react-native-paper";
import styled from "styled-components/native";
import FormFieldContainer from "@/forms/components/FormFieldContainer";

type Props = Omit<TextInputProps, "error"> & {
  error?: string;
};

const TextInput = ({ error, ...props }: Props) => {
  return (
    <FormFieldContainer error={error}>
      <InputContainer>
        <StyledRNPaperTextInput {...props} />
      </InputContainer>
    </FormFieldContainer>
  );
};

const InputContainer = styled.View`
  height: 55px;
  overflow: hidden;
`;

const StyledRNPaperTextInput = styled(RNPaperTextInput)<TextInputProps>`
  border-radius: 20px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  height: 57px;
  overflow: hidden;
  background-color: #fff;
`;

export default TextInput;
