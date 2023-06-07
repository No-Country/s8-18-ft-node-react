import { ProductRepository, getProductRepository } from '../repositories/product.repository'
import { StockRepository, getStockRepository } from '../repositories/stock.respository'

import { Role } from '../auth'
import { NotAuthorized } from '../errors/auth.error'

import { ProductCreate, AuthUser, StockAdd } from '../interfaces'

export class ProductService {
  constructor(
    private readonly productRepository: ProductRepository,
    private readonly stocksRepository: StockRepository,
  ) {}

  async create(user: AuthUser, organizationId: string, productCreate: ProductCreate) {
    const { quantity, ...productFields } = productCreate

    if (user.role !== Role.ADMIN && user.role !== Role.SUPERADMIN) {
      throw new NotAuthorized()
    }

    const newProduct = await this.productRepository.create(organizationId, productFields)

    if (quantity) {
      await this.stocksRepository.addStock(newProduct.id, organizationId, quantity)
    }

    return newProduct
  }

  async addStock(organizationId: string, addStock: StockAdd) {}

  async listProducts(organizationId: string) {
    return await this.productRepository.findAll(organizationId)
  }
}

export const productService = new ProductService(getProductRepository(), getStockRepository())
export const createProductService = () =>
  new ProductService(getProductRepository(), getStockRepository())
