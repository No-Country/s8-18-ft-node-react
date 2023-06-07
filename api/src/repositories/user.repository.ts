import { config } from '../config'

import { prisma } from '../config/db'
import { Role, Users } from '@prisma/client'

import { User, UserCreate } from '../interfaces'
import { UserSearch } from '../interfaces/user'

export interface UserRepository {
  findAll: () => Promise<User[]>
  create: (userCreate: UserCreate) => Promise<Users>
  findOne: (userSearch: UserSearch) => Promise<User | null>
  getRole: (userId: string) => Promise<Role | undefined>
  getOrganizationId: (userId: string) => Promise<string | undefined>
  deleteAll: () => Promise<void>
}

export class PostgresUserRepository implements UserRepository {
  async findAll() {
    const users = await prisma.users.findMany()
    if (users.length === 0) return users as []

    return users.map<User>((u) => {
      return this.cleanUser(u)
    })
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

  async findOne(userSearch: UserSearch) {
    const user = await prisma.users.findFirst({ where: { ...userSearch } })

    if (!user) return user

    return this.cleanUser(user)
  }

  async getRole(userId: string) {
    const role = await prisma.organizationRoles.findFirst({
      where: { user_id: userId },
    })

    return role?.role
  }

  async getOrganizationId(userId: string) {
    const role = await prisma.organizationRoles.findFirst({
      where: { user_id: userId },
    })

    return role?.organization_id
  }

  async deleteAll() {
    if (process.env.ENV !== 'TEST') {
      return
    }
    await prisma.users.deleteMany()
  }

  private cleanUser(user: Users) {
    return {
      id: user.id,
      email: user.email,
      firstName: user.first_name,
      lastName: user.last_name,
      phone: user.phone_number,
      password: user.password,
    }
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
