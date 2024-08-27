import React from "react";
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

const purchaseEntries = [
  {
    supplierName: "ABC Traders",
    purchaseDate: "2024-08-01",
    productName: "Product A",
    mrp: "₹500",
    qty: 10,
    rate: "₹450",
    discount: "₹50",
    total: "₹4,500",
    cgst: "₹225",
    sgst: "₹225",
  },
  {
    supplierName: "XYZ Supplies",
    purchaseDate: "2024-08-02",
    productName: "Product B",
    mrp: "₹300",
    qty: 5,
    rate: "₹270",
    discount: "₹30",
    total: "₹1,350",
    cgst: "₹67.5",
    sgst: "₹67.5",
  },
];

function PurchaseEntryList() {
  return (
    <div className="flex items-center justify-center w-full">
      <div className="w-full lg:max-w-screen-xl md:max-w-[35rem] max-w-[22rem] mx-auto ">
        <div className="flex flex-col gap-6 mt-8">
          <h2 className="font-semibold text-xl text-black">
            Purchase Entry List
          </h2>
          <div className="bg-white flex gap-5 flex-col rounded-2xl shadow-sm p-4 md:p-8 w-full">
            <div className="flex items-center justify-between mb-4 lg:flex-row gap-4 lg:gap-0  flex-col">
              <div className="flex gap-2">
                <span className="">Search</span>
                <input
                  type="text"
                  placeholder="Search..."
                  className="h-10 border rounded px-4 w-64 bg-[#fff] border-gray-300 text-gray-900 text-sm focus:ring-black focus:border-black block pl-5 pr-3 py-4"
                />
              </div>
              <NewPurchaseEntryModal />
            </div>

            <Table className="w-full">
              <TableCaption>List of Purchase Entries</TableCaption>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[50px]">S.No</TableHead>
                  <TableHead>Supplier Name</TableHead>
                  <TableHead>Purchase Date</TableHead>
                  <TableHead>Product Name</TableHead>
                  <TableHead>MRP</TableHead>
                  <TableHead>Qty</TableHead>
                  <TableHead>Rate</TableHead>
                  <TableHead>Discount</TableHead>
                  <TableHead>Total</TableHead>
                  <TableHead>CGST</TableHead>
                  <TableHead>SGST</TableHead>
                  <TableHead className="text-center w-[120px]">
                    Actions
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {purchaseEntries.map((entry, index) => (
                  <TableRow key={index}>
                    <TableCell>{index + 1}</TableCell>
                    <TableCell className="font-medium">
                      {entry.supplierName}
                    </TableCell>
                    <TableCell>{entry.purchaseDate}</TableCell>
                    <TableCell>{entry.productName}</TableCell>
                    <TableCell>{entry.mrp}</TableCell>
                    <TableCell>{entry.qty}</TableCell>
                    <TableCell>{entry.rate}</TableCell>
                    <TableCell>{entry.discount}</TableCell>
                    <TableCell>{entry.total}</TableCell>
                    <TableCell>{entry.cgst}</TableCell>
                    <TableCell>{entry.sgst}</TableCell>
                    <TableCell className="text-center">
                      <div className="flex justify-center gap-4">
                        <EditPurchaseEntryModal />
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

export default PurchaseEntryList;
