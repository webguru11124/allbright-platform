import { router } from "expo-router";
import Joi from "joi";

import { RegisterInput, registrationAdaptor } from "@/forms/adaptors";
import useFormWithPassConf from "@/forms/hooks/useFormWithPassConf";
import {
  Login,
  Register,
  useRegister,
  useSignIn,
} from "@/hooks/resources/useAuth";
import { setToken } from "@/utils/token";
import { useCallback, useEffect, useState } from "react";

enum State {
  IDLE = 1,
  REGISTER,
  SIGNIN,
  SUCCESS,
}

const usePublicProfileForm = (
  registerSchema: Joi.PartialSchemaMap<any> | undefined,
) => {
  const [state, setState] = useState<State>(State.IDLE);
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

  const { mutate: mutateRegister, isPending: isPendingRegister } =
    useRegister();

  const { mutate: mutateSignin, isPending: isPendingSignIn } = useSignIn();

  const onPress = () => {
    if (isFormValid) setState(State.REGISTER);
  };

  const register = useCallback(
    () =>
      mutateRegister(
        registrationAdaptor(postBody as RegisterInput) as Register,
        {
          onSuccess: ({ data }) => {
            if (data.success) setState(State.SIGNIN);
          },
          onError: (error: any) => showErrorMessage(error.message),
        },
      ),
    [mutateRegister, postBody, showErrorMessage],
  );

  const signin = useCallback(
    () =>
      mutateSignin(postBody as Login, {
        onSuccess: (response) => {
          setToken(response as unknown as string);
          setState(State.SUCCESS);
        },
        onError: (error: any) => showErrorMessage(error.message),
      }),
    [mutateSignin, postBody, showErrorMessage],
  );

  const navigateToHome = useCallback(() => {
    router.replace("/home");
  }, []);

  useEffect(() => {
    switch (state) {
      case State.REGISTER:
        if (isPendingRegister === false) register();
        break;
      case State.SIGNIN:
        if (isPendingSignIn === false) signin();
        break;
      case State.SUCCESS:
        navigateToHome();
        break;
    }
  }, [
    isPendingRegister,
    isPendingSignIn,
    navigateToHome,
    register,
    signin,
    state,
  ]);

  return {
    inputs,
    errors,
    blurFuncs,
    changeTextFuncs,
    isFormValid,
    isPending: isPendingRegister || isPendingSignIn,
    onPress,
  };
};

export default usePublicProfileForm;
