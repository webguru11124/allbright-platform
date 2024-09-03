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
  const schema = Joi.object(baseSchema);
  const schemaKeys = Object.keys(baseSchema || {});
  const schemaInputs = _.chain(schemaKeys)
    .map((key) => [key, undefined])
    .fromPairs()
    .value();

  const [inputs, setInputs] = useState<typeof schemaInputs>(schemaInputs);
  const [errors, setErrors] = useState<typeof schemaInputs>(schemaInputs);
  const [touched, setTouched] = useState<typeof schemaInputs>(schemaInputs);

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
    [inputs, schema],
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
    isFormValid,
  };
};

export default useForm;
