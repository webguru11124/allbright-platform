import { useRouter } from "expo-router";
import Joi from "joi";
import * as React from "react";
import { useEffect } from "react";

import { useUserContext } from "@/contexts/UserContext";
import { pledgeAdapter, PledgeInput } from "@/forms/adaptors";
import useForm from "@/forms/hooks/useForm";
import { useUserUpdate } from "@/hooks/resources/useUserUpdate";

const useProfileGoalsForm = (careerGoalsSchema: Joi.PartialSchemaMap<any>) => {
  const { user } = useUserContext();
  const {
    inputs,
    errors,
    blurFuncs,
    reset,
    changeTextFuncs,
    postBody,
    isFormValid,
    validateAllInputs,
    showErrorMessage,
  } = useForm(careerGoalsSchema);
  const { mutateAsync: mutateUpdateUserAsync } = useUserUpdate(user?.id);
  const [loading, setLoading] = React.useState(false);
  const router = useRouter();

  useEffect(() => {
    if (user) {
      reset(user);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  const onPress = async () => {
    try {
      if (!validateAllInputs()) throw new Error("Please fill out all required fields");
      setLoading(true);
      const input = postBody;
      const output = pledgeAdapter(input as PledgeInput);

      await mutateUpdateUserAsync({ ...output });
      router.push("/onboarding/complete");
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
