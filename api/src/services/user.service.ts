import { UserRepository, getUserRepository } from '../repositories/user.repository'
import { AuthService } from './auth.service'

import { UserCreate } from '../interfaces/user'

class UserService {
  constructor(
    private readonly userRepository: UserRepository,
    private readonly authService: AuthService,
  ) {}

  async create(userCreate: UserCreate) {
    // hash password
    const { password, ...userData } = userCreate
    const hashedPassword = await this.authService.hashPassword(password)

    const newUser = await this.userRepository.create({ password: hashedPassword, ...userData })

    return newUser
  }
}

export const userService = new UserService(getUserRepository(), new AuthService())
