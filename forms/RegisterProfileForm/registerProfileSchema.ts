import Joi from "joi";

import countries from "@/utils/data/countries";

export const registerProfileSchema = {
  firstName: Joi.string().min(1).required(),
  lastName: Joi.string().min(1).required(),
  city: Joi.string().max(60).required(),
  country: Joi.valid(...countries.map((country) => country.Code))
    .required()
    .messages({
      "*": "Please pick a country from the list",
    }),
  termsAgreed: Joi.boolean().invalid(false).required(),
  marketingAgreed: Joi.boolean().optional(),
  thirdPartyAgreed: Joi.boolean().optional(),
};

export default registerProfileSchema;
