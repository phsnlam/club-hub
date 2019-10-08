const Joi = require('@hapi/joi')
const UserSchema, {id} = require('./user') 

const ClubSchema = Joi.object({
  id: Joi.string()
    .alphanum()
    .required(),

  name: Joi.string().required(),

  description: Joi.string().required(),

  officers: Joi.array().items(id).min(1),

  meetingTime: Joi.object({
    day: Joi.string(),
    time: Joi.string(),
    period: Joi.string()
  }),

  gallery: Joi.array().items(Joi.string()),

  avatarUrl: Joi.string(),

  bannerUrl: Joi.string(),

  active: Joi.boolean().required(),
  
  favoriteUsers: Joi.array().items(id)
})

module.exports = ClubSchema
