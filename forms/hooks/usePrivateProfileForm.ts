import * as React from "react";
import { useUserUpdate } from "@/hooks/resources/useUserUpdate";
import { privateProfileAdaptor, PrivateProfileInput } from "../adaptors";
import { useRouter } from "expo-router";
import useForm from "./useForm";
import Joi from "joi";

const usePrivateProfileForm = (
  privateProfileSchema: Joi.PartialSchemaMap<any>
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
  } = useForm(privateProfileSchema);
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
      const user = privateProfileAdaptor(input);

      await mutateUpdateUserAsync(user);

      router.replace("/onboarding/profile-goals");
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

export default usePrivateProfileForm;
