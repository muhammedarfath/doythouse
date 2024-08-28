import React, { useState } from "react";
import { IoMdNotificationsOutline } from "react-icons/io";
import { CreditCard, LogOut, Settings, User } from "lucide-react";
import { useDispatch } from "react-redux";
import { logout } from "../../Redux/features/auth/authSlice";
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
import { Link } from "react-router-dom";

function Header({ open }) {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const dispatch = useDispatch();

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setSidebarOpen(false);
  };

  const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
  };

  return (
    <div>
      <Toaster position="top-right" />
      <div
        className={`fixed top-0 left-0 right-0 text-black shadow-sm bg-white ${
          open ? "p-5" : "p-4"
        } flex flex-col md:flex-row justify-between items-end z-40`}
      >
        <div
          className={`flex-grow max-w-xl ${
            isSidebarOpen ? "ml-72" : "ml-48"
          } transition-all duration-300 w-full`}
        ></div>
        <div className="flex justify-between items-center w-full">
          <div
            className="p-1.5 lg:hidden md:hidden rounded-md border border-gray-200 mt-5 cursor-pointer"
            onClick={toggleSidebar}
          >
            <RiMenu2Fill className="text-2xl cursor-pointer" />
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
                    <Link to='/customerlist'>
                      <DropdownMenuItem>
                        <CreditCard className="mr-2 h-4 w-4" />
                        <span>Order List</span>
                      </DropdownMenuItem>
                    </Link>
                  </DropdownMenuGroup>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={handleLogout}>
                    <LogOut className="mr-2 h-4 w-4" />
                    <span>Log out</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </div>
      </div>

      <div
        className={`fixed top-0 left-0 h-full z-50 mt-[6.5rem] duration-500 bg-white text-black w-64 shadow-md transition-transform  transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-64"
        }`}
      >
        <MobileSidebar onClose={closeSidebar} />
      </div>
    </div>
  );
}

export default Header;
