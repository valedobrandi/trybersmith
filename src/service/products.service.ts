import ProductModel from '../database/models/product.model';
import UserModel from '../database/models/user.model';
import { Product } from '../types/Product';
import { ServiceResponse } from '../types/ServiceResponse';

async function register(
  name: string, 
  price: string, 
  userId: number,
):Promise<ServiceResponse<Product>> {
  const response = {
    create: await ProductModel.create({ name, price, userId }),
    findOne: await UserModel.findOne({ where: { id: userId } }),
  };

  if (!response.findOne) {
    return { status: 'BAD_REQUEST', data: { message: '"userId" not found' } };
  }

  return { status: 'CREATED', data: response.create.dataValues };
}

async function findAll(): Promise<ServiceResponse<Product[]>> {
  const response = await ProductModel.findAll();
  const modelInstances = response.map((instance) => instance.dataValues);
  return { status: 'SUCCESSFUL', data: modelInstances };
}

export default {
  register,
  findAll,
};