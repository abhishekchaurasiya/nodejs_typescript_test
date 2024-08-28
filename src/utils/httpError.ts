import { Request, NextFunction } from 'express'
import errMessage from './errMessage.js'

// eslint-disable-next-line @typescript-eslint/no-redundant-type-constituents
export default (nextFunc: NextFunction, err: Error | unknown, req: Request, errorStatusCode: number = 500): void => {
    const errObject = errMessage(err, req, errorStatusCode);
    return nextFunc(errObject);
}
