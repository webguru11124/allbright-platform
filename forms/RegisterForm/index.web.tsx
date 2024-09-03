import { SafeAreaView } from "react-native";
import Picker from "@/forms/components/Picker";

import Button from "@/forms/components/Button";
import Space from "@/components/Space";
import TextInput from "@/forms/components/TextInput";
import registerSchema from "@/forms/RegisterForm/registerSchema";
import { Register, useSignIn } from "@/hooks/resources/useAuth";
import useForm from "@/forms/hooks/useForm";
import { pickerAdaptor as countries } from "@/utils/data/countries";

const RegisterForm = () => {
  const { inputs, postBody, errors, blurFuncs, changeTextFuncs, isFormValid } =
    useForm(registerSchema);

  const { mutate, isPending } = useSignIn();

  const onPress = () => {
    if (isFormValid) {
      mutate(postBody as Register, {
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
      <Space height={10} />
      <TextInput
        secureTextEntry={true}
        placeholder="Confirm Password"
        placeholderTextColor={"#ddd"}
        inputMode="text"
        textContentType="password"
        value={inputs.password_confirmation}
        error={errors.password_confirmation}
        onBlur={blurFuncs.password_confirmation}
        onChangeText={changeTextFuncs.password_confirmation}
      />
      <Space height={10} />
      <Picker
        selectedValue={inputs.country}
        onValueChange={changeTextFuncs.country}
        items={countries}
        error={errors.country}
        onBlur={blurFuncs.country}
      />
      <Space height={50} />
      <Button disabled={!isFormValid} isLoading={isPending} onPress={onPress}>
        Submit
      </Button>
    </SafeAreaView>
  );
};

export default RegisterForm;
