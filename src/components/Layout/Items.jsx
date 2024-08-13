import React from "react";
import { AiOutlineDashboard } from "react-icons/ai";
import { LuBadgeCheck } from "react-icons/lu";
import { LuInbox } from "react-icons/lu";
import { GrUserSettings } from "react-icons/gr";
import { AiOutlineAppstore, AiOutlineSetting } from "react-icons/ai";
import MenuItem from "./MenuItem";
import { Link } from "react-router-dom";

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
      <Link to="/">
        <MenuItem icon={AiOutlineDashboard} label="Dashboard" open={open} />
      </Link>
      <MenuItem
        icon={LuBadgeCheck}
        label="Master"
        open={open}
        subItems={masterSubItems}
      />
      <Link to="/addproduct">
        <MenuItem
          icon={LuInbox}
          label="Product"
          open={open}
          subItems={productSubItems}
        />
      </Link>
      <MenuItem icon={GrUserSettings} label="Customer" open={open} />
    </ul>
  );
}

export default Items;
