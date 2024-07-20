import Joi from 'joi';

const registerProductFieldsContent = Joi.object({
  name: Joi.string().min(3),
  price: Joi.string().min(3),
  userId: Joi.number().options({ convert: false }),
});

const registerProductFields = Joi.object({
  name: Joi.required(),
  price: Joi.required(),
  userId: Joi.required(),
});

export default {
  registerProductFields,
  registerProductFieldsContent,
};