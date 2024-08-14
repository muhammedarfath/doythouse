import React from "react";
import { FaArrowLeftLong } from "react-icons/fa6";
import { Button } from "../../components/ui/button";
import { FiPlus } from "react-icons/fi";

function ProductCategory() {
  return (
    <div className="lg:col-span-2 border-l-2 border-l-[#ECF3F3] pl-5">
      <div className="grid gap-4 gap-y-2 lg:w-[45rem] text-sm grid-cols-1 md:grid-cols-5">
        <div className="md:col-span-3 flex flex-col gap-4">
          <label for="Category">MRP</label>
          <input
            type="text"
            name="Category"
            id="Category"
            className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
            placeholder="Choose Category"
          />
          <label for="Category">Retail Price</label>
          <input
            type="text"
            name="Category"
            id="Category"
            className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
            placeholder="Choose Category"
          />
          <label for="SubCategory">Dealer Price</label>
          <input
            type="text"
            name="SubCategory"
            id="SubCategory"
            className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
            placeholder="Choose SubCategory"
          />
          <label for="SubCategory"> Open Qty</label>
          <input
            type="text"
            name="SubCategory"
            id="SubCategory"
            className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
            placeholder="Choose SubCategory"
          />
        </div>
        <div className="md:col-span-2 flex flex-col gap-4">
          <label for="SubCategory">Purchase Price</label>
          <input
            type="text"
            name="SubCategory"
            id="SubCategory"
            className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
            placeholder="Choose SubCategory"
          />
          <label for="Category">Wholesale Price</label>
          <input
            type="text"
            name="Category"
            id="Category"
            className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
            placeholder="Choose Category"
          />
          <label for="SubCategory"> Special Price</label>
          <input
            type="text"
            name="SubCategory"
            id="SubCategory"
            className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
            placeholder="Choose SubCategory"
          />
        </div>

        <div className="md:col-span-5 text-right flex justify-between mt-5 ">
          <div className="">
            <Button className="bg-[#308E87] hover:bg-[#308E87]">
              <FiPlus />
              Add Product
            </Button>
          </div>
          <div className="inline-flex items-end border rounded-md p-2">
            <button className="hover: text-black font-bold py-2 px-4 rounded">
              <FaArrowLeftLong />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductCategory;
