import React, { useState, useEffect } from "react";
import axios from "axios";
import { FaArrowRightLong } from "react-icons/fa6";
import SubModal from "@/components/modal/SubModal";
import CategoryModal from "@/components/modal/CategoryModal";

function ProductCategory({ data, onChange }) {
  const [categories, setCategories] = useState([]);
  const [subcategories, setSubcategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(data.category || "");
  const [selectedSubcategory, setSelectedSubcategory] = useState(data.subcategory || "");

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
  console.log(categories);
  console.log(subcategories);
  console.log(selectedCategory);

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
    console.log(newCategory,"this new category");
    setSelectedCategory(newCategory);
    onChange({
      ...data,
      category: newCategory,
      subcategory: "", 
    });
  };

  const handleSubcategoryChange = (e) => {
    const newSubcategory = e.target.value;
    setSelectedSubcategory(newSubcategory);
    onChange({
      ...data,
      subcategory: newSubcategory,
    });
  };

  return (
    <div className="lg:col-span-2 border-l-2 border-l-[#ECF3F3] pl-5">
      <div className="grid gap-4 gap-y-2 lg:w-[45rem] text-sm grid-cols-1 md:grid-cols-5">
        <div className="md:col-span-3 flex flex-col gap-4">
          <label htmlFor="Category">Category</label>
          <select
            name="Category"
            id="Category"
            className="h-10 border mt-1 rounded px-4 w-full bg-[#fff]"
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

        <div className="md:col-span-2 flex flex-col gap-4">
          <label htmlFor="SubCategory">SubCategory</label>
          <select
            name="SubCategory"
            id="SubCategory"
            className="h-10 border mt-1 rounded px-4 w-full bg-[#fff]"
            value={selectedSubcategory}
            onChange={handleSubcategoryChange}
          >
            <option value="">Choose Subcategory</option>
            {subcategories
              .filter(subcat => subcat.cat_id === selectedCategory)
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
