import React, { useState } from "react";
import { IoMdNotificationsOutline } from "react-icons/io";
import { CreditCard, LogOut, Settings, User } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../../components/ui/dropdown-menu";
import { ModeToggle } from "../darkmode/mode-toggle";
import { Toaster } from "react-hot-toast";
import { RiMenu2Fill } from "react-icons/ri";
import MobileSidebar from "./MobileSidebar";

function Header({ open }) {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <div>
      <Toaster position="top-center" />
      <div
        className={`fixed top-0 left-0 right-0 text-black shadow-sm bg-white ${
          open ? "p-5" : "p-4"
        } flex flex-col md:flex-row justify-between items-end z-40`}
      >
        <div
          className={`flex-grow max-w-xl ${
            isSidebarOpen ? "ml-72" : "ml-48"
          } transition-all duration-300 w-full`}
        >
          {/* <form className="lg:flex md:flex hidden items-center w-full">
            <label htmlFor="simple-search" className="sr-only">
              Search
            </label>
            <div className="relative w-full">
              <input
                type="text"
                id="simple-search"
                className="bg-[#F9F7F6] border border-gray-300 text-gray-900 text-sm rounded-full focus:ring-black focus:border-black block w-full pl-10 pr- py-4"
                placeholder="Search branch name..."
                required
              />
              <div className="absolute inset-y-0 right-4 flex items-center pl-3">
                <svg
                  className="w-5 h-5 text-gray-500"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 19l-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
              </div>
            </div>
          </form> */}
        </div>
        <div className="flex justify-between items-center w-full">
          <div
            className="p-1.5 lg:hidden md:hidden rounded-md border border-gray-200 mt-5 cursor-pointer"
            onClick={toggleSidebar}
          >
            <RiMenu2Fill className="text-2xl cursor-pointer"/>
          </div>
          <div></div>

          <div
            className={`flex gap-5 items-center mt-4 md:mt-0  transition-all duration-300`}
          >
            <ModeToggle />
            <div className="p-1.5 rounded-md border border-gray-200">
              <IoMdNotificationsOutline className="text-2xl cursor-pointer" />
            </div>

            <div className="flex gap-2 border p-1 rounded-xl">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <img
                    className="h-10 w-10 rounded-full cursor-pointer"
                    src="https://preview.keenthemes.com/metronic-v4/theme_rtl/assets/pages/media/profile/profile_user.jpg"
                    alt="User Avatar"
                  />
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuLabel>My Account</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuGroup>
                    <DropdownMenuItem>
                      <User className="mr-2 h-4 w-4" />
                      <span>Profile</span>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Settings className="mr-2 h-4 w-4" />
                      <span>Settings</span>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <CreditCard className="mr-2 h-4 w-4" />
                      <span>Billing</span>
                    </DropdownMenuItem>
                  </DropdownMenuGroup>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                    <LogOut className="mr-2 h-4 w-4" />
                    <span>Log out</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </div>
      </div>

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full z-50 mt-[6.5rem] duration-500 bg-white text-black w-64 shadow-md transition-transform  transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-64"
        }`}
      >
      <MobileSidebar  />
      </div>
    </div>
  );
}

export default Header;
