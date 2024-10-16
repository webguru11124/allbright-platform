import { SafeAreaView } from "react-native";
import Space from "@/components/Space";
import Button from "@/forms/components/Button";
import CityPicker from "@/forms/components/CityPicker";
import JobLevelPicker from "@/forms/components/JobLevelPicker";
import IndustryPicker from "@/forms/components/IndustryPicker";
import TextInput from "@/forms/components/TextInput";
import GoalsSelection from "@/forms/components/GoalsSelection";
import ProfilePhotoUploadSection from "@/forms/components/ProfilePhotoUploadSection";
import { FormProps } from "@/forms/types/forms.types";

const placeholderBiography =
  "Example: As a female CEO, I'm committed to leading with vision and impact. Alongside championing diversity and innovation, my passion for travel fuels my global perspective. Let's connect to empower each other in the world of leadership and swap adventure stories! ✈️ \n(500 characters max)";

const PublicProfileForm = ({
  inputs,
  errors,
  blurFuncs,
  changeTextFuncs,
  isPending,
  onPress,
}: FormProps) => (
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
    <GoalsSelection
      updateField={changeTextFuncs.goals}
      error={errors.goals}
    />
    <Space height={10} />
    <ProfilePhotoUploadSection
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
      value={inputs.user_biography}
      error={errors.user_biography}
      onBlur={blurFuncs.user_biography}
      onChangeText={changeTextFuncs.user_biography}
      testID="PublicProfileForm:UserBiography"
    />
    <Space height={10} />

    <Button
      isLoading={isPending}
      onPress={onPress}
      testID="PublicProfileForm:Submit">
      Next
    </Button>
  </SafeAreaView>
);

export default PublicProfileForm;
