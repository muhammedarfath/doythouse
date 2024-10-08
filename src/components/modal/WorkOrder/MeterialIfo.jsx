import React, { useState, useEffect } from "react";
import { Input } from "../../../components/ui/input";
import axios from "axios";

function MeterialIfo({
  stockReport,
  setStockReport,
  setInputValues,
  inputValues,
  totalMRP,
  setTotalMRP
}) {
  const [errors, setErrors] = useState({});

  useEffect(() => {
    const fetchStockReport = async () => {
      try {
        const response = await axios.get(
          "https://storeconvo.com/php/fetch.php?typ=stock"
        );
        setStockReport(response.data);
      } catch (error) {
        console.error("Error fetching stock report:", error);
      }
    };
    fetchStockReport();
   
  }, []);

  

  useEffect(() => {
    const total = Object.values(inputValues)
      .reduce((sum, value) => {
        const mrp = parseFloat(value.split(", ")[1] || 0);
        return sum + mrp;
      }, 0)
      .toFixed(2);

    setTotalMRP(total);
  }, [inputValues]);




  const addRow = () => {
    setInputValues((prevValues) => ({
      ...prevValues,
      "": "" 
    }));
  };

  const removeRow = (stock_id) => {
    const updatedValues = { ...inputValues };
    delete updatedValues[stock_id];
    setInputValues(updatedValues);
  };

  const handleInputChangeWithValidation = (e, stock_id, field) => {
    const { value } = e.target;
    const updatedValues = { ...inputValues };

    if (field === "stock_id") {
      const newStockId = value;
      updatedValues[newStockId] = updatedValues[stock_id];
      delete updatedValues[stock_id];
    } else if (field === "quantity") {
      const selectedItem = stock_id;
      const stockItem = stockReport.find((stock) => stock.stock_id === selectedItem);

      if (stockItem) {
        const totalMRP = parseInt(value) * parseFloat(stockItem.mrp || 0);
        updatedValues[stock_id] = `${value}, ${totalMRP.toFixed(2)}`;

        if (parseInt(value) > stockItem.stockvalue) {
          setErrors((prevErrors) => ({
            ...prevErrors,
            [stock_id]: `Quantity exceeds available stock (${stockItem.stockvalue})`,
          }));
        } else {
          setErrors((prevErrors) => ({
            ...prevErrors,
            [stock_id]: "",
          }));
        }
      }
    }

    setInputValues(updatedValues);
  };

  return (
    <div className="mb-80 w-full">
      <table className="w-full table-auto border-collapse border border-gray-300">
        <thead>
          <tr>
            <th className="border border-gray-300 px-4 py-2">Item</th>
            <th className="border border-gray-300 px-4 py-2">Quantity</th>
            <th className="border border-gray-300 px-4 py-2">MRP</th>
            <th className="border border-gray-300 px-4 py-2"></th>
          </tr>
        </thead>
        <tbody>
          {Object.keys(inputValues).map((stock_id) => (
            <tr key={stock_id}>
              <td className="border border-gray-300 px-4 py-2">
                <select
                  value={stock_id}
                  onChange={(e) => handleInputChangeWithValidation(e, stock_id, "stock_id")}
                  className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
                >
                  <option value="">Select Item</option>
                  {stockReport.map((stock) => (
                    <option key={stock.id} value={stock.stock_id}>
                      {stock.items}
                    </option>
                  ))}
                </select>
              </td>

              <td className="border border-gray-300 px-4 py-2">
                <Input
                  type="number"
                  placeholder="Enter Quantity"
                  value={inputValues[stock_id]?.split(", ")[0] || ""}
                  onChange={(e) => handleInputChangeWithValidation(e, stock_id, "quantity")}
                  className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
                />
                  {errors[stock_id] && (
                    <p className="text-red-500 text-sm mt-1">{errors[stock_id]}</p>
                  )}
              </td>

              <td className="border border-gray-300 px-4 py-2">
                <Input
                  type="text"
                  value={inputValues[stock_id]?.split(", ")[1] || ""}
                  className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
                  readOnly
                />
              </td>

              <td className="border border-gray-300 px-4 py-2 text-center">
                <button
                  type="button"
                  onClick={() => removeRow(stock_id)}
                  className="px-3 py-2 bg-[#308E87] text-white rounded-md hover:bg-[#27766F] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#308E87] transition-all duration-150"
                >
                  Remove Row
                </button>
              </td>
            </tr>
          ))}

          <tr>
            <td className="border border-gray-300 px-4 py-2 font-bold">Total</td>
            <td className="border border-gray-300 px-4 py-2"></td>
            <td className="border border-gray-300 px-4 py-2 font-bold">{totalMRP}</td>
            <td className="border border-gray-300 px-4 py-2"></td>
          </tr>
        </tbody>
      </table>

      <div className="mt-4 flex justify-end">
        <button
          type="button"
          onClick={addRow}
          className="flex items-center justify-center px-4 py-2 bg-[#308E87] text-white rounded-md hover:bg-[#27766F] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#308E87] transition-all duration-150"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 mr-2"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
              clipRule="evenodd"
            />
          </svg>
          Add Row
        </button>
      </div>
    </div>
  );
}

export default MeterialIfo;
