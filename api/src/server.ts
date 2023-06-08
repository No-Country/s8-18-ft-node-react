import app from './app'

// ;(async () => {
//   await db.initDB()
// })()

app.listen(process.env.PORT, () => {
  console.log('Server is running on port 3000')
})
