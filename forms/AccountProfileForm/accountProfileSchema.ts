import Joi from "joi";

import countries from "@/utils/data/countries";
import goals from "@/utils/data/goals";
import { onboardingIndustries } from "@/utils/data/industries";
import { jobLevels } from "@/utils/data/jobLevels";

export const accountProfileSchema = {
  profile_image: Joi.any(),
  country: Joi.valid(...countries.map((country) => country.Code))
    .required()
    .messages({
      "*": "Please pick a country from the list",
    }),
  city: Joi.string().max(60).required(),
  jobTitle: Joi.string().required().messages({
    "*": "Please enter a job title",
  }),
  jobCompany: Joi.string().allow(null),
  jobLevel: Joi.string()
    .valid(...jobLevels)
    .required()
    .messages({
      "*": "Please pick a job level from the list",
    }),
  jobIndustry: Joi.string()
    .valid(...onboardingIndustries)
    .required()
    .messages({
      "*": "Please pick an industry from the list",
    }),
  goals: Joi.array()
    .required()
    .items(Joi.string().valid(...goals))
    .min(1)
    .max(3)
    .messages({
      "array.min": "You must select at least one goal.",
      "array.max": "You can select up to three goals.",
      "array.includes": "Invalid goal selected.",
      "any.required": "You must select at least one goal.",
    }),
  interests: Joi.array().min(1).required(),
  businessCardColour: Joi.string().allow(null),
  bio: Joi.string().required().min(10).max(500).messages({
    "string.empty": "Biography is required",
    "string.min": "Biography must be at least 10 characters long",
    "string.max": "Biography must be less than or equal to 500 characters long",
    "any.required": "Biography is required",
  }),
  website: Joi.string().allow(null),
  instagram: Joi.string().allow(null),
  linkedin: Joi.string().allow(null),
};

export default accountProfileSchema;
