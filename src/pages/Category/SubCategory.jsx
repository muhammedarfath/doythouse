import React from "react";
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

const subcategories = [
  {
    categoryName: "Electronics",
    subcategoryName: "Mobile Phones",
    hsn: "8517",
    cgst: "9%",
    sgst: "9%",
  },
  {
    categoryName: "Clothing",
    subcategoryName: "Men's T-Shirts",
    hsn: "6109",
    cgst: "6%",
    sgst: "6%",
  },
  {
    categoryName: "Furniture",
    subcategoryName: "Office Chairs",
    hsn: "9401",
    cgst: "12%",
    sgst: "12%",
  },
  {
    categoryName: "Groceries",
    subcategoryName: "Organic Vegetables",
    hsn: "0709",
    cgst: "5%",
    sgst: "5%",
  },
];

function SubCategory() {
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
                {subcategories.map((subcategory, index) => (
                  <TableRow key={index}>
                    <TableCell>
                      <input type="checkbox" />
                    </TableCell>
                    <TableCell className="font-medium">
                      {subcategory.categoryName}
                    </TableCell>
                    <TableCell>{subcategory.subcategoryName}</TableCell>
                    <TableCell>{subcategory.hsn}</TableCell>
                    <TableCell>{subcategory.cgst}</TableCell>
                    <TableCell>{subcategory.sgst}</TableCell>
                    <TableCell className="text-center">
                      <div className="flex justify-center gap-4">
                        <AiFillEdit className="text-[#495057] text-xl transition-transform transform hover:scale-110  cursor-pointer" />
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
