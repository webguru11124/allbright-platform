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
  publicProfileSchema: Joi.PartialSchemaMap<any> | undefined,
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
  } = useFormWithPassConf(publicProfileSchema, {
    // default: {},
  });

  // TODO: update mutation to use usePublicProfile API
  const { mutate: mutateRegister, isPending } =
    useRegister();

  const onPress = () => {
    // if (isFormValid) setState(State.REGISTER); 
    console.log("mutate calling");
    // TODO: Update handling error and sucess on mutate
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

export default usePublicProfileForm;
