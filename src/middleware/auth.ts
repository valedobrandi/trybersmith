import { NextFunction, Request, Response } from 'express';
import mapStatusHTTP from '../utils/mapStatusHTTP';
import { verify } from '../utils/jwt.util';
import UserModel from '../database/models/user.model';

async function auth(req: Request, res: Response, next: NextFunction): Promise<Response | void> {
  try {
    const authorization = req.header('Authorization');
    if (!authorization) {
      return res.status(mapStatusHTTP('UNAUTHORIZED'))
        .json({ message: 'token required' });
    }
    const user = verify(authorization);
    const token = await UserModel.findOne({ where: user });
    if (!token) {
      return res.status(mapStatusHTTP('UNAUTHORIZED'))
        .json({ message: 'token invalid' });
    } 
    next();
  } catch (error) {
    next(error);
  }
}

export default auth;