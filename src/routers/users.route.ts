import { Router } from 'express';
import usersController from '../controller/users.controller';

const usersRouter = Router();

usersRouter.get('', usersController.findAll);

export default usersRouter;