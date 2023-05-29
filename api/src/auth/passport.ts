import { Request } from 'express'
import passport from 'passport'
import { Strategy as StrategyJwt } from 'passport-jwt'
import { getUserRepository } from '../repositories/user.repository'

export default () => {
  const userRepository = getUserRepository()

  const cookieExtractor = function (req: Request) {
    let token = null
    if (req && req.cookies) token = req.cookies['api-auth']

    return token
  }

  passport.use(
    new StrategyJwt(
      {
        jwtFromRequest: cookieExtractor,
        secretOrKey: process.env.JWT_SECRET_SEED,
        passReqToCallback: true,
      },
      async function (req: Request, jwtPayload: any, done: any) {
        return userRepository
          .findOne({ id: jwtPayload.id })
          .then(async (user) => {
            if (user) {
              done(null, user)
            } else {
              done(null, null)
            }
          })
          .catch((err) => {
            return done(err)
          })
      },
    ),
  )
}
