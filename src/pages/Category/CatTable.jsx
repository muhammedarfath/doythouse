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
  import { BiSolidTrashAlt } from "react-icons/bi";
  import CategoryEditModal from "@/components/modal/CategoryEditModal";

function CatTable({filteredCategories,handleDelete,fetchCategories}) {
  return (
    <Table className="w-full">
      <TableCaption>A list of your categories.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[50px]">Select</TableHead>
          <TableHead>Category Name</TableHead>
          <TableHead>Description</TableHead>
          <TableHead className="text-center w-[120px]">Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody className="text-black">
        {filteredCategories.map((category, index) => (
          <TableRow key={index}>
            <TableCell>
              <input type="checkbox" />
            </TableCell>
            <TableCell className="font-medium">{category.cat_name}</TableCell>
            <TableCell>{category.cat_description}</TableCell>
            <TableCell className="text-center">
              <div className="flex justify-center gap-4">
                <CategoryEditModal
                  category={category}
                  onSuccess={fetchCategories}
                />
                <BiSolidTrashAlt
                  className="text-[#495057] text-xl transition-transform transform hover:scale-110 cursor-pointer"
                  onClick={() => handleDelete(category.cat_id)}
                />
              </div>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}

export default CatTable;
