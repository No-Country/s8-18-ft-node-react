import { z } from 'zod'
import { userCreateSchema } from './user.schema'

const organizationId = z.object({
  id: z.string(),
})

const addUserBody = z.object({
  user: userCreateSchema,
  role: z.enum(['ADMIN', 'SUPERADMIN', 'VENDEDOR']),
})

export { organizationId, addUserBody }
