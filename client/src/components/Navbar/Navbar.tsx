import { FC } from 'react'
import assets from '../../assets'
import { ChevronLeftIcon } from '@heroicons/react/20/solid'
import { CountIcon } from '../ui'

type NavBarProps = {
  toggleDrawer: () => void
}

export const NavBar: FC<NavBarProps> = ({ toggleDrawer }) => {
  return (
    <nav className="bg-[#ECECEC] w-full">
      <div className="flex justify-between py-1 px-5 shadow-md">
        <div className="flex gap-6 items-center">
          <button
            onClick={toggleDrawer}
            className="border-1 border-black w-6 rounded-full aspect-square flex justify-center items-center"
          >
            <ChevronLeftIcon className="h-6 w-6 border-2 border-black rounded-full duration-150" />
          </button>
        </div>
        <div className="flex items-center gap-3">
          <CountIcon count={1}>
            <img src={assets.MessageIcon} alt="Message Icon Inventory" />
          </CountIcon>
          <CountIcon count={14}>
            <img src={assets.NotificationIcon} alt="Notification Icon Inventory" />
            </CountIcon>
            <div
            className="bg-cover bg-center w-10 h-10 rounded-full"
            style={{
              backgroundImage:
                "url('https://variety.com/wp-content/uploads/2023/04/Twitter-Logo-Doge-Dogecoin.png?w=640&h=360&crop=1')",
            }}
          />
        </div>
      </div>
      <div className="flex p-4 gap-3 shadow-md">
        <img src={assets.Logo} alt="Logo Inventory" />
        <div>
          <h2 className="text-[1rem] font-medium">Inventory Management</h2>
          <h3 className="text-[10px] font-medium">Very detailed & featured admin.</h3>
        </div>
      </div>
    </nav>
  )
}
