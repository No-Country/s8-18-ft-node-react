import { z } from 'zod'
import { userService } from '../services/user.service'

const emailUniqueValidation = async (email: string) => await userService.emailIsAvailable(email)

export const userCreateSchema = z.object({
  firstName: z.string({ required_error: 'firstName is required' }),
  lastName: z.string({ required_error: 'lastName is required' }),
  email: z
    .string({ required_error: 'Email is required' })
    .email('Email must be valid')
    .refine(emailUniqueValidation, 'Email is already in use'),
  password: z
    .string({ required_error: 'Password is required' })
    .min(8, 'Password should be 8 characters at least'),
  phone: z.number().optional(),
})
