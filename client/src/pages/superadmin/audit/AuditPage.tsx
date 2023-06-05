import { FC } from 'react'
import { Layout } from '../../../components/layouts'
import { AuditList } from './AuditList'

export const AuditPage: FC = () => {
  return (
    <Layout
      title={'InventoryApp'}
      description={'Best inventory management app in the whole universe'}
    >
      <AuditList />
    </Layout>
  )
}