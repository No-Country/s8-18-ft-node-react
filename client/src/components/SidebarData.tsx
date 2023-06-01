import {FC, PropsWithChildren} from "react";

interface Props {
  toggle: boolean;
}

import { datas } from "./Data";
const SidebarData: FC<PropsWithChildren<Props>> = ({toggle}) => {
  return (
    <div className="">
      {datas.map((data) => {
        return (
          <div
            className={`${
              toggle ? "last:w-[3.6rem]" : "last:w-[17rem]"
            } sidebar last:absolute left-4 bottom-4`}
            key={data.id}
          >
            <div className="mr-8 text-[1.7rem] text-brown">{data.icon}</div>
            <div
              className={`${
                toggle ? "opacity-0 delay-200" : ""
              } text-[1rem] text-brown whitespace-pre`}
            >
              {data.text}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default SidebarData;