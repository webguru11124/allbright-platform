import { useRouter } from "expo-router";
import Joi from "joi";
import * as React from "react";

import { profileGoalsAdapter, ProfileGoalsInput } from "@/forms/adaptors";
import useForm from "@/forms/hooks/useForm";
import {
  useUpdateUserGoals,
  useUserGoals,
} from "@/hooks/resources/useUserGoals";
import { CareerGoalType } from "@/utils/data/careerGoals";

const useProfileGoalsForm = (careerGoalsSchema: Joi.PartialSchemaMap<any>) => {
  const {
    inputs,
    errors,
    blurFuncs,
    changeTextFuncs,
    postBody,
    isFormValid,
    reset,
    validateAllInputs,
    showErrorMessage,
  } = useForm(careerGoalsSchema);
  const { mutateAsync: mutateUpdateUserGoalsAsync } = useUpdateUserGoals();
  const [loading, setLoading] = React.useState(false);
  const router = useRouter();

  const { careerGoals } = useUserGoals();

  React.useEffect(() => {
    if (careerGoals) reset({ careerGoals: careerGoals.map((goal: CareerGoalType) => goal.id) });
  }, [careerGoals]);

  const onPress = async () => {
    try {
      if (!validateAllInputs())
        throw new Error("Please fill out all required fields");
      setLoading(true);
      const input = postBody as ProfileGoalsInput;
      const goals = profileGoalsAdapter(input);

      await mutateUpdateUserGoalsAsync(goals.careerGoals);
      router.replace("/onboarding/pledge");
    } catch (error: any) {
      showErrorMessage(error.message);
    } finally {
      setLoading(false);
    }
  };

  return {
    inputs,
    errors,
    blurFuncs,
    changeTextFuncs,
    isFormValid,
    isPending: loading,
    onPress,
  };
};

export default useProfileGoalsForm;
