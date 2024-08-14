import React, { useState } from "react";
import { RiApps2Line } from "react-icons/ri";
import Items from "./Items";
import Header from "./Header";
import { Outlet } from "react-router-dom";
import logo from "../../assets/logo.jpg";

function Sidebar() {
  const [open, setOpen] = useState(true);

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div
        className={`${
          open ? "w-60" : "w-20"
        } duration-500 bg-white relative shadow`}
      >
        <div
          className={`absolute cursor-pointer border-2 rounded-full p-1 right-5 bg-white ${
            !open ? "top-4" : "top-6"
          } text-2xl text-black ${!open && "rotate-180"}`}
        >
          <RiApps2Line onClick={() => setOpen(!open)} />
        </div>
        <div className="flex gap-x-2 p-5 items-center border-b-2 bg-[#308E87]">
          {open && (
            <img
              src={logo}
              alt="Logo"
              className="h-12 w-12 rounded-full"
            />
          )}
          <h1
            className={`text-white font-medium text-sm duration-200 ${
              !open && "scale-0"
            }`}
          >
            DOYT HOUSE
          </h1>
        </div>
        <div className="flex justify-center">
          <span className="mt-3 text-sm text-gray-400 ">GENERAL</span>
        </div>
        <div className="flex flex-col items-start">
          <Items open={open} />
        </div>
      </div>

      <div className="flex-1 w-full">
        <Header open={open} />
        <Outlet />
      </div>
    </div>
  );
}

export default Sidebar;
