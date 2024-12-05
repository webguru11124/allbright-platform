import { Href, useRouter } from "expo-router";
import Joi from "joi";
import * as React from "react";

import { UserContext } from "@/contexts/UserContext";
import { ethnicGroupsAdapter, privateProfileAdaptor, PrivateProfileInput } from "@/forms/adaptors";
import useForm from "@/forms/hooks/useForm";
import { useUserUpdate } from "@/hooks/resources/useUserUpdate";
import { UserModel } from "@/types/user";

const usePrivateProfileForm = (privateProfileSchema: Joi.PartialSchemaMap<any>) => {
  const { user, refetch } = React.useContext<{
    user: Partial<UserModel> | undefined;
    refetch: Function;
  }>(UserContext);

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
      if (user.ethnicGroups) changeTextFuncs.ethnicGroups(ethnicGroupsAdapter(user.ethnicGroups));
    } else {
      refetch();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [refetch, user]);

  const { mutateAsync: mutateUpdateUserAsync } = useUserUpdate();
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
