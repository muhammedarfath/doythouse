import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";

function AddProduct() {
  return (
    <div className="flex items-center justify-center">
      <div className="max-w-screen-xl mx-auto">
        <div className="flex flex-col gap-11 mt-8">
          <h2 className="font-semibold text-xl text-black">Add New Product</h2>

          <div className="bg-white rounded-2xl shadow-sm p-4 px-4 md:p-8 mb-6">
            <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3">
              <div className="text-black">
                <p className="font-medium text-lg">Product Form</p>
              </div>

              <div className="lg:col-span-2">
                <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
                  <div className="md:col-span-5">
                    <label for="product_name">Product Name</label>
                    <input
                      type="text"
                      name="product_name"
                      id="product_name"
                      className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                      placeholder="Product Name"
                    />
                  </div>

                  <div className="md:col-span-5">
                    <label for="Discription">Discription</label>
                    <textarea
                      type="text"
                      name="Discription"
                      id="Discription"
                      className="border rounded p-4 w-full bg-gray-50"
                      placeholder="Discription"
                    />
                  </div>

                  <div className="md:col-span-3">
                    <label for="Category">Category</label>
                    <input
                      type="text"
                      name="Category"
                      id="Category"
                      className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                      placeholder="Choose Category"
                    />
                  </div>

                  <div className="md:col-span-2">
                    <label for="SubCategory">SubCategory</label>
                    <input
                      type="text"
                      name="SubCategory"
                      id="SubCategory"
                      className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                      placeholder="Choose SubCategory"
                    />
                  </div>

                  <div className="md:col-span-1">
                    <label for="zipcode">Product User Code</label>
                    <input
                      type="text"
                      name="zipcode"
                      id="zipcode"
                      className="transition-all flex items-center h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                      placeholder="Code"
                    />
                  </div>

                  <div className="md:col-span-2">
                    <label for="unit">Product Unit</label>
                    <div className="h-10 bg-gray-50 flex border border-gray-200 rounded items-center mt-1">
                      <input
                        name="unit"
                        id="unit"
                        placeholder="Unit"
                        className="px-4 appearance-none outline-none text-gray-800 w-full bg-transparent"
                      />
                    </div>
                  </div>

                  <div className="md:col-span-2">
                    <label for="Re-Level">Reorder Level</label>
                    <div className="h-10 bg-gray-50 flex border border-gray-200 rounded items-center mt-1">
                      <input
                        name="state"
                        id="Level"
                        placeholder="Re-Level"
                        className="px-4 appearance-none outline-none text-gray-800 w-full bg-transparent"
                      />
                    </div>
                  </div>
                  
                  <div className="md:col-span-2">
                    <label for="unit">HSN ACS Code</label>
                    <div className="h-10 bg-gray-50 flex border border-gray-200 rounded items-center mt-1">
                      <input
                        name="unit"
                        id="unit"
                        placeholder="Code"
                        className="px-4 appearance-none outline-none text-gray-800 w-full bg-transparent"
                      />
                    </div>
                  </div>

                  <div className="md:col-span-1">
                    <label for="CGST">CGST</label>
                    <input
                      type="text"
                      name="CGST"
                      id="CGST"
                      className="transition-all flex items-center h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                      placeholder="CGST"
                    />
                  </div>


                  <div className="md:col-span-1">
                    <label for="SGST">SGST</label>
                    <input
                      type="text"
                      name="SGST"
                      id="SGST"
                      className="transition-all flex items-center h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                      placeholder="SGST"
                    />
                  </div>


                  <div className="md:col-span-2">
                    <label for="unit">Sales Unit</label>
                    <div className="h-10 bg-gray-50 flex border border-gray-200 rounded items-center mt-1">
                      <input
                        name="unit"
                        id="unit"
                        placeholder="Unit"
                        className="px-4 appearance-none outline-none text-gray-800 w-full bg-transparent"
                      />
                    </div>
                  </div>

                  <div className="md:col-span-1">
                    <label for="Size">Pack Size</label>
                    <input
                      type="text"
                      name="Size"
                      id="Size"
                      className="transition-all flex items-center h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                      placeholder="Size"
                    />
                  </div>


                  <div className="md:col-span-5 text-right">
                    <div className="inline-flex items-end border rounded-md p-2">
                      <button className="hover: text-black font-bold py-2 px-4 rounded">
                      <FaArrowRightLong />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddProduct;
