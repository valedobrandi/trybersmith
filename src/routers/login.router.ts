import { Router } from 'express';
import loginController from '../controller/login.controller';
import authorization from '../middleware/authorization';

const loginRouter = Router();

loginRouter.post('', authorization, loginController.findAll);

export default loginRouter;