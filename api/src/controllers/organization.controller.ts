import { Request, Response, NextFunction } from 'express'
import { OrganizationService, createOrganizationService } from '../services/organization.service'
import { AuthService, createAuthService } from '../services/auth.service'
import { getUserService } from '../services/user.service'
import { UserCreate } from '../interfaces'
import { Role } from '../auth'

export class OrganizationController {
  constructor(
    private readonly organizationService: OrganizationService,
    private readonly authService: AuthService,
  ) {}

  async addUser(req: Request, res: Response, next: NextFunction) {
    const { id: organizationId } = req.params
    const { user, role } = req.body as { user: UserCreate; role: Role }
    console.log(organizationId)

    try {
      // TODO: add exceptions!
      const newUser = await this.authService.signup(user)
      const organizationUsers = await this.organizationService.addUser(
        organizationId,
        newUser.id,
        role,
      )
      return res.status(200).send({ message: 'User Added', users: organizationUsers })
    } catch (e) {
      console.log(e)
      return res.status(500).send({ message: 'Something goes wrong' })
    }
  }

  async listUsers(req: Request, res: Response, next: NextFunction) {
    const { id: organizationId } = req.params

    try {
      // TODO: add exceptions!
      const users = await this.organizationService.listOrganizationUsers(organizationId)

      return res.status(200).send(users)
    } catch (e) {
      console.log(e)
      return res.status(500).send({ message: 'Something goes wrong' })
    }
  }
}

const organizationService = createOrganizationService()
const userService = getUserService()
const authService = createAuthService(userService)

export const organizationController = new OrganizationController(organizationService, authService)
