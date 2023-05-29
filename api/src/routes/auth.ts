import express from 'express'

import { authController } from '../controllers'
import { validate } from '../middlewares/validation.middleware'
import { userCreateSchema } from '../schemas'

const router = express.Router()

router.post(
  '/auth/signup',
  validate('body', userCreateSchema),
  authController.signup.bind(authController),
)
router.post('/auth/login', authController.login.bind(authController))

export default router
