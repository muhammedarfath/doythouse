import React, { useState } from "react";
import Items from "./Items";
import Header from "./Header";
import { Outlet } from "react-router-dom";
import logo from "../../assets/logo.jpg";
import { RiAppsLine } from "react-icons/ri";

function Sidebar() {
  const [open, setOpen] = useState(true);

  return (
    <div className="flex h-screen">
      <div
        className={`${
          open ? "w-60" : "w-20"
        } duration-500 bg-white relative shadow z-50 lg:flex md:flex flex-col hidden `}
      >
        <div
          className={`absolute cursor-pointer border-2 rounded-full p-1 right-6 bg-[#D8E9E7] transform ${
            open ? "top-6 rotate-0" : "top-5 rotate-180"
          } text-2xl text-[#308e87] transition-transform duration-300`}
          onClick={() => setOpen(!open)}
        >
          <RiAppsLine />
        </div>

        <div className="flex gap-x-2 p-5 items-center rounded-b-2xl   border-b-2 bg-[#308E87]">
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
          <span className="mt-3 text-sm text-gray-400">GENERAL</span>
        </div>

        <div className="flex flex-col items-start">
          <Items open={open} />
        </div>
      </div>

      <div className="flex-1 flex flex-col">
        <Header open={open} />
        <main className="flex-1 overflow-y-auto p-4 mt-16">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default Sidebar;
