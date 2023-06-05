import { FC } from 'react'
import { Layout } from './dashboard/layout/Layout'

export const HomeAdmin: FC = () => {
  return (
    <Layout
      title={'InventoryApp'}
      description={'Best inventory management app in the whole universe'}
    >
      HomeAdmin
    </Layout>
  )
}