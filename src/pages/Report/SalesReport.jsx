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
import * as XLSX from "xlsx";
import axios from "axios";

const salesData = [
  {
    id: 1,
    date: "2024-08-01",
    invoiceNumber: "INV001",
    customer: "John Doe",
    gstAmount: "₹180",
    discount: "₹200",
    netTotal: "₹2000",
    credit: "₹0",
    profit: "₹500",
  },
  {
    id: 2,
    date: "2024-08-10",
    invoiceNumber: "INV002",
    customer: "Jane Smith",
    gstAmount: "₹90",
    discount: "₹50",
    netTotal: "₹1500",
    credit: "₹200",
    profit: "₹300",
  },
];

function SalesReport() {
  const [isFilterVisible, setIsFilterVisible] = useState(false);
  const [salesReport, setSalesReport] = useState([]);

  useEffect(() => {
    const fetchSalesReport = async () => {
      try {
        const response = await axios.get(
          "https://storeconvo.com/php/fetch.php?typ=sales"
        );
        setSalesReport(response.data);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };
    fetchSalesReport();
  }, []);


  const toggleFilter = () => {
    setIsFilterVisible(!isFilterVisible);
  };

  const downloadExcel = () => {
    const worksheet = XLSX.utils.json_to_sheet(salesData);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Sales Report");
    XLSX.writeFile(workbook, "sales_report.xlsx");
  };

  return (
    <div className="flex items-center justify-center w-full">
      <div className="w-full lg:max-w-screen-xl md:max-w-[35rem] max-w-[22rem] mx-auto ">
        <div className="flex flex-col gap-6 mt-8">
          <h2 className="font-semibold text-xl text-black">Sales Report</h2>
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
                <div className="flex flex-col">
                  <label
                    htmlFor="sort-by-employee"
                    className="text-sm font-medium"
                  >
                    Sort by Employee
                  </label>
                  <select
                    id="sort-by-employee"
                    className="h-10 border rounded px-4 bg-gray-50"
                  >
                    <option value="">Select Employee</option>
                    <option value="John Doe">John Doe</option>
                    <option value="Jane Smith">Jane Smith</option>
                  </select>
                </div>
              </div>
            )}

            <Table className="w-full">
              <TableCaption>A list of your sales reports.</TableCaption>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[50px]">Select</TableHead>
                  <TableHead className="w-[50px]">SINO</TableHead>
                  <TableHead>Date</TableHead>
                  <TableHead>Invoice Number</TableHead>
                  <TableHead>Customer</TableHead>
                  <TableHead className="text-right">GST Amount</TableHead>
                  <TableHead className="text-right">Discount</TableHead>
                  <TableHead className="text-right">Net Total</TableHead>
                  <TableHead className="text-right">Credit</TableHead>
                  <TableHead className="text-right">Profit</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {salesData.map((sale, index) => (
                  <TableRow key={sale.id}>
                    <TableCell>
                      <input type="checkbox" />
                    </TableCell>
                    <TableCell className="font-medium">{index + 1}</TableCell>
                    <TableCell>{sale.date}</TableCell>
                    <TableCell>{sale.invoiceNumber}</TableCell>
                    <TableCell>{sale.customer}</TableCell>
                    <TableCell className="text-right">
                      {sale.gstAmount}
                    </TableCell>
                    <TableCell className="text-right">
                      {sale.discount}
                    </TableCell>
                    <TableCell className="text-right">
                      {sale.netTotal}
                    </TableCell>
                    <TableCell className="text-right">{sale.credit}</TableCell>
                    <TableCell className="text-right">{sale.profit}</TableCell>
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

export default SalesReport;
