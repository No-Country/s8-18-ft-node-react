import { Role } from '../auth'
import {
  OrganizationRepository,
  getOrganizationRepository,
} from '../repositories/organization.repository'

export class OrganizationService {
  constructor(private readonly organizationRepository: OrganizationRepository) {}

  async create(userId: string) {
    const newOrganization = await this.organizationRepository.create(userId)

    return newOrganization
  }

  async addUser(organizationId: string, userId: string, role: Role) {
    return await this.organizationRepository.addUser(organizationId, userId, role)
  }

  async listOrganizationUsers(organizationId: string) {
    const users = await this.organizationRepository.findAllOrganizationUsers(organizationId)

    return users.map((result) => ({
      ...result.user,
      role: result.role,
    }))
  }

  async deleteUser(organizationId: string, userId: string) {
    const { user: deletedUser } = await this.organizationRepository.deleteUser(
      organizationId,
      userId,
    )

    return deletedUser
  }
}

export const organizationService = new OrganizationService(getOrganizationRepository())
export const createOrganizationService = () => new OrganizationService(getOrganizationRepository())
