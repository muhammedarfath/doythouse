import React, { useEffect, useState } from "react";
import Items from "./Items";
import Header from "./Header";
import { Outlet, useNavigate } from "react-router-dom";
import logo from "../../assets/logo.jpg";
import { RiAppsLine, RiSettingsLine } from "react-icons/ri";
import { useSelector } from "react-redux";
import LoadingWrapper from "../Loading/LoadingWrapper";

function Sidebar() {
  const navigate = useNavigate();
  const [open, setOpen] = useState(true);

  const { isLoggedIn, role, username } = useSelector((state) => state.auth);

  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/login");
    }
  }, [isLoggedIn, navigate]);

  return (
    <>
      <LoadingWrapper>
        <div className="flex h-screen ">
          <div
            className={`${
              open ? "w-60" : "w-20"
            } duration-500 bg-white fixed h-full shadow z-50 lg:flex md:flex flex-col hidden`}
          >
            <div className="relative h-screen overflow-scroll scrollbar-hide">
              <div
                className={`absolute cursor-pointer border-2 rounded-full p-1 right-6 bg-[#D8E9E7] transform ${
                  open ? "top-6 rotate-0" : "top-5 rotate-180"
                } text-2xl text-[#308e87] transition-transform duration-300`}
                onClick={() => setOpen(!open)}
              >
                <RiAppsLine />
              </div>

              <div className="flex gap-x-2 p-5 items-center rounded-b-2xl border-b-2 bg-[#308E87]">
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
          </div>

          <div
            className={`flex-1 flex flex-col transition-all duration-500 ${
              open ? "lg:ml-60 md:ml-60" : "ml-20"
            }`}
          >
            <Header open={open} />
            <main className="flex-1 overflow-y-auto p-4 mt-16">
              <Outlet />
            </main>
          </div>

          <div className="fixed cursor-pointer lg:bottom-10 bottom-5 lg:right-10 right-5 bg-[#308E87] p-3 rounded-full shadow-lg animate-spin-slow">
            <RiSettingsLine className="text-2xl text-white " />
          </div>
        </div>
      </LoadingWrapper>
    </>
  );
}

export default Sidebar;
