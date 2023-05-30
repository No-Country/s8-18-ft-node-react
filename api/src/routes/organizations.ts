import express, { Request, Response, NextFunction } from 'express'
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
  organizationController.listUsers.bind(organizationController),
)

export default router
