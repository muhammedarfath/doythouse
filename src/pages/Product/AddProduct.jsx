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
import { FaArrowRight } from "react-icons/fa6";
import toast from "react-hot-toast";

function AddProduct() {
  const [activeSection, setActiveSection] = useState("details");
  const [loading, setLoading] = useState(false);
  const [productname, setProductName] = useState("");
  const [ProductDescription, setProductDescription] = useState("");
  const [productUserCode, setProductUserCode] = useState("");
  const [unitId, setUnitId] = useState("");
  const [reorderLevel, setReorderLevel] = useState("");
  const [hsn, setHsn] = useState("");
  const [cgst, setCgst] = useState("");
  const [sgst, setSgst] = useState("");
  const [salesUnit, setSalesUnit] = useState("");
  const [packSize, setPackSize] = useState("");
  const [image, setImage] = useState("");
  const [category, setCategory] = useState("");
  const [subCategory, setSubCategory] = useState("");
  const [mrp, setMrp] = useState("");
  const [purchasePrice, setPurchasePrice] = useState("");
  const [retailPrice, setRetailPrice] = useState("");
  const [wholesalePrice, setWholesalePrice] = useState("");
  const [specialPrice, setSpecialPrice] = useState("");
  const [dealerPrice, setDealerPrice] = useState("");
  const [openQty, setOpenQty] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Validation
    if (!productname) return toast.error("Product name is required");
    if (!ProductDescription) return toast.error("Product description is required");
    if (!productUserCode) return toast.error("Product user code is required");
    if (!unitId) return toast.error("Unit ID is required");
    if (!reorderLevel) return toast.error("Reorder level is required");
    if (!hsn) return toast.error("HSN is required");
    if (!cgst || isNaN(cgst)) return toast.error("CGST should be a valid number");
    if (!sgst || isNaN(sgst)) return toast.error("SGST should be a valid number");
    if (!image) return toast.error("Image URL is required");
    if (!salesUnit) return toast.error("Sales unit is required");
    if (!packSize) return toast.error("Pack size is required");
    if (!category) return toast.error("Category is required");
    if (!subCategory) return toast.error("Sub-category is required");
    if (!mrp || isNaN(mrp)) return toast.error("MRP should be a valid number");
    if (!purchasePrice || isNaN(purchasePrice)) return toast.error("Purchase price should be a valid number");
    if (!retailPrice || isNaN(retailPrice)) return toast.error("Retail price should be a valid number");
    if (!wholesalePrice || isNaN(wholesalePrice)) return toast.error("Wholesale price should be a valid number");
    if (!specialPrice || isNaN(specialPrice)) return toast.error("Special price should be a valid number");
    if (!dealerPrice || isNaN(dealerPrice)) return toast.error("Dealer price should be a valid number");
    if (!openQty || isNaN(openQty)) return toast.error("Open quantity should be a valid number");
    setLoading(true);

    try {
      const response = await axios.post(
        "https://storeconvo.com/php/add_product.php",
        new URLSearchParams({
          productName: productname,
          productDescription: ProductDescription,
          productUserCode: productUserCode,
          unitId: unitId,
          reorderLevel: reorderLevel,
          hsn: hsn,
          cgst: cgst,
          sgst: sgst,
          image_url: image,
          salesUnit: salesUnit,
          packSize: packSize,
          categoryId: category,
          subCategoryId: subCategory,
          mrp: mrp,
          purchasePrice: purchasePrice,
          retailPrice: retailPrice,
          wholesalePrice: wholesalePrice,
          specialPrice: specialPrice,
          dealerPrice: dealerPrice,
          openQty: openQty,
        }),
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }
      );

      if (response.data) {
        toast.success("Product saved successfully!");
        console.log(response.data.message);
      } else {
        toast.error("Failed to save product");
      }
    } catch (error) {
      console.error("Error saving product:", error);
      toast.error("Failed to save product");
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
            <div className="lg:relative md:relative grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3">
              <div className="lg:flex md:flex lg:flex-col md:flex-col items-center hidden">
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

              <div className="flex-grow lg:w-96">
                {activeSection === "details" && (
                  <AddProductDetails
                    productname={productname}
                    setProductName={setProductName}
                    ProductDescription={ProductDescription}
                    setProductDescription={setProductDescription}
                    productUserCode={productUserCode}
                    setProductUserCode={setProductUserCode}
                    unitId={unitId}
                    setUnitId={setUnitId}
                    reorderLevel={reorderLevel}
                    setReorderLevel={setReorderLevel}
                    hsn={hsn}
                    setHsn={setHsn}
                    cgst={cgst}
                    setCgst={setCgst}
                    sgst={sgst}
                    setSgst={setSgst}
                    salesUnit={salesUnit}
                    setSalesUnit={setSalesUnit}
                    packSize={packSize}
                    setPackSize={setPackSize}
                  />
                )}
                {activeSection === "gallery" && (
                  <ProductGallery image={image} setImage={setImage} />
                )}
                {activeSection === "category" && (
                  <ProductCategory
                    category={category}
                    setCategory={setCategory}
                    subCategory={subCategory}
                    setSubCategory={setSubCategory}
                  />
                )}
                {activeSection === "price" && (
                  <ProductPrices
                    mrp={mrp}
                    purchasePrice={purchasePrice}
                    retailPrice={retailPrice}
                    wholesalePrice={wholesalePrice}
                    specialPrice={specialPrice}
                    dealerPrice={dealerPrice}
                    openQty={openQty}
                    setMrp={setMrp}
                    setPurchasePrice={setPurchasePrice}
                    setRetailPrice={setRetailPrice}
                    setWholesalePrice={setWholesalePrice}
                    setSpecialPrice={setSpecialPrice}
                    setDealerPrice={setDealerPrice}
                    setOpenQty={setOpenQty}
                  />
                )}
              </div>
              <div className="absolute bottom-2 right-0 hidden lg:block md:block">
                <button
                  onClick={handleSubmit}
                  className={`bg-[#308E87] text-white flex items-center font-bold py-2 px-4 rounded ${
                    loading ? "cursor-not-allowed" : ""
                  }`}
                >
                  <FiPlus />
                  {loading ? "Saving..." : "Submit Product"}
                </button>
              </div>
            </div>
          </div>

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

          <div className="lg:hidden md:hidden flex justify-end">
            <button
              onClick={handleSubmit}
              className={`bg-[#308E87] text-white flex items-center font-bold py-2 px-4 rounded ${
                loading ? "cursor-not-allowed" : ""
              }`}
            >
              <FiPlus />
              {loading ? "Saving..." : "Submit Product"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddProduct;
