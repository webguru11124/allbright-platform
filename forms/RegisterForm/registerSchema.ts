import Joi from "joi";

export const registerSchema = {
  firstName: Joi.string().min(1).required(),
  lastName: Joi.string().min(1).required(),
  email: Joi.string()
    .email({ tlds: { allow: false } })
    .required(),
  password: Joi.string().min(4).required(),
  password_confirmation: Joi.string().min(4).required(),
};

export default registerSchema;
