import { useRouter } from "expo-router";
import Joi from "joi";
import * as React from "react";

import { pledgeAdapter, PledgeInput } from "@/forms/adaptors";
import useForm from "@/forms/hooks/useForm";
import { useUserUpdate } from "@/hooks/resources/useUserUpdate";

const useProfileGoalsForm = (careerGoalsSchema: Joi.PartialSchemaMap<any>) => {
  const { inputs, errors, blurFuncs, changeTextFuncs, postBody, isFormValid, validateAllInputs, showErrorMessage } =
    useForm(careerGoalsSchema);
  const { mutateAsync: mutateUpdateUserAsync } = useUserUpdate();
  const [loading, setLoading] = React.useState(false);
  const router = useRouter();

  const onPress = async () => {
    try {
      if (!validateAllInputs()) throw new Error("Please fill out all required fields");
      setLoading(true);
      const input = postBody;
      const output = pledgeAdapter(input as PledgeInput);

      await mutateUpdateUserAsync({ ...output });
      router.replace("/onboarding/complete");
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
