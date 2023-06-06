import express from 'express'

import { authController, errorLayer } from '../controllers'
import { validate } from '../middlewares/validation.middleware'
import { userCreateSchema } from '../schemas'

const router = express.Router()

router.post(
  '/auth/signup',
  validate('body', userCreateSchema),
  errorLayer(authController.signup.bind(authController)),
)

router.post('/auth/login', errorLayer(authController.login.bind(authController)))

router.get('/auth/logout', errorLayer(authController.logOut.bind(authController)))

export default router
