import { FC } from 'react'
import { Layout } from './dashboard/layout/Layout'
import { Dashboard } from './dashboard/Dashboard'

export const HomeAdmin: FC = () => {
  return (
    <Layout
      title={'InventoryApp'}
      description={'Best inventory management app in the whole universe'}
    >
      <Dashboard />
    </Layout>
  )
}