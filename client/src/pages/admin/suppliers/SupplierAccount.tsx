import { FC } from 'react'
import { Layout } from '../dashboard/layout/Layout'
import SupplierList from './SupplierList'

export const SupplierAccount: FC = () => {
  return (
    <Layout
      title={'InventoryApp'}
      description={'Best inventory management app in the whole universe'}
    >
      <SupplierList />
    </Layout>
  )
}