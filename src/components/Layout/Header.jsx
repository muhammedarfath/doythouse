import React from "react";

import { IoMdNotificationsOutline } from "react-icons/io";

function Header() {
  return (
    <div className="flex-1 text-black shadow-sm bg-white p-4 flex justify-between items-center">
      <div className="flex gap-2 mx-5 items-center ">
        <img
          src="/images/doytlogo.jpg"
          alt=""
          className="h-10 w-10 rounded-full"
        />
        <h1 className="text-xl font-semibold">DOYT HOUSE</h1>
      </div>
      <div className="flex gap-8 items-center">
        <IoMdNotificationsOutline className="text-3xl"/>
        <div className="mr-5 border-2 rounded-xl p-1">
            arfah
        </div>
      </div>
    </div>
  );
}

export default Header;
