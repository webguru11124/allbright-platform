import Joi from "joi";

export const registerSchema = {
  email: Joi.string()
    .email({ tlds: { allow: false } })
    .required(),
  password: Joi.string().min(4).required(),
  password_confirmation: Joi.string().min(4).required(),
};

export default registerSchema;
