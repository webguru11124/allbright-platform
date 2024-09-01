import { SafeAreaView } from "react-native";

import Button from "@/components/Button";
import Space from "@/components/Space";
import TextInput from "@/components/TextInput";
import loginSchema from "@/features/Auth/Login/forms/LoginForm/loginSchema";
import { Login, useSignIn } from "@/hooks/resources/useAuth";
import useForm from "@/hooks/useForm";

const LoginForm = () => {
  const {
    inputs,
    postBody,
    errors,
    blurFuncs,
    changeTextFuncs,
    isFormValid,
    validateInputs,
  } = useForm(loginSchema);

  const { mutate, isPending } = useSignIn();

  const onPress = () => {
    const result = validateInputs();

    if (result) {
      console.log(postBody);

      mutate(postBody as Login, {
        onSuccess: (response) => {
          console.log(response);
        },
        onError: (error) => {
          console.error(error);
        },
      });
    }
  };

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
      />
      <Space height={50} />
      <Button disabled={!isFormValid} isLoading={isPending} onPress={onPress}>
        Submit
      </Button>
    </SafeAreaView>
  );
};

export default LoginForm;
