import { OrganizationRoles, Organizations, Users } from '@prisma/client'

import { config } from '../config'
import { prisma } from '../config/db'

import { Role } from '../auth'

type OrganizationWithRoles = Organizations & { organizationRoles: OrganizationRoles[] }

export interface OrganizationRepository {
  create: (userId: string) => Promise<OrganizationRoles>
  addUser: (organizationId: string, userId: string, role: Role) => Promise<OrganizationRoles>
  findByOwner: (ownerId: string) => Promise<OrganizationWithRoles | null>
  findAllOrganizationUsers: (
    organizationId: string,
  ) => Promise<
    (OrganizationRoles & { user: { email: string; first_name: string; last_name: string } })[]
  >
  deleteAll: () => Promise<void>
}

class PostgresOrganizationRepository implements OrganizationRepository {
  async create(userId: string) {
    const organization = await prisma.organizations.create({ data: { owner_id: userId } })
    return await prisma.organizationRoles.create({
      data: { organization_id: organization.id, user_id: userId, role: Role.SUPERADMIN },
    })
  }

  async addUser(organizationId: string, userId: string, role: Role) {
    const addedRole = prisma.organizationRoles.create({
      data: { organization_id: organizationId, user_id: userId, role },
    })

    return addedRole
  }

  async findAllOrganizationUsers(organizationId: string) {
    console.log(organizationId)
    return await prisma.organizationRoles.findMany({
      where: {
        organization_id: organizationId,
      },
      include: {
        user: {
          select: {
            first_name: true,
            last_name: true,
            email: true,
          },
        },
      },
    })
  }

  async findByOwner(ownerId: string) {
    return await prisma.organizations.findFirst({
      where: { owner_id: ownerId },
      include: {
        organizationRoles: {
          include: {
            user: {
              select: {
                email: true,
              },
            },
          },
        },
      },
    })
  }

  async deleteAll() {
    if (process.env.ENV !== 'TEST') {
      return
    }

    await prisma.organizations.deleteMany()
  }
}

export const getOrganizationRepository = () => {
  switch (config.database) {
    case 'postgres':
      return new PostgresOrganizationRepository()
    default:
      throw new Error('Invalid Database type')
  }
}
