import { Href, useRouter } from "expo-router";
import Joi from "joi";
import * as React from "react";

import { useUserContext } from "@/contexts/UserContext";
import { privateProfileAdaptor, PrivateProfileInput } from "@/forms/adaptors";
import useForm from "@/forms/hooks/useForm";
import { useUserUpdate } from "@/hooks/resources/useUserUpdate";

const usePrivateProfileForm = (privateProfileSchema: Joi.PartialSchemaMap<any>) => {
  const { user } = useUserContext();

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
    if (user) {
      reset(user);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  const { mutateAsync: mutateUpdateUserAsync } = useUserUpdate(user?.id);
  const [loading, setLoading] = React.useState(false);
  const router = useRouter();

  const onPress = async () => {
    // TODO: Update handling error and sucess on mutate
    try {
      if (!validateAllInputs()) throw new Error("Please fill out all required fields");
      setLoading(true);
      const input = postBody as PrivateProfileInput;
      const output = privateProfileAdaptor(input);

      await mutateUpdateUserAsync({ ...output });
      router.push("/onboarding/profile-goals" as Href);
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

export default usePrivateProfileForm;
