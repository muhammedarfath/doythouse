import React, { useEffect, useState } from "react";
import AddProductDetails from "./AddProductDetails";
import ProductGallery from "./ProductGallery";
import ProductCategory from "./ProductCategory";
import ProductPrices from "./ProductPrices";
import axios from "axios";
import { FiPlus } from "react-icons/fi";
import { FaArrowRight } from "react-icons/fa6";
import toast from "react-hot-toast";
import ProductIcons from "./ProductIcons";
import MobileProductIcons from "./MobileProductIcons";

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
  const [image, setImage] = useState([]);
  const [previewUrls, setPreviewUrls] = useState([]);
  const [category, setCategory] = useState("");
  const [subCategory, setSubCategory] = useState("");
  const [mrp, setMrp] = useState("");
  const [purchasePrice, setPurchasePrice] = useState("");
  const [retailPrice, setRetailPrice] = useState("");
  const [wholesalePrice, setWholesalePrice] = useState("");
  const [specialPrice, setSpecialPrice] = useState("");
  const [dealerPrice, setDealerPrice] = useState("");
  const [openQty, setOpenQty] = useState("");
  const [units, setUnits] = useState("");

  useEffect(() => {
    fetchUnits();
  }, []);

  const fetchUnits = async () => {
    try {
      const response = await axios.get(
        "https://storeconvo.com/php/fetch.php?typ=unit"
      );
      setUnits(response.data);
    } catch (error) {
      console.error("Error fetching units:", error);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!productname) return toast.error("Product name is required");
    if (!ProductDescription)
      return toast.error("Product description is required");
    if (!productUserCode) return toast.error("Product user code is required");
    if (!units) return toast.error("Unit ID is required");
    if (!reorderLevel) return toast.error("Reorder level is required");
    if (!hsn) return toast.error("HSN is required");
    if (!cgst || isNaN(cgst))
      return toast.error("CGST should be a valid number");
    if (!sgst || isNaN(sgst))
      return toast.error("SGST should be a valid number");
    if (!image) return toast.error("Image URL is required");
    if (!salesUnit) return toast.error("Sales unit is required");
    if (!packSize) return toast.error("Pack size is required");
    if (!category) return toast.error("Category is required");
    if (!subCategory) return toast.error("Sub-category is required");
    if (!mrp || isNaN(mrp)) return toast.error("MRP should be a valid number");
    if (!purchasePrice || isNaN(purchasePrice))
      return toast.error("Purchase price should be a valid number");
    if (!retailPrice || isNaN(retailPrice))
      return toast.error("Retail price should be a valid number");
    if (!wholesalePrice || isNaN(wholesalePrice))
      return toast.error("Wholesale price should be a valid number");
    if (!specialPrice || isNaN(specialPrice))
      return toast.error("Special price should be a valid number");
    if (!dealerPrice || isNaN(dealerPrice))
      return toast.error("Dealer price should be a valid number");
    if (!openQty || isNaN(openQty))
      return toast.error("Open quantity should be a valid number");
    setLoading(true);

    const formData = new FormData();
    formData.append("productName", productname);
    formData.append("productDescription", ProductDescription);
    formData.append("productUserCode", productUserCode);
    formData.append("unitId", unitId);
    formData.append("reorderLevel", reorderLevel);
    formData.append("hsn", hsn);
    formData.append("cgst", cgst);
    formData.append("sgst", sgst);

    if (Array.isArray(image)) {
      image.forEach((file, index) => {
        formData.append(`image_${index}`, file);
      });
    } else {
      formData.append("image", image);
    }

    formData.append("salesUnit", salesUnit);
    formData.append("packSize", packSize);
    formData.append("categoryId", category);
    formData.append("subCategoryId", subCategory);
    formData.append("mrp", mrp);
    formData.append("purchasePrice", purchasePrice);
    formData.append("retailPrice", retailPrice);
    formData.append("wholesalePrice", wholesalePrice);
    formData.append("specialPrice", specialPrice);
    formData.append("dealerPrice", dealerPrice);
    formData.append("openQty", openQty);

    try {
      const response = await axios.post(
        "https://storeconvo.com/php/add_product.php",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      if (response.status === 200) {
        toast.success("Product saved successfully!");
        setProductName("");
        setProductDescription("");
        setProductUserCode("");
        setUnitId("");
        setReorderLevel("");
        setHsn("");
        setCgst("");
        setSgst("");
        setImage([]);
        setSalesUnit("");
        setPackSize("");
        setCategory("");
        setSubCategory("");
        setMrp("");
        setPurchasePrice("");
        setRetailPrice("");
        setWholesalePrice("");
        setSpecialPrice("");
        setDealerPrice("");
        setOpenQty("");
      } else {
        toast.error("Failed to save product");
      }
    } catch (error) {
      toast.error("Failed to save product");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center">
      <div className="lg:max-w-screen-xl w-full mx-auto">
        <div className="flex flex-col gap-11 mt-8">
          <h2 className="font-bold text-xl text-black">Add New Product</h2>
          <div className="bg-white flex rounded-2xl shadow-sm p-4 px-4 md:p-8 mb-6 w-full">
            <div className="lg:relative md:relative flex gap-4 gap-y-2 text-sm w-full">
              <ProductIcons
                setActiveSection={setActiveSection}
                activeSection={activeSection}
              />
              <div className="flex-grow lg:w-2/3 md:w-5/6">
                {activeSection === "details" && (
                  <AddProductDetails
                    productname={productname}
                    setProductName={setProductName}
                    ProductDescription={ProductDescription}
                    setProductDescription={setProductDescription}
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
                    units={units}
                  />
                )}
                {activeSection === "gallery" && (
                  <ProductGallery
                    image={image}
                    setImage={setImage}
                    previewUrls={previewUrls}
                    setPreviewUrls={setPreviewUrls}
                  />
                )}
                {activeSection === "category" && (
                  <ProductCategory
                    category={category}
                    setCategory={setCategory}
                    subCategory={subCategory}
                    setSubCategory={setSubCategory}
                    productUserCode={productUserCode}
                    setProductUserCode={setProductUserCode}
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

          <MobileProductIcons
            setActiveSection={setActiveSection}
            activeSection={activeSection}
          />
          <div className="lg:hidden md:hidden flex justify-center">
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
