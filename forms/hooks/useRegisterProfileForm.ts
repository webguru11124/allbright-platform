import { useRouter } from "expo-router";
import * as Joi from "joi";
import * as React from "react";

import { registerProfileAdaptor, RegisterProfileInput } from "@/forms/adaptors";
import { useUserProfile } from "@/hooks/resources/useUserProfile";
import { useUserUpdate } from "@/hooks/resources/useUserUpdate";

import useForm from "./useForm";

const useRegisterProfileForm = (
  registerProfileSchema: Joi.PartialSchemaMap<any>
) => {
  const { data: user } = useUserProfile();

  const {
    inputs,
    errors,
    blurFuncs,
    changeTextFuncs,
    postBody,
    isFormValid,
    validateAllInputs,
    reset,
    showErrorMessage,
  } = useForm(registerProfileSchema);

  React.useEffect(() => {
    if (user) reset(user);
  }, [user]);

  const { mutateAsync: mutateUpdateUserAsync } = useUserUpdate();
  const [loading, setLoading] = React.useState(false);
  const router = useRouter();

  const onPress = async () => {
    // TODO: Update handling error and sucess on mutate
    try {
      if (!validateAllInputs())
        throw new Error("Please fill out all required fields");
      setLoading(true);
      const input = postBody as RegisterProfileInput;
      let user = registerProfileAdaptor(input);

      await mutateUpdateUserAsync(user);

      router.replace("/onboarding/public-profile");
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

export default useRegisterProfileForm;
