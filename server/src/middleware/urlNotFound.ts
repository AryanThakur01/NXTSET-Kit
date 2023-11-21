import { Request, Response } from "express"

export const urlNotFound = (req: Request, res: Response) => {
  res.status(404).json({ message: `${req.url} Not Found` })
  return
}
