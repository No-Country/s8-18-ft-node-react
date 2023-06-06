import { NextFunction, Request, Response } from 'express'

export const errorLayer =
  (handler: (req: Request, res: Response, next?: NextFunction) => Promise<any>) =>
  (req: Request, res: Response, next: NextFunction) => {
    try {
      return handler(req, res)
    } catch (e) {
      return next(e)
    }
  }
