import { UserRepository, getUserRepository } from '../repositories/user.repository'

import { UserCreate } from '../interfaces/user'

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
}

export const userService = new UserService(getUserRepository())
export const getUserService = () => new UserService(getUserRepository())
