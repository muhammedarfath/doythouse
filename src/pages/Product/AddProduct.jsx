import React, { useState } from "react";
import { RiShoppingBag3Line } from "react-icons/ri";
import { LuImagePlus } from "react-icons/lu";
import AddProductDetails from "./AddProductDetails";
import ProductGallery from "./ProductGallery";

function AddProduct() {
  const [activeSection, setActiveSection] = useState("details");
  const handleDetailsClick = () => {
    setActiveSection("details");
  };

  const handleGalleryClick = () => {
    setActiveSection("gallery");
  };
  return (
    <div className="flex items-center justify-center">
      <div className="max-w-screen-xl mx-auto">
        <div className="flex flex-col gap-11 mt-8">
          <h2 className="font-semibold text-xl text-black">Add New Product</h2>

          <div className="bg-white flex rounded-2xl shadow-sm p-4 px-4 md:p-8 mb-6">
            <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3">
              <div className="flex flex-col items-center ">
                <div
                  className="flex flex-col items-center pr-2 cursor-pointer rounded-lg"
                  onClick={handleDetailsClick}
                >
                  <div className="flex items-center gap-2">
                  <div className={`border-2 rounded-full p-2 shadow-xl border-white ${activeSection == "details"  ? "bg-[#D8E9E7]" :" "} animate-bounce`}>
                      <RiShoppingBag3Line className="text-2xl " />
                    </div>
                    <p className={`font-medium text-lg ${activeSection == "details"  ? "text-[#308E87]" :" "}`}>Add Product Details</p>
                  </div>
                  <small className="ml-12">Add product name & details</small>
                </div>

                <div className="border-l border-dotted border-gray-400 h-32"></div>

                <div
                  className="flex flex-col pr-2 cursor-pointer rounded-lg"
                    
                  onClick={handleGalleryClick}
                >
                  <div className="flex gap-2 items-center">
                    <div className={`border-2 rounded-full p-2 shadow-xl border-white ${activeSection == "gallery" ? "bg-[#D8E9E7]" :" "} animate-bounce`}>
                      <LuImagePlus className="text-2xl  " />
                    </div>
                    <p className={`font-medium text-lg ${activeSection == "gallery" ? "text-[#308E87]" :" "}`}>Product Gallery </p>
                  </div>
                  <small className="ml-12">
                    Thumbnail & add product gallery
                  </small>
                </div>
              </div>

              <div className="flex-grow w-96">
                {activeSection === "details" && <AddProductDetails />}
                {activeSection === "gallery" && <ProductGallery />}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddProduct;
