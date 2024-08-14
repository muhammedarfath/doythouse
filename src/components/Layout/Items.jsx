import React from "react";
import { AiOutlineDashboard } from "react-icons/ai";
import { LuBadgeCheck } from "react-icons/lu";
import { LuInbox } from "react-icons/lu";
import { GrUserSettings } from "react-icons/gr";
import { AiOutlineAppstore, AiOutlineSetting } from "react-icons/ai";
import MenuItem from "./MenuItem";
import { Link } from "react-router-dom";
import { BiCategory } from "react-icons/bi";
import { TbCategory2 } from "react-icons/tb";

function Items({ open }) {
  const masterSubItems = [{ icon: AiOutlineSetting, label: "Settings" }];

  const productSubItems = [
    { icon: AiOutlineAppstore, label: "Add Product", path: "/addproduct" },
    { icon: BiCategory, label: "Category", path: "/category" },
    { icon: TbCategory2, label: "SubCategory", path: "/subcategory" },
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
      <MenuItem
        icon={LuInbox}
        label="Product"
        open={open}
        subItems={productSubItems}
      />
      <MenuItem icon={GrUserSettings} label="Customer" open={open} />
    </ul>
  );
}

export default Items;
