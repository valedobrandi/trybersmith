import ProductModel from '../database/models/product.model';
import UserModel from '../database/models/user.model';
import { ServiceResponse } from '../types/ServiceResponse';
import { Users } from '../types/User';

async function findAll(): Promise<ServiceResponse<Users[]>> {
  const response = {
    users: await UserModel.findAll(),
    products: await ProductModel.findAll(),
  };

  const instances = {
    user: response.users.map((instance) => instance.dataValues),
    products: response.products.map((instance) => instance.dataValues),
  };

  const users = instances.user.map((user) => {
    const findUserProducts = instances.products
      .filter((product) => product.userId === user.id).map((({ id }) => id));

    return { username: user.username, productIds: findUserProducts };
  });

  return { status: 'SUCCESSFUL', data: users };
}

export default {
  findAll,
};