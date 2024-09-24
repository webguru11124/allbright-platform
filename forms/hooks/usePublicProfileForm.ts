import Joi from "joi";

import useFormWithPassConf from "@/forms/hooks/useFormWithPassConf";

const usePublicProfileForm = (
  publicProfileSchema: Joi.PartialSchemaMap<any> | undefined,
) => {
  const { inputs, errors, blurFuncs, changeTextFuncs, isFormValid } =
    useFormWithPassConf(publicProfileSchema, {
      // default: {},
    });

  // TODO: update mutation to use usePublicProfile API

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
    onPress,
  };
};

export default usePublicProfileForm;
