import { config } from '../config'

import { prisma } from '../config/db'
import { Condition, Products, Stocks } from '@prisma/client'
import { StockUpdate } from '../interfaces/product'

export interface StockRepository {
  addStock: (productId: string, inventoryId: string, stock: number) => Promise<Stocks>
  remove: (stockId: string) => Promise<Stocks>
  updateStock: (stockUpdate: StockUpdate) => Promise<Stocks>
  findAll: (organizationId: string) => Promise<Stocks[]>
}

export class PostgresStockRepository implements StockRepository {
  async addStock(
    productId: string,
    organizationId: string,
    stock: number,
    condition: Condition = Condition.NUEVO,
  ) {
    return await prisma.stocks.create({
      data: { product_id: productId, quantity: stock, condition },
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

  async updateStock(stockUpdate: StockUpdate) {
    return await prisma.stocks.update({
      data: { quantity: stockUpdate.quantity },
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
