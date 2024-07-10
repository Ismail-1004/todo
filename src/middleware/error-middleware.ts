import { Request, Response, NextFunction } from "express"
import { IError } from "../types/errors"
import ApiError from "../error/ApiErrorHandler";

export default function (err: IError, req: Request, res: Response, next: NextFunction) {
  if (err instanceof ApiError) {
    return res.status(err.status).json({ message: err.message })
  }

  return res.status(500).json({ message: "Непредвиденная ошибка" })
}