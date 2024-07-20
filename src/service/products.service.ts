import ProductModel, { ProductInputtableTypes } from '../database/models/product.model';
import { ServiceResponse } from '../types/ServiceResponse';

async function register(
  name: string, 
  price: string, 
  userId: number,
):Promise<ServiceResponse<ProductInputtableTypes>> {
  const response = await ProductModel.create({ name, price, userId });
  return { status: 'SUCCESSFUL', data: response.dataValues };
}

export default {
  register,
};