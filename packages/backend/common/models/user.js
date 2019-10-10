const Joi = require('@hapi/joi')

const id = Joi.string()
.alphanum()
.required();

const schema = Joi.object({
  id: id,

  firstName: Joi.string(),

  lastName: Joi.string(),

  email: Joi.string(),

  description: Joi.string(),

  avatarUrl: Joi.string(),

  //stores array of club roles (officer, member...)
  roles: Joi.array().items(Joi.string()),

  //stores array of club id
  favorite_clubs: Joi.array().items(Joi.string())
})

module.exports = schema;
module.exports.id = id;