import { SafeAreaView } from "react-native";

import Space from "@/components/Space";
import Button from "@/forms/components/Button";
import CountryPicker from "@/forms/components/CountryPicker";
import withPublicProfileFormProps from "../hocs/withPublicProfileFormProps";
import CityPicker from "@/forms/components/CityPicker";
import IndustryPicker from "@/forms/components/IndustryPicker";
import JobLevelPicker from "@/forms/components/JobLevelPicker";

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

export type PublicProfileFormProps = {
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

export const PublicProfileForm = ({
  inputs,
  errors,
  blurFuncs,
  changeTextFuncs,
  isFormValid,
  isPending,
  onPress,
}: PublicProfileFormProps) => (
  <SafeAreaView>
    <CityPicker
      placeholder="City"
      value={inputs.city}
      error={errors.city}
      onBlur={blurFuncs.city}
      onChangeText={changeTextFuncs.city}
      testID="PublicProfileForm:City"
    />
    <Space height={10} />
    <IndustryPicker
      placeholder="Industry"
      value={inputs.city}
      error={errors.city}
      onBlur={blurFuncs.city}
      onChangeText={changeTextFuncs.city}
      testID="PublicProfileForm:City"
    />
    <Space height={10} />
    <JobLevelPicker
      placeholder="Job Level"
      value={inputs.city}
      error={errors.city}
      onBlur={blurFuncs.city}
      onChangeText={changeTextFuncs.city}
      testID="PublicProfileForm:City"
    />
    <Space height={10} />
    <CountryPicker
      placeholder="Country"
      value={inputs.country}
      error={errors.country}
      onBlur={blurFuncs.country}
      onChangeText={changeTextFuncs.country}
      testID="PublicProfileForm:Country"
    />
    <Space height={10} />

    <Button
      disabled={!isFormValid}
      isLoading={isPending}
      onPress={onPress}
      testID="PublicProfileForm:Submit">
      Submit
    </Button>
  </SafeAreaView>
);

export default withPublicProfileFormProps(PublicProfileForm);
