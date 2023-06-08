import { config } from '../config'

import { prisma } from '../config/db'
import { Condition, Products, Stocks } from '@prisma/client'
import { StockUpdate } from '../interfaces/product'

export interface StockRepository {
  addStock: (
    productId: string,
    inventoryId: string,
    quantity: number,
    condition?: Condition,
  ) => Promise<Stocks>
  remove: (stockId: string) => Promise<Stocks>
  updateStock: (stockUpdate: StockUpdate) => Promise<Stocks>
  findAll: (organizationId: string) => Promise<Stocks[]>
  findOneBy: (conditions: { [key: string]: any }) => Promise<Stocks | null>
}

export class PostgresStockRepository implements StockRepository {
  async addStock(
    productId: string,
    organizationId: string,
    quantity: number,
    condition: Condition = Condition.NUEVO,
  ) {
    return await prisma.stocks.create({
      data: { product_id: productId, quantity, condition },
    })
  }

  async remove(stockId: string) {
    return await prisma.stocks.delete({
      where: {
        id: stockId,
      },
    })
  }

  async findAll(organizationId: string) {
    return await prisma.stocks.findMany({
      where: {
        product: {
          organization_id: organizationId,
        },
      },
      include: {
        product: true,
      },
    })
  }

  async findOneBy(conditions: { [key: string]: any }) {
    return await prisma.stocks.findFirst({
      where: conditions,
    })
  }

  async updateStock(stockUpdate: StockUpdate) {
    console.log(stockUpdate)
    return await prisma.stocks.update({
      data: { quantity: stockUpdate.quantity, condition: stockUpdate.condition },
      where: {
        id: stockUpdate.id,
      },
    })
  }
}

export const getStockRepository = () => {
  switch (config.database) {
    case 'postgres':
      return new PostgresStockRepository()
    default:
      throw new Error('Invalid Database type')
  }
}
