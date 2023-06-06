import bcrypt from 'bcrypt'
import * as jose from 'jose'

import { Credentials, UserCreate } from '../interfaces'
import { UserService, userService } from './user.service'
import { AuthUser } from '../interfaces/user'

export class AuthService {
  constructor(private readonly userService: UserService) {}

  async hashPassword(password: string) {
    const hashedPassword = await bcrypt.hash(password, 10)

    return hashedPassword
  }

  private async comparePassword(password: string, hashedPassword: string) {
    return await bcrypt.compare(password, hashedPassword)
  }

  async signup(userCreate: UserCreate) {
    const { password, ...userData } = userCreate
    const hashedPassword = await this.hashPassword(password)

    const newUser = await this.userService.create({ ...userData, password: hashedPassword })

    return { id: newUser.id, email: newUser.email }
  }

  async login(credentials: Credentials): Promise<{ user: AuthUser; token: string } | null> {
    const user = await this.userService.findByEmail(credentials.email)

    if (!user) {
      return null
    }

    const { password, ...userData } = user
    const isPasswordCorrect = await this.comparePassword(credentials.password, password)

    if (!isPasswordCorrect) {
      return null
    }

    const role = await this.userService.getRole(user.id)
    const organizationId = await this.userService.getOrganization(user.id)

    const userWithRole: AuthUser = { ...userData, role, organizationId }

    // TODO: sign and add token
    const token = await this.signToken(userWithRole)

    return { user: userWithRole, token }
  }

  private async signToken(payload: any) {
    if (!process.env.JWT_SECRET_SEED) {
      throw new Error('JWT SEED MUST BE SET')
    }
    return await new jose.SignJWT(payload)
      .setProtectedHeader({ alg: 'HS256' })
      .setIssuedAt()
      .setExpirationTime('7d')
      .sign(new TextEncoder().encode(`${process.env.JWT_SECRET_SEED}`))
  }
}

export const authService = new AuthService(userService)
export const createAuthService = (userService: UserService) => new AuthService(userService)
