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
import { MdOutlineDelete } from "react-icons/md";
import SupplierModal from "@/components/modal/SupplierModal";
import { Button } from "../../components/ui/button";
import { BiSolidTrashAlt } from "react-icons/bi";
import EditSupplierModal from "@/components/modal/EditSupplierModal";

const suppliers = [
  {
    name: "ABC Traders",
    contactPerson: "John Doe",
    mobile: "9876543210",
    balanceAmount: "₹1,500",
  },
  {
    name: "XYZ Supplies",
    contactPerson: "Jane Smith",
    mobile: "9123456789",
    balanceAmount: "₹3,200",
  },
  {
    name: "Global Industries",
    contactPerson: "Alice Johnson",
    mobile: "9988776655",
    balanceAmount: "₹2,750",
  },
  {
    name: "Sunrise Enterprises",
    contactPerson: "Michael Brown",
    mobile: "9876541230",
    balanceAmount: "₹5,100",
  },
  {
    name: "Quality Goods Co.",
    contactPerson: "Emily Davis",
    mobile: "9765432100",
    balanceAmount: "₹4,400",
  },
];

function SupplierList() {
  return (
    <div className="flex items-center justify-center w-full">
      <div className="w-full max-w-screen-xl mx-auto">
        <div className="flex flex-col gap-6 mt-8">
          <h2 className="font-semibold text-xl text-black">Supplier List</h2>
          <div className="bg-white flex gap-5 flex-col rounded-2xl shadow-sm p-4 md:p-8 w-full">
            <div className="flex items-center justify-between mb-4">
              <div className="flex gap-2">
                <span className="">Search</span>
                <input
                  type="text"
                  placeholder="Search..."
                  className="h-10 border rounded px-4 w-64 bg-[#fff] border-gray-300 text-gray-900 text-sm focus:ring-black focus:border-black block pl-5 pr-3 py-4"
                />
              </div>
              <SupplierModal />
            </div>

            <Table className="w-full">
              <TableCaption>List of Suppliers</TableCaption>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[50px]">S.No</TableHead>
                  <TableHead>Supplier Name</TableHead>
                  <TableHead>Contact Person</TableHead>
                  <TableHead>Mobile No</TableHead>
                  <TableHead className="text-right">Balance Amount</TableHead>
                  <TableHead className="text-center w-[120px]">
                    Actions
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {suppliers.map((supplier, index) => (
                  <TableRow key={index}>
                    <TableCell>{index + 1}</TableCell>
                    <TableCell className="font-medium">
                      {supplier.name}
                    </TableCell>
                    <TableCell>{supplier.contactPerson}</TableCell>
                    <TableCell>{supplier.mobile}</TableCell>
                    <TableCell className="text-right">
                      {supplier.balanceAmount}
                    </TableCell>
                    <TableCell className="text-center">
                      <div className="flex justify-center gap-4">
                        <EditSupplierModal/>
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

export default SupplierList;
