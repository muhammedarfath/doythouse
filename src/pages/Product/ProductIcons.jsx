import React from "react";
import { IoPricetagsOutline } from "react-icons/io5";
import { LuImagePlus } from "react-icons/lu";
import { RiShoppingBag3Line, RiStackLine } from "react-icons/ri";

function ProductIcons({setActiveSection,activeSection}) {
  return (
    <div className="lg:flex  md:flex lg:flex-col md:flex-col items-center hidden lg:w-1/3 md:w-1/6">
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
          <div className="md:hidden lg:block flex flex-col items-center justify-center">
            <p
              className={`font-medium text-lg ${
                activeSection === "details" ? "text-[#308E87]" : ""
              }`}
            >
              Add Product Details
            </p>
            <small>Add product name & details</small>
          </div>

          <div></div>
        </div>
      </div>

      <div className="border-l-2 md:mr-2 lg:mr-[186px] border-dotted border-gray-400 h-20"></div>

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
          <div className="md:hidden lg:block flex flex-col items-center justify-center">
            <p
              className={`font-medium text-lg ${
                activeSection === "gallery" ? "text-[#308E87]" : ""
              }`}
            >
              Product Gallery
            </p>
            <small>Thumbnail & add product gallery</small>
          </div>
        </div>
      </div>

      <div className="border-l-2 md:mr-2 lg:mr-[186px] border-dotted border-gray-400 h-20"></div>

      <div
        className="flex flex-col items-center pr-2 cursor-pointer rounded-lg"
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
          <div className="md:hidden lg:block flex flex-col items-center justify-center">
            <p
              className={`font-medium text-lg ${
                activeSection === "category" ? "text-[#308E87]" : ""
              }`}
            >
              Product Categories
            </p>
            <small>Add product category</small>
          </div>
        </div>
      </div>

      <div className="border-l-2 md:mr-2 lg:mr-[186px] border-dotted border-gray-400 h-20"></div>

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
          <div className="md:hidden lg:block flex flex-col items-center justify-center">
            <p
              className={`font-medium text-lg ${
                activeSection === "price" ? "text-[#308E87]" : ""
              }`}
            >
              Selling Prices
            </p>
            <small>Add product basic price & discount</small>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductIcons;
