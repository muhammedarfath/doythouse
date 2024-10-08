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
import * as XLSX from "xlsx";
import axios from "axios";
import { useOutletContext } from "react-router-dom";

function SalesReport() {
  const [isFilterVisible, setIsFilterVisible] = useState(false);
  const [salesReport, setSalesReport] = useState([]);
  const { open } = useOutletContext();

  useEffect(() => {
    fetchInvoices();
  }, []);

  const fetchInvoices = async () => {
    try {
      const response = await axios.get(
        "https://storeconvo.com/php/fetch.php?typ=sales1"
      );
      setSalesReport(response.data);
    } catch (error) {
      console.error("Error fetching invoices:", error);
    }
  };

  console.log(salesReport);
  const toggleFilter = () => {
    setIsFilterVisible(!isFilterVisible);
  };

  const downloadExcel = () => {
    const worksheet = XLSX.utils.json_to_sheet(salesReport);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Sales Report");
    XLSX.writeFile(workbook, "sales_report.xlsx");
  };

  const calculateProfit = (netTotal, cogs) => {
    return netTotal - cogs;
  };

  const calculateCredit = (netTotal, amountPaid) => {
    return netTotal - amountPaid;
  };

  return (
    <div className="flex items-center justify-center w-full">
      <div
        className={`w-full lg:max-w-screen-xl ${
          open ? "md:max-w-[32rem]" : "md:max-w-[40rem]"
        } max-w-[22rem] mx-auto`}
      >
        <div className="flex flex-col gap-6 mt-8">
          <h2 className="font-semibold text-xl text-black">Sales Report</h2>
          <div className="bg-white flex gap-5 flex-col rounded-2xl shadow-sm p-4 md:p-8 w-full">
            <div className="flex items-center justify-between mb-4 lg:flex-row gap-4 lg:gap-0 flex-col">
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
                  className="border rounded-md p-2 bg-[#D8E9E7] text-[#308E87]"
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
                  <TableHead className="text-right">COGS (Cost of Goods Sold)</TableHead>
                  <TableHead className="text-right">Net Total</TableHead>
                  <TableHead className="text-right">Credit</TableHead>
                  <TableHead className="text-right">Profit</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {salesReport.map((sale, index) => {
                  return (
                    <TableRow key={sale.id}>
                      <TableCell>
                        <input type="checkbox" />
                      </TableCell>
                      <TableCell className="font-medium">{index + 1}</TableCell>
                      <TableCell>{sale.sales_date}</TableCell>
                      <TableCell>{sale.invoice_no}</TableCell>
                      <TableCell>{sale.customer}</TableCell>
                      <TableCell className="text-right">
                        {sale.gstamount}
                      </TableCell>
                      <TableCell className="text-right">
                        {sale.cogs}
                      </TableCell>
                      <TableCell className="text-right">
                        {sale.nettotal}
                      </TableCell>
                      <TableCell className="text-right">{sale.credit}</TableCell>
                      <TableCell className="text-right">{sale.profit}</TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SalesReport;
