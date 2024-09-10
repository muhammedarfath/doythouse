import React, { useEffect } from "react";
import { Input } from "../../../components/ui/input";
import { Label } from "../../../components/ui/label";
import axios from "axios";

function MeterialIfo({
  stockReport,
  setStockReport,
  handleInputChange,
  inputValues,
}) {
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

  return (
    <div className="mb-80 w-full">
      <div className="flex flex-wrap">
        {stockReport.map((stock) => (
          <div
            key={stock.id}
            className="w-full md:w-1/2 mb-4 p-4 rounded-md"
          >
            <div className="flex items-center mb-4">
              <Label
                htmlFor={`stock-${stock.id}`}
                className="text-md font-bold w-1/4 text-right pr-4"
              >
                {stock.items}
              </Label>
              <Input
                id={`stock-${stock.id}`}
                type="number"
                placeholder={`Enter value for ${stock.items}`}
                value={inputValues[stock.stock_id] || ""}
                onChange={(e) => handleInputChange(e, stock.stock_id)}
                className="flex-1 border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MeterialIfo;
