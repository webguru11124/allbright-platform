import { SafeAreaView } from "react-native";

import Space from "@/components/Space";
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

const AccountProfileForm = ({
  inputs,
  errors,
  blurFuncs,
  changeTextFuncs,
  isPending,
  isFormValid,
  onPress,
}: FormProps) => (
  <>
    <AccountProfileFormPersonal
      inputs={inputs}
      errors={errors}
      blurFuncs={blurFuncs}
      changeTextFuncs={changeTextFuncs}
      isPending={isPending}
      onPress={onPress}
      isFormValid={isFormValid}
    />
    <Space height={10} />
    <AccountProfileFormSocialMedia
      inputs={inputs}
      errors={errors}
      blurFuncs={blurFuncs}
      changeTextFuncs={changeTextFuncs}
      isPending={isPending}
      onPress={onPress}
      isFormValid={isFormValid}
    />
    <Space height={10} />
    <AccountProfileFormBio
      inputs={inputs}
      errors={errors}
      blurFuncs={blurFuncs}
      changeTextFuncs={changeTextFuncs}
      isPending={isPending}
      onPress={onPress}
      isFormValid={isFormValid}
    />
    <Space height={50} />
    <AccountProfileFormButton
      inputs={inputs}
      errors={errors}
      blurFuncs={blurFuncs}
      changeTextFuncs={changeTextFuncs}
      isPending={isPending}
      onPress={onPress}
      isFormValid={isFormValid}
    />
  </>
);

export const AccountProfileFormPersonal = ({ inputs, errors, blurFuncs, changeTextFuncs }: FormProps) => (
  <SafeAreaView>
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
  </SafeAreaView>
);

export const AccountProfileFormSocialMedia = ({ inputs, errors, blurFuncs, changeTextFuncs }: FormProps) => (
  <SafeAreaView>
    <Space height={10} />
    <TextInput
      placeholder={"Website"}
      label={"Website"}
      placeholderTextColor={"#ddd"}
      inputMode="text"
      textContentType="URL"
      value={inputs.website}
      error={errors.website}
      onBlur={blurFuncs.website}
      onChangeText={changeTextFuncs.website}
      testID="Profile:Website"
    />
    <Space height={10} />
    <TextInput
      placeholder={"Instagram"}
      label={"Instagram (@yourhandle)"}
      placeholderTextColor={"#ddd"}
      inputMode="text"
      textContentType="URL"
      value={inputs.instagram}
      error={errors.instagram}
      onBlur={blurFuncs.instagram}
      onChangeText={changeTextFuncs.instagram}
      testID="Profile:Instagram"
    />
    <Space height={10} />
    <TextInput
      placeholder={"LinkedIn"}
      label={"LinkedIn"}
      placeholderTextColor={"#ddd"}
      inputMode="text"
      textContentType="URL"
      value={inputs.linkedin}
      error={errors.linkedin}
      onBlur={blurFuncs.linkedin}
      onChangeText={changeTextFuncs.linkedin}
      testID="Profile:LinkedIn"
    />
  </SafeAreaView>
);

export const AccountProfileFormBio = ({ inputs, errors, blurFuncs, changeTextFuncs }: FormProps) => (
  <SafeAreaView>
    <TextInput
      placeholder={"Please enter your biography"}
      label={"Biography*"}
      placeholderTextColor={"#ddd"}
      inputMode="text"
      textContentType="none"
      multiline
      numberOfLines={10}
      value={inputs.bio}
      error={errors.bio}
      onBlur={blurFuncs.bio}
      onChangeText={changeTextFuncs.bio}
      testID="Profile:UserBiography"
    />
  </SafeAreaView>
);

export const AccountProfileFormButton = ({ isPending, onPress }: FormProps) => (
  <SafeAreaView>
    <Button
      isLoading={isPending}
      onPress={onPress}
      testID="AccountProfileForm:Submit">
      Save Changes
    </Button>
  </SafeAreaView>
);

export default AccountProfileForm;
