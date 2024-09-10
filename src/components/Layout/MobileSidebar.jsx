import React, { useState } from "react";
import { AiOutlineDashboard } from "react-icons/ai";
import { LuBadgeCheck } from "react-icons/lu";
import { RiShoppingBag4Line, RiShoppingCart2Line } from "react-icons/ri";
import { TiUserOutline } from "react-icons/ti";
import { TbTruck, TbReportAnalytics } from "react-icons/tb";
import { GiThermometerScale } from "react-icons/gi";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import { NavLink, useNavigate } from "react-router-dom";
import { TbFileInvoice } from "react-icons/tb";

function MobileSidebar({ onClose }) {
  const [openSubMenu, setOpenSubMenu] = useState({});
  const navigate = useNavigate(); 

  const toggleSubMenu = (label) => {
    setOpenSubMenu((prev) => ({
      ...prev,
      [label]: !prev[label],
    }));
  };

  const handleItemClick = (path, label, hasSubItems) => {
    if (hasSubItems) {
      toggleSubMenu(label);
    } else {
      navigate(path);
      onClose(); 
    }
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
      subItems: [
        { label: "Product List", path: "/product" },
        { label: "Add Product", path: "/addproduct" },
        { label: "Category", path: "/category" },
        { label: "Subcategory", path: "/subcategory" },
      ],
    },
    { icon: <GiThermometerScale />, label: "Units", subItems: [{ label: "Unit List", path: "/units" }] },
    {
      icon: <TiUserOutline />,
      label: "Orders",
      subItems: [{ label: "Work Orders", path: "/workorder" }],
    },
    { icon: <TbTruck />, label: "Supplier", subItems: [{ label: "Supplier List", path: "/supplier" }] },
    {
      icon: <TbFileInvoice />,
      label: "Invoice",
      subItems: [{ label: "Invoice List", path: "/invoice" }],
    },
    {
      icon: <TbReportAnalytics />,
      label: "Sales Report",
      subItems: [
        { label: "Sales Report List", path: "/salesreport" },
        { label: "Stock Report", path: "/stockreport" },
        { label: "Tax Report", path: "/taxreport" },
      ],
    },
  ];

  return (
    <div className="p-4 bg-white text-black h-screen">
      <div className="overflow-auto h-5/6">
        <ul className="flex flex-col space-y-4">
          {sidebarItems.map((item, index) => (
            <li key={index}>
              <div
                className="flex items-center space-x-2 p-2 hover:bg-[#D8E9E7] rounded-md cursor-pointer"
                onClick={() => handleItemClick(item.path, item.label, item.subItems)}
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

              {item.subItems && openSubMenu[item.label] && (
                <div className="relative ml-6 mt-2">
                  <div className="absolute left-1 top-0 bottom-0 w-0.5 bg-[#308E87]"></div>
                  <ul className="space-y-2 pl-4">
                    {item.subItems.map((subItem, subIndex) => (
                      <li key={subIndex}>
                        <NavLink
                          to={subItem.path}
                          className={({ isActive }) =>
                            `flex items-center space-x-2 p-2 rounded-md cursor-pointer ${
                              isActive ? "bg-[#EAF6F5]" : "hover:bg-[#EAF6F5]"
                            }`
                          }
                          onClick={onClose}
                        >
                          <span className="w-1 h-1 bg-black rounded-full"></span>
                          <span className="text-sm">{subItem.label}</span>
                        </NavLink>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default MobileSidebar;
