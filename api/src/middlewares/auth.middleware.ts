import { Request, Response, NextFunction } from 'express'
import passport from 'passport'

export function authMiddleware(req: Request, res: Response, next: NextFunction) {
  passport.authenticate('jwt', { session: false }, (err: any, user: any, info: any) => {
    if (!user) {
      return next(null)
    }
    console.log(user)
    req.user = user
    next()
  })(req, res, next)
}
