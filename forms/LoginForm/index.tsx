import {
  NativeSyntheticEvent,
  SafeAreaView,
  TextInputFocusEventData,
} from "react-native";

import Space from "@/components/Space";
import Button from "@/forms/components/Button";
import TextInput from "@/forms/components/TextInput";
import withLoginFormProps from "../hocs/withLoginFormProps";

export type LoginFormProps = {
  inputs: { email: string | undefined; password: string | undefined };
  errors: { email: string | undefined; password: string | undefined };
  blurFuncs: {
    email: (e: NativeSyntheticEvent<TextInputFocusEventData>) => void;
    password: (e: NativeSyntheticEvent<TextInputFocusEventData>) => void;
  };
  changeTextFuncs: {
    email: (text: string) => void;
    password: (text: string) => void;
  };
  isFormValid: boolean;
  isPending: boolean;
  onPress: GestureEvent;
};

export const LoginForm = ({
  inputs,
  errors,
  blurFuncs,
  changeTextFuncs,
  isFormValid,
  isPending,
  onPress,
}: LoginFormProps) => {
  return (
    <SafeAreaView>
      <TextInput
        placeholder="Email"
        placeholderTextColor={"#ddd"}
        inputMode="email"
        textContentType="emailAddress"
        value={inputs.email}
        error={errors.email}
        onBlur={blurFuncs.email}
        onChangeText={changeTextFuncs.email}
        testID="LoginForm:Email"
      />
      <Space height={10} />
      <TextInput
        secureTextEntry={true}
        placeholder="Password"
        placeholderTextColor={"#ddd"}
        inputMode="text"
        textContentType="password"
        value={inputs.password}
        error={errors.password}
        onBlur={blurFuncs.password}
        onChangeText={changeTextFuncs.password}
        testID="LoginForm:Password"
      />
      <Space height={50} />
      <Button disabled={!isFormValid} isLoading={isPending} onPress={onPress}>
        Submit
      </Button>
    </SafeAreaView>
  );
};

export default withLoginFormProps(LoginForm);
