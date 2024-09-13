import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { IoPricetagsOutline } from "react-icons/io5";
import { LuImagePlus } from "react-icons/lu";
import { RiShoppingBag3Line, RiStackLine } from "react-icons/ri";

function MobileProductIcons({ setActiveSection, activeSection }) {
  return (
    <div className="lg:hidden md:hidden w-full flex items-center justify-center gap-3 p-3 rounded-full shadow-lg bg-white h-20">
      <div
        className="flex flex-col items-center pr-2 cursor-pointer rounded-lg"
        onClick={() => setActiveSection("details")}
      >
        <div className="flex items-center gap-2">
          <div
            className={`border-2 rounded-full p-2 shadow-xl border-white ${
              activeSection === "details" ? "bg-[#308E87]" : ""
            } animate-bounce`}
          >
            <RiShoppingBag3Line
              className={`text-2xl ${
                activeSection === "details" ? "text-white" : "text-black"
              }`}
            />
          </div>
        </div>
      </div>
      <FaArrowRight />
      <div
        className="flex flex-col pr-2 cursor-pointer rounded-lg"
        onClick={() => setActiveSection("gallery")}
      >
        <div className="flex gap-2 items-center">
          <div
            className={`border-2 rounded-full p-2 shadow-xl border-white ${
              activeSection === "gallery" ? "bg-[#308E87]" : ""
            } animate-bounce`}
          >
            <LuImagePlus
              className={`text-2xl ${
                activeSection === "gallery" ? "text-white" : "text-black"
              }`}
            />
          </div>
        </div>
      </div>
      <FaArrowRight />
      <div
        className="flex flex-col pr-2 cursor-pointer rounded-lg"
        onClick={() => setActiveSection("category")}
      >
        <div className="flex gap-2 items-center">
          <div
            className={`border-2 rounded-full p-2 shadow-xl border-white ${
              activeSection === "category" ? "bg-[#308E87]" : ""
            } animate-bounce`}
          >
            <RiStackLine
              className={`text-2xl ${
                activeSection === "category" ? "text-white" : "text-black"
              }`}
            />
          </div>
        </div>
      </div>
      <FaArrowRight />
      <div
        className="flex flex-col pr-2 cursor-pointer rounded-lg"
        onClick={() => setActiveSection("price")}
      >
        <div className="flex gap-2 items-center">
          <div
            className={`border-2 rounded-full p-2 shadow-xl border-white ${
              activeSection === "price" ? "bg-[#308E87]" : ""
            } animate-bounce`}
          >
            <IoPricetagsOutline
              className={`text-2xl ${
                activeSection === "price" ? "text-white" : "text-black"
              }`}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MobileProductIcons;
