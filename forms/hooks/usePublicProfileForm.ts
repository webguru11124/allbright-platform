import Joi from "joi";

import useFormWithPassConf from "@/forms/hooks/useFormWithPassConf";
import goals from "@/utils/data/goals";

const usePublicProfileForm = (
  publicProfileSchema: Joi.PartialSchemaMap<any> | undefined
) => {
  const { inputs, errors, blurFuncs, changeTextFuncs, isFormValid } =
    useFormWithPassConf(publicProfileSchema, {});

  const onPress = () => {
    // TODO: Update handling error and sucess on mutate
  };

  const setOnboardingFieldHandler = (
    field: "goals",
    value: (typeof goals)[number][]
  ) => {
    // setField(field, value);
  };

  return {
    inputs,
    errors,
    blurFuncs,
    changeTextFuncs,
    isFormValid,
    onPress,
    setOnboardingFieldHandler,
  };
};

export default usePublicProfileForm;
