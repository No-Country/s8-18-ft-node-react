import { UserRepository, getUserRepository } from '../repositories/user.repository'

import { UserCreate } from '../interfaces/user'

class UserService {
  constructor(private readonly userRepository: UserRepository) {}

  async create(userCreate: UserCreate) {
    const newUser = await this.userRepository.create(userCreate)

    return newUser
  }
}

export const userService = new UserService(getUserRepository())
