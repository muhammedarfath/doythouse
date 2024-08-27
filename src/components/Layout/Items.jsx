import React from "react";
import {
  AiOutlineDashboard,
  AiOutlineAppstore,
  AiOutlineSetting,
} from "react-icons/ai";
import { LuBadgeCheck } from "react-icons/lu";
import MenuItem from "./MenuItem";
import { Link } from "react-router-dom";
import { BiHomeSmile } from "react-icons/bi";
import { RiShoppingBag4Line } from "react-icons/ri";
import { TiUserOutline } from "react-icons/ti";
import { TbTruck } from "react-icons/tb";
import { TbReportAnalytics } from "react-icons/tb";
import { GiThermometerScale } from "react-icons/gi";
import { RiShoppingCart2Line } from "react-icons/ri";

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
    {
      label: "Employee List",
      path: "/employelist",
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

  const ReportSubItems = [
    {
      label: "Stock Report",
      path: "/stockreport",
    },
    {
      label: "Tax Report",
      path: "/taxreport",
    },
  ];

  const PurchaseItems = [
    {
      label: "New Purchase Entry",
      path: "/purchaseentry",
    },
  ];

  return (
    <ul
      className={`pt-6 ${open ? "pl-4" : "pl-1"} transition-all duration-300 `}
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
      <Link to="/units">
        <MenuItem icon={GiThermometerScale} label="Units" open={open} />
      </Link>
      <MenuItem
        icon={TiUserOutline}
        label="Customer"
        open={open}
        subItems={customerSubItems}
      />
      <Link to="/supplier">
        <MenuItem icon={TbTruck} label="Supplier" open={open} />
      </Link>
      <Link>
        <MenuItem
          icon={RiShoppingCart2Line}
          label="Purchase Entry"
          open={open}
          subItems={PurchaseItems}
        />
      </Link>
      <Link to="/salesreport">
        <MenuItem
          icon={TbReportAnalytics}
          label="Sales Report"
          open={open}
          subItems={ReportSubItems}
        />
      </Link>
    </ul>
  );
}

export default Items;
