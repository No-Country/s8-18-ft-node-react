import { FC, PropsWithChildren } from 'react';
import { Helmet } from 'react-helmet';
import ProfileBar from '../ProfileBar';

interface Props {
  title: string;
  description: string;
}

const Layout: FC<PropsWithChildren<Props>> = ({ title, description, children }) => {
  return (
    <>
      <Helmet title={title} meta={[{ name: 'description', content: description }]} />
      <div className='flex'>
        <div className='w-52 h-screen bg-gray-200' />
        <div className='w-full'>
          <header>
            <ProfileBar />
          </header>
          <main className='px-5'>{children}</main>
        </div>
      </div>
    </>
  );
};

export default Layout;
