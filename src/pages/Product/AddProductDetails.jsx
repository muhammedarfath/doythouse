import React from "react";

function AddProductDetails({
  productname,
  setProductName,
  ProductDescription,
  setProductDescription,
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
  units,
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
    <div className="lg:col-span-2 border-l-2 w-full border-l-[#ECF3F3] pl-5">
      <div className="grid gap-4 gap-y-2 lg:w-full text-sm grid-cols-1 md:grid-cols-5">
        <div className="md:col-span-5">
          <label htmlFor="product_name">Product Name</label>
          <input
            type="text"
            name="product_name"
            id="product_name"
            value={productname || ""}
            onChange={handleChange}
            className="h-10 border mt-1 rounded px-4 w-full bg-[#fff] focus:outline-none focus:ring-2 focus:ring-black"
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
            className="border rounded p-4 w-full bg-[#fff] focus:outline-none focus:ring-2 focus:ring-black"
            placeholder="Description"
            required
          />
        </div>

        <div className="md:col-span-2">
          <label htmlFor="unit">Product Unit</label>
          <select
            id="unit"
            name="unit"
            value={unitId}
            onChange={handleChange}
            className="h-10 border mt-1 rounded px-4 w-full bg-[#fff] focus:outline-none focus:ring-2 focus:ring-black"
          >
            <option value="">Select Unit</option>
            {units.length > 0 ? (
              units.map((unit) => (
                <option key={unit.unitid} value={unit.unitid}>
                  {unit.unitname}
                </option>
              ))
            ) : (
              <option value="">No units available</option>
            )}
          </select>
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
              className="transition-all flex items-center h-10 border rounded px-4 w-full bg-[#fff] focus:outline-none focus:ring-2 focus:ring-black"
              required
            />
          </div>
        </div>
        <div className="md:col-span-2 lg:col-span-1">
          <label htmlFor="hsn_code">HSN/ACS Code</label>
          <div className="h-10 bg-[#fff] flex border border-gray-200 rounded items-center mt-1">
            <input
              name="hsn_code"
              id="hsn_code"
              value={hsn || ""}
              onChange={handleChange}
              placeholder="Code"
              className="transition-all flex items-center h-10 border rounded px-4 w-full bg-[#fff] focus:outline-none focus:ring-2 focus:ring-black"
              required
            />
          </div>
        </div>
        <div className="md:col-span-2 lg:col-span-1">
          <label htmlFor="cgst">CGST</label>
          <input
            type="text"
            name="cgst"
            id="cgst"
            value={cgst || ""}
            onChange={handleChange}
            className="transition-all flex items-center h-10 border mt-1 rounded px-4 w-full bg-[#fff] focus:outline-none focus:ring-2 focus:ring-black"
            placeholder="CGST"
            required
          />
        </div>
        <div className="md:col-span-2 lg:col-span-1">
          <label htmlFor="sgst">SGST</label>
          <input
            type="text"
            name="sgst"
            id="sgst"
            value={sgst || ""}
            onChange={handleChange}
            className="transition-all flex items-center h-10 border mt-1 rounded px-4 w-full bg-[#fff] focus:outline-none focus:ring-2 focus:ring-black"
            placeholder="SGST"
            required
          />
        </div>
        <div className="md:col-span-2 lg:col-span-1">
          <label htmlFor="sales_unit">Sales Unit</label>
          <div className="h-10 bg-[#fff] flex border border-gray-200 rounded items-center mt-1">
            <input
              name="sales_unit"
              id="sales_unit"
              value={salesUnit || ""}
              onChange={handleChange}
              placeholder="Unit"
              className="transition-all flex items-center h-10 border rounded px-4 w-full bg-[#fff] focus:outline-none focus:ring-2 focus:ring-black"
              required
            />
          </div>
        </div>
        <div className="md:col-span-2 lg:col-span-1">
          <label htmlFor="size">Pack Size</label>
          <input
            type="text"
            name="size"
            id="size"
            value={packSize || ""}
            onChange={handleChange}
            className="transition-all flex items-center h-10 border mt-1 rounded px-4 w-full bg-[#fff] focus:outline-none focus:ring-2 focus:ring-black"
            placeholder="Size"
            required
          />
        </div>
      </div>
    </div>
  );
}

export default AddProductDetails;
