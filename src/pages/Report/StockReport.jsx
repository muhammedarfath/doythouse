import React, { useEffect, useState } from "react";
import { Button } from "../../components/ui/button";
import { CiFilter } from "react-icons/ci";
import axios from "axios";
import * as XLSX from "xlsx";
import AddStock from "@/components/modal/AddStock";
import { toast } from "react-hot-toast";

import Search from "@/components/Search/Search";
import StockTable from "./StockTable";

function StockReport() {
  const [isFilterVisible, setIsFilterVisible] = useState(false);
  const [stockReport, setStockReport] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedStockItem, setSelectedStockItem] = useState("");
  const [stockItems, setStockItems] = useState([]); 

  useEffect(() => {
    fetchStockReport();
  }, []);

  const fetchStockReport = async () => {
    try {
      const response = await axios.get(
        "https://storeconvo.com/php/fetch.php?typ=stock"
      );
      setStockReport(response.data);

      const uniqueItems = [...new Set(response.data.map((stock) => stock.items))];
      setStockItems(uniqueItems); 
    } catch (error) {
      console.error("Error fetching stock report:", error);
    }
  };

  const toggleFilter = () => {
    setIsFilterVisible(!isFilterVisible);
  };

  const handleStockItems = (e) => {
    setSelectedStockItem(e.target.value);
  };

  const handleDelete = (stockId) => {
    toast(
      (t) => (
        <div>
          <p>Are you sure you want to delete this stock?</p>
          <div className="flex gap-2 mt-2">
            <button
              onClick={() => confirmDelete(stockId, t.id)}
              className="bg-red-500 text-white px-4 py-1 rounded"
            >
              Delete
            </button>
            <button
              onClick={() => toast.dismiss(t.id)}
              className="bg-gray-300 text-black px-4 py-1 rounded"
            >
              Cancel
            </button>
          </div>
        </div>
      ),
      { duration: 4000 }
    );
  };

  const confirmDelete = async (stockId, toastId) => {
    try {
      await axios.post(
        `https://storeconvo.com/php/delete.php/`,
        {
          id: stockId,
          typ: "stock",
        },
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }
      );
      setStockReport((prevStock) =>
        prevStock.filter((stock) => stock.stock_id !== stockId)
      );
      toast.success("Delete successful", { id: toastId });
    } catch (error) {
      toast.error("Error deleting stock:", error);
    }
  };

  const downloadExcel = () => {
    const worksheet = XLSX.utils.json_to_sheet(stockReport);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Stock Report");
    XLSX.writeFile(workbook, "stock_report.xlsx");
  };

  const filteredStock = stockReport
    .filter((stock) =>
      stock.items?.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .filter((stock) =>
      selectedStockItem ? stock.items === selectedStockItem : true
    );

  return (
    <div className="flex items-center justify-center w-full">
      <div className="w-full lg:max-w-screen-xl md:max-w-[35rem] max-w-[22rem] mx-auto">
        <div className="flex flex-col gap-6 mt-8">
          <h2 className="font-semibold text-xl text-black">Stock Report</h2>
          <div className="bg-white flex gap-5 flex-col rounded-2xl shadow-sm p-4 md:p-8 w-full">
            <div className="flex items-center justify-between mb-4 lg:flex-row gap-4 lg:gap-0 flex-col">
              <Search
                searchQuery={searchQuery}
                setSearchQuery={setSearchQuery}
                name={"stock"}
              />
              <div className="flex items-center gap-5">
                <div
                  className="border rounded-md p-2 bg-[#D8E9E7] text-[#308E87]"
                  onClick={toggleFilter}
                >
                  <CiFilter className="text-2xl cursor-pointer hover:animate-shake" />
                </div>
                <AddStock onSuccess={fetchStockReport} />
                <Button
                  className="bg-[#308E87] hover:bg-[#308E87]"
                  onClick={downloadExcel}
                >
                  Download XLS
                </Button>
              </div>
            </div>

            {isFilterVisible && (
              <div className="flex flex-wrap gap-4 mb-4">
                <div className="flex flex-col">
                  <label
                    htmlFor="stock-item-filter"
                    className="text-sm font-medium"
                  >
                    Filter by Stock Items
                  </label>
                  <select
                    id="stock-item-filter"
                    className="h-10 border rounded px-4 bg-gray-50 focus:ring-2 focus:ring-[#000] focus:ring-offset-0 outline-none"
                    value={selectedStockItem}
                    onChange={handleStockItems}
                  >
                    <option value="">All</option>
                    {stockItems.map((item, index) => (
                      <option key={index} value={item}>
                        {item}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            )}

            <StockTable
              filteredStock={filteredStock}
              fetchStockReport={fetchStockReport}
              handleDelete={handleDelete}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default StockReport;
