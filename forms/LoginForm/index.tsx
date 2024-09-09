import { SafeAreaView } from "react-native";

import Button from "@/forms/components/Button";
import Space from "@/components/Space";
import TextInput from "@/forms/components/TextInput";
import loginSchema from "@/forms/LoginForm/loginSchema";
import { Login, useSignIn } from "@/hooks/resources/useAuth";
import useForm from "@/forms/hooks/useForm";

const LoginForm = () => {
  const { inputs, postBody, errors, blurFuncs, changeTextFuncs, isFormValid } =
    useForm(loginSchema);

  const { mutate, isPending } = useSignIn();

  const onPress = () => {
    if (isFormValid) {
      mutate(postBody as Login, {
        onSuccess: (response) => {
          console.log(response);
        },
        onError: (error: any) => {
          console.error(error?.data);
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
