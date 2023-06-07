import { Request, Response, NextFunction } from 'express'

import { ProductService, createProductService } from '../services/products.service'
import { NotAuthorized } from '../errors/auth.error'

import { AuthUser } from '../interfaces/user'

export class ProductsController {
  constructor(private readonly productService: ProductService) {}

  async create(req: Request, res: Response) {
    const { id: organizationId } = req.params
    const user = req.user as AuthUser

    console.log('organization: ', organizationId)

    if (!user) throw new NotAuthorized()

    const product = req.body

    const newProduct = await this.productService.create(user, organizationId, product)

    return res.status(200).json(newProduct)
  }

  async getAll(req: Request, res: Response) {
    const { id: organizationId } = req.params

    const products = await this.productService.listProducts(organizationId)

    return res.status(200).json(products)
  }
}

const productService = createProductService()
export const productController = new ProductsController(productService)
