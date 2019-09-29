const Joi = require('@hapi/joi')
const UserSchema = require('./user')

const ClubSchema = Joi.object({
  id: Joi.string()
    .alphanum()
    .required(),

  name: Joi.string().required(),

  description: Joi.string(),

  officers: Joi.array().items(UserSchema),

  meetingTime: Joi.string(),

  gallery: Joi.array().items(Joi.string()),

  avatarUrl: Joi.string(),

  bannerUrl: Joi.string()
})

module.exports = ClubSchema
