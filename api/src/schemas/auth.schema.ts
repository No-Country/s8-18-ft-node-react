import { z } from 'zod'

const credentialsSchema = z.object({
  email: z.string({ required_error: 'Email is required' }).email('Email must be valid'),
  password: z
    .string({ required_error: 'Email is required' })
    .min(8, 'Password should be 8 characters at least'),
})
