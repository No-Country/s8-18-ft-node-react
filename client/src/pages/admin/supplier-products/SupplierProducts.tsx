import { FC } from 'react'
import { Layout } from '../dashboard/layout/Layout'
import ProductsList from './ProductsList'

export const SupplierProducts: FC = () => {
  return (
    <Layout
      title={'InventoryApp'}
      description={'Best inventory management app in the whole universe'}
    >
      <ProductsList />
    </Layout>
  )
}