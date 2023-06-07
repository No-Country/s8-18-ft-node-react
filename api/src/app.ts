import express from 'express'

import cookieParser from 'cookie-parser'

import authConfig from './auth/passport'
import routes from './routes'
import errorHandlerMiddleware from './middlewares/errorHandler.middleware'
import { authMiddleware } from './middlewares/auth.middleware'

const API_URL = process.env.API_URL || '/api/1.0'

const app = express()
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://127.0.0.1:5173')
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE')
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization')
  next()
})
authConfig()

app.use(express.json())
app.use(cookieParser())

app.use(authMiddleware)

app.use(API_URL, routes)

// middleware
app.use(errorHandlerMiddleware)

export default app
