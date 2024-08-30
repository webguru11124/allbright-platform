import Joi from "joi";
import _ from "lodash";
import { useMemo, useState } from "react";

type Settings = {
  omit?: string[];
};

type EventType = { name: string; value: string };

const useForm = (
  baseSchema: Joi.PartialSchemaMap<any> | undefined,
  settings: Settings = {},
) => {
  const schemaKeys = Object.keys(baseSchema || {});

  const schemaInputs = _.chain(schemaKeys)
    .map((v) => [v, undefined])
    .fromPairs()
    .value();

  const schema = Joi.object(baseSchema);

  const [inputs, setInputs] = useState<typeof schemaInputs>(schemaInputs);
  const [errors, setErrors] = useState<typeof schemaInputs>(schemaInputs);
  const [touched, setTouched] = useState<typeof schemaInputs>(schemaInputs);

  const noErrors = useMemo(
    () => Object.keys(errors).every((v) => errors[v] === undefined),
    [errors],
  );

  const allInputsTouched = useMemo(
    () => Object.keys(touched).every((v) => touched[v] !== undefined),
    [touched],
  );

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

  const blurFuncs = _.chain(schemaInputs)
    .keys()
    .map((v) => [v, () => validateInput({ name: v, value: inputs[v] })])
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
    .map((v) => [v, (value: string) => onChangeText({ name: v, value: value })])
    .fromPairs()
    .value();

  const validateInputs = (): boolean => {
    Object.entries(inputs).forEach((val) =>
      validateInput({ name: _.head(val), value: _.last(val) }),
    );

    return noErrors;
  };

  const isFormValid = useMemo(
    () => allInputsTouched && noErrors,
    [allInputsTouched, noErrors],
  );

  const postBody = useMemo(
    () => (settings?.omit ? _.omit(inputs, settings.omit) : inputs),
    [inputs, settings],
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
    validateInputs,
    isFormValid,
  };
};

export default useForm;
