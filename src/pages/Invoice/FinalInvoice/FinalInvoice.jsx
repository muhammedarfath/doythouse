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
import FinalInvoiceCard from "./FinalInvoiceCard";

function FinalInvoice({ invoice,fetchInvoices }) {

  return (
    <Table className="w-full">
      <TableCaption>List of Purchase Entries</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[50px]">S.No</TableHead>
          <TableHead>Work Orders</TableHead>
          <TableHead>Address</TableHead>
          <TableHead>Product Name</TableHead>
          <TableHead>Date</TableHead>
          <TableHead>Cash Mode</TableHead>
          <TableHead className="text-center w-[120px]">Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {invoice.map((entry, index) => (
          <TableRow key={index}>
            <TableCell>{index + 1}</TableCell>
            <TableCell className="font-medium">{entry.cust_orderno}</TableCell>
            <TableCell>{entry.address}</TableCell>
            <TableCell>{entry.product}</TableCell>
            <TableCell>{entry.date}</TableCell>
            <TableCell>{entry.cash_option}</TableCell>
            <TableCell className="text-center">
              <div className="flex justify-center gap-4">
                <FinalInvoiceCard order_id={entry.cust_orderno} onSuccess={fetchInvoices} invoice={entry}/>
              </div>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}

export default FinalInvoice;
