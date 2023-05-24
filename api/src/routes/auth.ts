import express from 'express'

import { AuthController } from '../controllers'
import { validate } from '../middlewares/validationMiddleware'
import { userCreateSchema } from '../schemas'

const router = express.Router()
const authController = new AuthController()

router.post('/auth/signup', validate('body', userCreateSchema), authController.signup)

export default router
