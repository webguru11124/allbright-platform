import Joi from "joi";

export const loginSchema = {
  email: Joi.string()
    .email({ tlds: { allow: false } })
    .required(),
  password: Joi.string().min(4).required(),
};

export default loginSchema;
