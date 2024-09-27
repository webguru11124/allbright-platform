import { SafeAreaView } from "react-native";

import Space from "@/components/Space";
import Button from "@/forms/components/Button";
import TextInput from "@/forms/components/TextInput";
import { Dictionary } from "lodash";

export type LoginFormProps = {
  inputs: Dictionary<string | undefined>;
  errors: Dictionary<string | undefined>;
  blurFuncs: Dictionary<SyntheticEvent>;
  changeTextFuncs: Dictionary<SyntheticEvent>;
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
      <Button
        disabled={!isFormValid}
        isLoading={isPending}
        onPress={onPress}
        testID="LoginForm:Submit">
        Submit
      </Button>
    </SafeAreaView>
  );
};

export default LoginForm;
