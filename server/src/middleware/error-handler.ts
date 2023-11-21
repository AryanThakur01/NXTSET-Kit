import { NextFunction, Request, Response } from "express"

export interface ICustomError extends Error {
  statusCode: number
}
export const errorHandlerMiddleware = (
  err: ICustomError,
  _: Request,
  res: Response,
  next: NextFunction
) => {
  // statusCode: err.statusCode || INTERNAL_SERVER_ERROR_CODE,
  let customError = {
    message: err.message || "Some Error {Check Error-Handler}",
    statusCode: err.statusCode || 500,
  }
  res.status(customError.statusCode).json(customError)
}
