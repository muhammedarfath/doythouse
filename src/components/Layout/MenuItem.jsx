import React, { useState } from "react";
import { FaAngleDown } from "react-icons/fa";
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
        className={`text-black text-sm flex items-center justify-between cursor-pointer py-2 gap-2 px-4 rounded-xl hover:bg-[#D8E9E7] mt-1 ${open ? "w-full" : "w-20"} transition-all duration-300`}
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
      {subItems && isExpanded && (
        <ul className={`relative pl-8 transition-all duration-300 ${open ? "block" : "hidden"}`}>
          <div className="absolute left-8 top-0 bottom-0 min-w-0.5 bg-[#308E87]"></div>
          {subItems.map((subItem, index) => (
            <li key={index}>
              <Link
                to={subItem.path}
                className="text-black text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-[#D8E9E7] rounded-xl mt-2"
              >
                <span className="w-1 h-1 bg-black rounded-full"></span>
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
