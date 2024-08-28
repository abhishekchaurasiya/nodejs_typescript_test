import { Request, Response } from 'express'
import { THttpResponse } from '../types/types.js'
import config from '../config/config.js'
import { EApplicationEnvironment } from './applicationUtils.js'

export default (req: Request, res: Response, responseStatusCode: number, responseMessage: string, data: unknown = null): void => {
  const response: THttpResponse = {
    success: true,
    statuscode: responseStatusCode,
    request: {
      ip: req.ip || null,
      method: req.method,
      url: req.originalUrl
    },
    message: responseMessage,
    data: data
  }

  // logging by logger
  // console.info(`CONTROLLER RESPONSE`, {
  //   meta: response
  // })

  // Here if environment is production side then ip address deleted
  // if (config.ENV === EApplicationEnvironment.Production) {
  //   delete response.request.ip
  // }

  if (config.ENV === EApplicationEnvironment.Development) {
    delete response.request.ip
  }

  res.status(responseStatusCode).json(response)
  res.end() // End the response to prevent the server from hanging indefinitely
}
