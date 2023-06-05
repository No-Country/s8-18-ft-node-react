export interface ProductCreate {
  name: string
  description: string
  barcode: string
  organizationId?: string
}

export interface ProductUpdate extends Partial<ProductCreate> {
  id: string
}
