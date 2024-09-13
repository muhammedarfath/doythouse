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
import SubCategoryEditModal from "@/components/modal/SubCategoryEditModal";

function SubCatTable({ filteredSubCategories, handleDelete,fetchSubCategories }) {
  return (
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
          <TableHead className="text-center w-[120px]">Actions</TableHead>
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
                <SubCategoryEditModal
                  subcategory={subcategory}
                  onSuccess={fetchSubCategories}
                />
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
  );
}

export default SubCatTable;
