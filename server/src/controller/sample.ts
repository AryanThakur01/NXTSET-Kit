import { Request, Response } from "express"
import expressAsyncHandler from "express-async-handler"

export const sampleGet = expressAsyncHandler(
  async (_: Request, res: Response) => {
    res.status(200).json({ message: "Get Request Recieved" })
  }
)
export const samplePost = expressAsyncHandler(
  async (_: Request, res: Response) => {
    res.status(200).json({ message: "Get Request Recieved" })
  }
)
export const samplePut = expressAsyncHandler(
  async (_: Request, res: Response) => {
    res.status(200).json({ message: "Get Request Recieved" })
  }
)
export const sampleDelete = expressAsyncHandler(
  async (_: Request, res: Response) => {
    res.status(200).json({ message: "Get Request Recieved" })
  }
)
