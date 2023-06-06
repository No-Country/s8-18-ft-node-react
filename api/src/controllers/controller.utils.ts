import { NextFunction, Request, Response, Handler } from 'express'

export const errorLayer =
  (handler: (req: Request, res: Response, next?: NextFunction) => Promise<any>) =>
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      return await handler(req, res, next)
    } catch (e) {
      return next(e)
    }
  }
