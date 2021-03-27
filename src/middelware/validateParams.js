import Joi from 'joi'



const validateParams = (schema, name) => {
  return (req, res, next) => {
    console.log(schema, name)
  }
}

const schemas = {
  idSchema: Joi.object().keys({
    param: Joi.string().regex(/^[0-9a-fA-F]{24}/).required()
  })
}

export {
  validateParams,
  schemas
}