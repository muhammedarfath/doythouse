import React, { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../components/ui/table";
import { AiFillEdit } from "react-icons/ai";
import { BiSolidTrashAlt } from "react-icons/bi";
import SubModal from "@/components/modal/SubModal";
import SubCategoryEditModal from "@/components/modal/SubCategoryEditModal";
import axios from "axios";
import { toast } from "react-hot-toast";

function SubCategory() {
  const [subCategory, setSubCategory] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

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
    subcategory.subcat_name?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="flex items-center justify-center w-full">
      <div className="w-full lg:max-w-screen-xl md:max-w-[35rem] max-w-[22rem] mx-auto ">
        <div className="flex flex-col gap-6 mt-8">
          <h2 className="font-semibold text-xl text-black">
            Sub Category List
          </h2>
          <div className="bg-white flex gap-5 flex-col rounded-2xl shadow-sm p-4 md:p-8 w-full">
            <div className="flex items-center justify-between mb-4 lg:flex-row gap-4 lg:gap-0  flex-col">
              <div className="flex gap-2">
                <span className="">Search</span>
                <input
                  type="text"
                  placeholder="Search by sub category name..."
                  className="h-10 border rounded px-4 w-64 bg-white"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <SubModal setSubCategory={setSubCategory} onChange={fetchSubCategories}/>
            </div>

            <Table className="w-full">
              <TableCaption>
                A list of your subcategories with tax details.
              </TableCaption>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[50px]">Select</TableHead>
                  <TableHead className="w-[150px]">Category Name</TableHead>
                  <TableHead className="w-[200px]">Subcategory Name</TableHead>
                  <TableHead className="w-[100px]">HSN</TableHead>
                  <TableHead className="w-[100px]">CGST</TableHead>
                  <TableHead className="w-[100px]">SGST</TableHead>
                  <TableHead className="text-center w-[120px]">
                    Actions
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredSubCategories.map((subcategory, index) => (
                  <TableRow key={index}>
                    <TableCell>
                      <input type="checkbox" />
                    </TableCell>
                    <TableCell className="font-medium">
                      {subcategory.cat_name}
                    </TableCell>
                    <TableCell>{subcategory.subcat_name}</TableCell>
                    <TableCell>{subcategory.hsnacs}</TableCell>
                    <TableCell>{subcategory.cgst}</TableCell>
                    <TableCell>{subcategory.sgst}</TableCell>
                    <TableCell className="text-center">
                      <div className="flex justify-center gap-4">
                        <SubCategoryEditModal subcategory={subcategory} onSuccess={fetchSubCategories}/>
                        <BiSolidTrashAlt
                          className="text-[#495057] text-xl transition-transform transform hover:scale-110 cursor-pointer"
                          onClick={() => handleDelete(subcategory.subcat_id)}
                        />
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SubCategory;
