import { NextFunction, Request, Response } from 'express';
import productService from '../service/products.service';
import mapStatusHTTP from '../utils/mapStatusHTTP';

async function register(req: Request, res: Response, next: NextFunction) {
  const { name, price, userId } = req.body;
  try {
    const serviceResponse = await productService.register(name, price, userId);
    return res.status(mapStatusHTTP(serviceResponse.status)).json(serviceResponse.data);
  } catch (error) {
    return next(error);
  }
}

export default {
  register,
};