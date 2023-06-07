import express, { Request, Response, NextFunction } from 'express'

import { errorLayer } from '../controllers'
import { organizationController } from '../controllers/organization.controller'

import { validate } from '../middlewares/validation.middleware'
import { organizationMiddleware } from '../middlewares/organization.middleware'
import { organizationSchemas } from '../schemas'

const router = express.Router()

router.all('/organizations/:id/*', organizationMiddleware)

router.post(
  '/organizations/:id/users',
  validate('body', organizationSchemas.addUserBody),
  organizationController.addUser.bind(organizationController),
)

router.get(
  '/organizations/:id/users',
  errorLayer(organizationController.listUsers.bind(organizationController)),
)

router.delete(
  '/organizations/:id/users/:userId/delete',
  errorLayer(organizationController.deleteUser.bind(organizationController)),
)

export default router
