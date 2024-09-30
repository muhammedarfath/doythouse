import React, { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import axios from "axios";

function EditMeterialIfo({
  stockReport,
  setStockReport,
  setInputValues,
  inputValue,
  totalMRP,
  setTotalMRP,
  setQuantityDifferences,
  quantityDifferences,
}) {
  const [errors, setErrors] = useState({});
  const [previousQuantities, setPreviousQuantities] = useState({});
  const [initialQuantities, setInitialQuantities] = useState({});
  const inputValues = inputValue;

  const parseInputValues = (inputValues) => {
    const parsedValues = {};
    const items = inputValues.split(",");

    items.forEach((item) => {
      const [stock_id, quantity, mrp] = item.split("=");
      parsedValues[stock_id] = { quantity, mrp };
    });

    return parsedValues;
  };

  const parsedInputValues = parseInputValues(inputValues);

  useEffect(() => {
    setInitialQuantities(parseInputValues(inputValues));

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
    const total = Object.values(parsedInputValues)
      .reduce((sum, value) => {
        const mrp = parseFloat(value.mrp || 0);
        return sum + mrp;
      }, 0)
      .toFixed(2);

    setTotalMRP(total);
  }, [inputValues]);

  const handleQuantityChange = (updatedValues) => {
    const newInputValues = Object.keys(updatedValues)
      .map((id) => {
        const quantity = updatedValues[id].quantity;
        const mrp = updatedValues[id].mrp;

        return `${id}=${quantity}=${mrp}`;
      })
      .join(",");

    return newInputValues;
  };

  const handleInputChangeWithValidation = (e, stock_id, field) => {
    const { value } = e.target;
    const updatedValues = { ...parsedInputValues };
    if (field === "stock_id") {
      const newStockId = value;
      updatedValues[newStockId] = updatedValues[stock_id];
      delete updatedValues[stock_id];

      const newInputValues = handleQuantityChange(updatedValues);
      setInputValues(newInputValues);
    } else if (field === "quantity") {
      const initialQuantity = initialQuantities[stock_id]?.quantity || "0";
      const quantityValue = parseInt(value);

      if (isNaN(quantityValue) || quantityValue < 0) {
        return;
      }

      setPreviousQuantities((prev) => ({
        ...prev,
        [stock_id]: initialQuantity,
      }));

      const stockItem = stockReport.find(
        (stock) => stock.stock_id === stock_id
      );
      if (stockItem) {
        if (quantityValue > stockItem.stockvalue) {
          setErrors((prevErrors) => ({
            ...prevErrors,
            [stock_id]: `Quantity exceeds available stock (${stockItem.stockvalue})`,
          }));
          return;
        } else {
          setErrors((prevErrors) => ({
            ...prevErrors,
            [stock_id]: "",
          }));
        }
      }

      updatedValues[stock_id] = {
        quantity: quantityValue.toString(),
        mrp: updatedValues[stock_id].mrp,
      };

      setQuantityDifferences((prev) => ({
        ...prev,
        [stock_id]: quantityValue - parseInt(initialQuantity),
      }));

      const newInputValues = handleQuantityChange(updatedValues);
      setInputValues(newInputValues);
    }
  };

  const handleIncrement = (stock_id) => {
    const currentQuantity =
      parseInt(parsedInputValues[stock_id]?.quantity || "0") + 1;

    const stockItem = stockReport.find((stock) => stock.stock_id === stock_id);
    if (stockItem && currentQuantity > stockItem.stockvalue) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        [stock_id]: `Quantity exceeds available stock (${stockItem.stockvalue})`,
      }));
      return;
    } else {
      setErrors((prevErrors) => ({
        ...prevErrors,
        [stock_id]: "",
      }));
    }

    const updatedValues = { ...parsedInputValues };
    updatedValues[stock_id].quantity = currentQuantity.toString();
    updatedValues[stock_id].mrp = (stockItem?.mrp * currentQuantity).toString();
    setQuantityDifferences((prev) => ({
      ...prev,
      [stock_id]:
        currentQuantity -
        parseInt(initialQuantities[stock_id]?.quantity || "0"),
    }));

    const newInputValues = handleQuantityChange(updatedValues);
    setInputValues(newInputValues);
  };

  const handleDecrement = (stock_id) => {
    const currentQuantity = Math.max(
      0,
      parseInt(parsedInputValues[stock_id]?.quantity || "0") - 1
    );

    const stockItem = stockReport.find((stock) => stock.stock_id === stock_id);
    if (currentQuantity < 0) return; // Prevent negative quantity

    const updatedValues = { ...parsedInputValues };
    updatedValues[stock_id].quantity = currentQuantity.toString();

    updatedValues[stock_id].mrp = (stockItem?.mrp * currentQuantity).toString();

    setQuantityDifferences((prev) => ({
      ...prev,
      [stock_id]:
        currentQuantity -
        parseInt(initialQuantities[stock_id]?.quantity || "0"),
    }));

    const newInputValues = handleQuantityChange(updatedValues);
    setInputValues(newInputValues);
  };

  const addRow = () => {
    const newStockId = `new${Object.keys(parsedInputValues).length + 1}`;
    const updatedValues = {
      ...parsedInputValues,
      [newStockId]: { quantity: "0", mrp: "0.00" },
    };

    const newInputValues = Object.keys(updatedValues)
      .map(
        (id) => `${id}=${updatedValues[id].quantity}=${updatedValues[id].mrp}`
      )
      .join(",");

    setInputValues(newInputValues);
    setQuantityDifferences((prev) => ({
      ...prev,
      [newStockId]: 0,
    }));
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
          {Object.keys(parsedInputValues).map((stock_id) => (
            <tr key={stock_id}>
              <td className="border border-gray-300 px-4 py-2">
                <select
                  value={stock_id}
                  onChange={(e) =>
                    handleInputChangeWithValidation(e, stock_id, "stock_id")
                  }
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

              <td className="border border-gray-300 px-4 py-2 flex items-center">
                <button
                  type="button"
                  onClick={() => handleDecrement(stock_id)}
                  className="p-2 bg-gray-300 rounded-l-md focus:outline-none"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-black"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>

                <Input
                  className="w-16"
                  placeholder="Quantity"
                  type="number"
                  id={`quantity-${stock_id}`}
                  value={parsedInputValues[stock_id]?.quantity || ""}
                  onChange={(e) =>
                    handleInputChangeWithValidation(e, stock_id, "quantity")
                  }
                  disabled={!stock_id}
                  required
                />

                <button
                  type="button"
                  onClick={() => handleIncrement(stock_id)}
                  className="p-2 bg-gray-300 rounded-r-md focus:outline-none"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-black"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 5a1 1 0 011 1v4h4a1 1 0 110 2h-4v4a1 1 0 11-2 0v-4H5a1 1 0 110-2h4V6a1 1 0 011-1z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
                {errors[stock_id] && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors[stock_id]}
                  </p>
                )}
              </td>

              <td className="border border-gray-300 px-4 py-2">
                <Input
                  className="w-24"
                  placeholder="MRP"
                  type="text"
                  id={`mrp-${stock_id}`}
                  value={parsedInputValues[stock_id]?.mrp || ""}
                />
              </td>
            </tr>
          ))}
        </tbody>
        <tr className="font-bold">
          <td className="border border-gray-300 px-4 py-2" colSpan="2">
            Total MRP
          </td>
          <td className="border border-gray-300 px-4 py-2">
            {totalMRP || "0.00"}
          </td>
          <td className="border border-gray-300 px-4 py-2"></td>
        </tr>
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

export default EditMeterialIfo;
