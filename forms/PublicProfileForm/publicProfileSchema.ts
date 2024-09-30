import Joi from "joi";
import { jobLevels } from "@/utils/data/jobLevels";
import { onboardingIndustries } from "@/utils/data/industries";
import goals from "@/utils/data/goals";

export const publicProfileSchema = {
  city: Joi.string().max(60).required(),
  job_level: Joi.string()
    .valid(...jobLevels)
    .required()
    .messages({
      "*": "Please pick a job level from the list",
    }),
  industry: Joi.string()
    .valid(...onboardingIndustries)
    .required()
    .messages({
      "*": "Please pick an industry from the list",
    }),
  goals: Joi.array()
    .items(Joi.string().valid(...goals))
    .min(1)
    .max(3),
  company_name: Joi.string().allow(null),
  job_title: Joi.string().required().messages({
    "*": "Please enter a job title",
  }),
  user_biography: Joi.string()
    .required()
    .messages({
      "*": "Please enter a biography",
    })
    .max(500)
    .min(10),
};

export default publicProfileSchema;
