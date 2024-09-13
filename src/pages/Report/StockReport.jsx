import React, { useEffect, useState } from "react";
import { Button } from "../../components/ui/button";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../components/ui/table";
import { CiFilter } from "react-icons/ci";
import axios from "axios";
import * as XLSX from "xlsx";
import UnitModal from "@/components/modal/UnitModal";
import AddStock from "@/components/modal/AddStock";
import { toast } from "react-hot-toast";
import EditStockModal from "@/components/modal/EditStockModal";
import { BiSolidTrashAlt } from "react-icons/bi";

function StockReport() {
  const [isFilterVisible, setIsFilterVisible] = useState(false);
  const [stockReport, setStockReport] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedSubcategory, setSelectedSubcategory] = useState("");

  useEffect(() => {
    fetchStockReport();
  }, []);

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

  const toggleFilter = () => {
    setIsFilterVisible(!isFilterVisible);
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSubcategoryFilterChange = (e) => {
    setSelectedSubcategory(e.target.value);
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
      toast.error("Error deleting supplier:", error);
    }
  };

  const downloadExcel = () => {
    const worksheet = XLSX.utils.json_to_sheet(stockReport);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Stock Report");
    XLSX.writeFile(workbook, "stock_report.xlsx");
  };

console.log(stockReport);

  return (
    <div className="flex items-center justify-center w-full">
      <div className="w-full lg:max-w-screen-xl md:max-w-[35rem] max-w-[22rem] mx-auto">
        <div className="flex flex-col gap-6 mt-8">
          <h2 className="font-semibold text-xl text-black">Stock Report</h2>
          <div className="bg-white flex gap-5 flex-col rounded-2xl shadow-sm p-4 md:p-8 w-full">
            <div className="flex items-center justify-between mb-4 lg:flex-row gap-4 lg:gap-0 flex-col">
              <div className="flex gap-2">
                <span>Search</span>
                <input
                  type="text"
                  placeholder="Search by stock..."
                  className="h-10 border rounded px-4 w-64 bg-gray-50"
                  value={searchTerm}
                  onChange={handleSearchChange}
                />
              </div>
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
                    htmlFor="subcategory-filter"
                    className="text-sm font-medium"
                  >
                    Filter by Subcategory
                  </label>
                  <select
                    id="subcategory-filter"
                    className="h-10 border rounded px-4 bg-gray-50"
                    value={selectedSubcategory}
                    onChange={handleSubcategoryFilterChange}
                  >
                    <option value="">All</option>
                    {[
                      ...new Set(stockReport.map((item) => item.subcat_name)),
                    ].map((subcategory) => (
                      <option key={subcategory} value={subcategory}>
                        {subcategory}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            )}

            <Table className="w-full">
              <TableCaption>A list of your stock items.</TableCaption>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[50px]">SINO</TableHead>
                  <TableHead>Stock Item</TableHead>
                  <TableHead>Unit</TableHead>
                  <TableHead className="text-right">Total Stock</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {stockReport.map((stock, index) => (
                  <TableRow key={stock.id}>
                    <TableCell className="font-medium">{index + 1}</TableCell>
                    <TableCell>{stock.items}</TableCell>
                    <TableCell>{stock.unitname}</TableCell>
                    <TableCell className="text-right">
                      {stock.stockvalue || "N/A"}
                    </TableCell>
                    <TableCell>
                      <div className="flex justify-center gap-4">
                        <EditStockModal
                          stock={stock}
                          onSuccess={fetchStockReport}
                        />
                        <BiSolidTrashAlt
                          className="text-[#495057] text-xl transition-transform transform hover:scale-110 cursor-pointer"
                          onClick={() => handleDelete(stock.stock_id)}
                        />
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StockReport;
