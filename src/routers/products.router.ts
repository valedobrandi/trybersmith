import { Router } from 'express';
import productsController from '../controller/products.controller';
import registerFields from '../middleware/registerFields';

const productsRouter = Router();

productsRouter.post('', registerFields, productsController.register);
productsRouter.get('', productsController.findAll);

export default productsRouter;
