import { useRouter } from "expo-router";
import Joi from "joi";
import { useEffect, useState } from "react";

import { useUserContext } from "@/contexts/UserContext";
import { profileGoalsAdapter, ProfileGoalsInput } from "@/forms/adaptors";
import useForm from "@/forms/hooks/useForm";
import { useUpdateUserGoals } from "@/hooks/resources/useUserGoals";

const useProfileGoalsForm = (careerGoalsSchema: Joi.PartialSchemaMap<any>) => {
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
  const { mutateAsync: mutateUpdateUserGoalsAsync } = useUpdateUserGoals();
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const { user } = useUserContext();

  useEffect(() => {
    if (user) {
      console.log("user", user);
      reset(user);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

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
