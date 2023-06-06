import { FC } from 'react'
import { Layout } from '../dashboard/layout/Layout'
import { ProductList } from './ProductList'

export const ProductPage: FC = () => {
  return (
    <Layout
      title={'InventoryApp'}
      description={'Best inventory management app in the whole universe'}
    >
      <ProductList />
    </Layout>
  )
}