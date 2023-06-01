import { useState } from "react";
import { ChevronLeftIcon} from '@heroicons/react/20/solid';
import SidebarData from "./SidebarData";
import UserProfile from "./UserProfile";



const Sidebar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <div className={`${toggle ? "w-[5.8rem]" : ""} sidebar-container`}>
      <UserProfile toggle={toggle} />
      <SidebarData toggle={toggle} />
      <div
        className="absolute top-[7rem] flex justify-center items-center -left-5 w-10 h-10 bg-glass rounded-full cursor-pointer"
        onClick={() => {
          setToggle(!toggle);
        }}
      >
        <ChevronLeftIcon
          className={`${
            toggle ? "rotate-180" : ""
          } text-3xl transition-all duration-300`}
        />
      </div>
    </div>
  );
};

export default Sidebar;