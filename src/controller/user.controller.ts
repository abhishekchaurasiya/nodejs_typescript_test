import { NextFunction, Request, Response } from 'express'
import sendResponse from '../utils/sendResponse.js'
import responseMSG from '../utils/responseMsg.js'
import httpError from '../utils/httpError.js'

export default {
  self: (req: Request, res: Response, next: NextFunction) => {
    try {
        // throw new Error('This is new Error')
      return sendResponse(req, res, 200, responseMSG.SUCCESSFUL, { id: '1232kldo', name: 'kdia' })
    } catch (error) {
       httpError(next, error, req, 500)
      //   return errMessage(error, req, 500)
    }
  }
}

export const create =  (req: Request, res: Response, next: NextFunction) => {
  try {

    return sendResponse(req, res, 200, 'data is comming');
  } catch (error) {
    return httpError(next, error, req, 500)
  }
}
