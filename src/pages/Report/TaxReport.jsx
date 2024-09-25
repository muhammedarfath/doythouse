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
import { CiFilter } from "react-icons/ci";

const salesTaxData = [
  {
    id: 1,
    invoiceNo: "INV-1001",
    date: "2024-08-01",
    customerName: "John Doe",
    phoneNumber: "9876543210",
    taxValue12: 1200,
    cgst6: 600,
    sgst6: 600,
    taxValue5: 500,
    cgst2_5: 250,
    sgst2_5: 250,
    netTotal: 15500,
  },
  {
    id: 2,
    invoiceNo: "INV-1002",
    date: "2024-08-02",
    customerName: "Jane Smith",
    phoneNumber: "9876543222",
    taxValue12: 2400,
    cgst6: 1200,
    sgst6: 1200,
    taxValue5: 1000,
    cgst2_5: 500,
    sgst2_5: 500,
    netTotal: 25500,
  },
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
    // Adjust logic if there are other report types, currently showing sales data.
    if (selectedType === "sales") {
      setTaxData(salesTaxData);
    }
  };

  // Calculate total tax values and net total
  const totalTaxValue12 = taxData.reduce((total, item) => total + item.taxValue12, 0);
  const totalCgst6 = taxData.reduce((total, item) => total + item.cgst6, 0);
  const totalSgst6 = taxData.reduce((total, item) => total + item.sgst6, 0);
  const totalTaxValue5 = taxData.reduce((total, item) => total + item.taxValue5, 0);
  const totalCgst2_5 = taxData.reduce((total, item) => total + item.cgst2_5, 0);
  const totalSgst2_5 = taxData.reduce((total, item) => total + item.sgst2_5, 0);
  const totalNetTotal = taxData.reduce((total, item) => total + item.netTotal, 0);

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
                  <TableHead>Customer Name</TableHead>
                  <TableHead>Phone Number</TableHead>
                  <TableHead className="text-right">12% GST</TableHead>
                  <TableHead className="text-right">5% GST</TableHead>
                  <TableHead className="text-right">Net Total</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {taxData.map((tax, index) => (
                  <TableRow key={tax.id}>
                    <TableCell className="font-medium">{index + 1}</TableCell>
                    <TableCell>{tax.invoiceNo}</TableCell>
                    <TableCell>{tax.date}</TableCell>
                    <TableCell>{tax.customerName}</TableCell>
                    <TableCell>{tax.phoneNumber}</TableCell>
                    <TableCell className="text-right">
                      <div>CGST: ₹{tax.cgst6.toLocaleString()}</div>
                      <div>SGST: ₹{tax.sgst6.toLocaleString()}</div>
                    </TableCell>
                    <TableCell className="text-right">
                      <div>CGST: ₹{tax.cgst2_5.toLocaleString()}</div>
                      <div>SGST: ₹{tax.sgst2_5.toLocaleString()}</div>
                    </TableCell>
                    <TableCell className="text-right">
                      ₹{tax.netTotal.toLocaleString()}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
              <tfoot>
                <TableRow>
                  <TableCell colSpan={5} className="font-semibold text-right">
                    Total:
                  </TableCell>
                  <TableCell className="text-right font-semibold">
                    CGST: ₹{totalCgst6.toLocaleString()}<br />SGST: ₹{totalSgst6.toLocaleString()}
                  </TableCell>
                  <TableCell className="text-right font-semibold">
                    CGST: ₹{totalCgst2_5.toLocaleString()}<br />SGST: ₹{totalSgst2_5.toLocaleString()}
                  </TableCell>
                  <TableCell className="text-right font-semibold">
                    ₹{totalNetTotal.toLocaleString()}
                  </TableCell>
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
