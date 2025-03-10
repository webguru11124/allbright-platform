import { useRouter } from "expo-router";
import * as Joi from "joi";
import * as React from "react";
import { useEffect } from "react";

import { useUserContext } from "@/contexts/UserContext";
import { registerProfileAdaptor, RegisterProfileInput } from "@/forms/adaptors";
import useForm from "@/forms/hooks/useForm";
import { useUserUpdate } from "@/hooks/resources/useUserUpdate";

const useRegisterProfileForm = (registerProfileSchema: Joi.PartialSchemaMap<any>) => {
  const { user } = useUserContext();

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

  useEffect(() => {
    if (user) {
      reset(user);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  const { mutateAsync: mutateUpdateUserAsync } = useUserUpdate(user?.id);
  const [loading, setLoading] = React.useState(false);
  const router = useRouter();

  const onPress = async () => {
    try {
      if (!validateAllInputs()) throw new Error("Please fill out all required fields");
      setLoading(true);
      const input = postBody as RegisterProfileInput;
      const output = registerProfileAdaptor(input);

      await mutateUpdateUserAsync({ ...output });

      router.push("/onboarding/public-profile");
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

export default useRegisterProfileForm;
