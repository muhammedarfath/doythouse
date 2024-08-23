import React, { useState, useEffect } from "react";
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
      const fetchedCategories = [
        { id: "category1", name: "Category 1" },
        { id: "category2", name: "Category 2" },
        { id: "category3", name: "Category 3" },
      ];
      setCategories(fetchedCategories);
    };

    fetchCategories();
  }, []);

  useEffect(() => {
    if (selectedCategory) {
      const fetchSubcategories = async () => {
        const fetchedSubcategories = [
          { id: "subcategory1", name: "SubCategory 1" },
          { id: "subcategory2", name: "SubCategory 2" },
          { id: "subcategory3", name: "SubCategory 3" },
        ];
        setSubcategories(fetchedSubcategories);
      };

      fetchSubcategories();
    }
  }, [selectedCategory]);

  const handleCategoryChange = (e) => {
    const newCategory = e.target.value;
    setSelectedCategory(newCategory);
    setSelectedSubcategory(""); 
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
              <option key={cat.id} value={cat.id}>
                {cat.name}
              </option>
            ))}
          </select>

          <div className="md:col-span-1">
            <label htmlFor="code">Product User Code</label>
            <input
              type="text"
              name="code"
              id="code"
              className="transition-all flex w-28 items-center h-10 border mt-1 rounded px-4 bg-[#fff]"
              placeholder="Code"
            />
          </div>
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
            disabled={!selectedCategory}
          >
            <option value="">Choose SubCategory</option>
            {subcategories.map((sub) => (
              <option key={sub.id} value={sub.id}>
                {sub.name}
              </option>
            ))}
          </select>
          <SubModal />
        </div>

        <div className="md:col-span-5 text-right">
          <div className="inline-flex items-end border rounded-md p-2">
            <button className="hover:text-black font-bold py-2 px-4 rounded">
              <FaArrowRightLong />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductCategory;
