import express from 'express'

import routes from './routes'

const API_URL = process.env.API_URL || '/api/1.0'

const app = express()

app.use(express.json())
app.use(API_URL, routes)

app.get('/', (req, res) => {
  res.send('Hello, World!')
})

export default app
