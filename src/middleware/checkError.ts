import {Request, Response, NextFunction} from 'express';

const checkError = (
  err: any,
  _: Request,
  res: Response,
  next: NextFunction,
) => {
  if (res.headersSent) {
    return next(err);
  }
  res.status(500).json({message: err.toString()});
};

export default checkError;
