import { Product } from '../../types/Product';
import { ServiceResponse } from '../../types/ServiceResponse';
import schema from './schema';

const validateRegisterFields = (
  keysObjectToValidate: Product,
): ServiceResponse<Omit<Product, 'id'>> | void => {
  const { error } = schema.registerProductFields.validate(keysObjectToValidate);

  if (error) {
    return { status: 'BAD_REQUEST', data: { message: error.message } };
  }
};

const validateRegisterFieldsContent = (
  keysObjectToValidate: Product,
): ServiceResponse<Omit<Product, 'id'>> | void => {
  const { error } = schema.registerProductFieldsContent.validate(keysObjectToValidate);
  
  if (error) {
    return { status: 'UNPROCESSABLE_ENTITY', data: { message: error.message } };
  }
};

export default {
  validateRegisterFields,
  validateRegisterFieldsContent,
};