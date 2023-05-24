import { config } from '../config'

import { prisma } from '../config/db'
import { Users } from '@prisma/client'

import { User, UserCreate } from '../interfaces'

export interface UserRepository {
  findAll: () => Promise<User[]>
  create: (userCreate: UserCreate) => Promise<Users>
  deleteAll: () => Promise<void>
}

export class PostgresUserRepository implements UserRepository {
  async findAll() {
    const users = await prisma.users.findMany()
    return users
  }

  async create(userCreate: UserCreate) {
    const newUser = await prisma.users.create({
      data: {
        first_name: userCreate.firstName,
        phone_number: userCreate.phone,
        password: userCreate.password,
        last_name: userCreate.lastName,
        email: userCreate.email,
      },
    })

    return newUser
  }

  async deleteAll() {
    if (process.env.ENV !== 'TEST') {
      return
    }
    await prisma.users.deleteMany()
  }
}

export const getUserRepository = () => {
  switch (config.database) {
    case 'postgres':
      return new PostgresUserRepository()
    default:
      throw new Error('Invalid Database type')
  }
}
