import { z } from 'zod'

const productCreate = z.object({
  name: z.string(),
  description: z.string(),
  barcode: z.string(),
  quantity: z.number().optional(),
  brand: z.string(),
})

const productUpdate = z.object({
  id: z.string(),
  name: z.string(),
  description: z.string(),
  barcode: z.string(),
  quantity: z.number().optional(),
  brand: z.string(),
})

const productParams = z.object({
  id: z.string(),
  productId: z.string(),
  stockId: z.string(),
})

const productId = z.object({
  productId: z.string(),
})

const stockUpdate = z.object({
  quantity: z.number().gte(0),
  condition: z.enum(['NUEVO', 'USADO']),
})

export { productCreate, productParams, productId, stockUpdate }
