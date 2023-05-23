import express from 'express'

import routes from './routes'
import bodyParser from 'body-parser'

const API_URL = process.env.API_URL || '/api/1.0'

const app = express()

app.use(bodyParser.json())
app.use(API_URL, routes)

app.get('/', (req, res) => {
  res.send('Hello, World!')
})

export default app
