import Joi from "joi";

import countries from "@/utils/data/countries";

export const registerProfileSchema = {
  first_name: Joi.string().min(1).required(),
  last_name: Joi.string().min(1).required(),
  city: Joi.string().max(60).required(),
  country: Joi.valid(...countries.map((country) => country.Code))
    .required()
    .messages({
      "*": "Please pick a country from the list",
    }),
  termsAgreed: Joi.boolean().invalid(false).required(),
  marketingAgreed: Joi.boolean().required(),
  thirdPartyAgreed: Joi.boolean().required(),
};

export default registerProfileSchema;
