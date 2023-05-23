import express from 'express'

import { userService } from '../services/user.service'

const router = express.Router()

router.post('/auth/signup', async (req, res) => {
  //TODO: Refactor to controller
  const user = req.body

  if (!user) {
    res.status(400).send({ message: 'Invalid Request' })
  }

  const newUser = await userService.create(user)

  return res.send({ message: 'User registered', data: newUser })
})

export default router
