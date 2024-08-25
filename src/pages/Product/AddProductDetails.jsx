import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";

function AddProductDetails({
  productname,
  setProductName,
  ProductDescription,
  setProductDescription,
  productUserCode,
  setProductUserCode,
  unitId,
  setUnitId,
  reorderLevel,
  setReorderLevel,
  hsn,
  setHsn,
  cgst,
  setCgst,
  sgst,
  setSgst,
  salesUnit,
  setSalesUnit,
  packSize,
  setPackSize,
}) {
  const handleChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case "product_name":
        setProductName(value);
        break;
      case "description":
        setProductDescription(value);
        break;
      case "usercode":
        setProductUserCode(value);
        break;
      case "unit":
        setUnitId(value);
        break;
      case "reorder_level":
        setReorderLevel(value);
        break;
      case "hsn_code":
        setHsn(value);
        break;
      case "cgst":
        setCgst(value);
        break;
      case "sgst":
        setSgst(value);
        break;
      case "sales_unit":
        setSalesUnit(value);
        break;
      case "size":
        setPackSize(value);
        break;
      default:
        break;
    }
  };

  return (
    <div className="lg:col-span-2 border-l-2 border-l-[#ECF3F3] pl-5">
      <div className="grid gap-4 gap-y-2 lg:w-[45rem] text-sm grid-cols-1 md:grid-cols-5">
        <div className="md:col-span-5">
          <label htmlFor="product_name">Product Name</label>
          <input
            type="text"
            name="product_name"
            id="product_name"
            value={productname || ""}
            onChange={handleChange}
            className="h-10 border mt-1 rounded px-4 w-full bg-[#fff]"
            placeholder="Product Name"
            required
          />
        </div>

        <div className="md:col-span-5">
          <label htmlFor="description">Description</label>
          <textarea
            name="description"
            id="description"
            value={ProductDescription || ""}
            onChange={handleChange}
            className="border rounded p-4 w-full bg-[#fff]"
            placeholder="Description"
            required
          />
        </div>

        <div className="md:col-span-1">
          <label htmlFor="usercode">Product User Code</label>
          <input
            type="text"
            name="usercode"
            id="usercode"
            value={productUserCode || ""}
            onChange={handleChange}
            className="transition-all flex items-center h-10 border mt-1 rounded px-4 w-full bg-[#fff]"
            placeholder="Code"
            required
          />
        </div>

        <div className="md:col-span-2">
          <label htmlFor="unit">Product Unit</label>
          <div className="h-10 bg-[#fff] flex border border-gray-200 rounded items-center mt-1">
            <input
              name="unit"
              id="unit"
              value={unitId || ""}
              onChange={handleChange}
              placeholder="Unit"
              className="px-4 appearance-none outline-none text-gray-800 w-full bg-transparent"
              required
            />
          </div>
        </div>

        <div className="md:col-span-2">
          <label htmlFor="reorder_level">Reorder Level</label>
          <div className="h-10 bg-[#fff] flex border border-gray-200 rounded items-center mt-1">
            <input
              name="reorder_level"
              id="reorder_level"
              value={reorderLevel || ""}
              onChange={handleChange}
              placeholder="Re-Level"
              className="px-4 appearance-none outline-none text-gray-800 w-full bg-transparent"
              required
            />
          </div>
        </div>

        <div className="md:col-span-2">
          <label htmlFor="hsn_code">HSN/ACS Code</label>
          <div className="h-10 bg-[#fff] flex border border-gray-200 rounded items-center mt-1">
            <input
              name="hsn_code"
              id="hsn_code"
              value={hsn || ""}
              onChange={handleChange}
              placeholder="Code"
              className="px-4 appearance-none outline-none text-gray-800 w-full bg-transparent"
              required
            />
          </div>
        </div>

        <div className="md:col-span-1">
          <label htmlFor="cgst">CGST</label>
          <input
            type="text"
            name="cgst"
            id="cgst"
            value={cgst || ""}
            onChange={handleChange}
            className="transition-all flex items-center h-10 border mt-1 rounded px-4 w-full bg-[#fff]"
            placeholder="CGST"
            required
          />

        </div>

        <div className="md:col-span-1">
          <label htmlFor="sgst">SGST</label>
          <input
            type="text"
            name="sgst"
            id="sgst"
            value={sgst || ""}
            onChange={handleChange}
            className="transition-all flex items-center h-10 border mt-1 rounded px-4 w-full bg-[#fff]"
            placeholder="SGST"
            required
          />
        </div>

        <div className="md:col-span-2">
          <label htmlFor="sales_unit">Sales Unit</label>
          <div className="h-10 bg-[#fff] flex border border-gray-200 rounded items-center mt-1">
            <input
              name="sales_unit"
              id="sales_unit"
              value={salesUnit || ""}
              onChange={handleChange}
              placeholder="Unit"
              className="px-4 appearance-none outline-none text-gray-800 w-full bg-transparent"
              required
            />

          </div>
        </div>

        <div className="md:col-span-1">
          <label htmlFor="size">Pack Size</label>
          <input
            type="text"
            name="size"
            id="size"
            value={packSize || ""}
            onChange={handleChange}
            className="transition-all flex items-center h-10 border mt-1 rounded px-4 w-full bg-[#fff]"
            placeholder="Size"
            required
          />
        </div>
      </div>
    </div>
  );
}

export default AddProductDetails;
