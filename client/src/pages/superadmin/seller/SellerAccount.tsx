import { FC } from 'react'
import { Layout } from '../../../components/layouts'
import { SellerList } from './SellerList'

export const SellerAccount: FC = () => {
  return (
    <Layout
      title={'InventoryApp'}
      description={'Best inventory management app in the whole universe'}
    >
      <SellerList />
    </Layout>
  )
}