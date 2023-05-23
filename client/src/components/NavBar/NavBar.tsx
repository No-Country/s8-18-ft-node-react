import { FC } from 'react';
import assets from '../../assets';

type NavBarProps = {
  toggleDrawer: () => void;
};

export const NavBar: FC<NavBarProps> = ({ toggleDrawer }) => {
  return (
    <nav className="bg-white border-2 border-black w-full" style={{ backgroundColor: '#e2e2e2' }}>
      <div className="flex justify-between py-2 pl-4 pr-16">
        <div className="flex gap-6 items-center">
          <button
            onClick={toggleDrawer}
            className="border-2 border-black w-[1rem] rounded-full aspect-square flex justify-center items-center"
          >
            <img
              src={assets.ArrowBackIcon}
              alt="Arrow Back Icon Inventory"
              className="w-[5px] h-[10.5px]"
            />
          </button>
          <img src={assets.SearchIcon} alt="Search Icon Inventory" />
        </div>
        <div className="flex gap-6">
          <img src={assets.MessageIcon} alt="Message Icon Inventory" />
          <img src={assets.NotificationIcon} alt="Notification Icon Inventory" />
          <img
            src={assets.UserIcon}
            alt="User Icon Inventory"
            className="border-2 border-black p-2 rounded-full aspect-square	"
          />
        </div>
      </div>
      <div className="flex p-4 gap-3 border-t-2 border-black">
        <img src={assets.Logo} alt="Logo Inventory" />
        <div>
          <h2 className="text-[1rem] font-medium">Inventory Management</h2>
          <h3 className="text-[10px] font-medium">Very detailed & featured admin.</h3>
        </div>
      </div>
    </nav>
  );
};
