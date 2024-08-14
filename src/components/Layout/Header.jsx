import React from "react";
import { IoMdNotificationsOutline } from "react-icons/io";
import { 
  CreditCard,LogOut,  
  Settings, User, 
} from "lucide-react";
import { 
  DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, 
  DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger 
} from "../../components/ui/dropdown-menu";

function Header({open}) {
  return (
    <div className={`flex-1 text-black shadow-sm bg-white ${open ? "p-5" : "p-2"} flex justify-between items-center`}>
      <div className="flex gap-2 mx-5 items-center">
        
      </div>
      <div className="flex gap-5 items-center mr-9">
        <IoMdNotificationsOutline className="text-3xl cursor-pointer" />
        <div className="flex gap-2 border p-1 rounded-xl">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <img
                className="h-10 w-10 rounded-full cursor-pointer"
                src="data:image/jpeg;base64,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"
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
