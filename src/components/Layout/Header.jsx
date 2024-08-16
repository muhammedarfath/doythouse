import React from "react";
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
import { CiDark } from "react-icons/ci";
import { ModeToggle } from "../darkmode/mode-toggle";

function Header({ open }) {
  return (
    <div
      className={`fixed top-0 left-0 right-0 text-black shadow-sm bg-white ${
        open ? "p-5" : "p-4"
      } flex justify-between items-center z-40`}
    >
      <div
        className={`flex-grow max-w-xl ${
          open ? "ml-72" : "ml-48"
        } transition-all duration-300`}
      >
        <form className="flex items-center w-full">
          <label htmlFor="simple-search" className="sr-only">
            Search
          </label>
          <div className="relative w-full">
            <input
              type="text"
              id="simple-search"
              className="bg-[#F9F7F6] border border-gray-300 text-gray-900 text-sm rounded-full focus:ring-black focus:border-black block w-full pl-10 pr-3 py-4"
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
        </form>
      </div>

      <div
        className={`flex gap-5 items-center ${
          open ? "mr-5" : "mr-4"
        } transition-all duration-300`}
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
  );
}

export default Header;
