import React, { useEffect, useState } from "react";
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
import { CiFilter } from "react-icons/ci";
import { BiSolidTrashAlt } from "react-icons/bi";
import axios from "axios";
import EditExpenseModal from "@/components/modal/EditExpenseModal";

function ExpenseList() {
  const [isFilterVisible, setIsFilterVisible] = useState(false);
  const [expenses, setExpenses] = useState([]);

  useEffect(() => {
    const fetchExpenseList = async () => {
      try {
        const response = await axios.get(
          "https://storeconvo.com/php/fetch.php?typ=expense"
        );
        setExpenses(response.data);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchExpenseList();
  }, []);



  const toggleFilter = () => {
    setIsFilterVisible(!isFilterVisible);
  };

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
              <div className="flex items-center gap-5">
                <div
                  className="border rounded-md p-2 bg-[#D8E9E7] text-[#308E87] "
                  onClick={toggleFilter}
                >
                  <CiFilter className="text-2xl cursor-pointer hover:animate-shake" />
                </div>

                <ExpenseModal />
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
                <div className="flex flex-col">
                  <label htmlFor="sort-by-type" className="text-sm font-medium">
                    Sort by Expense Type
                  </label>
                  <select
                    id="sort-by-type"
                    className="h-10 border rounded px-4 bg-gray-50"
                  >
                    <option value="">Select Type</option>
                    <option value="Travel">Travel</option>
                    <option value="Office Supplies">Office Supplies</option>
                    <option value="Meals">Meals</option>
                    <option value="Accommodation">Accommodation</option>
                  </select>
                </div>
                <div className="flex flex-col">
                  <label
                    htmlFor="sort-by-employee"
                    className="text-sm font-medium"
                  >
                    Sort by Employee Name
                  </label>
                  <select
                    id="sort-by-employee"
                    className="h-10 border rounded px-4 bg-gray-50"
                  >
                    <option value="">Select Employee</option>
                    <option value="John Doe">John Doe</option>
                    <option value="Jane Smith">Jane Smith</option>
                  </select>
                </div>
              </div>
            )}

            <Table className="w-full">
              <TableCaption>A list of your expenses.</TableCaption>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[50px]">Select</TableHead>
                  <TableHead className="w-[50px]">SINO</TableHead>
                  <TableHead>Date</TableHead>
                  <TableHead>Expense Type</TableHead>
                  <TableHead className="text-right">Amount</TableHead>
                  {expenses.some((expense) => expense.expsub_type) && (
                    <TableHead className="text-right">Sub Expense</TableHead>
                  )}{" "}
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
                    <TableCell>{expense.exp_date}</TableCell>
                    <TableCell>{expense.exp_type}</TableCell>
                    <TableCell className="text-right">
                      {expense.exp_amount}
                    </TableCell>
                    {expense.expsub_type && (
                      <TableCell className="text-right">
                        {expense.expsub_type}
                      </TableCell>
                    )}
                    <TableCell>{expense.exp_employee}</TableCell>
                    <TableCell>{expense.exp_note}</TableCell>
                    <TableCell className="text-center">
                      <div className="flex justify-center gap-4">
                        <EditExpenseModal expense={expense} />
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

export default ExpenseList;
