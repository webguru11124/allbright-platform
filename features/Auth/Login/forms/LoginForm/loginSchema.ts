import Joi from "joi";
import _ from "lodash";

export const baseSchema = {
  email: Joi.string()
    .email({ tlds: { allow: false } })
    .required(),
  password: Joi.string().min(4).alphanum().required(),
};

export const schemaKeys = Object.keys(baseSchema);

export const schemaInputs = _.chain(schemaKeys)
  .map((v) => [v, undefined])
  .fromPairs()
  .value();

const loginSchema = Joi.object(baseSchema);

export default loginSchema;
