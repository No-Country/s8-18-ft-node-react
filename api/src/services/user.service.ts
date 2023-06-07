import { UserRepository, getUserRepository } from '../repositories/user.repository'

import { UserCreate } from '../interfaces/user'
import { UserNotFound } from '../errors/auth.error'

export class UserService {
  constructor(private readonly userRepository: UserRepository) {}

  async create(userCreate: UserCreate) {
    const newUser = await this.userRepository.create(userCreate)

    return newUser
  }

  async findByEmail(email: string) {
    const user = await this.userRepository.findOne({ email })
    return user
  }

  async emailIsAvailable(email: string) {
    const user = await this.userRepository.findOne({ email })
    return !user
  }

  async getRole(userId: string) {
    const role = await this.userRepository.getRole(userId)
    if (!role) {
      throw new UserNotFound()
    }

    return role
  }

  async getOrganization(userId: string) {
    const organizationId = await this.userRepository.getOrganizationId(userId)
    if (!organizationId) {
      throw new UserNotFound()
    }

    return organizationId
  }
}

export const userService = new UserService(getUserRepository())
export const getUserService = () => new UserService(getUserRepository())
