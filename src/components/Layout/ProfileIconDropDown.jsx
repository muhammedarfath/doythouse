import React, { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../../components/ui/dropdown-menu";
import { Link } from "react-router-dom";
import { CreditCard, LogOut, Settings, User } from "lucide-react";
import ProfileModal from "../modal/ProfileModal";
import img from "../../assets/profileimage.jpg";

function ProfileIconDropDown({ handleLogout }) {
  const [isModalOpen, setModalOpen] = useState(false);

  const toggleModal = () => {
    setModalOpen(!isModalOpen);
  };

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <img
            className="h-10 w-10 rounded-full cursor-pointer"
            src={img}
            alt="User Avatar"
            onClick={toggleModal}
          />
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuGroup>
            <DropdownMenuItem onClick={toggleModal}>
              <User className="mr-2 h-4 w-4" />
              <span>Profile</span>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Settings className="mr-2 h-4 w-4" />
              <span>Settings</span>
            </DropdownMenuItem>
            <Link to="/customerlist">
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

      {isModalOpen && (
        <ProfileModal isOpen={isModalOpen} onClose={toggleModal} />
      )}
    </>
  );
}

export default ProfileIconDropDown;
