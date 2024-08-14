import React, { useState } from "react";
import { FaAngleDown } from "react-icons/fa6";
import { Link } from "react-router-dom";

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
        className="text-black text-sm flex items-center justify-between cursor-pointer py-2 gap-2 px-4 rounded-xl hover:bg-[#D8E9E7] mt-1"
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
      <hr className={open ? "w-56" : "w-20"} />
      {isExpanded && subItems && (
        <ul className="pl-8">
          {subItems.map((subItem, index) => (
            <li key={index}>
              <Link
                to={subItem.path}
                className="text-black text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-[#F4F6F8] rounded-sm mt-2"
              >
                <subItem.icon className="text-2xl ml-2" />
                <span className="origin-left duration-200">{subItem.label}</span>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}

export default MenuItem;
