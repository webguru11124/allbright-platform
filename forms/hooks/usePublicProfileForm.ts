import Joi from "joi";

import useFormWithPassConf from "@/forms/hooks/useFormWithPassConf";

const usePublicProfileForm = (
  publicProfileSchema: Joi.PartialSchemaMap<any> | undefined,
) => {
  const { inputs, errors, blurFuncs, changeTextFuncs, isFormValid } =
    useFormWithPassConf(publicProfileSchema, {});

  const onPress = () => {
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
