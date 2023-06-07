import express, { Request, Response, NextFunction } from 'express'

import { errorLayer } from '../controllers'
import { organizationController } from '../controllers/organization.controller'

import { validate } from '../middlewares/validation.middleware'
import { organizationSchemas } from '../schemas'

const router = express.Router()

router.post(
  '/organizations/:id/users',
  validate('params', organizationSchemas.organizationId),
  validate('body', organizationSchemas.addUserBody),
  organizationController.addUser.bind(organizationController),
)

router.get(
  '/organizations/:id/users',
  validate('params', organizationSchemas.organizationId),
  errorLayer(organizationController.listUsers.bind(organizationController)),
)

router.delete(
  '/organizations/:id/users/:userId/delete',
  validate('params', organizationSchemas.userDeleteParams),
  errorLayer(organizationController.deleteUser.bind(organizationController)),
)

export default router
