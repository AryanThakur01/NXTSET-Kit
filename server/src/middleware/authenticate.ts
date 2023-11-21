import expressAsyncHandler from "express-async-handler"
import jwt from "jsonwebtoken"
import { ICustomReq } from "../interfaces/customReqRes"
import { NextFunction, Response } from "express"

const authenticate = expressAsyncHandler(
  async (req: ICustomReq, _: Response, next: NextFunction) => {
    const authHeader = req.headers.authorization
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      throw new Error("Authentication invalid")
    }
    const token = authHeader.split(" ")[1]
    try {
      const payload = jwt.verify(
        token,
        process.env.JWT_SECRET || "*#1&--12623&"
      )
      req.user = payload
      next()
    } catch (error) {
      throw new Error("Not Authorized")
    }
  }
)

module.exports = { authenticate }
