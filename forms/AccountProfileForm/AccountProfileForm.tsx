import { SafeAreaView } from "react-native";

import Space from "@/components/Space";
import Toast from "@/components/Toast";
import Button from "@/forms/components/Button";
import CityPicker from "@/forms/components/CityPicker";
import CountryPicker from "@/forms/components/CountryPicker";
import GoalsSelection from "@/forms/components/GoalsSelection";
import IndustryPicker from "@/forms/components/IndustryPicker";
import InterestsSection from "@/forms/components/InterestsSelection";
import JobLevelPicker from "@/forms/components/JobLevelPicker";
import ProfilePhotoUploadSection from "@/forms/components/ProfilePhotoUploadSection";
import TextInput from "@/forms/components/TextInput";
import { FormProps } from "@/forms/types/forms.types";

const AccountProfileForm = ({ inputs, errors, blurFuncs, changeTextFuncs, isPending, onPress }: FormProps) => (
  <SafeAreaView>
    <Toast
      type={"success"}
      message={"Well done!"}
    />
    <Space height={10} />
    <ProfilePhotoUploadSection
      value={inputs.profile_image}
      uploadProfileImage={changeTextFuncs.profile_image}
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
    <TextInput
      label="Job title*"
      placeholderTextColor={"#ddd"}
      inputMode="text"
      textContentType="jobTitle"
      value={inputs.jobTitle}
      error={errors.jobTitle}
      onBlur={blurFuncs.jobTitle}
      onChangeText={changeTextFuncs.jobTitle}
      testID="AccountProfileForm:JobTitle"
    />
    <Space height={10} />
    <TextInput
      label="Company name (if applicable)"
      placeholderTextColor={"#ddd"}
      inputMode="text"
      textContentType="none"
      value={inputs.jobCompany}
      error={errors.jobCompany}
      onBlur={blurFuncs.jobCompany}
      onChangeText={changeTextFuncs.jobCompany}
      testID="AccountProfileForm:CompanyName"
    />
    <Space height={10} />
    <JobLevelPicker
      placeholder="Job Level"
      value={inputs.jobLevel}
      error={errors.jobLevel}
      onBlur={blurFuncs.jobLevel}
      onChangeText={changeTextFuncs.jobLevel}
      testID="AccountProfileForm:JobLevel"
    />
    <Space height={10} />
    <IndustryPicker
      placeholder="Industry"
      value={inputs.jobIndustry}
      error={errors.jobIndustry}
      onBlur={blurFuncs.jobIndustry}
      onChangeText={changeTextFuncs.jobIndustry}
      testID="AccountProfileForm:Industry"
    />
    <Space height={10} />
    <GoalsSelection
      field={inputs.goals}
      updateField={changeTextFuncs.goals}
      error={errors.goals}
    />
    <Space height={10} />
    <InterestsSection
      updateField={changeTextFuncs.interests}
      error={errors.interests}
      field={inputs.interests}
    />
    <Space height={10} />

    <Button
      isLoading={isPending}
      onPress={onPress}
      testID="AccountProfileForm:Submit">
      Save Changes...
    </Button>
  </SafeAreaView>
);

export default AccountProfileForm;
