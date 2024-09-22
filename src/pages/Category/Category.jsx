import React, { useEffect, useState } from "react";
import axios from "axios";
import CategoryModal from "@/components/modal/CategoryModal";
import toast from "react-hot-toast";
import Search from "@/components/Search/Search";
import CatTable from "./CatTable";

function Category() {
  const [category, setCategory] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    try {
      const response = await axios.get(
        "https://storeconvo.com/php/fetch.php?typ=category"
      );
      setCategory(response.data);
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };

  const handleDelete = (categoryId) => {
    toast(
      (t) => (
        <div>
          <p>Are you sure you want to delete this category?</p>
          <div className="flex gap-2 mt-2">
            <button
              onClick={() => confirmDelete(categoryId, t.id)}
              className="bg-red-500 text-white px-4 py-1 rounded"
            >
              Delete
            </button>
            <button
              onClick={() => toast.dismiss(t.id)}
              className="bg-gray-300 text-black px-4 py-1 rounded"
            >
              Cancel
            </button>
          </div>
        </div>
      ),
      { duration: 4000 }
    );
  };

  const confirmDelete = async (categoryId, toastId) => {
    try {
      await axios.post(
        `https://storeconvo.com/php/delete.php/`,
        {
          id: categoryId,
          typ: "cat",
        },
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }
      );
      setCategory((prevCategory) =>
        prevCategory.filter((category) => category.cat_id !== categoryId)
      );
      toast.success("Delete successful", { id: toastId });
    } catch (error) {
      console.error("Error deleting category:", error);
    }
  };

  const filteredCategories = category.filter((cat) =>
    cat.cat_name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="flex items-center justify-center w-full">
      <div className="w-full lg:max-w-screen-xl md:max-w-[35rem] max-w-[22rem] mx-auto ">
        <div className="flex flex-col gap-6 mt-8">
          <h2 className="font-semibold text-xl text-black">Category List</h2>
          <div className="bg-white flex gap-5 flex-col rounded-2xl shadow-sm p-4 md:p-8 w-full">
            <div className="flex items-center justify-between mb-4 lg:flex-row gap-4 lg:gap-0  flex-col">
              <Search
                searchQuery={searchQuery}
                setSearchQuery={setSearchQuery}
                name={"category"}
              />
              <CategoryModal setCategory={setCategory} onchange={fetchCategories}/>
            </div>
            <CatTable
              filteredCategories={filteredCategories}
              handleDelete={handleDelete}
              fetchCategories={fetchCategories}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Category;
