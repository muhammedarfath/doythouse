import React from "react";
import {
  AiOutlineDashboard,
  AiOutlineAppstore,
  AiOutlineSetting,
} from "react-icons/ai";
import { LuBadgeCheck } from "react-icons/lu";
import { LuInbox } from "react-icons/lu";
import { GrUserSettings } from "react-icons/gr";
import { BiCategory } from "react-icons/bi";
import { TbCategory2 } from "react-icons/tb";
import MenuItem from "./MenuItem";
import { Link } from "react-router-dom";
import { BiHomeSmile } from "react-icons/bi";
import { RiShoppingBag4Line } from "react-icons/ri";
import { TiUserOutline } from "react-icons/ti";

function Items({ open }) {
  const masterSubItems = [
    {
      label: "Shop Information",
      path: "/shopinformation",
    },
    {
      label: "Expense List",
      path: "/expenselist",
    },
  ];

  const customerSubItems = [
    {
      label: "Customer List",
      path: "/customerlist",
    },
  ];

  const productSubItems = [
    { label: "Add Product", path: "/addproduct" },
    { label: "Category", path: "/category" },
    { label: "SubCategory", path: "/subcategory" },
  ];

  return (
    <ul
      className={`pt-6 ${open ? "pl-4" : "pl-1"} transition-all duration-300`}
    >
      <Link to="/">
        <MenuItem icon={BiHomeSmile} label="Dashboard" open={open} />
      </Link>
      <MenuItem
        icon={LuBadgeCheck}
        label="Master"
        open={open}
        subItems={masterSubItems}
      />
      <Link to="/product">
        <MenuItem
          icon={RiShoppingBag4Line}
          label="Product"
          open={open}
          subItems={productSubItems}
        />
      </Link>
      <MenuItem
        icon={TiUserOutline}
        label="Customer"
        open={open}
        subItems={customerSubItems}
      />
    </ul>
  );
}

export default Items;
