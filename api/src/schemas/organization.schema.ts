import { z } from 'zod'
import { userCreateSchema } from './user.schema'
import { organizationService } from '../services/organization.service'

const organizationId = z.object({
  id: z.string(),
})

const userDeleteParams = z.object({
  id: z.string(),
  userId: z.string(),
})

const addUserBody = z.object({
  user: userCreateSchema,
  role: z.enum(['ADMIN', 'SUPERADMIN', 'VENDEDOR']),
})

export { organizationId, addUserBody, userDeleteParams }
