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
  quantityDifferences
}) {
  const [errors, setErrors] = useState({});
  const [previousQuantities, setPreviousQuantities] = useState({});
  const [initialQuantities, setInitialQuantities] = useState({});
  const inputValues = inputValue;

  useEffect(() => {
    const total = Object.values(parsedInputValues)
      .reduce((sum, value) => {
        const mrp = parseFloat(value.mrp || 0);
        return sum + mrp;
      }, 0)
      .toFixed(2);

    setTotalMRP(total); 
  }, [inputValues]);



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
    // Set initial quantities on first load
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

  const addRow = () => {
    // Your implementation for adding a new row
  };

  const removeRow = (stock_id) => {
    const updatedValues = Object.keys(parsedInputValues)
      .filter((id) => id !== stock_id)
      .map(
        (id) =>
          `${id}=${parsedInputValues[id].quantity}=${parsedInputValues[id].mrp}`
      )
      .join(",");

    setInputValues(updatedValues);
    setPreviousQuantities((prev) => {
      const newPrev = { ...prev };
      delete newPrev[stock_id];
      return newPrev;
    });
  };

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
    const updatedValues = { ...parsedInputValues }; // Copy of parsedInputValues

    if (field === "quantity") {
      const initialQuantity = initialQuantities[stock_id]?.quantity || "0"; // Fallback to '0' if undefined
      const quantityValue = parseInt(value);

      if (isNaN(quantityValue) || quantityValue < 0) {
        return; // Ignore invalid inputs
      }

      // Update previous quantities
      setPreviousQuantities((prev) => ({
        ...prev,
        [stock_id]: initialQuantity,
      }));

      // Check if quantity exceeds available stock and set errors accordingly
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

      // Update the input values for this stock_id
      updatedValues[stock_id] = {
        quantity: quantityValue.toString(),
        mrp: updatedValues[stock_id].mrp,
      };

      // Update quantityDifferences to reflect the change
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

    // Check stock availability before incrementing
    const stockItem = stockReport.find(
      (stock) => stock.stock_id === stock_id
    );
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

    // Update MRP based on current quantity
    updatedValues[stock_id].mrp = (
      stockItem?.mrp * currentQuantity
    ).toString();

    // Update quantityDifferences to reflect the change
    setQuantityDifferences((prev) => ({
      ...prev,
      [stock_id]: currentQuantity - parseInt(initialQuantities[stock_id]?.quantity || "0"),
    }));

    const newInputValues = handleQuantityChange(updatedValues);
    setInputValues(newInputValues);
  };

  const handleDecrement = (stock_id) => {
    const currentQuantity = Math.max(
      0,
      parseInt(parsedInputValues[stock_id]?.quantity || "0") - 1
    );

    // Check stock availability before decrementing
    const stockItem = stockReport.find(
      (stock) => stock.stock_id === stock_id
    );
    if (currentQuantity < 0) return; // Prevent negative quantity

    const updatedValues = { ...parsedInputValues };
    updatedValues[stock_id].quantity = currentQuantity.toString();

    // Update MRP based on current quantity
    updatedValues[stock_id].mrp = (
      stockItem?.mrp * currentQuantity
    ).toString();

    // Update quantityDifferences to reflect the change
    setQuantityDifferences((prev) => ({
      ...prev,
      [stock_id]: currentQuantity - parseInt(initialQuantities[stock_id]?.quantity || "0"),
    }));

    const newInputValues = handleQuantityChange(updatedValues);
    setInputValues(newInputValues);
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
                  type="number"
                  value={parsedInputValues[stock_id]?.quantity || "0"}
                  onChange={(e) =>
                    handleInputChangeWithValidation(e, stock_id, "quantity")
                  }
                  className="w-16 text-center"
                  min="0"
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
                      d="M10 3a1 1 0 011 1v6h6a1 1 0 110 2h-6v6a1 1 0 11-2 0v-6H4a1 1 0 110-2h6V4a1 1 0 011-1z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
                {errors[stock_id] && (
                  <span className="text-red-500 text-xs">
                    {errors[stock_id]}
                  </span>
                )}
              </td>
  
              <td className="border border-gray-300 px-4 py-2">
                {parsedInputValues[stock_id]?.mrp || "0.00"}
              </td>
  
              <td className="border border-gray-300 px-4 py-2">
                <button
                  onClick={() => removeRow(stock_id)}
                  className="text-red-500 hover:text-red-700"
                >
                  Remove
                </button>
              </td>
            </tr>
          ))}
          
          {/* Row for Total MRP */}
          <tr className="font-bold">
            <td className="border border-gray-300 px-4 py-2" colSpan="2">Total MRP</td>
            <td className="border border-gray-300 px-4 py-2">
              {totalMRP || "0.00"}
            </td>
            <td className="border border-gray-300 px-4 py-2"></td>
          </tr>
        </tbody>
      </table>
  
      <div className="mt-4">
        <button
          onClick={addRow}
          className="bg-blue-500 text-white px-4 py-2 rounded-md"
        >
          Add Row
        </button>
      </div>
    </div>
  );
  
  
}

export default EditMeterialIfo;
