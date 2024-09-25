import React from "react";
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table";
  import EditStockModal from "@/components/modal/EditStockModal";
  import { BiSolidTrashAlt } from "react-icons/bi";

function StockTable({ filteredStock, fetchStockReport, handleDelete }) {
  console.log(filteredStock);
  return (
    <Table className="w-full">
      <TableCaption>A list of your stock items.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[50px]">SINO</TableHead>
          <TableHead>Stock Item</TableHead>
          <TableHead>Unit</TableHead>
          <TableHead className="text-right">Total Quantity</TableHead>
          <TableHead className="text-right">MRP</TableHead>
          <TableHead>Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {filteredStock.length > 0 ? (
          filteredStock.map((stock, index) => (
            <TableRow key={stock.id}>
              <TableCell className="font-medium">{index + 1}</TableCell>
              <TableCell>{stock.items}</TableCell>
              <TableCell>{stock.unitname}</TableCell>
              <TableCell className="text-right">{stock.stockvalue}</TableCell>
              <TableCell className="text-right">{stock.mrp}</TableCell>
              <TableCell>
                <div className="flex justify-center gap-4">
                  <EditStockModal stock={stock} onSuccess={fetchStockReport} />
                  <BiSolidTrashAlt
                    className="text-[#495057] text-xl transition-transform transform hover:scale-110 cursor-pointer"
                    onClick={() => handleDelete(stock.stock_id)} 
                  />
                </div>
              </TableCell>
            </TableRow>
          ))
        ) : (
          <TableRow>
            <TableCell colSpan="6" className="text-center">
              No stock items found.
            </TableCell>
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
}

export default StockTable;