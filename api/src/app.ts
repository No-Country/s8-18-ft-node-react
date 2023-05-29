import express from 'express'

import cookieParser from 'cookie-parser'

import authConfig from './auth/passport'
import routes from './routes'
import errorHandlerMiddleware from './middlewares/errorHandler.middleware'
import { authMiddleware } from './middlewares/auth.middleware'

const API_URL = process.env.API_URL || '/api/1.0'

const app = express()
authConfig()

app.use(express.json())
app.use(cookieParser())

app.use(authMiddleware)

app.use(API_URL, routes)

// middleware
app.use(errorHandlerMiddleware)

export default app
