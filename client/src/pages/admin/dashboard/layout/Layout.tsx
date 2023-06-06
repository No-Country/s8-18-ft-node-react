import { FC, PropsWithChildren } from 'react';
import { Helmet } from 'react-helmet';
import { Drawer } from './Drawer';

interface Props {
  title: string;
  description: string;
}

export const Layout: FC<PropsWithChildren<Props>> = ({ title, description, children }) => {
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
