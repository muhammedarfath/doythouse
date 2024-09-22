import React, { useState, useEffect } from "react";
import axios from "axios";
import SubModal from "@/components/modal/SubModal";
import CategoryModal from "@/components/modal/CategoryModal";

function ProductCategory({
  category,
  setCategory,
  subCategory,
  setSubCategory,
  productUserCode,
  setProductUserCode,
}) {
  const [categories, setCategories] = useState([]);
  const [subcategories, setSubcategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(category);
  const [selectedSubcategory, setSelectedSubcategory] = useState(subCategory);
  const [productCount, setProductCount] = useState({}); 

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get(
          "https://storeconvo.com/php/fetch.php?typ=category"
        );
        setCategories(response.data);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchCategories();
  }, []);

  useEffect(() => {
    const fetchSubCategories = async () => {
      try {
        const response = await axios.get(
          "https://storeconvo.com/php/fetch.php?typ=subcategory"
        );
        setSubcategories(response.data);
      } catch (error) {
        console.error("Error fetching subcategories:", error);
      }
    };

    fetchSubCategories();
  }, []);

  const handleCategoryChange = (e) => {
    const newCategory = e.target.value;
    setSelectedCategory(newCategory);
    setCategory(newCategory);
    setSubCategory("");

    const currentCount = productCount[newCategory] || 0;

    const categoryName = categories.find(cat => cat.cat_id === newCategory)?.cat_name || "";
    const codePrefix = categoryName.substring(0, 2).toUpperCase();
    const newCount = currentCount + 1;

    const finalCount = newCount > 999 ? 1 : newCount;
    const generatedCode = `${codePrefix}${String(finalCount).padStart(3, '0')}`; 

    setProductUserCode(generatedCode); 
    setProductCount(prevCount => ({ ...prevCount, [newCategory]: finalCount })); 
  };

  const handleSubcategoryChange = (e) => {
    const newSubcategory = e.target.value;
    setSelectedSubcategory(newSubcategory);
    setSubCategory(newSubcategory);
  };

  return (
    <div className="lg:col-span-2 border-l-2 border-l-[#ECF3F3] pl-5">
      <div className="grid gap-6 text-sm">
        <div className="flex flex-col gap-4">
          <label htmlFor="Category" className="font-semibold">Category</label>
          <select
            name="Category"
            id="Category"
            className="h-10 border rounded px-4 w-full bg-white focus:outline-none focus:ring-2 focus:ring-black transition duration-200"
            value={selectedCategory}
            onChange={handleCategoryChange}
          >
            <option value="">Choose Category</option>
            {categories.map((cat) => (
              <option key={cat.cat_id} value={cat.cat_id}>
                {cat.cat_name}
              </option>
            ))}
          </select>
          <CategoryModal />
        </div>

        <div className="flex flex-col gap-4">
          <label htmlFor="usercode" className="font-semibold">Product User Code</label>
          <input
            type="text"
            name="usercode"
            id="usercode"
            value={productUserCode || ""}
            onChange={(e) => setProductUserCode(e.target.value)}
            className="h-10 border rounded px-4 w-56 bg-white focus:outline-none focus:ring-2 focus:ring-black transition duration-200"
            placeholder="Code"
            readOnly
            required
          />
        </div>

        <div className="flex flex-col gap-4">
          <label htmlFor="SubCategory" className="font-semibold">SubCategory</label>
          <select
            name="SubCategory"
            id="SubCategory"
            className="h-10 border rounded px-4 w-full bg-white focus:outline-none focus:ring-2 focus:ring-black transition duration-200"
            value={selectedSubcategory}
            onChange={handleSubcategoryChange}
          >
            <option value="">Choose Subcategory</option>
            {subcategories
              .filter((subcat) => subcat.cat_id === selectedCategory)
              .map((subcat) => (
                <option key={subcat.subcat_id} value={subcat.subcat_id}>
                  {subcat.subcat_name}
                </option>
              ))}
          </select>
          <SubModal />
        </div>
      </div>
    </div>
  );
}

export default ProductCategory;
