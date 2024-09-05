import Joi from "joi";
import countries from "@/utils/data/countries";

export const registerSchema = {
  first_name: Joi.string().min(1).required(),
  last_name: Joi.string().min(1).required(),
  email: Joi.string()
    .email({ tlds: { allow: false } })
    .required(),
  city: Joi.string().max(60).required(),
  country: Joi.valid(...countries.map((country) => country.Code))
    .required()
    .messages({
      "*": "Please pick a country from the list",
    }),
  password: Joi.string().min(4).alphanum().required(),
  password_confirmation: Joi.string().min(4).alphanum().required(),
  termsAgreed: Joi.boolean().invalid(false).required(),
};

export default registerSchema;
