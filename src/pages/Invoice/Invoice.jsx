import React, { useState, useEffect } from "react";
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
import { BiSolidTrashAlt } from "react-icons/bi";
import NewPurchaseEntryModal from "@/components/modal/NewPurchaseEntryModal";
import EditPurchaseEntryModal from "@/components/modal/EditPurchaseEntryModal";
import jsPDF from "jspdf";
import 'jspdf-autotable'; // Import the jsPDF autotable plugin

function Invoice() {
  const [invoice, setInvoice] = useState([]);

  useEffect(() => {
    fetchInvoices();
  }, []);

  const fetchInvoices = async () => {
    try {
      const response = await axios.get(
        "https://storeconvo.com/php/fetch.php?typ=invoice"
      );
      setInvoice(response.data);
    } catch (error) {
      console.error("Error fetching invoices:", error);
    }
  };

  const generateInvoice = (entry) => {
    const doc = new jsPDF();
    const headers = ["Customer Name", "Mobile Number", "Address", "Balance", "Product Name", "Total", "Qty", "Cash Mode"];
    const rows = [
      [
        entry.customer_name,
        entry.mobile_number,
        entry.address,
        entry.balance,
        entry.product_name,
        entry.total,
        entry.qty,
        entry.cash_option,
      ]
    ];

    doc.text("Invoice", 14, 20);
    doc.autoTable({
      head: [headers],
      body: rows,
      startY: 30,
    });

    doc.save(`invoice_${entry.id}.pdf`);
  };

  return (
    <div className="flex items-center justify-center w-full">
      <div className="w-full lg:max-w-screen-xl md:max-w-[35rem] max-w-[22rem] mx-auto ">
        <div className="flex flex-col gap-6 mt-8">
          <h2 className="font-semibold text-xl text-black">Invoice List</h2>
          <div className="bg-white flex gap-5 flex-col rounded-2xl shadow-sm p-4 md:p-8 w-full">
            <div className="flex items-center justify-between mb-4 lg:flex-row gap-4 lg:gap-0 flex-col">
              <div className="flex gap-2">
                <span>Search</span>
                <input
                  type="text"
                  placeholder="Search..."
                  className="h-10 border rounded px-4 w-64 bg-[#fff] border-gray-300 text-gray-900 text-sm focus:ring-black focus:border-black block pl-5 pr-3 py-4"
                />
              </div>
            </div>

            <Table className="w-full">
              <TableCaption>List of Purchase Entries</TableCaption>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[50px]">S.No</TableHead>
                  <TableHead>Customer Name</TableHead>
                  <TableHead>Mobile Number</TableHead>
                  <TableHead>Address</TableHead>
                  <TableHead>Balance</TableHead>
                  <TableHead>Product Name</TableHead>
                  <TableHead>Total</TableHead>
                  <TableHead>Qty</TableHead>
                  <TableHead>Cash Mode</TableHead>
                  <TableHead className="text-center w-[120px]">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {invoice.map((entry, index) => (
                  <TableRow key={index}>
                    <TableCell>{index + 1}</TableCell>
                    <TableCell className="font-medium">{entry.customer_name}</TableCell>
                    <TableCell>{entry.mobile_number}</TableCell>
                    <TableCell>{entry.address}</TableCell>
                    <TableCell>{entry.balance}</TableCell>
                    <TableCell>{entry.product_name}</TableCell>
                    <TableCell>{entry.total}</TableCell>
                    <TableCell>{entry.qty}</TableCell>
                    <TableCell>{entry.cash_option}</TableCell>
                    <TableCell className="text-center">
                      <div className="flex justify-center gap-4">
                        <EditPurchaseEntryModal />
                        <button
                          onClick={() => generateInvoice(entry)}
                          className="text-blue-500 text-xl transition-transform transform hover:scale-110 cursor-pointer"
                        >
                          Generate
                        </button>
                        <BiSolidTrashAlt className="text-[#495057] text-xl transition-transform transform hover:scale-110 cursor-pointer" />
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

export default Invoice;
