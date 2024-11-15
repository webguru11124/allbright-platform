import { Href, useRouter } from "expo-router";
import Joi from "joi";
import * as React from "react";

import { privateProfileAdaptor, PrivateProfileInput } from "@/forms/adaptors";
import useForm from "@/forms/hooks/useForm";
import { useUserProfile } from "@/hooks/resources/useUserProfile";
import { useUserUpdate } from "@/hooks/resources/useUserUpdate";

const usePrivateProfileForm = (
  privateProfileSchema: Joi.PartialSchemaMap<any>
) => {
  const { data: user } = useUserProfile();

  const {
    inputs,
    errors,
    blurFuncs,
    changeTextFuncs,
    postBody,
    reset,
    isFormValid,
    validateAllInputs,
    showErrorMessage,
  } = useForm(privateProfileSchema);

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
      const input = postBody as PrivateProfileInput;
      const output = privateProfileAdaptor(input);

      await mutateUpdateUserAsync({ ...output });
      router.replace("/onboarding/profile-goals" as Href);
    } catch (error: any) {
      showErrorMessage(error.message);
    } finally {
      setLoading(false);
    }
  };
  console.log(inputs.ethnicGroups)

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

export default usePrivateProfileForm;
