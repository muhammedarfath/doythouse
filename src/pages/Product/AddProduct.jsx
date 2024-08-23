import React, { useEffect, useState } from "react";
import { RiShoppingBag3Line, RiStackLine } from "react-icons/ri";
import { LuImagePlus } from "react-icons/lu";
import { IoPricetagsOutline } from "react-icons/io5";
import AddProductDetails from "./AddProductDetails";
import ProductGallery from "./ProductGallery";
import ProductCategory from "./ProductCategory";
import ProductPrices from "./ProductPrices";
import axios from "axios";
import { FiPlus } from "react-icons/fi";

function AddProduct() {
  const [activeSection, setActiveSection] = useState("details");
  const [productData, setProductData] = useState({
    details: {},
    gallery: {},
    category: {},
    price: {},
  });
  const [productName, setProductName] = useState("");
  const [discription, setDiscription] = useState("");
  const [proCode, setproCode] = useState("");
  const [proUnit, setproUnit] = useState("");
  const [reLevel, setReLevel] = useState("");
  const [hsnCode, setHsnCode] = useState("");
  const [cgst, setCgst] = useState("");
  const [sgst, setSgst] = useState("");
  const [salesUnit, setSalesUnit] = useState("");
  const [packSize, setPackSize] = useState("");
  
  
  const handleSectionChange = (section, data) => {
    setProductData((prevData) => ({
      ...prevData,
      [section]: data,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    try {
      const response = await axios.post(
        "https://storeconvo.com/php/add_product.php",
        new URLSearchParams(productData),
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }
      );

      if (response.data) {
        console.log(response.data.message);
        setProductData({
          details: {},
          gallery: {},
          category: {},
          price: {},
        });
      } else {
        alert("Failed to save product");
      }
    } catch (error) {
      console.error("Error saving product:", error);
      alert("Failed to save product");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center">
      <div className="max-w-screen-xl mx-auto">
        <div className="flex flex-col gap-11 mt-8">
          <h2 className="font-bold text-xl text-black">Add New Product</h2>

          <div className="bg-white flex rounded-2xl shadow-sm p-4 px-4 md:p-8 mb-6">
            <div className="relative grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3">
              <div className="flex flex-col items-center">
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
                          activeSection === "details"
                            ? "text-white"
                            : "text-black"
                        }`}
                      />
                    </div>
                    <p
                      className={`font-medium text-lg ${
                        activeSection === "details" ? "text-[#308E87]" : ""
                      }`}
                    >
                      Add Product Details
                    </p>
                  </div>
                  <small className="ml-12">Add product name & details</small>
                </div>

                <div className="border-l-2 border-dotted border-gray-400 h-20"></div>

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
                          activeSection === "gallery"
                            ? "text-white"
                            : "text-black"
                        }`}
                      />
                    </div>
                    <p
                      className={`font-medium text-lg ${
                        activeSection === "gallery" ? "text-[#308E87]" : ""
                      }`}
                    >
                      Product Gallery
                    </p>
                  </div>
                  <small className="ml-12">
                    Thumbnail & add product gallery
                  </small>
                </div>

                <div className="border-l-2 border-dotted border-gray-400 h-20"></div>

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
                          activeSection === "category"
                            ? "text-white"
                            : "text-black"
                        }`}
                      />
                    </div>
                    <p
                      className={`font-medium text-lg ${
                        activeSection === "category" ? "text-[#308E87]" : ""
                      }`}
                    >
                      Product Categories
                    </p>
                  </div>
                  <small className="ml-12">Add product category</small>
                </div>

                <div className="border-l-2 border-dotted border-gray-400 h-20"></div>

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
                          activeSection === "price"
                            ? "text-white"
                            : "text-black"
                        }`}
                      />
                    </div>
                    <p
                      className={`font-medium text-lg ${
                        activeSection === "price" ? "text-[#308E87]" : ""
                      }`}
                    >
                      Selling Prices
                    </p>
                  </div>
                  <small className="ml-12">
                    Add product basic price & discount
                  </small>
                </div>
              </div>

              <div className="flex-grow w-96">
                {activeSection === "details" && (
                  <AddProductDetails
                    data={productData.details}
                    onChange={(data) => handleSectionChange("details", data)}
                  />
                )}
                {activeSection === "gallery" && (
                  <ProductGallery
                    data={productData.gallery}
                    onChange={(data) => handleSectionChange("gallery", data)}
                  />
                )}
                {activeSection === "category" && (
                  <ProductCategory
                    data={productData.category}
                    onChange={(data) => handleSectionChange("category", data)}
                  />
                )}
                {activeSection === "price" && (
                  <ProductPrices
                    data={productData.price}
                    onChange={(data) => handleSectionChange("price", data)}
                  />
                )}
              </div>
              <div className="absolute bottom-2 right-0">
                <button
                  onClick={handleSubmit}
                  className="bg-[#308E87] text-white flex items-center font-bold py-2 px-4 rounded"
                >
                  <FiPlus />
                  Submit Product
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddProduct;
