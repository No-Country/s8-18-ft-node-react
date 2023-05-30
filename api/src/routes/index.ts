import express from 'express'
import userRoutes from './users'
import authRoutes from './auth'
import organizationRoutes from './organizations'

const router = express.Router()

router.use(userRoutes)
router.use(authRoutes)
router.use(organizationRoutes)

export default router
