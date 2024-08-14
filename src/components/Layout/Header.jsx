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

function Header({ open }) {
  return (
    <div
      className={`fixed top-0 left-0 right-0 text-black shadow-sm bg-white ${
        open ? "p-5" : "p-4"
      } flex justify-between items-center z-40`}
    >
      <div className="flex gap-2 mx-5 items-center"></div>
      <div className="flex gap-5 items-center mr-9">
        <IoMdNotificationsOutline className="text-3xl cursor-pointer" />
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
