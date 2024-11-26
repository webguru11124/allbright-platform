import { useRouter } from "expo-router";
import * as Joi from "joi";
import _ from "lodash";
import * as React from "react";
import { useEffect, useState } from "react";

import { registerProfileAdaptor, RegisterProfileInput } from "@/forms/adaptors";
import useForm from "@/forms/hooks/useForm";
import { useUserProfile } from "@/hooks/resources/useUserProfile";
import { useUserUpdate } from "@/hooks/resources/useUserUpdate";

const useRegisterProfileForm = (
  registerProfileSchema: Joi.PartialSchemaMap<any>
) => {
  const { data: user } = useUserProfile();
  const [currentUser, setCurrentUser] = useState(user);

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
    if (_.isEqual(user, currentUser) === false) {
      if (user) reset(user);
      setCurrentUser(user);
    }
  }, [user, currentUser, reset]);

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
      const output = registerProfileAdaptor(input);

      await mutateUpdateUserAsync({ ...output });

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
