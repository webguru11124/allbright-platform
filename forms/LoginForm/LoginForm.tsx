import { SafeAreaView, View } from "react-native";

import Space from "@/components/Space";
import OAuthForm from "@/forms//OAuthForm";
import Button from "@/forms/components/Button";
import TextInput from "@/forms/components/TextInput";
import { FormProps } from "@/forms/types/forms.types";

export const LoginForm = ({
  inputs,
  errors,
  blurFuncs,
  changeTextFuncs,
  isFormValid,
  isPending,
  onPress,
}: FormProps) => {
  return (
    <SafeAreaView>
      <View style={{ height: 100 }}>
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
      </View>
      <Space height={50} />
      <Space height={50} />
      <OAuthForm />
      <Space height={50} />
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
