import express, { Request, Response, NextFunction } from 'express'

import { errorLayer } from '../controllers'

import { productController } from '../controllers/products.controller'

import { validate } from '../middlewares/validation.middleware'
import { organizationMiddleware } from '../middlewares/organization.middleware'
import { organizationSchemas, productSchemas } from '../schemas'

const router = express.Router()

router.all('/organizations/:id/*', organizationMiddleware)

router.post(
  '/organizations/:id/products',
  validate('body', productSchemas.productCreate),
  errorLayer(productController.create.bind(productController)),
)

router.get(
  '/organizations/:id/products',
  validate('params', organizationSchemas.organizationId),
  errorLayer(productController.getAll.bind(productController)),
)

router.patch(
  '/organizations/:id/products/:productId/stocks/:stockId',
  validate('params', productSchemas.productParams),
  validate('body', productSchemas.stockUpdate),
  errorLayer(productController.updateStock.bind(productController)),
)

router.delete(
  '/organizations/:id/products/:productId',
  validate('params', productSchemas.productId),
  errorLayer(productController.deleteProduct.bind(productController)),
)

router.patch(
  '/organizations/:id/products/:productId',
  validate('params', productSchemas.productId),
  validate('body', productSchemas.productCreate),
  errorLayer(productController.updateProduct.bind(productController)),
)

export default router
