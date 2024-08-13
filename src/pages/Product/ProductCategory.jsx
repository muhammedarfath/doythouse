import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { Button } from "../../components/ui/button";
import { FiPlus } from "react-icons/fi";

function ProductCategory() {
  return (
    <div className="lg:col-span-2">
      <div className="grid gap-4 gap-y-2 lg:w-[45rem] text-sm grid-cols-1 md:grid-cols-5">
        <div className="md:col-span-3 flex flex-col gap-4">
          <label for="Category">Category</label>
          <input
            type="text"
            name="Category"
            id="Category"
            className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
            placeholder="Choose Category"
          />
          <div className="md:col-span-1">
            <label for="code">Product User Code</label>
            <input
              type="code"
              name="code"
              id="code"
              className="transition-all flex w-28 items-center h-10 border mt-1 rounded px-4 bg-gray-50"
              placeholder="Code"
            />
          </div>
          <Button>
            <FiPlus />
            Add New Category
          </Button>
        </div>

        <div className="md:col-span-2 flex flex-col gap-4">
          <label for="SubCategory">SubCategory</label>
          <input
            type="text"
            name="SubCategory"
            id="SubCategory"
            className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
            placeholder="Choose SubCategory"
          />
          <Button>
            <FiPlus />
            Add New SubCategory
          </Button>
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
  );
}

export default ProductCategory;
