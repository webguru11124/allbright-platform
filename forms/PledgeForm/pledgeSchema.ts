import Joi from "joi";

export const pledge = {
  agreedToPledge: Joi.boolean().invalid(false).required(),
};

const pledgeSchema = pledge;

export default pledgeSchema;
