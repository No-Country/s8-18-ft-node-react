import { FC, useState } from 'react';
import assets from '../../assets';
import { NavBar } from '../NavBar/NavBar';

interface drawerDataItemInterface {
  label: string;
  icon: string;
  subLinks: sublinkItemInterface[];
}

interface sublinkItemInterface {
  label: string;
  action: () => void;
}

const drawerData: drawerDataItemInterface[] = [
  {
    label: 'Gestión de cuentas',
    icon: assets.ProfilesIcon,
    subLinks: [
      { label: 'Cuentas de administrador', action: () => console.log('test') },
      { label: 'Cuentas de vendedor', action: () => console.log('test') },
    ],
  },
  {
    label: 'Registro de auditoria',
    icon: assets.NoteIcon,
    subLinks: [{ label: 'Auditoría', action: () => console.log('test') }],
  },
  {
    label: 'Configuracion de notificaciones',
    icon: assets.SettingIcon,
    subLinks: [{ label: 'Notificaciones', action: () => console.log('test') }],
  },
];

const Acordeon: FC<drawerDataItemInterface> = ({ elem }) => {
  const [isActive, setIsActive] = useState(true);

  const toggleAcordeon = () => setIsActive(!isActive);

  return (
    <div className="overflow-hidden w-full">
      <h3
        onClick={toggleAcordeon}
        className="flex py-2 px-4 gap-4 items-center text-[14px] font-medium relative cursor-pointer"
        style={{ backgroundColor: '#e2e2e2' }}
      >
        <img src={elem.icon} className="w-[1.5rem]" /> {elem.label}
        <img
          src={assets.ArrowBackIcon}
          className={`w-[7px] h-[15px] absolute right-4 duration-150 ${
            isActive ? '-rotate-90' : ''
          }`}
        />
      </h3>
      <ul
        className="duration-150"
        style={{ backgroundColor: '#c4c4c4', height: isActive ? 'auto' : '0px' }}
      >
        {elem.subLinks.map((subLink: sublinkItemInterface) => (
          <li className="pl-7">
            <h4 className="flex items-center py-2 pl-5 border-l-4 border-gray-500 text-[12px] font-medium relative before:content-[' '] before:w-3.5 before:h-1 before:bg-gray-500 before:absolute before:left-0">
              {subLink.label}
            </h4>
          </li>
        ))}
      </ul>
    </div>
  );
};

export const Drawer: FC = () => {
  const [showDrawer, setShowDrawer] = useState(false);

  const toggleDrawer = () => setShowDrawer(!showDrawer);

  return (
    <div className="w-full flex">
      <div className="duration-150" style={{ width: showDrawer ? '250px' : '0px' }}>
        <div
          style={{
            display: showDrawer ? 'block' : 'none',
          }}
        >
          <h1 className="p-4 text-[20px] font-semibold text-center">Inventory Management</h1>
          <h2
            className="flex py-2 px-4 gap-4 items-center text-[14px] font-medium"
            style={{ backgroundColor: '#e2e2e2' }}
          >
            <img src={assets.Logo} alt="Logo Inventory" className="w-[1.5rem]" /> Dashboard
          </h2>
          <div>
            {drawerData.map((elem: drawerDataItemInterface, i: number) => (
              <Acordeon elem={elem} key={i + 1} />
            ))}
          </div>
        </div>
      </div>
      <div style={{ width: showDrawer ? 'calc(100% - 250px)' : '100%' }}>
        <NavBar toggleDrawer={toggleDrawer} />
      </div>
    </div>
  );
};
