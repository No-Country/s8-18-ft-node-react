import { z } from 'zod'

const productCreate = z.object({
  name: z.string(),
  description: z.string(),
  barcode: z.string(),
  quantity: z.number().optional(),
  brand: z.string(),
})

export { productCreate }
