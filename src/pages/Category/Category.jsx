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
import axios from "axios";
import CategoryModal from "@/components/modal/CategoryModal";
import CategoryEditModal from "@/components/modal/CategoryEditModal";
import toast, { Toaster } from "react-hot-toast";

function Category() {
  const [category, setCategory] = useState([]);

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
          <p>Are you sure you want to delete this Expense?</p>
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


  return (
    <div className="flex items-center justify-center w-full">
      <div className="w-full lg:max-w-screen-xl md:max-w-[35rem] max-w-[22rem] mx-auto ">
        <div className="flex flex-col gap-6 mt-8">
          <h2 className="font-semibold text-xl text-black">Category List</h2>
          <div className="bg-white flex gap-5 flex-col rounded-2xl shadow-sm p-4 md:p-8 w-full">
          <div className="flex items-center justify-between mb-4 lg:flex-row gap-4 lg:gap-0  flex-col">
              <div className="flex gap-2">
                <span className="">Search</span>
                <input
                  type="text"
                  placeholder="Search..."
                  className="h-10 border rounded px-4 w-64 bg-[#fff] border-gray-300 text-gray-900 text-sm  focus:ring-black focus:border-black block pl-5 pr-3 py-4"
                />
              </div>
              <CategoryModal setCategory={setCategory}/>
            </div>

            <Table className="w-full">
              <TableCaption>A list of your categories.</TableCaption>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[50px]">Select</TableHead>
                  <TableHead>Category Name</TableHead>
                  <TableHead>Description</TableHead>
                  <TableHead className="text-center w-[120px]">
                    Actions
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody className="text-black">
                {category.map((category, index) => (
                  <TableRow key={index}>
                    <TableCell>
                      <input type="checkbox" />
                    </TableCell>
                    <TableCell className="font-medium">
                      {category.cat_name}
                    </TableCell>
                    <TableCell>{category.cat_description}</TableCell>
                    <TableCell className="text-center">
                      <div className="flex justify-center gap-4">
                        <CategoryEditModal category={category} onSuccess={fetchCategories}/>
                        <BiSolidTrashAlt
                          className="text-[#495057] text-xl transition-transform transform hover:scale-110 cursor-pointer"
                          onClick={() => handleDelete(category.cat_id)}
                        />{" "}
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

export default Category;
