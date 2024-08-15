import React from "react";
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
import ExpenseModal from "@/components/modal/ExpenseModal";

const expenses = [
  {
    id: 1,
    date: "2024-08-01",
    type: "Travel",
    amount: "₹2000",
    employee: "John Doe",
    notes: "Business trip to Delhi",
  },
  {
    id: 2,
    date: "2024-08-10",
    type: "Office Supplies",
    amount: "₹500",
    employee: "Jane Smith",
    notes: "Purchased stationery items",
  },
];

function ExpenseList() {
  return (
    <div className="flex items-center justify-center w-full">
      <div className="w-full max-w-screen-xl mx-auto">
        <div className="flex flex-col gap-6 mt-8">
          <h2 className="font-semibold text-xl text-black">Expense List</h2>
          <div className="bg-white flex gap-5 flex-col rounded-2xl shadow-sm p-4 md:p-8 w-full">
            <div className="flex items-center justify-between mb-4">
              <div className="flex gap-2">
                <span>Search</span>
                <input
                  type="text"
                  placeholder="Search..."
                  className="h-10 border rounded px-4 w-64 bg-gray-50"
                />
              </div>
              <ExpenseModal />
            </div>

            <Table className="w-full">
              <TableCaption>A list of your expenses.</TableCaption>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[50px]">Select</TableHead>
                  <TableHead className="w-[50px]">SINO</TableHead>
                  <TableHead>Date</TableHead>
                  <TableHead>Expense Type</TableHead>
                  <TableHead className="text-right">Amount</TableHead>
                  <TableHead>Employee</TableHead>
                  <TableHead>Notes</TableHead>
                  <TableHead className="text-center w-[150px]">
                    Actions
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {expenses.map((expense, index) => (
                  <TableRow key={expense.id}>
                    <TableCell>
                      <input type="checkbox" />
                    </TableCell>
                    <TableCell className="font-medium">{index + 1}</TableCell>
                    <TableCell>{expense.date}</TableCell>
                    <TableCell>{expense.type}</TableCell>
                    <TableCell className="text-right">{expense.amount}</TableCell>
                    <TableCell>{expense.employee}</TableCell>
                    <TableCell>{expense.notes}</TableCell>
                    <TableCell className="text-center">
                      <div className="flex justify-center gap-4">
                        <Button className="bg-[#308E87] hover:bg-[#308E87] transition-transform transform hover:scale-110">
                          <AiFillEdit className="text-white text-xl" />
                        </Button>
                        <Button className="bg-[#f90303] hover:bg-[#ff1d52] transition-transform transform hover:scale-110">
                          <MdOutlineDelete className="text-white text-xl" />
                        </Button>
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

export default ExpenseList;
