import express, { Application, NextFunction, Request, Response } from 'express'
import path from 'path'
import router from './routers/userRouter.js'
import globalErrorHandler from './middleware/globalErrorHandler.js'
import responseMsg from './utils/responseMsg.js'
import httpError from './utils/httpError.js'

const app: Application = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(express.static(path.join(import.meta.dirname, '../', 'public')))

app.use('/api/v1/users', router)

// 404 handler
app.use((req: Request, _: Response, nextFunc: NextFunction) => {
  try {
    throw new Error(responseMsg.NOT_FOUND(req.url))
  } catch (error) {
    httpError(nextFunc, error, req, 404)
  }
})

// Error handling middleware for all routes
app.use(globalErrorHandler)

export default app
