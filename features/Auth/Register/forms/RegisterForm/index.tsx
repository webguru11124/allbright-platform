import { SafeAreaView } from "react-native";
import { Picker } from "@react-native-picker/picker";

import Button from "@/components/Button";
import Space from "@/components/Space";
import TextInput from "@/components/TextInput";
import registerSchema from "@/features/Auth/Register/forms/RegisterForm/registerSchema";
import { Register, useSignIn } from "@/hooks/resources/useAuth";
import useForm from "@/hooks/useForm";
import countries from "@/utils/data/countries";

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
        onValueChange={changeTextFuncs.country}>
        <Picker.Item key={"-1"} label={"Please select"} value={undefined} />
        {countries.map((item) => (
          <Picker.Item key={item.Code} label={item.Name} value={item.Code} />
        ))}
      </Picker>
      <Space height={50} />
      <Button disabled={!isFormValid} isLoading={isPending} onPress={onPress}>
        Submit
      </Button>
    </SafeAreaView>
  );
};

export default RegisterForm;
