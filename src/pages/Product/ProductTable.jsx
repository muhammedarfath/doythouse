import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../components/ui/table";
import { BiSolidTrashAlt } from "react-icons/bi";
import ProductEditModal from "@/components/modal/ProductEditModal";
import ProductDetailsModal from "@/components/modal/ProductDetailsModal";

function ProductTable({ filteredProducts, fetchProductList, handleDelete }) {
  return (
    <Table className="w-full">
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
          <TableHead className="text-center w-[150px]">Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product, index) => (
            <TableRow key={product.productid}>
              <TableCell>
                <input type="checkbox" />
              </TableCell>
              <TableCell className="font-medium">{index + 1}</TableCell>
              <TableCell>
                {product.image_url.split(",").map((url, idx) => {
                  const imageUrl = `https://storeconvo.com/php/uploads/${url}`;
                  return (
                    <img
                      key={idx}
                      src={imageUrl}
                      alt={product.productname}
                      className="w-10 h-15 object-cover rounded mb-2"
                    />
                  );
                })}
              </TableCell>
              <TableCell>{product.productname}</TableCell>
              <TableCell className="text-right">
                {product.productusercode}
              </TableCell>
              <TableCell>{product.hsn}</TableCell>
              <TableCell>{product.cgst}</TableCell>
              <TableCell>{product.sgst}</TableCell>
              <TableCell className="text-center">
                <div className="flex justify-center gap-4">
                  <ProductDetailsModal product={product} />
                  <ProductEditModal
                    product={product}
                    onSuccess={fetchProductList}
                  />
                  <BiSolidTrashAlt
                    onClick={() => handleDelete(product.productid)}
                    className="text-[#495057] text-xl transition-transform transform hover:scale-110 cursor-pointer"
                  />
                </div>
              </TableCell>
            </TableRow>
          ))
        ) : (
          <TableRow>
            <TableCell colSpan="8" className="text-center text-gray-500 py-4">
              No products found.
            </TableCell>
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
}

export default ProductTable;
