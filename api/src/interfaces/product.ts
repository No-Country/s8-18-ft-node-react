import { Condition } from '@prisma/client'

export interface ProductCreate {
  name: string
  description: string
  barcode: string
  brand: string
  quantity?: number
  condition?: string
}

export interface ProductUpdate extends ProductCreate {
  id: string
}

export interface StockAdd {
  productId: string
  quantity: number
  condition: Condition
}

export interface StockUpdate {
  id: string
  quantity: number
  condition: Condition
}
