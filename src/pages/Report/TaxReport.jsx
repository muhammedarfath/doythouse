import React, { useState } from "react";
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

// Sample data for tax report
const salesTaxData = [
  {
    id: 1,
    invoiceNo: "INV-1001",
    date: "2024-08-01",
    gstNumber: "22AAAAA0000A1Z5",
    customerName: "John Doe",
    address: "123, Main Street, City, State",
    taxValue18: 1800,
    cgst9: 900,
    sgst9: 900,
    netTotal: 10800,
  },
  {
    id: 2,
    invoiceNo: "INV-1002",
    date: "2024-08-02",
    gstNumber: "22AAAAA0000A1Z6",
    customerName: "Jane Smith",
    address: "456, Second Street, City, State",
    taxValue18: 3600,
    cgst9: 1800,
    sgst9: 1800,
    netTotal: 21600,
  },
];

const purchaseTaxData = [
  // Sample data for purchase tax report
  // Add similar structure as above for purchase tax data
];

function TaxReport() {
  const [isFilterVisible, setIsFilterVisible] = useState(false);
  const [reportType, setReportType] = useState("sales");
  const [taxData, setTaxData] = useState(salesTaxData);

  const toggleFilter = () => {
    setIsFilterVisible(!isFilterVisible);
  };

  const handleReportTypeChange = (e) => {
    const selectedType = e.target.value;
    setReportType(selectedType);
    if (selectedType === "sales") {
      setTaxData(salesTaxData);
    } else {
      setTaxData(purchaseTaxData);
    }
  };

  // Calculate total tax values and net total
  const totalTaxValue18 = taxData.reduce(
    (total, item) => total + item.taxValue18,
    0
  );
  const totalCgst9 = taxData.reduce((total, item) => total + item.cgst9, 0);
  const totalSgst9 = taxData.reduce((total, item) => total + item.sgst9, 0);
  const totalNetTotal = taxData.reduce(
    (total, item) => total + item.netTotal,
    0
  );

  return (
    <div className="flex items-center justify-center w-full">
      <div className="w-full lg:max-w-screen-xl md:max-w-[35rem] max-w-[22rem] mx-auto ">
        <div className="flex flex-col gap-6 mt-8">
          <h2 className="font-semibold text-xl text-black">Tax Report</h2>
          <div className="bg-white flex gap-5 flex-col rounded-2xl shadow-sm p-4 md:p-8 w-full">
          <div className="flex items-center justify-between mb-4 lg:flex-row gap-4 lg:gap-0  flex-col">
              <div className="flex gap-2 items-center">
                <label htmlFor="report-type" className="text-sm font-medium">
                  Report Type:
                </label>
                <select
                  id="report-type"
                  value={reportType}
                  onChange={handleReportTypeChange}
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
                  <TableHead>GST Number</TableHead>
                  <TableHead>Customer Name</TableHead>
                  <TableHead>Address</TableHead>
                  <TableHead className="text-right">18% Tax Value</TableHead>
                  <TableHead className="text-right">9% CGST</TableHead>
                  <TableHead className="text-right">9% SGST</TableHead>
                  <TableHead className="text-right">Net Total</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {taxData.map((tax, index) => (
                  <TableRow key={tax.id}>
                    <TableCell className="font-medium">{index + 1}</TableCell>
                    <TableCell>{tax.invoiceNo}</TableCell>
                    <TableCell>{tax.date}</TableCell>
                    <TableCell>{tax.gstNumber}</TableCell>
                    <TableCell>{tax.customerName}</TableCell>
                    <TableCell>{tax.address}</TableCell>
                    <TableCell className="text-right">
                      ₹{tax.taxValue18.toLocaleString()}
                    </TableCell>
                    <TableCell className="text-right">
                      ₹{tax.cgst9.toLocaleString()}
                    </TableCell>
                    <TableCell className="text-right">
                      ₹{tax.sgst9.toLocaleString()}
                    </TableCell>
                    <TableCell className="text-right">
                      ₹{tax.netTotal.toLocaleString()}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
              <tfoot>
                <TableRow>
                  <TableCell colSpan={6} className="font-semibold text-right">
                    Total:
                  </TableCell>
                  <TableCell className="text-right font-semibold">
                    ₹{totalTaxValue18.toLocaleString()}
                  </TableCell>
                  <TableCell className="text-right font-semibold">
                    ₹{totalCgst9.toLocaleString()}
                  </TableCell>
                  <TableCell className="text-right font-semibold">
                    ₹{totalSgst9.toLocaleString()}
                  </TableCell>
                  <TableCell className="text-right font-semibold">
                    ₹{totalNetTotal.toLocaleString()}
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

export default TaxReport;
