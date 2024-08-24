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




function SubCategory() {

  const [subCategory, setSubCategory] = useState([]);

  useEffect(() => {
    const fetchSubCategories = async () => {
      try {
        const response = await axios.get(
          "https://storeconvo.com/php/fetch.php?typ=subcategory"
        );
        console.log(response);
        setSubCategory(response.data);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchSubCategories();
  }, []);

  const handleDelete = async (categoryId) => {
    try {
      await axios.delete(`your-backend-url/categories/${categoryId}`);
    } catch (error) {
      console.error("Error deleting category:", error);
    }
  };


  return (
    <div className="flex items-center justify-center w-full">
      <div className="w-full max-w-screen-xl mx-auto">
        <div className="flex flex-col gap-6 mt-8">
          <h2 className="font-semibold text-xl text-black">
            Sub Category List
          </h2>
          <div className="bg-white flex gap-5 flex-col rounded-2xl shadow-sm p-4 md:p-8 w-full">
            <div className="flex items-center justify-between mb-4">
              <div className="flex gap-2">
                <span className="">Search</span>
                <input
                  type="text"
                  placeholder="Search..."
                  className="h-10 border rounded px-4 w-64 bg-gray-50"
                />
              </div>
              <SubModal />
            </div>

            <Table className="w-full">
              <TableCaption>A list of your subcategories with tax details.</TableCaption>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[50px]">Select</TableHead>
                  <TableHead className="w-[150px]">Category Name</TableHead>
                  <TableHead className="w-[200px]">Subcategory Name</TableHead>
                  <TableHead className="w-[100px]">HSN</TableHead>
                  <TableHead className="w-[100px]">CGST</TableHead>
                  <TableHead className="w-[100px]">SGST</TableHead>
                  <TableHead className="text-center w-[120px]">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {subCategory.map((subcategory, index) => (
                  <TableRow key={index}>
                    <TableCell>
                      <input type="checkbox" />
                    </TableCell>
                    <TableCell className="font-medium">
                      {subcategory.cat_id}
                    </TableCell>
                    <TableCell>{subcategory.subcat_name}</TableCell>
                    <TableCell>{subcategory.hsnacs}</TableCell>
                    <TableCell>{subcategory.cgst}</TableCell>
                    <TableCell>{subcategory.sgst}</TableCell>
                    <TableCell className="text-center">
                      <div className="flex justify-center gap-4">
                        <SubCategoryEditModal subcategory={subcategory}/>
                        <BiSolidTrashAlt className="text-[#495057] text-xl transition-transform transform hover:scale-110 cursor-pointer" />
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
