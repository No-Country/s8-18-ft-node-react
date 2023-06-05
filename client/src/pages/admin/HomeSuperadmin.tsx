import { FC } from 'react'
import { Layout } from '../../components/layouts'
import {Dashboard} from './dashboard/Dashboard'

export const HomeSuperadmin: FC = () => {
  return (
    <Layout
      title={'InventoryApp'}
      description={'Best inventory management app in the whole universe'}
    >
      <Dashboard />
    </Layout>
  )
}