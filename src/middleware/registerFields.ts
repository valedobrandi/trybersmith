import { NextFunction, Request, Response } from 'express';
import mapStatusHTTP from '../utils/mapStatusHTTP';
import validation from './validation/validateFields';

function registerFields(
  req: Request,
  res: Response,
  next: NextFunction,
): Response | void {
  try {
    const fieldsError = validation.validateRegisterFields(req.body);
    if (fieldsError) {
      return res.status(mapStatusHTTP(fieldsError.status)).json(fieldsError.data);
    }

    const fieldsContentError = validation.validateRegisterFieldsContent(req.body);
    if (fieldsContentError) {
      return res.status(mapStatusHTTP(fieldsContentError.status)).json(fieldsContentError.data);
    }
    next();
  } catch (error) {
    next(error);
  }
}

export default registerFields;