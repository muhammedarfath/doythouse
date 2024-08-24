import React, { useState } from "react";
import { BiHomeSmile } from "react-icons/bi";
import { RiShoppingBag4Line, RiShoppingCart2Line } from "react-icons/ri";
import { TiUserOutline } from "react-icons/ti";
import { TbTruck, TbReportAnalytics } from "react-icons/tb";
import { GiThermometerScale } from "react-icons/gi";
import {
  AiOutlineDashboard,
  AiOutlineAppstore,
  AiOutlineSetting,
} from "react-icons/ai";
import { LuBadgeCheck } from "react-icons/lu";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import { Link } from "react-router-dom";

function MobileSidebar() {
  const [openSubMenu, setOpenSubMenu] = useState({});

  const toggleSubMenu = (label) => {
    setOpenSubMenu((prev) => ({
      ...prev,
      [label]: !prev[label],
    }));
  };

  const sidebarItems = [
    { icon: <AiOutlineDashboard />, label: "Dashboard", path: "/" },
    {
      icon: <LuBadgeCheck />,
      label: "Badge",
      subItems: [
        { label: "Shop Information" },
        { label: "Expense List" },
        { label: "Employee List" },
      ],
    },
    {
      icon: <RiShoppingBag4Line />,
      label: "Product",
      subItems: [
        { label: "Add Product" },
        { label: "Category" },
        { label: "Subcategory" },
      ],
    },
    { icon: <GiThermometerScale />, label: "Units" },
    {
      icon: <TiUserOutline />,
      label: "Customer",
      subItems: [{ label: "Customer List" }],
    },
    { icon: <TbTruck />, label: "Supplier" },
    {
      icon: <RiShoppingCart2Line />,
      label: "Purchase Entry",
      subItems: [{ label: "New Purchase Entry" }],
    },
    {
      icon: <TbReportAnalytics />,
      label: "Sales Report",
      subItems: [{ label: "Stock Report" }, { label: "Tax Report" }],
    },
  ];
  return (
    <div className="p-4 bg-white text-black overflow-scroll h-screen">
      <ul className="flex flex-col space-y-4">
        {sidebarItems.map((item, index) => (
          <li key={index}>
            <Link  to={item.path}>
              <div
                className="flex items-center space-x-2 p-2 hover:bg-[#D8E9E7] rounded-md cursor-pointer"
                onClick={() => item.subItems && toggleSubMenu(item.label)}
              >
                <span className="text-2xl">{item.icon}</span>
                <span className="text-sm">{item.label}</span>
                {item.subItems && (
                  <span className="ml-auto text-xl">
                    {openSubMenu[item.label] ? (
                      <FaAngleUp className="text-sm" />
                    ) : (
                      <FaAngleDown className="text-sm" />
                    )}
                  </span>
                )}
              </div>
            </Link>

            {item.subItems && openSubMenu[item.label] && (
              <div className="relative ml-6 mt-2">
                <div className="absolute left-1 top-0 bottom-0 w-0.5 bg-[#308E87]"></div>
                <ul className="space-y-2 pl-4">
                  {item.subItems.map((subItem, subIndex) => (
                    <li key={subIndex}>
                      <Link
                        to={subItem.path}
                        className="flex items-center space-x-2 p-2 hover:bg-[#EAF6F5] rounded-md cursor-pointer"
                      >
                        <span className="w-1 h-1 bg-black rounded-full"></span>
                        <span className="text-sm">{subItem.label}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MobileSidebar;
