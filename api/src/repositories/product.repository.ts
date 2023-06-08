import { config } from '../config'

import { prisma } from '../config/db'
import { Products } from '@prisma/client'
import { ProductCreate, ProductUpdate } from '../interfaces'

export interface ProductRepository {
  create: (
    organizationId: string,
    productCreate: Omit<ProductCreate, 'quantity'>,
  ) => Promise<Products>
  remove: (productId: string) => Promise<Products>
  update: (productUpdate: ProductUpdate) => Promise<Products>
  findAll: (organizationId: string) => Promise<Products[]>
}

export class PostgresProductRepository implements ProductRepository {
  async create(organizationId: string, productCreate: Omit<ProductCreate, 'quantity'>) {
    return await prisma.products.create({
      data: { organization_id: organizationId, ...productCreate },
    })
  }

  async remove(productId: string) {
    return await prisma.products.delete({
      where: {
        id: productId,
      },
    })
  }

  async findAll(organizationId: string) {
    return await prisma.products.findMany({
      where: {
        organization_id: organizationId,
      },
      include: {
        Stocks: true,
      },
    })
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

export const getProductRepository = () => {
  switch (config.database) {
    case 'postgres':
      return new PostgresProductRepository()
    default:
      throw new Error('Invalid Database type')
  }
}
