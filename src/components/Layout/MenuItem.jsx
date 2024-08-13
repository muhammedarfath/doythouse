import React, { useState } from "react";
import { FaAngleDown } from "react-icons/fa6";

function MenuItem({ icon: Icon, label, open, subItems }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    if (subItems) {
      setIsExpanded(!isExpanded);
    }
  };

  return (
    <>
      <li
        className="text-black text-sm flex items-center justify-between cursor-pointer p-2 hover:bg-[#F4F6F8] rounded-sm mt-5"
        onClick={toggleExpand}
      >
        <div className="flex items-center gap-x-4">
          <Icon className="text-2xl ml-2" />
          <span className={`${!open && "hidden"} origin-left duration-200`}>
            {label}
          </span>
        </div>
        {subItems && (
          <FaAngleDown
            className={`text-md transition-transform duration-200 ${isExpanded ? "rotate-180" : "rotate-0"}`}
          />
        )}
      </li>
      {isExpanded && subItems && (
        <ul className={`${!open && "hidden"} pl-8`}>
          {subItems.map((subItem, index) => (
            <li
              key={index}
              className="text-black text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-[#F4F6F8] rounded-sm mt-2"
            >
              <subItem.icon className="text-2xl ml-2" />
              <span className="origin-left duration-200">{subItem.label}</span>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}

export default MenuItem;
