import express from 'express'
import userRoutes from './users'
import authRoutes from './auth'
import organizationRoutes from './organizations'
import productsRoutes from './products'

const router = express.Router()

router.use(userRoutes)
router.use(authRoutes)
router.use(organizationRoutes)
router.use(productsRoutes)

export default router
