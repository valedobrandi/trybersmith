import { NextFunction, Request, Response } from 'express';
import productService from '../service/products.service';
import mapStatusHTTP from '../utils/mapStatusHTTP';

async function register(req: Request, res: Response, next: NextFunction): Promise<void> {
  const { name, price, userId } = req.body;
  try {
    const serviceResponse = await productService.register(name, price, userId);
    res.status(mapStatusHTTP(serviceResponse.status)).json(serviceResponse.data);
  } catch (error) {
    next(error);
  }
}

async function findAll(req: Request, res: Response, next: NextFunction): Promise<void> {
  try {
    const serviceResponse = await productService.findAll();
    res.status(mapStatusHTTP(serviceResponse.status)).json(serviceResponse.data);
  } catch (error) {
    next(error);
  }
}

export default {
  register,
  findAll,
};