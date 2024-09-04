import Joi from "joi";
import countries from "@/utils/data/countries";

export const registerSchema = {
  email: Joi.string()
    .email({ tlds: { allow: false } })
    .required(),
  password: Joi.string().min(4).alphanum().required(),
  password_confirmation: Joi.string().min(4).alphanum().required(),
  country: Joi.valid(...countries.map((country) => country.Code))
    .required()
    .messages({
      "*": "Please pick a country from the list",
    }),
};

export default registerSchema;
