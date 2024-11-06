import { SafeAreaView } from "react-native";

import Space from "@/components/Space";
import AgreeTermsCheckBox from "@/forms/components/AgreeTermsCheckBox";
import Button from "@/forms/components/Button";
import CityPicker from "@/forms/components/CityPicker";
import CountryPicker from "@/forms/components/CountryPicker";
import MarketingAgreedCheckBox from "@/forms/components/MarketingAgreedCheckBox";
import TextInput from "@/forms/components/TextInput";
import ThirdPartyAgreedCheckBox from "@/forms/components/ThirdPartyAgreedCheckBox";
import { FormProps } from "@/forms/types/forms.types";

export const RegisterProfileForm = ({
  inputs,
  errors,
  blurFuncs,
  changeTextFuncs,
  isFormValid,
  isPending,
  onPress,
}: FormProps & { onBackPress?: () => void }) => (
  <SafeAreaView>
    <TextInput
      placeholder="First Name"
      inputMode="text"
      textContentType="name"
      value={inputs.first_name}
      error={errors.first_name}
      onBlur={blurFuncs.first_name}
      onChangeText={changeTextFuncs.first_name}
      testID="RegisterProfileForm:FirstName"
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
      testID="RegisterProfileForm:LastName"
    />
    <Space height={10} />
    <CountryPicker
      placeholder="Country"
      value={inputs.country}
      error={errors.country}
      onBlur={blurFuncs.country}
      onChangeText={changeTextFuncs.country}
      testID="RegisterProfileForm:Country"
    />
    <Space height={10} />
    <CityPicker
      placeholder="City"
      value={inputs.city}
      error={errors.city}
      onBlur={blurFuncs.city}
      onChangeText={changeTextFuncs.city}
      testID="PublicProfileForm:City"
      selectedCountry={inputs.country}
    />
    <Space height={10} />
    <AgreeTermsCheckBox
      value={inputs.termsAgreed}
      error={errors.termsAgreed}
      onChangeText={changeTextFuncs.termsAgreed}
      testID="RegisterProfileForm:TermsAgreed"
    />
    <MarketingAgreedCheckBox
      value={inputs.marketingAgreed}
      error={errors.marketingAgreed}
      onChangeText={changeTextFuncs.marketingAgreed}
      testID="RegisterProfileForm:MarketingAgreed"
    />
    <ThirdPartyAgreedCheckBox
      value={inputs.thirdPartyAgreed}
      error={errors.thirdPartyAgreed}
      onChangeText={changeTextFuncs.thirdPartyAgreed}
      testID="RegisterProfileForm:ThirdPartyAgreed"
    />
    <Space height={10} />
    <Button
      disabled={!isFormValid}
      isLoading={isPending}
      onPress={onPress}
      testID="RegisterProfileForm:Submit">
      Next
    </Button>
  </SafeAreaView>
);
export default RegisterProfileForm;
