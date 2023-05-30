import { NextFunction, Request, Response } from 'express'
import dayjs from 'dayjs'

import { getUserService } from '../services/user.service'
import { AuthService } from '../services/auth.service'
import { OrganizationService, createOrganizationService } from '../services/organization.service'

import { Credentials } from '../interfaces'
import { InvalidCredentialsError } from '../errors/auth.error'

export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly organizationService: OrganizationService,
  ) {}
  async signup(req: Request, res: Response) {
    const user = req.body

    if (!user) {
      return res.status(400).send({ message: 'Invalid Request' })
    }

    try {
      const newUser = await this.authService.signup(user)
      const organizationRoles = await this.organizationService.create(newUser.id)

      return res.send({
        message: 'User registered',
        user: { ...newUser, organizationId: organizationRoles.organization_id },
      })
    } catch (e) {
      console.log(e)
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
const organizationService = createOrganizationService()

export const authController = new AuthController(authService, organizationService)
