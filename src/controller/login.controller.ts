import { NextFunction, Request, Response } from 'express';
import mapStatusHTTP from '../utils/mapStatusHTTP';
import loginService from '../service/login.service';

async function findAll(req: Request, res: Response, next: NextFunction): Promise<void> {
  const { username, password } = req.body;
  try {
    const serviceResponse = await loginService.login(username, password);
    res.status(mapStatusHTTP(serviceResponse.status)).json(serviceResponse.data);
  } catch (error) {
    next(error);
  }
}

export default {
  findAll,
};