import { NextFunction, Request, Response } from 'express';
import mapStatusHTTP from '../utils/mapStatusHTTP';

function authorization(
  req: Request,
  res: Response,
  next: NextFunction,
): Response | void {
  const { username, password } = req.body;
  try {
    if (!username || !password) {
      return res.status(mapStatusHTTP('BAD_REQUEST'))
        .json({ message: '"username" and "password" are required' });
    }
    next();
  } catch (error) {
    next(error);
  }
}

export default authorization;