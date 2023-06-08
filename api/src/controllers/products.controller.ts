import { Request, Response, NextFunction } from 'express'

import { ProductService, createProductService } from '../services/products.service'
import { NotAuthorized } from '../errors/auth.error'

import { AuthUser } from '../interfaces/user'

export class ProductsController {
  constructor(private readonly productService: ProductService) {}

  async create(req: Request, res: Response) {
    const { id: organizationId } = req.params
    const user = req.user as AuthUser

    if (!user) throw new NotAuthorized()

    const product = req.body

    const newProduct = await this.productService.create(organizationId, product)

    return res.status(200).json(newProduct)
  }

  async getAll(req: Request, res: Response) {
    const { id: organizationId } = req.params

    const products = await this.productService.listProducts(organizationId)

    return res.status(200).json(products)
  }

  async updateStock(req: Request, res: Response) {
    const { id: organizationId, stockId } = req.params
    const stockUpdate = req.body

    const stock = await this.productService.updateStock({ id: stockId, ...stockUpdate })

    return res.status(200).json({ message: 'Stock Updated', stock })
  }

  async updateProduct(req: Request, res: Response) {
    const { productId } = req.params
    const productUpdate = req.body

    const updateProduct = await this.productService.update({ id: productId, ...productUpdate })

    return res.status(200).json({ message: 'Product Update', product: updateProduct })
  }

  async deleteProduct(req: Request, res: Response) {
    const { productId } = req.params

    const product = await this.productService.remove(productId)

    return await res.status(200).json({ message: 'Product Deleted', product: product })
  }
}

const productService = createProductService()
export const productController = new ProductsController(productService)
