import React, { useState } from "react";
import { RiShoppingBag3Line } from "react-icons/ri";
import { LuImagePlus } from "react-icons/lu";
import AddProductDetails from "./AddProductDetails";
import ProductGallery from "./ProductGallery";
import { RiStackLine } from "react-icons/ri";
import ProductCategory from "./ProductCategory";
import ProductPrices from "./ProductPrices";
import { IoPricetagsOutline } from "react-icons/io5";

function AddProduct() {
  const [activeSection, setActiveSection] = useState("details");
  const handleDetailsClick = () => {
    setActiveSection("details");
  };

  const handleGalleryClick = () => {
    setActiveSection("gallery");
  };

  const handleCategoryClick = () => {
    setActiveSection("category");
  };

  const handlePriceClick = () => {
    setActiveSection("price");
  };

  return (
    <div className="flex items-center justify-center">
      <div className="max-w-screen-xl mx-auto">
        <div className="flex flex-col gap-11 mt-8">
          <h2 className="font-bold text-xl text-black ">Add New Product</h2>

          <div className="bg-white flex rounded-2xl shadow-sm p-4 px-4 md:p-8 mb-6">
            <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3">
              <div className="flex flex-col items-center ">
                <div
                  className="flex flex-col items-center pr-2 cursor-pointer rounded-lg"
                  onClick={handleDetailsClick}
                >
                  <div className="flex items-center gap-2">
                    <div
                      className={`border-2 rounded-full p-2 shadow-xl border-white ${
                        activeSection == "details" ? "bg-[#308E87]" : " "
                      } animate-bounce`}
                    >
                      <RiShoppingBag3Line className={`text-2xl ${activeSection == "details" ? "text-white" : "text-black"}`}  />
                    </div>
                    <p
                      className={`font-medium text-lg ${
                        activeSection == "details" ? "text-[#308E87]" : " "
                      }`}
                    >
                      Add Product Details
                    </p>
                  </div>
                  <small className="ml-12">Add product name & details</small>
                </div>

                <div className="border-l border-dotted border-gray-400 h-20"></div>

                <div
                  className="flex flex-col pr-2 cursor-pointer rounded-lg"
                  onClick={handleGalleryClick}
                >
                  <div className="flex gap-2 items-center">
                    <div
                      className={`border-2 rounded-full p-2 shadow-xl border-white ${
                        activeSection == "gallery" ? "bg-[#308E87]" : " "
                      } animate-bounce`}
                    >
                      <LuImagePlus className={`text-2xl ${activeSection == "gallery" ? "text-white" : "text-black"}`} />
                    </div>
                    <p
                      className={`font-medium text-lg ${
                        activeSection == "gallery" ? "text-[#308E87]" : " "
                      }`}
                    >
                      Product Gallery{" "}
                    </p>
                  </div>
                  <small className="ml-12">
                    Thumbnail & add product gallery
                  </small>
                </div>

                <div className="border-l border-dotted border-gray-400 h-20"></div>

                <div
                  className="flex flex-col pr-2 cursor-pointer rounded-lg"
                  onClick={handleCategoryClick}
                >
                  <div className="flex gap-2 items-center">
                    <div
                      className={`border-2 rounded-full p-2 shadow-xl border-white ${
                        activeSection == "category" ? "bg-[#308E87]" : " "
                      } animate-bounce`}
                    >
                      <RiStackLine className={`text-2xl ${activeSection == "category" ? "text-white" : "text-black"}`} />
                    </div>
                    <p
                      className={`font-medium text-lg ${
                        activeSection == "category" ? "text-[#308E87]" : " "
                      }`}
                    >
                      Product Categories{" "}
                    </p>
                  </div>
                  <small className="ml-12">Add product category</small>
                </div>

                <div className="border-l border-dotted border-gray-400 h-20"></div>

                <div
                  className="flex flex-col pr-2 cursor-pointer rounded-lg"
                  onClick={handlePriceClick}
                >
                  <div className="flex gap-2 items-center">
                    <div
                      className={`border-2 rounded-full p-2 shadow-xl border-white ${
                        activeSection == "price" ? "bg-[#308E87]" : " "
                      } animate-bounce`}
                    >
                      <IoPricetagsOutline className={`text-2xl ${activeSection == "price" ? "text-white" : "text-black"}`} />
                    </div>
                    <p
                      className={`font-medium text-lg ${
                        activeSection == "price" ? "text-[#308E87]" : " "
                      }`}
                    >
                      Selling Prices{" "}
                    </p>
                  </div>
                  <small className="ml-12">
                    Add product basic price & discount
                  </small>
                </div>
              </div>

              <div className="flex-grow w-96">
                {activeSection === "details" && <AddProductDetails />}
                {activeSection === "gallery" && <ProductGallery />}
                {activeSection === "category" && <ProductCategory />}
                {activeSection === "price" && <ProductPrices />}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddProduct;
