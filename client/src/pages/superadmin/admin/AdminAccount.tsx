import { FC } from 'react'
import { Layout } from '../../../components/layouts'
import AdminList from './AdminList'

export const AdminAccount: FC = () => {
  return (
    <Layout
      title={'InventoryApp'}
      description={'Best inventory management app in the whole universe'}
    >
      <AdminList />
    </Layout>
  )
}