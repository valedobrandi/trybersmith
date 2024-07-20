import Joi from 'joi';

const registerProductFieldsContent = Joi.object({
  name: Joi.string().min(3).required(),
  price: Joi.string().min(3).required(),
  userId: Joi.number().required(),
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