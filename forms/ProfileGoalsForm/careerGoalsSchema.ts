import Joi from "joi";

export const careerGoals = {
  careerGoals: Joi.array()
    .items(Joi.string().uuid())
    .unique()
    .min(3)
    .max(6)
    .required(),
};

const careerGoalsSchema = careerGoals;

export default careerGoalsSchema;
