import { NextFunction, Request, Response } from 'express'
import dayjs from 'dayjs'

import { getUserService } from '../services/user.service'
import { AuthService } from '../services/auth.service'
import { Credentials } from '../interfaces'
import { InvalidCredentialsError } from '../errors/auth.error'

export class AuthController {
  constructor(private readonly authService: AuthService) {}
  async signup(req: Request, res: Response) {
    const user = req.body

    if (!user) {
      return res.status(400).send({ message: 'Invalid Request' })
    }

    try {
      const newUser = await this.authService.signup(user)
      return res.send({ message: 'User registered', user: newUser })
    } catch (e) {
      return res.status(500).send({ message: 'Something goes wrong' })
    }
  }

  async login(req: Request, res: Response, next: NextFunction) {
    const credentials: Credentials = req.body

    const loginSuccess = await this.authService.login(credentials)

    if (!loginSuccess) return next(new InvalidCredentialsError())

    const { user, token } = loginSuccess

    res.cookie('api-auth', token, {
      secure: false,
      httpOnly: true,
      expires: dayjs().add(7, 'days').toDate(),
    })

    return res.send({ message: 'User authenticated', user })
  }
}

const userService = getUserService()
const authService = new AuthService(userService)

export const authController = new AuthController(authService)
