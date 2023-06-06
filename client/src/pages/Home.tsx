import { FC } from 'react'
import { Layout } from '../components/layouts'

import { Dashboard } from './superadmin/dashboard/Dashboard'


export const Home: FC = () => {
  return (
    <>
      <Layout title={'InventoryApp'}
      >
        <Dashboard />
      </Layout>
    </>
  )
}

