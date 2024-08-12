import React from "react";
import { AiOutlineDashboard } from "react-icons/ai";
import { LuBadgeCheck } from "react-icons/lu";
import { LuInbox } from "react-icons/lu";
import { GrUserSettings } from "react-icons/gr";

function Items({ open }) {
  return (
    <>
      <ul className="pt-6">
        <li className="text-black text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-[#F4F6F8] rounded-sm mt-2">
          <AiOutlineDashboard className="text-2xl ml-2" />
          <span className={`${!open && "hidden"} origin-left duration-200`}>
            Dashboard
          </span>
        </li>
        <li className="text-black text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-[#F4F6F8] rounded-sm mt-2">
          <LuBadgeCheck className="text-2xl ml-2" />
          <span className={`${!open && "hidden"} origin-left duration-200`}>
            Master
          </span>
        </li>
        <li className="text-black text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-[#F4F6F8] rounded-sm mt-2">
          <LuInbox className="text-2xl ml-2" />
          <span className={`${!open && "hidden"} origin-left duration-200`}>
            Product
          </span>
        </li>
        <li className="text-black text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-[#F4F6F8] rounded-sm mt-2">
          <GrUserSettings  className="text-2xl ml-2"/>
          <span className={`${!open && "hidden"} origin-left duration-200`}>
            Constomer
          </span>
        </li>
      </ul>
    </>
  );
}

export default Items;
