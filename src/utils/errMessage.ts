import { Request } from 'express'
import { THttpError } from '../types/types.js'
import responseMsg from './responseMsg.js'
import config from '../config/config.js'
import { EApplicationEnvironment } from './applicationUtils.js'

// eslint-disable-next-line @typescript-eslint/no-redundant-type-constituents
export default (err: Error | unknown, req: Request, errorStatusCode: number = 500): THttpError => {
  const errObj: THttpError = {
    success: false,
    statuscode: errorStatusCode,
    request: {
      ip: req.ip || null,
      method: req.method,
      url: req.originalUrl
    },
    message: err instanceof Error ? err.message || responseMsg.SOMETHING_WENT_WRONG : responseMsg.SOMETHING_WENT_WRONG,
    data: null,
    trace: err instanceof Error ? { error: err.stack } : null
  }

    // eslint-disable-next-line no-console
    console.info('Controller_ERROR', { meta: errObj });

  // error response for production time
  if (config.ENV === EApplicationEnvironment.Development) {
    delete errObj.request.ip
    delete errObj.trace
  }

  // error response for development time
  return errObj
}
