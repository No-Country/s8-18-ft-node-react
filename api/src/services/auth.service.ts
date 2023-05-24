import bcrypt from 'bcrypt'

export class AuthService {
  async hashPassword(password: string) {
    const hashedPassword = await bcrypt.hash(password, 10)

    return hashedPassword
  }

  async comparePassword(password: string, hashedPassword: string) {
    return await bcrypt.compare(password, hashedPassword)
  }
}
