import React from "react";
import { AiOutlineDashboard } from "react-icons/ai";
import { LuBadgeCheck } from "react-icons/lu";
import { LuInbox } from "react-icons/lu";
import { GrUserSettings } from "react-icons/gr";
import { AiOutlineAppstore, AiOutlineSetting } from "react-icons/ai";
import MenuItem from "./MenuItem";

function Items({ open }) {
  const masterSubItems = [
    { icon: AiOutlineAppstore, label: "Category" },
    { icon: AiOutlineSetting, label: "Settings" },
  ];

  const productSubItems = [
    { icon: AiOutlineAppstore, label: "Add Product" },
    { icon: AiOutlineSetting, label: "Manage Products" },
  ];

  return (
    <ul className="pt-6">
      <MenuItem icon={AiOutlineDashboard} label="Dashboard" open={open} />
      <MenuItem icon={LuBadgeCheck} label="Master" open={open} subItems={masterSubItems} />
      <MenuItem icon={LuInbox} label="Product" open={open} subItems={productSubItems} />
      <MenuItem icon={GrUserSettings} label="Customer" open={open} />
    </ul>
  );
}

export default Items;
