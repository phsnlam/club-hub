const Joi = require('@hapi/joi')

const id = Joi.string()
.alphanum()
.required();

const schema = Joi.object({
  id: id,

  firstName: Joi.string(),

  lastName: Joi.string(),

  emal: Joi.string(),

  description: Joi.string(),

  avatarUrl: Joi.string(),

  role: Joi.array().items(Joi.string()),

  favorite_clubs: Joi.array().items(Joi.string())
})

module.exports = schema;
module.exports.id = id;