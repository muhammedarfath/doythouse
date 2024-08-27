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
import { AiFillEdit } from "react-icons/ai";
import { MdOutlineDelete } from "react-icons/md";
import { CiFilter } from "react-icons/ci";
import axios from "axios";

// Sample data for stock report
const stockData = [
  {
    id: 1,
    category: "normal kurthi",
    items: 150,
    stockValue: "₹300,000",
  },
  {
    id: 2,
    category: "model kurthi",
    items: 80,
    stockValue: "₹120,000",
  },
];

function StockReport() {
  const [isFilterVisible, setIsFilterVisible] = useState(false);

  const [stockReport, setStockReport] = useState([]);

  useEffect(() => {
    const fetchStockReport = async () => {
      try {
        const response = await axios.get(
          "https://storeconvo.com/php/fetch.php?typ=stock"
        );
        setStockReport(response.data);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };
    fetchStockReport();
  }, [])


 console.log(stockReport);


  const toggleFilter = () => {
    setIsFilterVisible(!isFilterVisible);
  };





  const totalItems = stockData.reduce((total, item) => total + item.items, 0);
  const totalStockValue = stockData.reduce(
    (total, item) => total + parseInt(item.stockValue.replace(/[^0-9]/g, "")),
    0
  );

  return (
    <div className="flex items-center justify-center w-full">
      <div className="w-full lg:max-w-screen-xl md:max-w-[35rem] max-w-[22rem] mx-auto ">
        <div className="flex flex-col gap-6 mt-8">
          <h2 className="font-semibold text-xl text-black">Stock Report</h2>
          <div className="bg-white flex gap-5 flex-col rounded-2xl shadow-sm p-4 md:p-8 w-full">
            <div className="flex items-center justify-between mb-4 lg:flex-row gap-4 lg:gap-0  flex-col">
              <div className="flex gap-2">
                <span>Search</span>
                <input
                  type="text"
                  placeholder="Search..."
                  className="h-10 border rounded px-4 w-64 bg-gray-50"
                />
              </div>
              <div className="flex items-center gap-5">
                <div
                  className="border rounded-md p-2 bg-[#D8E9E7] text-[#308E87] "
                  onClick={toggleFilter}
                >
                  <CiFilter className="text-2xl cursor-pointer hover:animate-shake" />
                </div>
                <Button className="bg-[#308E87] hover:bg-[#308E87]">
                  Download XLS
                </Button>
              </div>
            </div>

            {isFilterVisible && (
              <div className="flex flex-wrap gap-4 mb-4">
                <div className="flex flex-col">
                  <label htmlFor="from-date" className="text-sm font-medium">
                    From Date
                  </label>
                  <input
                    type="date"
                    id="from-date"
                    className="h-10 border rounded px-4 bg-gray-50"
                  />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="to-date" className="text-sm font-medium">
                    To Date
                  </label>
                  <input
                    type="date"
                    id="to-date"
                    className="h-10 border rounded px-4 bg-gray-50"
                  />
                </div>
              </div>
            )}

            <Table className="w-full">
              <TableCaption>A list of your stock items.</TableCaption>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[50px]">SINO</TableHead>
                  <TableHead>Sub Category</TableHead>
                  <TableHead>Items</TableHead>
                  <TableHead className="text-right">Stock Value</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {stockData.map((stock, index) => (
                  <TableRow key={stock.id}>
                    <TableCell className="font-medium">{index + 1}</TableCell>
                    <TableCell>{stock.category}</TableCell>
                    <TableCell>{stock.items}</TableCell>
                    <TableCell className="text-right">
                      {stock.stockValue}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
              <tfoot>
                <TableRow>
                  <TableCell colSpan={2} className="font-semibold text-right">
                    Total:
                  </TableCell>
                  <TableCell className="font-semibold">{totalItems}</TableCell>
                  <TableCell className="text-right font-semibold">
                    ₹{totalStockValue.toLocaleString()}
                  </TableCell>
                  <TableCell></TableCell>
                </TableRow>
              </tfoot>
            </Table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StockReport;
