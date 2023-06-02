import { FC, PropsWithChildren } from 'react';
import { Helmet } from 'react-helmet';
import { Drawer } from '../Drawer/Drawer';

interface Props {
  title: string;
  description: string;
}

const Layout: FC<PropsWithChildren<Props>> = ({ title, description, children }) => {
  return (
    <>
      <Helmet title={title} meta={[{ name: 'description', content: description }]} />
      <div className='flex'>
        <div className='w-full'>
          <header>
            <Drawer>
              {children}
          </Drawer>
          </header>
          
        </div>
      </div>
    </>
  );
};

export default Layout;
