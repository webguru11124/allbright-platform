import { useRouter } from "expo-router";
import Joi from "joi";
import _ from "lodash";
import { useEffect, useState } from "react";

import { profileGoalsAdapter, ProfileGoalsInput } from "@/forms/adaptors";
import useForm from "@/forms/hooks/useForm";
import { useUpdateUserGoals, useUserGoals } from "@/hooks/resources/useUserGoals";
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
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const { careerGoals } = useUserGoals();
  const [currentCareerGoals, setCurrentCareerGoals] = useState(careerGoals);

  useEffect(() => {
    if (_.isEqual(careerGoals, currentCareerGoals) === false) {
      setCurrentCareerGoals(currentCareerGoals);
    }
  }, [careerGoals, currentCareerGoals, reset]);

  useEffect(() => {
    if (currentCareerGoals) changeTextFuncs.careerGoals(currentCareerGoals.map((goal: CareerGoalType) => goal.id));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentCareerGoals]);

  const onPress = async () => {
    try {
      if (!validateAllInputs()) throw new Error("Please fill out all required fields");
      setLoading(true);
      const input = postBody as ProfileGoalsInput;
      const goals = profileGoalsAdapter(input);

      await mutateUpdateUserGoalsAsync(goals.careerGoals);
      router.push("/onboarding/pledge");
    } catch (error: any) {
      showErrorMessage("Error", error.message);
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
