import { FC, useState } from 'react'
import assets from '../../../../assets'
import { NavBar } from '../../../../components/Navbar/Navbar'
import { Link } from 'react-router-dom'

interface drawerDataItemInterface {
  label: string
  icon: string
  subLinks: sublinkItemInterface[]
}

interface sublinkItemInterface {
  label: string
  link: string
  action: () => void
}

const drawerData: drawerDataItemInterface[] = [
  {
    label: 'Gestión de productos',
    icon: assets.UsersIcon,
    subLinks: [
      { label: 'Lista de productos', link: '/products-list', action: () => console.log('test') },
    ],
  },
  {
    label: 'Gestión de proveedores',
    icon: assets.NoteIcon,
    subLinks: [
      { label: 'Lista de proveedores', link: '/supplier-list', action: () => console.log('test') },
    ],
  },
  {
    label: 'Descuentos y promociones',
    icon: assets.NoteIcon,
    subLinks: [
      { label: 'Configuración de descuentos', link: '/settings', action: () => console.log('test') },
    ],
  },
  {
    label: 'Informes',
    icon: assets.SettingsIcon,
    subLinks: [
      { label: 'Informe de ventas', link: '/sales-report', action: () => console.log('test') },
      {
        label: 'Informe de inventario',
        link: '/inventory-report',
        action: () => console.log('test'),
      },
    ],
  },
]

const Acordeon: FC<drawerDataItemInterface> = ({ elem }) => {
  const [isActive, setIsActive] = useState(false)

  const toggleAcordeon = () => setIsActive(!isActive)

  return (
    <div className="overflow-hidden w-full">
      <h3
        onClick={toggleAcordeon}
        className="flex py-2 px-4 gap-4 items-center text-[14px] font-medium relative cursor-pointer"
      >
        <img src={elem.icon} className="w-[1.5rem]" /> {elem.label}
        <img
          src={assets.ArrowBackIcon}
          className={`w-[7px] h-[15px] absolute right-4 duration-150 ${
            isActive ? '-rotate-90' : ''
          }`}
        />
      </h3>
      <ul className="duration-150" style={{ height: isActive ? 'auto' : '0px' }}>
        {elem.subLinks.map((subLink: sublinkItemInterface) => (
          <li className="pl-7 bg-[#1B1839]">
            <Link to={subLink.link}>
              <h4 className="flex items-center py-2 pl-5 border-l-4 border-gray-500 text-[12px] font-medium relative before:content-[' '] before:w-3.5 before:bg-gray-500 before:h-1 before:absolute before:left-0">
                {subLink.label}
              </h4>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export const Drawer: FC = ({ children }) => {
  const [showDrawer, setShowDrawer] = useState(true)

  const toggleDrawer = () => setShowDrawer(!showDrawer)

  return (
    <div className="w-full flex">
      <div className={showDrawer ? 'w-[250px]' : 'w-[50px]'}></div>
      <div
        className="fixed top-0 left-0 duration-150 text-white bg-gradient-to-t from-[#234B99] to-[#1B1839] h-screen overflow-hidden"
        style={{ width: showDrawer ? '250px' : '50px' }}
      >
        <div
          style={{
            display: showDrawer ? 'block' : 'block',
          }}
        >
          <h1 className="p-4 text-[20px] font-semibold text-center">
            {showDrawer ? 'Inventory Management' : 'IM'}
          </h1>
          <Link to="/">
            <h2 className="flex py-2 px-4 gap-4 items-center text-[14px] font-medium">
              <img src={assets.LogoWhite} alt="Logo Inventory" className="w-[1.5rem]" /> Dashboard
            </h2>
          </Link>
          <div>
            {drawerData.map((elem: drawerDataItemInterface, i: number) => (
              <Acordeon elem={elem} key={i + 1} />
            ))}
          </div>
        </div>
      </div>
      <div className="" style={{ width: showDrawer ? 'calc(100% - 250px)' : 'calc(100% - 50px)' }}>
        <NavBar toggleDrawer={toggleDrawer} />
        <main className="p-5">{children}</main>
      </div>
    </div>
  )
}
