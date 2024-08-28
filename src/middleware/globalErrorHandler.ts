import { NextFunction, Request, Response } from 'express'
import { THttpError } from '../types/types.js'

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default (err: THttpError, _: Request, res: Response, __: NextFunction) => {
  return res.status(err.statuscode).json(err)
}
