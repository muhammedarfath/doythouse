import React, { useEffect, useState } from "react";
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
import { AiFillEdit } from "react-icons/ai";
import ProductDetailsModal from "@/components/modal/ProductDetailsModal";
import { MdOutlineDelete } from "react-icons/md";
import { FiPlus } from "react-icons/fi";
import { Link } from "react-router-dom";
import { BiSolidTrashAlt } from "react-icons/bi";
import axios from "axios";
import ProductEditModal from "@/components/modal/ProductEditModal";

function ProductList() {
  const [products, setProduct] = useState([]);

  useEffect(() => {
    const fetchProductList = async () => {
      try {
        const response = await axios.get(
          "https://storeconvo.com/php/fetch.php?typ=product"
        );
        setProduct(response.data);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchProductList();
  }, []);


  console.log(products,"tjos ");


  

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
              <Link to="/addproduct">
                <Button className="bg-[#308E87] hover:bg-[#308E87]">
                  <FiPlus className="text-white text-xl" />
                  Add New Product
                </Button>
              </Link>
            </div>

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
                  <TableHead className="text-center w-[150px]">
                    Actions
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {products.length > 0 ? (
                  products.map((product, index) => (
                    <TableRow key={product.id}>
                      <TableCell>
                        <input type="checkbox" />
                      </TableCell>
                      <TableCell className="font-medium">{index + 1}</TableCell>
                      <TableCell>
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-10 h-15 object-cover rounded"
                        />
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
                          <ProductDetailsModal />
                          <ProductEditModal product={product}/>
                          <BiSolidTrashAlt className="text-[#495057] text-xl transition-transform transform hover:scale-110 cursor-pointer" />
                        </div>
                      </TableCell>
                    </TableRow>
                  ))
                ) : (
                  <TableRow>
                    <TableCell
                      colSpan="8"
                      className="text-center text-gray-500 py-4"
                    >
                      No products found.
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductList;
