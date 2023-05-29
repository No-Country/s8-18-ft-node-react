import { PrismaClient } from '@prisma/client'

export const database = 'postgres'
export const prisma = new PrismaClient()
