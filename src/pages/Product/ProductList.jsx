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
import { FiPlus } from "react-icons/fi";
import { Link } from "react-router-dom";
import { BiSolidTrashAlt } from "react-icons/bi";
import axios from "axios";
import ProductEditModal from "@/components/modal/ProductEditModal";
import ProductDetailsModal from "@/components/modal/ProductDetailsModal";
import { toast } from "react-hot-toast";

function ProductList() {
  const [products, setProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const fetchProductList = async () => {
      try {
        const response = await axios.get(
          "https://storeconvo.com/php/fetch.php?typ=product"
        );
        console.log(response.data);
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProductList();
  }, []);

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value.toLowerCase());
  };

  const filteredProducts = products.filter((product) =>
    product.productname.toLowerCase().includes(searchQuery)
  );

  const handleDelete = (productId) => {
    toast(
      (t) => (
        <div>
          <p>Are you sure you want to delete this product?</p>
          <div className="flex gap-2 mt-2">
            <button
              onClick={() => confirmDelete(productId, t.id)}
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

  const confirmDelete = async (productId, toastId) => {
    try {
      await axios.post(
        `https://storeconvo.com/php/delete.php/`,
        {
          id: productId,
          typ: "product",
        },
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }
      );
      setProducts((prevProducts) =>
        prevProducts.filter((product) => product.productid !== productId)
      );

      toast.success("Delete successful", { id: toastId });
    } catch (error) {
      console.error("Error deleting product:", error);
      toast.error("Failed to delete product", { id: toastId });
    }
  };


  return (
    <div className="flex items-center justify-center w-full">
      <div className="w-full lg:max-w-screen-xl md:max-w-[35rem] max-w-[22rem] mx-auto ">
        <div className="flex flex-col gap-6 mt-8">
          <h2 className="font-semibold text-xl text-black">Product List</h2>
          <div className="bg-white flex gap-5 flex-col rounded-2xl shadow-sm p-4 md:p-8 w-full">
            <div className="flex items-center justify-between mb-4 lg:flex-row gap-4 lg:gap-0  flex-col">
              <div className="flex gap-2">
                <span>Search</span>
                <input
                  type="text"
                  placeholder="Search..."
                  value={searchQuery}
                  onChange={handleSearchChange}
                  className="h-10 border rounded px-4 w-64 bg-white"
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
                          console.log(imageUrl); 
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
                          <ProductEditModal product={product} />
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
