import { useRouter } from "expo-router";
import Joi from "joi";
import { useEffect, useState } from "react";

import { useUserContext } from "@/contexts/UserContext";
import { profileGoalsAdapter, ProfileGoalsInput } from "@/forms/adaptors";
import useForm from "@/forms/hooks/useForm";
import { useUpdateUserGoals, useUserGoals } from "@/hooks/resources/useUserGoals";

const useProfileGoalsForm = (careerGoalsSchema: Joi.PartialSchemaMap<any>) => {
  const { user } = useUserContext();
  const {
    inputs,
    errors,
    blurFuncs,
    changeTextFuncs,
    postBody,
    isFormValid,
    validateAllInputs,
    showErrorMessage,
    reset,
  } = useForm(careerGoalsSchema);
  const { mutateAsync: mutateUpdateUserGoalsAsync } = useUpdateUserGoals(user?.id);
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const { careerGoals, refetch } = useUserGoals(user?.id);

  useEffect(() => {
    refetch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (careerGoals) {
      reset({ careerGoals });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [careerGoals]);

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
