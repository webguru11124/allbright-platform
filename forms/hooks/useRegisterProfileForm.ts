import { useRouter } from "expo-router";
import * as Joi from "joi";
import * as React from "react";

import {
  publicProfileAdaptor,
  PublicProfileInput,
  registerProfileAdaptor,
} from "@/forms/adaptors";
import { useUserUpdate } from "@/hooks/resources/useUserUpdate";
import { LocalImageType } from "@/types/files/localImage";

import useForm from "./useForm";

const useRegisterProfileForm = (
  registerProfileSchema: Joi.PartialSchemaMap<any>
) => {
  const {
    inputs,
    errors,
    blurFuncs,
    changeTextFuncs,
    postBody,
    isFormValid,
    validateAllInputs,
    showErrorMessage,
  } = useForm(registerProfileSchema, {
    default: {},
  });
  const { mutateAsync: mutateUpdateUserAsync } = useUserUpdate();
  const [loading, setLoading] = React.useState(false);
  const router = useRouter();

  const onPress = async () => {
    // TODO: Update handling error and sucess on mutate
    try {
      if (!validateAllInputs())
        throw new Error("Please fill out all required fields");
      setLoading(true);
      const input = postBody as any;
      let user = registerProfileAdaptor(input);

      await mutateUpdateUserAsync(user);

      router.replace("/onboarding/private-profile");
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
