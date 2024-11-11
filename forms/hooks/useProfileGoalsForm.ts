import { useRouter } from "expo-router";
import Joi from "joi";
import * as React from "react";

import { profileGoalsAdapter, ProfileGoalsInput } from "@/forms/adaptors";
import useForm from "@/forms/hooks/useForm";
import { useUserProfile } from "@/hooks/resources/useUserProfile";
import { useUserUpdate } from "@/hooks/resources/useUserUpdate";

const useProfileGoalsForm = (careerGoalsSchema: Joi.PartialSchemaMap<any>) => {
  const { data: user } = useUserProfile();

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
  const { mutateAsync: mutateUpdateUserAsync } = useUserUpdate();
  const [loading, setLoading] = React.useState(false);
  const router = useRouter();

  React.useEffect(() => {
    if (user) reset(user);
  }, [user, reset]);

  const onPress = async () => {
    try {
      if (!validateAllInputs())
        throw new Error("Please fill out all required fields");
      setLoading(true);
      const input = postBody as ProfileGoalsInput;
      const user = profileGoalsAdapter(input);

      await mutateUpdateUserAsync(user);
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
