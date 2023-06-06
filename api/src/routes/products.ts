import express, { Request, Response, NextFunction } from 'express'

import { errorLayer } from '../controllers'

import { productController } from '../controllers/products.controller'

import { validate } from '../middlewares/validation.middleware'
import { organizationSchemas, productSchemas } from '../schemas'

const router = express.Router()

router.post(
  '/organizations/:id/products',
  validate('params', organizationSchemas.organizationId),
  validate('body', productSchemas.productCreate),
  errorLayer(productController.create.bind(productController)),
)

router.get(
  '/organizations/:id/products',
  validate('params', organizationSchemas.organizationId),
  errorLayer(productController.getAll.bind(productController)),
)

router.post('/organizations/:id/products', validate('params', organizationSchemas.organizationId))

export default router
