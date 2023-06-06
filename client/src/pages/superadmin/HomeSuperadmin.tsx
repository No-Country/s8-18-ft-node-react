import { FC } from 'react'
import { Layout } from '../../components/layouts'
import {Dashboard} from './dashboard/Dashboard'

export const HomeSuperadmin: FC = () => {
  return (
    <Layout
      title={'InventoryApp'}
    >
      <Dashboard />
    </Layout>
  )
}