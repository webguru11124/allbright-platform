import { useSignIn, Login } from "@/hooks/resources/useAuth";
import { setToken } from "@/utils/token";
import { router } from "expo-router";
import useForm from "./useForm";
import Joi from "joi";

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

  const { mutate, isPending } = useSignIn();

  const onPress = () => {
    if (isFormValid) {
      mutate(postBody as Login, {
        onSuccess: (response) => {
          setToken(response.data as unknown as string);
          router.replace("/home");
        },
        onError: (error: any) => showErrorMessage(error.message),
      });
    }
  };

  return {
    inputs,
    errors,
    blurFuncs,
    changeTextFuncs,
    isFormValid,
    isPending,
    onPress,
  };
};

export default useLoginForm;
