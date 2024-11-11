import Joi from "joi";
import _ from "lodash";
import React, { useMemo, useState } from "react";
import { Platform } from "react-native";
import Toast from "react-native-root-toast";

import useTheme from "@/hooks/useTheme";

export type Settings = {
  omit?: string[];
  default?: any;
};

type EventType = { name: string; value: string | boolean };

const useForm = (
  baseSchema: Joi.PartialSchemaMap<any> | undefined,
  settings: Settings = {}
) => {
  const theme = useTheme();
  const schema = Joi.object(baseSchema);
  const schemaKeys = Object.keys(baseSchema || {});
  const schemaInputs = _.chain(schemaKeys)
      .map((key) => [key, (settings?.default as Record<string, any>)?.[key]])
      .fromPairs()
      .value();

  const [inputs, setInputs] = useState<typeof schemaInputs>(schemaInputs);
  const [errors, setErrors] = useState<typeof schemaInputs>(schemaInputs);
  const [touched, setTouched] = useState<typeof schemaInputs>(schemaInputs);

  const reset = React.useCallback((values: Partial<typeof schemaInputs> = {}) => {
    const newInputs = { ...inputs, ...values };
    setInputs(newInputs);
  }, [inputs]);

  const updateInputs = ({ name, value }: EventType) =>
    setInputs((prev) => ({ ...prev, [name]: value }));

  const validateInput = ({ name, value }: EventType) => {
    setTouched((prev) => ({ ...prev, [name]: true }));

    const { error } = schema.extract(name).validate(value);

    setErrors((prev) => ({
      ...prev,
      [name]: error
        ? `${error.message.replace("value", name.slice(0, 1).toUpperCase() + name.slice(1))}`
        : undefined,
    }));
  };

  const validateAllInputs = (): boolean => {
    const newErrors = _.mapValues(schemaInputs, (value, key) => {
      setTouched((prev) => ({ ...prev, [key]: true }));
      const { error } = schema.extract(key).validate(inputs[key]);
      return error
        ? `${error.message.replace("value", key.slice(0, 1).toUpperCase() + key.slice(1))}`
        : undefined;
    });

    setErrors(newErrors);

    return Boolean(_.some(newErrors, (error) => error !== undefined)) === false;
  };

  const blurFuncs = _.chain(schemaInputs)
    .keys()
    .map((key) => [key, () => validateInput({ name: key, value: inputs[key] })])
    .fromPairs()
    .value();

  const onChangeText = ({ name, value }: EventType) => {
    updateInputs({
      name: name,
      value: value,
    });

    touched[name] && validateInput({ name, value });
  };

  const changeTextFuncs = _.chain(schemaInputs)
    .keys()
    .map((key) => [
      key,
      (value: string) => onChangeText({ name: key, value: value }),
    ])
    .fromPairs()
    .value();

  const isFormValid = useMemo(
    () => schema.validate(inputs).error === undefined,
    [inputs, schema]
  );

  const postBody = useMemo(
    () => (settings?.omit ? _.omit(inputs, settings.omit) : inputs),
    [inputs, settings]
  );

  const showSuccessMessage = (message: string) => {
    showToastMessage(message, theme.colors.alert.success);
  };

  const showErrorMessage = (message: string) => {
    showToastMessage(message, theme.colors.alert.danger);
  };

  const showToastMessage = (message: string, color: string) => {
    Toast.show(message, {
      duration: 10000,
      backgroundColor: color,
      hideOnPress: true,
      opacity: 1,
      ...Platform.select({
        web: {
          position: 92,
          containerStyle: { minWidth: 500 },
        },
        default: {
          position: Toast.positions.TOP,
          containerStyle: { minWidth: "auto" },
        },
      }),
    });
  };

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
    reset,
    isFormValid,
    validateAllInputs,
    showSuccessMessage,
    showErrorMessage,
  };
};

export default useForm;
