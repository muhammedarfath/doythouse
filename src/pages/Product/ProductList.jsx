import React, { useState } from "react";
import { Button } from "../../components/ui/button";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../components/ui/table";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import ProductDetailsModal from "@/components/modal/ProductDetailsModal";

const products = [
  {
    id: 1,
    image: "https://example.com/image1.jpg",
    name: "Aline Kurthi Printed",
    code: "CH003",
    hsn: "6109",
    cgst: "9%",
    sgst: "9%",
    description:
      "A beautifully printed Aline Kurthi made from high-quality fabric.",
  },
  {
    id: 2,
    image: "https://example.com/image2.jpg",
    name: "Cotton Palazzo Set",
    code: "PL001",
    hsn: "6204",
    cgst: "5%",
    sgst: "5%",
    description: "Comfortable cotton Palazzo set perfect for casual wear.",
  },
];

function ProductList() {
  return (
    <div className="flex items-center justify-center w-full">
      <div className="w-full max-w-screen-xl mx-auto">
        <div className="flex flex-col gap-6 mt-8">
          <h2 className="font-semibold text-xl text-black">Product List</h2>
          <div className="bg-white flex gap-5 flex-col rounded-2xl shadow-sm p-4 md:p-8 w-full">
            <div className="flex items-center justify-between mb-4">
              <div className="flex gap-2">
                <span>Search</span>
                <input
                  type="text"
                  placeholder="Search..."
                  className="h-10 border rounded px-4 w-64 bg-gray-50"
                />
              </div>
            </div>

            <Table className="w-full">
              <TableCaption>A list of your products.</TableCaption>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[50px]">Select</TableHead>
                  <TableHead className="w-[50px]">SINO</TableHead>
                  <TableHead>Image</TableHead>
                  <TableHead>Product Details</TableHead>
                  <TableHead className="text-right">Product Code</TableHead>
                  <TableHead className="w-[50px]">HSN</TableHead>
                  <TableHead className="w-[50px]">CGST</TableHead>
                  <TableHead className="w-[50px]">SGST</TableHead>
                  <TableHead className="text-center w-[150px]">
                    Actions
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {products.map((product, index) => (
                  <TableRow key={product.id}>
                    <TableCell>
                      <input type="checkbox" />
                    </TableCell>
                    <TableCell className="font-medium">{index + 1}</TableCell>
                    <TableCell>
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-16 h-16 object-cover rounded"
                      />
                    </TableCell>
                    <TableCell>{product.name}</TableCell>
                    <TableCell className="text-right">{product.code}</TableCell>
                    <TableCell>{product.hsn}</TableCell>
                    <TableCell>{product.cgst}</TableCell>
                    <TableCell>{product.sgst}</TableCell>
                    <TableCell className="text-center">
                      <div className="flex justify-center gap-4">
                        <ProductDetailsModal />
                        <Button className="bg-[#308E87] hover:bg-[#308E87] transition-transform transform hover:scale-110">
                          <AiFillEdit className="text-white text-xl" />
                        </Button>
                        <Button className="bg-[#f90303] hover:bg-[#ff1d52] transition-transform transform hover:scale-110">
                          <AiFillDelete className="text-white text-xl" />
                        </Button>
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

export default ProductList;
