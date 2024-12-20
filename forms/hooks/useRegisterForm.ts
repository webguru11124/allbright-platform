import { router } from "expo-router";
import Joi from "joi";
import React, { useCallback, useEffect, useState } from "react";

import { useUserContext } from "@/contexts/UserContext";
import { RegisterInput, registrationAdaptor } from "@/forms/adaptors";
import useFormWithPassConf from "@/forms/hooks/useFormWithPassConf";
import { Login, Register, useRegister, useSignIn } from "@/hooks/resources/useAuth";

enum State {
  IDLE = 1,
  REGISTER,
  SIGNIN,
  SUCCESS,
}

const useRegisterForm = (registerSchema: Joi.PartialSchemaMap<any> | undefined) => {
  const [state, setState] = useState<State>(State.IDLE);
  const { inputs, postBody, errors, blurFuncs, changeTextFuncs, isFormValid, showErrorMessage } =
    useFormWithPassConf(registerSchema);

  const { mutate: mutateRegister, isPending: isPendingRegister } = useRegister();

  const { mutate: mutateSignin, isPending: isPendingSignIn } = useSignIn();
  const { refetch } = useUserContext();

  // const onPress = () => {
  //   if (isFormValid) setState(State.REGISTER);
  // };

  const register = useCallback(
    () =>
      mutateRegister(registrationAdaptor(postBody as RegisterInput) as Register, {
        onSuccess: ({ data }) => {
          if (data.success) setState(State.SIGNIN);
        },
        onError: (error: any) => showErrorMessage("Error", error.message),
        onSettled: () => {
          registerCalled.current = false;
        },
      }),
    [postBody, showErrorMessage, mutateRegister]
  );

  const signin = useCallback(
    () =>
      mutateSignin(postBody as Login, {
        onSuccess: async (response) => {
          refetch();
          setState(State.SUCCESS);
        },
        onError: (error: any) => showErrorMessage("Error", error.message),
        onSettled: () => {
          signinCalled.current = false;
        },
      }),
    [mutateSignin, refetch, postBody, showErrorMessage]
  );

  const navigateToHome = useCallback(() => {
    router.replace("/onboarding/welcome");
  }, []);

  const registerCalled = React.useRef(false);
  const signinCalled = React.useRef(false);
  useEffect(() => {
    switch (state) {
      case State.REGISTER:
        if (!registerCalled.current && !isPendingRegister) {
          registerCalled.current = true;
          register();
        }
        break;
      case State.SIGNIN:
        if (!signinCalled.current && !isPendingSignIn) {
          signinCalled.current = true;
          signin();
        }
        break;
      case State.SUCCESS:
        navigateToHome();
        break;
    }
  }, [isPendingRegister, isPendingSignIn, register, signin, navigateToHome, state]);

  return {
    inputs,
    errors,
    blurFuncs,
    changeTextFuncs,
    isFormValid,
    isPending: isPendingRegister || isPendingSignIn,
    onPress: register,
  };
};

export default useRegisterForm;
