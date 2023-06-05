import { ProductRepository } from '../repositories/product.repository'

import { Role } from '../auth'
import { NotAuthorized } from '../errors/auth.error'

import { ProductCreate } from '../interfaces'
import { AuthUser } from '../interfaces/user'

export class ProductService {
  constructor(private readonly productRepository: ProductRepository) {}

  async create(user: AuthUser, organizationId: string, productCreate: ProductCreate) {
    if (user.role !== Role.ADMIN && user.role !== Role.SUPERADMIN) {
      throw new NotAuthorized()
    }

    const newProduct = await this.productRepository.create({ organizationId, ...productCreate })

    return newProduct
  }
}
