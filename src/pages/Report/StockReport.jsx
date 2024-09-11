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

  // const filteredStockReport = stockReport.filter((item) => {
  //   const matchesSearchTerm = item.subcat_name
  //     .toLowerCase()
  //     .includes(searchTerm.toLowerCase());
  //   const matchesSubcategory =
  //     selectedSubcategory === "" || item.subcat_name === selectedSubcategory;
  //   return matchesSearchTerm && matchesSubcategory;
  // });

  // const totalItems = filteredStockReport.reduce((total, item) => {
  //   const itemCount = item.count ? parseInt(item.count) : 0;
  //   return total + itemCount;
  // }, 0);

  // const totalStockValue = filteredStockReport.reduce((total, item) => {
  //   const stockValue = item.total_purchase_price
  //     ? parseInt(item.total_purchase_price.replace(/[^0-9]/g, ""))
  //     : 0;
  //   return total + stockValue;
  // }, 0);


  const downloadExcel = () => {
    const worksheet = XLSX.utils.json_to_sheet(stockReport);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Stock Report");
    XLSX.writeFile(workbook, "stock_report.xlsx");
  };


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
                <AddStock onSuccess={fetchStockReport}/>
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
                  <TableHead className="text-right">Stock Value</TableHead>
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
