import { SafeAreaView } from "react-native";

import Space from "@/components/Space";
import Button from "@/forms/components/Button";
import { FormProps } from "../types/forms.types";
import InterestsSection from "../components/InterestsSelection";
import JobStatusPicker from "../components/JobStatusPicker";
import SalaryPicker from "../components/SalaryPicker";
import EthnicGroupsSection from "../components/EthnicGroupSelection";
import OrganizationSizePicker from "../components/OrganizationSizePicker";
import DatePickerInput from "../components/DatePickerInput";

const PrivateProfileForm = ({
  inputs,
  errors,
  blurFuncs,
  changeTextFuncs,
  isPending,
  onPress,
}: FormProps) => (
  <SafeAreaView>
    <InterestsSection
      updateField={changeTextFuncs.interests}
      error={errors.interests}
    />
    <Space height={10} />
    <JobStatusPicker
      placeholder="Job status*"
      value={inputs.jobStatus}
      error={errors.jobStatus}
      onBlur={blurFuncs.jobStatus}
      onChangeText={changeTextFuncs.jobStatus}
      testID="PrivateProfileForm:JobStatus"
    />
    <Space height={10} />
    <SalaryPicker
      placeholder="Salary band"
      value={inputs.salary}
      error={errors.salary}
      onBlur={blurFuncs.salary}
      onChangeText={changeTextFuncs.salary}
      testID="PrivateProfileForm:Salary"
    />
    <Space height={10} />
    <OrganizationSizePicker
      placeholder="Size of organization"
      value={inputs.organisationSize}
      error={errors.organisationSize}
      onBlur={blurFuncs.organisationSize}
      onChangeText={changeTextFuncs.organisationSize}
      testID="PrivateProfileForm:organisationSize"
    />
    <Space height={10} />
    <EthnicGroupsSection
      setField={changeTextFuncs.ethnicGroups}
      error={errors.ethnicGroups}
    />
    <Space height={10} />
    <DatePickerInput
      locale="en"
      label="Birthday*"
      value={inputs.dateOfBirth ?? ""}
      onChange={changeTextFuncs.dateOfBirth}
      inputMode="start"
      mode="flat"
      error={errors.dateOfBirth}
      testID="PrivateProfileForm:DateOfBirth"
    />
    <Space height={10} />
    <Button
      isLoading={isPending}
      onPress={onPress}
      testID="PrivateProfileForm:Submit">
      Next
    </Button>
  </SafeAreaView>
);

export default PrivateProfileForm;
