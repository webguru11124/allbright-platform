import Joi from "joi";

const eighteenYearsAgo = new Date();
eighteenYearsAgo.setFullYear(eighteenYearsAgo.getFullYear() - 18);

const oneHundredAndTwentyYearsAgo = new Date();
oneHundredAndTwentyYearsAgo.setFullYear(oneHundredAndTwentyYearsAgo.getFullYear() - 120);

export const profilePrivate = {
  interests: Joi.array().min(1).required(),
  jobStatus: Joi.string().max(30).required(),
  salary: Joi.string().max(30).allow(null),
  organisationSize: Joi.string().max(30).allow(null),
  dateOfBirth: Joi.date()
    .max(eighteenYearsAgo.toISOString().substring(0, 10))
    .min(oneHundredAndTwentyYearsAgo.toISOString().substring(0, 10))
    .iso()
    .required(),
  ethnicGroups: Joi.array()
    .items(
      Joi.object().keys({
        id: Joi.string().guid().required(),
        title: Joi.string().required(),
        value: Joi.string().required(),
      })
    )
    .min(1)
    .required()
    .messages({
      "any.required": "You must select at least one option",
    }),
};

const profilePrivateSchema = profilePrivate;
export default profilePrivateSchema;
