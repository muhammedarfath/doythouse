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
      } flex justify-between z-40`}
    >
      <div className="flex gap-2 justify-between "></div>
      <div className="flex-grow max-w-xl">
        <form className="flex items-center w-full">
          <label htmlFor="simple-search" className="sr-only">
            Search
          </label>
          <div className="relative w-full">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3">
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
            <input
              type="text"
              id="simple-search"
              className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-black focus:border-black block w-full pl-10 pr-3 py-4"
              placeholder="Search branch name..."
              required
            />
          </div>
          <button
            type="submit"
            className="p-3.5 ml-2 text-sm font-medium text-white bg-[#308E87] rounded-lg focus:ring-4 focus:outline-none focus:ring-black transition-transform transform hover:scale-110"
          >
            <svg
              className="w-5 h-5"
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
            <span className="sr-only">Search</span>
          </button>
        </form>
      </div>
      <div className="flex gap-5 items-center mr-9">
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
