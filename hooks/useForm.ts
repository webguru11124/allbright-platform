import Joi from "joi";
import _ from "lodash";
import { useState } from "react";

type Base = {
  baseSchema: Joi.PartialSchemaMap<any> | undefined;
};

type EventType = { name: string; value: string };

const useForm = ({ baseSchema }: Base) => {
  const schemaKeys = Object.keys(baseSchema || {});

  const schemaInputs = _.chain(schemaKeys)
    .map((v) => [v, undefined])
    .fromPairs()
    .value();

  const schema = Joi.object(baseSchema);

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

  return {
    schema,
    schemaInputs,
    schemaKeys,
    inputs,
    errors,
    touched,
    blurFuncs,
    changeTextFuncs,
  };
};

export default useForm;
