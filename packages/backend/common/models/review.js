const Joi = require('@hapi/joi')

const ReviewSchema = Joi.object({
  id: Joi.string()
    .alphanum()
    .required()
})

module.exports = ReviewSchema
