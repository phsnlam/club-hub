const Joi = require('@hapi/joi')
const {id} = require('./user') 

const ReviewSchema = Joi.object({
  id: Joi.string()
  .alphanum()
  .required(), //same as 'id', didnt use id from user schema in case we change pattern

  date: Joi.date().timestamp().required(),

  user_id: id,

  detail: Joi.string().required(),

  //rating in stars(min 1 stars - max 5 stars) 
  rating: Joi.number().min(1).max(5).required(),

  club_id: Joi.string().required()
})

module.exports = ReviewSchema
