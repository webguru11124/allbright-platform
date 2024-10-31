import { SafeAreaView } from "react-native";

import Space from "@/components/Space";
import Button from "@/forms/components/Button";
import CareerGoalsSelection from "@/forms/components/CareerGoalsSelection";
import { FormProps } from "@/forms/types/forms.types";

const ProfileGoalsForm = ({
  errors,
  changeTextFuncs,
  isPending,
  onPress,
}: FormProps) => (
  <SafeAreaView>
    <CareerGoalsSelection
      updateField={changeTextFuncs.careerGoals}
      error={errors.careerGoals}
    />
    <Space height={10} />

    <Button
      isLoading={isPending}
      onPress={onPress}
      testID="ProfileGoalsForm:Submit">
      Next
    </Button>
  </SafeAreaView>
);

export default ProfileGoalsForm;
