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

function MobileSidebar({ onClose }) {
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
      label: "Master",
      subItems: [
        { label: "Shop Information", path: "/shopinformation" },
        { label: "Expense List", path: "/expenselist" },
        { label: "Employee List", path: "/employelist" },
      ],
    },
    {
      icon: <RiShoppingBag4Line />,
      label: "Product",
      path: "/product",
      subItems: [
        { label: "Add Product", path: "/addproduct" },
        { label: "Category", path: "/category" },
        { label: "Subcategory", path: "/subcategory" },
      ],
    },
    { icon: <GiThermometerScale />, label: "Units", path: "/units" },
    {
      icon: <TiUserOutline />,
      label: "Customer",
      subItems: [{ label: "Customer List", path: "/CustomerList" }],
    },
    { icon: <TbTruck />, label: "Supplier", path: "/supplier" },
    {
      icon: <RiShoppingCart2Line />,
      label: "Purchase Entry",
      subItems: [{ label: "New Purchase Entry", path: "/purchaseentry" }],
    },
    {
      icon: <TbReportAnalytics />,
      label: "Sales Report",
      path: "/salesreport",
      subItems: [
        { label: "Stock Report", path: "/stockreport" },
        { label: "Tax Report",path:"/taxreport" },
      ],
    },
  ];
  const handleItemClick = () => {
    onClose(); 
  };


  return (
    <div className="p-4 bg-white text-black overflow-auto h-screen">
      <ul className="flex flex-col space-y-4">
        {sidebarItems.map((item, index) => (
          <li key={index}>
            <Link to={item.path} onClick={handleItemClick}>
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
                        onClick={handleItemClick}
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
