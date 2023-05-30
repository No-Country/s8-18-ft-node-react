import { PrismaClient } from '@prisma/client'

export const database = 'postgres'
export const prisma = new PrismaClient()

// export const initDB = async () => {
//   const roleRepository = getRoleRepository()
//   const roles: ['ADMIN', 'SUPERADMIN', 'VENDEDOR'] = ['ADMIN', 'SUPERADMIN', 'VENDEDOR']
//
//   for (const role of roles) {
//     await roleRepository.create({ name: role })
//   }
// }
