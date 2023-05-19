import { FC } from 'react';
import { Layout } from '../components/layouts';

export const Home: FC = () => {
  return (
    <Layout
      title={'InventoryApp'}
      description={'Best inventory management app in the whole universe'}
    >
      <h1 className='border-green-600'>InventoryApp</h1>
    </Layout>
  );
};
