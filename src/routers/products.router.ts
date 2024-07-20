import { Router } from 'express';
import productsController from '../controller/products.controller';

const productsRouter = Router();

productsRouter.post('', productsController.register);
productsRouter.get('', productsController.findAll);

export default productsRouter;
