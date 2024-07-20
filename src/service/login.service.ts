import bcrypt from 'bcryptjs';
import UserModel from '../database/models/user.model';
import { sign } from '../utils/jwt.util';
import { ServiceResponse } from '../types/ServiceResponse';

async function login(
  username: string, 
  password: string,
): Promise<ServiceResponse<{ token: string }>> {
  const user = await UserModel.findOne({ where: { username } });
  if (!user || !bcrypt.compare(user.dataValues.password, password)) {
    return { status: 'UNAUTHORIZED', data: { message: 'Username or password invalid' } };
  }
  const validPassword = await bcrypt.compare(password, user.dataValues.password);
  
  if (!validPassword) {
    return { status: 'UNAUTHORIZED', data: { message: 'Username or password invalid' } };
  }

  const token = sign({ username });

  return { status: 'SUCCESSFUL', data: { token } };
}

export default {
  login,
};