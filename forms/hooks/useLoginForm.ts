import Joi from "joi";

import { useUserContext } from "@/contexts/UserContext";
import useForm from "@/forms/hooks/useForm";
import { Login, useSignIn } from "@/hooks/resources/useAuth";

const useLoginForm = (loginSchema: Joi.PartialSchemaMap<any> | undefined) => {
  const { inputs, postBody, errors, blurFuncs, changeTextFuncs, isFormValid, showErrorMessage } = useForm(loginSchema);

  const { mutate: signIn, isPending } = useSignIn();
  const { refetch } = useUserContext();

  const onPress = () => {
    if (isFormValid) {
      signIn(postBody as Login, {
        onSuccess: async (_) => {
          refetch();
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
