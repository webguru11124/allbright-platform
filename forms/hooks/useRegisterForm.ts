import { router } from "expo-router";
import Joi from "joi";

import { RegisterInput, registrationAdaptor } from "@/forms/adaptors";
import useFormWithPassConf from "@/forms/hooks/useFormWithPassConf";
import { Register, useSignIn } from "@/hooks/resources/useAuth";
import { setToken } from "@/utils/token";

const useRegisterForm = (
  registerSchema: Joi.PartialSchemaMap<any> | undefined,
) => {
  const {
    inputs,
    postBody,
    errors,
    blurFuncs,
    changeTextFuncs,
    isFormValid,
    showErrorMessage,
  } = useFormWithPassConf(registerSchema, {
    default: { marketingAgreed: false, thirdPartyAgreed: false },
  });

  const { mutate, isPending } = useSignIn();

  const onPress = () => {
    if (isFormValid) {
      mutate(registrationAdaptor(postBody as RegisterInput) as Register, {
        onSuccess: (response) => {
          setToken(response as unknown as string);
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

export default useRegisterForm;
