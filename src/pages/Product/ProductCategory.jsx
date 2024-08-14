import React, { useState } from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import SubModal from "@/components/modal/SubModal";
import CategoryModal from "@/components/modal/CategoryModal";

function ProductPrices() {
  return (
    <>
      <div className="lg:col-span-2 border-l-2 border-l-[#ECF3F3] pl-5">
        <div className="grid gap-4 gap-y-2 lg:w-[45rem] text-sm grid-cols-1 md:grid-cols-5">
          <div className="md:col-span-3 flex flex-col gap-4">
            <label htmlFor="Category">Category</label>
            <select
              name="Category"
              id="Category"
              className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
            >
              <option value="">Choose Category</option>
              <option value="category1">Category 1</option>
              <option value="category2">Category 2</option>
              <option value="category3">Category 3</option>
            </select>

            <div className="md:col-span-1">
              <label htmlFor="code">Product User Code</label>
              <input
                type="text"
                name="code"
                id="code"
                className="transition-all flex w-28 items-center h-10 border mt-1 rounded px-4 bg-gray-50"
                placeholder="Code"
              />
            </div>
            <CategoryModal />
          </div>

          <div className="md:col-span-2 flex flex-col gap-4">
            <label htmlFor="SubCategory">SubCategory</label>
            <select
              name="SubCategory"
              id="SubCategory"
              className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
            >
              <option value="">Choose SubCategory</option>
              <option value="subcategory1">SubCategory 1</option>
              <option value="subcategory2">SubCategory 2</option>
              <option value="subcategory3">SubCategory 3</option>
            </select>
            <SubModal />
          </div>

          <div className="md:col-span-5 text-right ">
            <div className="inline-flex items-end border rounded-md p-2">
              <button className="hover: text-black font-bold py-2 px-4 rounded">
                <FaArrowRightLong />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductPrices;
