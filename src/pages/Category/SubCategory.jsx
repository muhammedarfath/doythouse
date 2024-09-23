import React, { useEffect, useState } from "react";
import SubModal from "@/components/modal/SubModal";
import axios from "axios";
import { toast } from "react-hot-toast";
import Search from "@/components/Search/Search";
import SubCatTable from "./SubCatTable";
import { useOutletContext } from "react-router-dom";

function SubCategory() {
  const [subCategory, setSubCategory] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const { open } = useOutletContext();

  useEffect(() => {
    fetchSubCategories();
  }, []);
  const fetchSubCategories = async () => {
    try {
      const response = await axios.get(
        "https://storeconvo.com/php/fetch.php?typ=subcategory"
      );
      setSubCategory(response.data);
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };

  const handleDelete = (subcategoryId) => {
    toast(
      (t) => (
        <div>
          <p>Are you sure you want to delete this Sub Category?</p>
          <div className="flex gap-2 mt-2">
            <button
              onClick={() => confirmDelete(subcategoryId, t.id)}
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

  const confirmDelete = async (subcategoryId, toastId) => {
    try {
      await axios.post(
        `https://storeconvo.com/php/delete.php/`,
        {
          id: subcategoryId,
          typ: "subcategory",
        },
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }
      );
      setSubCategory((prevSubCategory) =>
        prevSubCategory.filter(
          (subcategory) => subcategory.subcat_id !== subcategoryId
        )
      );
      toast.success("Delete successful", { id: toastId });
    } catch (error) {
      console.error("Error deleting category:", error);
    }
  };

  const filteredSubCategories = subCategory.filter((subcategory) =>
    subcategory.subcat_name?.toLowerCase().includes(searchQuery.toLowerCase())
  );


  return (
    <div className="flex items-center justify-center w-full">
      <div className={`w-full lg:max-w-screen-xl ${open ? "md:max-w-[32rem]" : "md:max-w-[40rem]"} max-w-[22rem] mx-auto`}>
        <div className="flex flex-col gap-6 mt-8">
          <h2 className="font-semibold text-xl text-black">
            Sub Category List
          </h2>
          <div className="bg-white flex gap-5 flex-col rounded-2xl shadow-sm p-4 md:p-8 w-full">
            <div className="flex items-center justify-between mb-4 lg:flex-row gap-4 lg:gap-0  flex-col">
              <Search
                searchQuery={searchQuery}
                setSearchQuery={setSearchQuery}
                name={"subcategory"}
              />
              <SubModal
                onChange={fetchSubCategories}
              />
            </div>
            <SubCatTable
              filteredSubCategories={filteredSubCategories}
              handleDelete={handleDelete}
              fetchSubCategories={fetchSubCategories}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SubCategory;
