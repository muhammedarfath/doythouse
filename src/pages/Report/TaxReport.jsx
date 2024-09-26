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
import { useOutletContext } from "react-router-dom";
import axios from "axios";

function TaxReport() {
  const [isFilterVisible, setIsFilterVisible] = useState(false);
  const [reportType, setReportType] = useState("sales");
  const [TaxReport, setTaxReport] = useState([]);
  const { open } = useOutletContext();

  useEffect(() => {
    fetchTax();
  }, []);

  const fetchTax = async () => {
    try {
      const response = await axios.get(
        "https://storeconvo.com/php/fetch.php?typ=tax"
      );
      setTaxReport(response.data);
    } catch (error) {
      console.error("Error fetching invoices:", error);
    }
  };

  console.log(TaxReport);

  const toggleFilter = () => {
    setIsFilterVisible(!isFilterVisible);
  };

  return (
    <div className="flex items-center justify-center w-full">
      <div className="w-full lg:max-w-screen-xl md:max-w-[35rem] max-w-[22rem] mx-auto ">
        <div className="flex flex-col gap-6 mt-8">
          <h2 className="font-semibold text-xl text-black">Tax Report</h2>
          <div className="bg-white flex gap-5 flex-col rounded-2xl shadow-sm p-4 md:p-8 w-full">
            <div className="flex items-center justify-between mb-4 lg:flex-row gap-4 lg:gap-0 flex-col">
              <div className="flex gap-2 items-center">
                <label htmlFor="report-type" className="text-sm font-medium">
                  Report Type:
                </label>
                <select
                  id="report-type"
                  value={reportType}
                  className="h-10 border rounded px-4 bg-gray-50"
                >
                  <option value="sales">Sales Tax Report</option>
                  <option value="purchase">Purchase Tax Report</option>
                </select>
              </div>
              <div className="flex items-center gap-5">
                <div
                  className="border rounded-md p-2 bg-[#D8E9E7] text-[#308E87]"
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
              <TableCaption>A list of your tax reports.</TableCaption>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[50px]">SINO</TableHead>
                  <TableHead>Invoice No</TableHead>
                  <TableHead>Date</TableHead>
                  <TableHead>Customer Name</TableHead>
                  <TableHead>Phone Number</TableHead>
                  <TableHead className="text-right">SGST</TableHead>
                  <TableHead className="text-right">CGST</TableHead>
                  <TableHead className="text-right">Net Total</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {TaxReport.map((tax, index) => (
                  <TableRow key={tax.tax_id}>
                    <TableCell className="font-medium">{index + 1}</TableCell>
                    <TableCell>{tax.invoice_no}</TableCell>
                    <TableCell>{tax.date}</TableCell>
                    <TableCell>{tax.customername}</TableCell>
                    <TableCell>{tax.phone}</TableCell>
                    <TableCell className="text-right">₹{tax.sgst}</TableCell>
                    <TableCell className="text-right">₹{tax.cgst}</TableCell>
                    <TableCell className="text-right">₹{tax.nettotal}</TableCell>
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

export default TaxReport;
