import { SafeAreaView } from "react-native";

import Space from "@/components/Space";
import Button from "@/forms/components/Button";
import withPublicProfileFormProps from "../hocs/withPublicProfileFormProps";
import CityPicker from "@/forms/components/CityPicker";
import JobLevelPicker from "@/forms/components/JobLevelPicker";
import IndustryPicker from "../components/IndustryPicker";
import TextInput from "../components/TextInput";
import GoalsSection from "../components/GoalsSelection";
import goals from "@/utils/data/goals";
import ProfilePhotoUploadSection from "../components/ProfilePhotoUploadSection";

const placeholderBiography =
  "Example: As a female CEO, I'm committed to leading with vision and impact. Alongside championing diversity and innovation, my passion for travel fuels my global perspective. Let's connect to empower each other in the world of leadership and swap adventure stories! ✈️ \n(500 characters max)";

type InputProps = {
  job_title: string | undefined;
  company_name: string | undefined;
  city: string | undefined;
  industry: string | undefined;
  job_level: string | undefined;
  user_biography: string | undefined;
};

export type PublicProfileFormProps = {
  inputs: InputProps;
  errors: InputProps;
  blurFuncs: {
    city: SyntheticEvent;
    industry: SyntheticEvent;
    job_level: SyntheticEvent;
    company_name: SyntheticEvent;
    job_title: SyntheticEvent;
    user_biography: SyntheticEvent;
  };
  changeTextFuncs: {
    city: (text: string) => void;
    industry: (text: string) => void;
    job_level: (text: string) => void;
    company_name: (text: string) => void;
    job_title: (text: string) => void;
    user_biography: (text: string) => void;
  };
  isFormValid: boolean;
  isPending: boolean;
  onPress: GestureEvent;
  setOnboardingFieldHandler: (
    field: "goals",
    value: (typeof goals)[number][]
  ) => void;
};

export const PublicProfileForm = ({
  inputs,
  errors,
  blurFuncs,
  changeTextFuncs,
  isFormValid,
  isPending,
  onPress,
  setOnboardingFieldHandler,
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
    <TextInput
      label="Job title*"
      placeholderTextColor={"#ddd"}
      inputMode="text"
      textContentType="jobTitle"
      value={inputs.job_title}
      error={errors.job_title}
      onBlur={blurFuncs.job_title}
      onChangeText={changeTextFuncs.job_title}
      testID="PublicProfileForm:JobTitle"
    />
    <Space height={10} />
    <TextInput
      label="Company name (if applicable)"
      placeholderTextColor={"#ddd"}
      inputMode="text"
      textContentType="none"
      value={inputs.company_name}
      error={errors.company_name}
      onBlur={blurFuncs.company_name}
      onChangeText={changeTextFuncs.company_name}
      testID="PublicProfileForm:CompanyName"
    />
    <Space height={10} />
    <JobLevelPicker
      placeholder="Job Level"
      value={inputs.job_level}
      error={errors.job_level}
      onBlur={blurFuncs.job_level}
      onChangeText={changeTextFuncs.job_level}
      testID="PublicProfileForm:JobLevel"
    />
    <Space height={10} />
    <IndustryPicker
      placeholder="Industry"
      value={inputs.industry}
      error={errors.industry}
      onBlur={blurFuncs.industry}
      onChangeText={changeTextFuncs.industry}
      testID="PublicProfileForm:Industry"
    />
    <Space height={10} />
    <GoalsSection setField={setOnboardingFieldHandler} />
    <Space height={10} />
    <ProfilePhotoUploadSection />
    <Space height={10} />
    <TextInput
      placeholder={placeholderBiography}
      label={"Biography*"}
      placeholderTextColor={"#ddd"}
      inputMode="text"
      textContentType="none"
      multiline
      maxLength={40}
      numberOfLines={10}
      value={inputs.user_biography}
      error={errors.user_biography}
      onBlur={blurFuncs.user_biography}
      onChangeText={changeTextFuncs.user_biography}
      testID="PublicProfileForm:UserBiography"
    />
    <Space height={10} />
    <Button
      disabled={!isFormValid}
      isLoading={isPending}
      onPress={onPress}
      testID="PublicProfileForm:Submit">
      Next
    </Button>
  </SafeAreaView>
);

export default withPublicProfileFormProps(PublicProfileForm);
