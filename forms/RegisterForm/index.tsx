import { SafeAreaView } from "react-native";

import Space from "@/components/Space";
import AgreeTermsCheckBox from "@/forms/components/AgreeTermsCheckBox";
import Button from "@/forms/components/Button";
import CountryPicker from "@/forms/components/CountryPicker";
import TextInput from "@/forms/components/TextInput";
import MarketingAgreedCheckBox from "../components/MarketingAgreedCheckBox";
import ThirdPartyAgreedCheckBox from "../components/ThirdPartyAgreedCheckBox";
import withRegisterFormProps from "../hocs/withRegisterFormProps";

type InputProps = {
  first_name: string | undefined;
  last_name: string | undefined;
  email: string | undefined;
  password: string | undefined;
  password_confirmation: string | undefined;
  city: string | undefined;
  country: string | undefined;
  termsAgreed: string | undefined;
  marketingAgreed: string | undefined;
  thirdPartyAgreed: string | undefined;
};

export type RegisterFormProps = {
  inputs: InputProps;
  errors: InputProps;
  blurFuncs: {
    first_name: SyntheticEvent;
    last_name: SyntheticEvent;
    email: SyntheticEvent;
    password: SyntheticEvent;
    password_confirmation: SyntheticEvent;
    city: SyntheticEvent;
    country: SyntheticEvent;
  };
  changeTextFuncs: {
    first_name: (text: string) => void;
    last_name: (text: string) => void;
    email: (text: string) => void;
    password: (text: string) => void;
    password_confirmation: (text: string) => void;
    city: (text: string) => void;
    country: (text: string) => void;
    termsAgreed: ((text: string) => void) & ((value: string | boolean) => void);
    marketingAgreed: ((text: string) => void) &
      ((value: string | boolean) => void);
    thirdPartyAgreed: ((text: string) => void) &
      ((value: string | boolean) => void);
  };
  isFormValid: boolean;
  isPending: boolean;
  onPress: GestureEvent;
};

export const RegisterForm = ({
  inputs,
  errors,
  blurFuncs,
  changeTextFuncs,
  isFormValid,
  isPending,
  onPress,
}: RegisterFormProps) => (
  <SafeAreaView>
    <TextInput
      placeholder="First Name"
      inputMode="text"
      textContentType="name"
      value={inputs.first_name}
      error={errors.first_name}
      onBlur={blurFuncs.first_name}
      onChangeText={changeTextFuncs.first_name}
      testID="RegisterForm:FirstName"
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
      testID="RegisterForm:LastName"
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
      testID="RegisterForm:Email"
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
      testID="RegisterForm:City"
    />
    <Space height={10} />
    <CountryPicker
      placeholder="Country"
      value={inputs.country}
      error={errors.country}
      onBlur={blurFuncs.country}
      onChangeText={changeTextFuncs.country}
      testID="RegisterForm:Country"
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
    <AgreeTermsCheckBox
      value={inputs.termsAgreed}
      error={errors.termsAgreed}
      onChangeText={changeTextFuncs.termsAgreed}
      testID="RegisterForm:TermsAgreed"
    />
    <MarketingAgreedCheckBox
      value={inputs.marketingAgreed}
      error={errors.marketingAgreed}
      onChangeText={changeTextFuncs.marketingAgreed}
      testID="RegisterForm:MarketingAgreed"
    />
    <ThirdPartyAgreedCheckBox
      value={inputs.thirdPartyAgreed}
      error={errors.thirdPartyAgreed}
      onChangeText={changeTextFuncs.thirdPartyAgreed}
      testID="RegisterForm:ThirdPartyAgreed"
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

export default withRegisterFormProps(RegisterForm);
