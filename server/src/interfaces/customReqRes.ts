import { Request } from "express"
import { JwtPayload } from "jsonwebtoken"

export interface ICustomReq extends Request {
  user?: JwtPayload | string
}
