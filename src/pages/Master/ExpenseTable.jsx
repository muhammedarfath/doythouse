import React from 'react';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../components/ui/table";
import EditExpenseModal from "@/components/modal/EditExpenseModal";
import { BiSolidTrashAlt } from "react-icons/bi";

function ExpenseTable({ expenses, filteredExpenses, fetchExpenseList, handleDelete }) {
  return (
    <Table>
      <TableCaption>A list of your expenses.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[50px]">Select</TableHead>
          <TableHead className="w-[50px]">SINO</TableHead>
          <TableHead>Date</TableHead>
          <TableHead>Expense Type</TableHead>
          <TableHead className="text-right">Amount</TableHead>
          {Array.isArray(expenses) && expenses.some((expense) => expense.expsub_type) && (
            <TableHead className="text-right">Sub Expense</TableHead>
          )}
          <TableHead>Employee</TableHead>
          <TableHead>Note</TableHead>
          <TableHead className="text-center">Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {filteredExpenses.length > 0 ? (
          filteredExpenses.map((expense, index) => (
            <TableRow key={expense.exp_id}>
              <TableCell>
                <input type="checkbox" />
              </TableCell>
              <TableCell>{index + 1}</TableCell>
              <TableCell>{expense.exp_date}</TableCell>
              <TableCell>{expense.exp_type}</TableCell>
              <TableCell className="text-right">
                {expense.exp_amount}
              </TableCell>
              {Array.isArray(expenses) &&
                expenses.some((expense) => expense.expsub_type) && (
                  <TableCell className="text-right">
                    {expense.subexp_name || ""}
                  </TableCell>
                )}
              <TableCell>{expense.employee_name}</TableCell>
              <TableCell>{expense.exp_note}</TableCell>
              <TableCell className="flex justify-center gap-4">
                <EditExpenseModal
                  expense={expense}
                  onChange={fetchExpenseList}
                />
                <BiSolidTrashAlt
                  onClick={() => handleDelete(expense.exp_id)}
                  className="text-[#495057] text-xl transition-transform transform hover:scale-110 cursor-pointer"
                />
              </TableCell>
            </TableRow>
          ))
        ) : (
          <TableRow>
            <TableCell colSpan="8" className="text-center">
              No expenses available.
            </TableCell>
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
}

export default ExpenseTable;
