import { router } from "expo-router";
import { SafeAreaView } from "react-native";

import Space from "@/components/Space";
import { RegisterInput, registrationAdaptor } from "@/forms/adaptors";
import AgreeTermsCheckBox from "@/forms/components/AgreeTermsCheckBox";
import Button from "@/forms/components/Button";
import CountryPicker from "@/forms/components/CountryPicker";
import TextInput from "@/forms/components/TextInput";
import registerSchema from "@/forms/RegisterForm/registerSchema";
import { Register, useRegister } from "@/hooks/resources/useAuth";
import { setToken } from "@/utils/token";
import MarketingAgreedCheckBox from "../components/MarketingAgreedCheckBox";
import ThirdPartyAgreedCheckBox from "../components/ThirdPartyAgreedCheckBox";
import useFormWithPassConf from "../hooks/useFormWithPassConf";

const RegisterForm = () => {
  const { inputs, postBody, errors, blurFuncs, changeTextFuncs, isFormValid } =
    useFormWithPassConf(registerSchema, {
      default: { marketingAgreed: false, thirdPartyAgreed: false },
    });

  const { mutate, isPending } = useRegister();

  const onPress = () => {
    if (isFormValid) {
      mutate(registrationAdaptor(postBody as RegisterInput) as Register, {
        onSuccess: (response) => {
          setToken(response as unknown as string);
          router.replace("/home");
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
        placeholder="First Name"
        inputMode="text"
        textContentType="name"
        value={inputs.first_name}
        error={errors.first_name}
        onBlur={blurFuncs.first_name}
        onChangeText={changeTextFuncs.first_name}
      />
      <Space height={10} />
      <TextInput
        placeholder="Last Name"
        inputMode="text"
        textContentType="name"
        value={inputs.last_name}
        error={errors.last_name}
        onBlur={blurFuncs.last_name}
        onChangeText={changeTextFuncs.last_name}
      />
      <Space height={10} />
      <TextInput
        placeholder="Email"
        inputMode="email"
        textContentType="emailAddress"
        value={inputs.email}
        error={errors.email}
        onBlur={blurFuncs.email}
        onChangeText={changeTextFuncs.email}
      />
      <Space height={10} />
      <TextInput
        placeholder="City"
        inputMode="text"
        textContentType="addressCity"
        value={inputs.city}
        error={errors.city}
        onBlur={blurFuncs.city}
        onChangeText={changeTextFuncs.city}
      />
      <Space height={10} />
      <CountryPicker
        placeholder="Country"
        value={inputs.country}
        error={errors.country}
        onBlur={blurFuncs.country}
        onChangeText={changeTextFuncs.country}
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
      />
      <Space height={10} />
      <AgreeTermsCheckBox
        value={inputs.termsAgreed}
        error={errors.termsAgreed}
        onChangeText={changeTextFuncs.termsAgreed}
      />
      <MarketingAgreedCheckBox
        value={inputs.marketingAgreed}
        error={errors.marketingAgreed}
        onChangeText={changeTextFuncs.marketingAgreed}
      />
      <ThirdPartyAgreedCheckBox
        value={inputs.thirdPartyAgreed}
        error={errors.thirdPartyAgreed}
        onChangeText={changeTextFuncs.thirdPartyAgreed}
      />
      <Space height={10} />
      <Button disabled={!isFormValid} isLoading={isPending} onPress={onPress}>
        Submit
      </Button>
    </SafeAreaView>
  );
};

export default RegisterForm;
