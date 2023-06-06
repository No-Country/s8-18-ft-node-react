import { FC, PropsWithChildren } from 'react'
import { Helmet } from 'react-helmet'
import { Drawer } from '../Drawer/Drawer'

interface Props {
  children: React.ReactNode
  title?: string
}

const Layout: FC<PropsWithChildren<Props>> = ({ title, children }) => {
  return (
    <>
      <Helmet title={title} meta={[{ name: 'description', content: 'description' }]} />
      <div className="flex">
        <div className="w-full">
          <header>
            <Drawer>{children}</Drawer>
          </header>
        </div>
      </div>
    </>
  )
}

export default Layout
