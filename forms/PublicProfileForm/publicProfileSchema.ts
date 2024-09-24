import Joi from "joi";
import countries from "@/utils/data/countries";
import { jobLevels } from "@/utils/data/jobLevels";
import { onboardingIndustries } from "@/utils/data/industries";

export const publicProfileSchema = {
  city: Joi.string().max(60).required(),
  country: Joi.valid(...countries.map((country) => country.Code))
    .required()
    .messages({
      "*": "Please pick a country from the list",
    }),
  job_level: Joi.string().valid(...jobLevels).required().messages({
    "*": "Please pick a job level from the list",
  }),
  industry: Joi.string().valid(...onboardingIndustries).required().messages({
    "*": "Please pick an industry from the list",
  }),
};

export default publicProfileSchema;
