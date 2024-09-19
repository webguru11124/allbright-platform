import Joi from "joi";

import useForm from "@/forms/hooks/useForm";
import { useMemo } from "react";
import { Settings } from "@/forms/hooks/useForm";

const useFormWithPassConf = (
  baseSchema: Joi.PartialSchemaMap<any> | undefined,
  settings: Settings = {},
) => {
  const {
    schema,
    schemaInputs,
    schemaKeys,
    inputs,
    postBody,
    errors: internalErrors,
    touched,
    blurFuncs,
    changeTextFuncs,
    isFormValid: internalIsFormValid,
    showSuccessMessage,
    showErrorMessage,
  } = useForm(baseSchema, settings);

  const errors = useMemo<typeof internalErrors>(
    () =>
      touched.password_confirmation &&
      inputs.password !== inputs.password_confirmation
        ? {
            ...internalErrors,
            password_confirmation:
              '"Password Confirmation" and "Password" should match',
          }
        : {
            ...internalErrors,
          },
    [internalErrors, inputs.password, inputs.password_confirmation, touched],
  );

  const isFormValid = useMemo(
    () =>
      internalIsFormValid && inputs.password === inputs.password_confirmation,
    [inputs.password, inputs.password_confirmation, internalIsFormValid],
  );

  return {
    schema,
    schemaInputs,
    schemaKeys,
    inputs,
    postBody,
    errors,
    touched,
    blurFuncs,
    changeTextFuncs,
    isFormValid,
    showSuccessMessage,
    showErrorMessage,
  };
};

export default useFormWithPassConf;
