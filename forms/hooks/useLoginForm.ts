import { router } from "expo-router";
import Joi from "joi";

import useForm from "@/forms/hooks/useForm";
import { Login, useSignIn } from "@/hooks/resources/useAuth";
import { setToken } from "@/utils/token";

const useLoginForm = (loginSchema: Joi.PartialSchemaMap<any> | undefined) => {
  const { inputs, postBody, errors, blurFuncs, changeTextFuncs, isFormValid, showErrorMessage } = useForm(loginSchema);

  const { mutate: signIn, isPending } = useSignIn();

  const onPress = () => {
    if (isFormValid) {
      signIn(postBody as Login, {
        onSuccess: (response) => {
          setToken(response.data as unknown as string);
          router.replace("/home");
        },
        onError: (error: any) => showErrorMessage("Error", error.message),
      });
    }
  };

  return {
    inputs,
    errors,
    blurFuncs,
    changeTextFuncs,
    isFormValid,
    isPending: isPending,
    onPress,
  };
};

export default useLoginForm;
