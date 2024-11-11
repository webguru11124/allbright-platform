import Joi from "joi";

export const careerGoals = {
  careerGoals: Joi.array().min(3).max(6).required(),
};

const careerGoalsSchema = careerGoals;

export default careerGoalsSchema;
