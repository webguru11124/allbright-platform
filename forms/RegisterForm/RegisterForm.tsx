import { SafeAreaView } from "react-native";
import styled from "styled-components/native";

import HeaderBackButton from "@/components/HeaderBackButton";
import Space from "@/components/Space";
import Button from "@/forms/components/Button";
import TextInput from "@/forms/components/TextInput";
import { FormProps } from "@/forms/types/forms.types";

export const RegisterForm = ({
  inputs,
  errors,
  blurFuncs,
  changeTextFuncs,
  isFormValid,
  isPending,
  onPress,
  onBackPress,
}: FormProps & { onBackPress: () => void }) => (
  <SafeAreaView>
    <BackButtonContainer>
      <HeaderBackButton onBackPress={onBackPress} />
    </BackButtonContainer>
    <TextInput
      placeholder="Email"
      inputMode="email"
      textContentType="emailAddress"
      value={inputs.email}
      error={errors.email}
      onBlur={blurFuncs.email}
      onChangeText={changeTextFuncs.email}
      testID="RegisterForm:Email"
    />
    <Space height={10} />
    <TextInput
      secureTextEntry={true}
      placeholder="Password"
      inputMode="text"
      textContentType="password"
      value={inputs.password}
      error={errors.password}
      onBlur={blurFuncs.password}
      onChangeText={changeTextFuncs.password}
      testID="RegisterForm:Password"
    />
    <Space height={10} />
    <TextInput
      secureTextEntry={true}
      placeholder="Confirm Password"
      inputMode="text"
      textContentType="password"
      value={inputs.password_confirmation}
      error={errors.password_confirmation}
      onBlur={blurFuncs.password_confirmation}
      onChangeText={changeTextFuncs.password_confirmation}
      testID="RegisterForm:PasswordConfirmation"
    />
    <Space height={10} />
    <Button
      disabled={!isFormValid}
      isLoading={isPending}
      onPress={onPress}
      testID="RegisterForm:Submit">
      Submit
    </Button>
  </SafeAreaView>
);
const BackButtonContainer = styled.View`
  align-items: start;
`;
export default RegisterForm;
