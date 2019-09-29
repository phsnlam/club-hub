const Joi = require('@hapi/joi')

const schema = Joi.object({
  id: Joi.string()
    .alphanum()
    .required(),

  firstName: Joi.string(),

  lastName: Joi.string(),

  emal: Joi.string(),

  description: Joi.string(),

  avatarUrl: Joi.string(),

  isOfficer: Joi.bool(),

  clubs: Joi.array().items(Joi.string())
})

module.exports = schema
