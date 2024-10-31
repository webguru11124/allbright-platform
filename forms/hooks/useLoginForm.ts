import { router } from "expo-router";
import Joi from "joi";

import useForm from "@/forms/hooks/useForm";
import { Login, useGoogleSignIn, useSignIn } from "@/hooks/resources/useAuth";
import { setToken } from "@/utils/token";

const useLoginForm = (loginSchema: Joi.PartialSchemaMap<any> | undefined) => {
  const {
    inputs,
    postBody,
    errors,
    blurFuncs,
    changeTextFuncs,
    isFormValid,
    showErrorMessage,
  } = useForm(loginSchema);

  const { mutate: signIn, isPending } = useSignIn();

  const { mutate: googleSignIn, isPending: isPendingGoogleSignIn } =
    useGoogleSignIn();

  const onPress = () => {
    if (isFormValid) {
      signIn(postBody as Login, {
        onSuccess: (response) => {
          setToken(response.data as unknown as string);
          router.replace("/home");
        },
        onError: (error: any) => showErrorMessage(error.message),
      });
    }
  };

  const onGoogleSignIn = (token: string) => {
    console.log("call api", token);
    googleSignIn(token, {
      onSuccess: (response) => {
        setToken(response.data as unknown as string);
        router.replace("/home");
      },
      onError: (error: any) => showErrorMessage(error.message),
    });
  };

  return {
    inputs,
    errors,
    blurFuncs,
    changeTextFuncs,
    isFormValid,
    isPending: isPending || isPendingGoogleSignIn,
    onPress,
    onGoogleSignIn,
  };
};

export default useLoginForm;
