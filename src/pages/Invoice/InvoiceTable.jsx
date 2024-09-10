import React from "react";
import { BiSolidTrashAlt } from "react-icons/bi";
import EditInvoice from "@/components/modal/EditInvoice";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import PreInvoice from "./PreInvoice";



function InvoiceTable({ invoice, handleDelete }) {
  

  return (
    <Table className="w-full">
      <TableCaption>List of Purchase Entries</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[50px]">S.No</TableHead>
          <TableHead>Work Orders</TableHead>
          <TableHead>Address</TableHead>
          <TableHead>Product Name</TableHead>
          <TableHead>Total</TableHead>
          <TableHead>Cash Mode</TableHead>
          <TableHead className="text-center w-[120px]">Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {invoice.map((entry, index) => (
          <TableRow key={index}>
            <TableCell>{index + 1}</TableCell>
            <TableCell className="font-medium">
              {entry.cust_orderno}
            </TableCell>
            <TableCell>{entry.address}</TableCell>
            <TableCell>{entry.product_name}</TableCell>
            <TableCell>{entry.total}</TableCell>
            <TableCell>{entry.cash_option}</TableCell>
            <TableCell className="text-center">
              <div className="flex justify-center gap-4">
                <PreInvoice order_id={entry.cust_orderno}/>
                <EditInvoice entry={entry} />
                <BiSolidTrashAlt
                  onClick={() => handleDelete(entry.invoice_id)}
                  className="text-[#495057] text-xl transition-transform transform hover:scale-110 cursor-pointer"
                />
              </div>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}

export default InvoiceTable;
