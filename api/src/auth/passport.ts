import passport from 'passport'
import { Strategy as StrategyJwt } from 'passport-jwt'

const cookieExtractor = function (req) {
  let token = null

  console.log('Extracting: ', req.cookies['api-auth'], req.signedCookies['api-auth'])

  if (req && req.cookies) token = req.cookies['api-auth']

  return token
}

passport.use(
  new StrategyJwt(
    {
      jwtFromRequest: cookieExtractor,
      secretOrKey: process.env.JWT_SECRET,
      passReqToCallback: true,
    },
    async function (req, jwtPayload, done) {
      return undefined
    },
  ),
)
