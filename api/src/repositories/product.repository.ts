import { config } from '../config'

import { prisma } from '../config/db'
import { Products } from '@prisma/client'
import { ProductCreate, ProductUpdate } from '../interfaces'

export interface ProductRepository {
  create: (productCreate: ProductCreate) => Promise<Products>
  remove: (productId: string) => Promise<Products>
  update: (productUpdate: ProductUpdate) => Promise<Products>
  findAll: (organizationId: string) => Promise<Products[]>
}

export class PostgresProductRepository implements ProductRepository {
  async create(productCreate: ProductCreate) {
    return await prisma.products.create({ data: productCreate })
  }

  async remove(productId: string) {
    return await prisma.products.delete({
      where: {
        id: productId,
      },
    })
  }

  async findAll(organizationId: string) {
    return await prisma.products.findMany({})
  }

  async update(productUpdate: ProductUpdate) {
    const { id, ...productFields } = productUpdate
    return await prisma.products.update({
      data: productFields,
      where: {
        id: id,
      },
    })
  }
}

export const getUserRepository = () => {
  switch (config.database) {
    case 'postgres':
      return new PostgresProductRepository()
    default:
      throw new Error('Invalid Database type')
  }
}
