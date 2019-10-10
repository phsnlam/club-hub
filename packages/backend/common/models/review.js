const Joi = require('@hapi/joi')
const {id} = require('./user') 

const ReviewSchema = Joi.object({
  id: id,

  date: Joi.date().timestamp().required(),

  user_id: Joi.string().required(),

  detail: Joi.string().required(),

  //rating in stars(int 0-5) 
  rating: Joi.number().required(),

  club_id: Joi.string().required()
})

module.exports = ReviewSchema
