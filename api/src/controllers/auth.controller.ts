import { Request, Response } from 'express'
import { userService } from '../services/user.service'

export class AuthController {
  async signup(req: Request, res: Response) {
    const user = req.body

    if (!user) {
      return res.status(400).send({ message: 'Invalid Request' })
    }

    try {
      const newUser = await userService.create(user)
      return res.send({ message: 'User registered', data: newUser })
    } catch (e) {
      console.log(e)
      return res.status(500).send({ message: 'Something goes wrong' })
    }
  }
}
