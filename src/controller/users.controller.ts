import { NextFunction, Request, Response } from 'express';
import userService from '../service/users.service';
import mapStatusHTTP from '../utils/mapStatusHTTP';

async function findAll(req: Request, res: Response, next: NextFunction): Promise<void> {
  try {
    const serviceResponse = await userService.findAll();
    res.status(mapStatusHTTP(serviceResponse.status)).json(serviceResponse.data);
  } catch (error) {
    next(error);
  }
}

export default {
  findAll,
};