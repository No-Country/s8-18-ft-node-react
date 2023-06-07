import { ProductRepository, getProductRepository } from '../repositories/product.repository'
import { StockRepository, getStockRepository } from '../repositories/stock.respository'

import { Role } from '../auth'
import { NotAuthorized } from '../errors/auth.error'

import { ProductCreate, AuthUser, StockAdd } from '../interfaces'
import { ProductUpdate, StockUpdate } from '../interfaces/product'

export class ProductService {
  constructor(
    private readonly productRepository: ProductRepository,
    private readonly stocksRepository: StockRepository,
  ) {}

  async create(organizationId: string, productCreate: ProductCreate) {
    const { quantity, ...productFields } = productCreate

    const newProduct = await this.productRepository.create(organizationId, productFields)

    if (quantity) {
      await this.stocksRepository.addStock(newProduct.id, organizationId, quantity)
    }

    return newProduct
  }

  async remove(productId: string) {
    return await this.productRepository.remove(productId)
  }

  async update(productUpdate: ProductUpdate) {
    return await this.productRepository.update(productUpdate)
  }

  async updateStock(stockUpdate: StockUpdate) {
    return await this.stocksRepository.updateStock(stockUpdate)
  }

  async listProducts(organizationId: string) {
    return await this.productRepository.findAll(organizationId)
  }
}

export const productService = new ProductService(getProductRepository(), getStockRepository())
export const createProductService = () =>
  new ProductService(getProductRepository(), getStockRepository())
