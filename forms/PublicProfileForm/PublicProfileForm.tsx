import { SafeAreaView } from "react-native";

import Space from "@/components/Space";
import Button from "@/forms/components/Button";
import GoalsSelection from "@/forms/components/GoalsSelection";
import IndustryPicker from "@/forms/components/IndustryPicker";
import JobLevelPicker from "@/forms/components/JobLevelPicker";
import ProfilePhotoUploadSection from "@/forms/components/ProfilePhotoUploadSection";
import TextInput from "@/forms/components/TextInput";
import { FormProps } from "@/forms/types/forms.types";

const placeholderBiography =
  "Example: As a female CEO, I'm committed to leading with vision and impact. Alongside championing diversity and innovation, my passion for travel fuels my global perspective. Let's connect to empower each other in the world of leadership and swap adventure stories! ✈️ \n(500 characters max)";

const PublicProfileForm = ({ inputs, errors, blurFuncs, changeTextFuncs, isPending, onPress }: FormProps) => (
  <SafeAreaView>
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
      testID="PublicProfileForm:JobTitle"
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
      testID="PublicProfileForm:CompanyName"
    />
    <Space height={10} />
    <JobLevelPicker
      placeholder="Job Level"
      value={inputs.jobLevel}
      error={errors.jobLevel}
      onBlur={blurFuncs.jobLevel}
      onChangeText={changeTextFuncs.jobLevel}
      testID="PublicProfileForm:JobLevel"
    />
    <Space height={10} />
    <IndustryPicker
      placeholder="Industry"
      value={inputs.jobIndustry}
      error={errors.jobIndustry}
      onBlur={blurFuncs.jobIndustry}
      onChangeText={changeTextFuncs.jobIndustry}
      testID="PublicProfileForm:Industry"
    />
    <Space height={10} />
    <GoalsSelection
      field={inputs.goals}
      updateField={changeTextFuncs.goals}
      error={errors.goals}
    />
    <Space height={10} />
    <ProfilePhotoUploadSection
      value={inputs.profile_image}
      uploadProfileImage={changeTextFuncs.profile_image}
    />
    <Space height={10} />

    <TextInput
      placeholder={placeholderBiography}
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
      testID="PublicProfileForm:UserBiography"
    />

    <Space height={20} />

    <Button
      isLoading={isPending}
      onPress={onPress}
      testID="PublicProfileForm:Submit">
      Next
    </Button>
  </SafeAreaView>
);

export default PublicProfileForm;
