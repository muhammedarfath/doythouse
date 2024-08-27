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
import ExpenseModal from "@/components/modal/ExpenseModal";
import { CiFilter } from "react-icons/ci";
import { BiSolidTrashAlt } from "react-icons/bi";
import axios from "axios";
import EditExpenseModal from "@/components/modal/EditExpenseModal";
import { toast } from "react-hot-toast";

function ExpenseList() {
  const [isFilterVisible, setIsFilterVisible] = useState(false);
  const [expenses, setExpenses] = useState([]);
  const [ExpenseType, setExpenseType] = useState([]);
  const [employees, setEmployees] = useState([]);

  const [filters, setFilters] = useState({
    fromDate: "",
    toDate: "",
    expenseType: "",
    employee: "",
  });

  useEffect(() => {
    const fetchExpenseList = async () => {
      try {
        const response = await axios.get(
          "https://storeconvo.com/php/fetch.php?typ=expense"
        );
        setExpenses(Array.isArray(response.data) ? response.data : []);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchExpenseList();
  }, []);

  useEffect(() => {
    const fetchExpenseTypes = async () => {
      try {
        const response = await axios.get(
          "https://storeconvo.com/php/fetch.php?typ=expense_type"
        );
        setExpenseType(response.data);
      } catch (error) {
        console.error("Error fetching expense types:", error);
      }
    };
    fetchExpenseTypes();
  }, []);

  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        const response = await axios.get(
          "https://storeconvo.com/php/fetch.php?typ=employee"
        );
        console.log(response.data, "this is employee");
        setEmployees(response.data);
      } catch (error) {
        console.error("Error fetching employees:", error);
      }
    };
    fetchEmployees();
  }, []);

  const handleDelete = (expensesId) => {
    toast(
      (t) => (
        <div>
          <p>Are you sure you want to delete this Expense?</p>
          <div className="flex gap-2 mt-2">
            <button
              onClick={() => confirmDelete(expensesId, t.id)}
              className="bg-red-500 text-white px-4 py-1 rounded"
            >
              Delete
            </button>
            <button
              onClick={() => toast.dismiss(t.id)}
              className="bg-gray-300 text-black px-4 py-1 rounded"
            >
              Cancel
            </button>
          </div>
        </div>
      ),
      { duration: 4000 }
    );
  };

  const confirmDelete = async (expensesId, toastId) => {
    try {
      await axios.post(
        `https://storeconvo.com/php/delete.php/`,
        {
          id: expensesId,
          typ: "expense",
        },
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }
      );
      setExpenses((prevExpense) =>
        prevExpense.filter((expense) => expense.exp_id !== expensesId)
      );
      toast.success("Delete successful", { id: toastId });
    } catch (error) {
      console.error("Error deleting expense:", error);
      toast.error("Failed to delete expense", { id: toastId });
    }
  };

  const toggleFilter = () => {
    setIsFilterVisible(!isFilterVisible);
  };

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: value,
    }));
  };

  const filteredExpenses = expenses.filter((expense) => {
    const { fromDate, toDate, expenseType, employee } = filters;

    const isWithinDateRange =
      (!fromDate || new Date(expense.exp_date) >= new Date(fromDate)) &&
      (!toDate || new Date(expense.exp_date) <= new Date(toDate));

    const isMatchingType = !expenseType || expense.exp_type === expenseType;

    const isMatchingEmployee = !employee || expense.exp_employee === employee;

    return isWithinDateRange && isMatchingType && isMatchingEmployee;
  });

  return (
    <div className="flex items-center justify-center w-full ">
      <div className="w-full lg:max-w-screen-xl md:max-w-[35rem] max-w-[22rem] mx-auto ">
        <div className="flex flex-col gap-6 mt-8 ">
          <h2 className="font-semibold text-xl text-black">Expense List</h2>
          <div className="bg-white flex gap-5 flex-col rounded-2xl shadow-sm p-4 md:p-8 lg:w-full">
            <div className="flex items-center justify-between mb-4 lg:flex-row gap-4 lg:gap-0  flex-col">
              <div className="flex gap-2">
                <span>Search</span>
                <input
                  type="text"
                  placeholder="Search..."
                  className="h-10 border rounded px-4 w-64 bg-white"
                />
              </div>
              <div className="flex items-center gap-5">
                <div
                  className="border rounded-md p-2 bg-[#D8E9E7] text-[#308E87] "
                  onClick={toggleFilter}
                >
                  <CiFilter className="text-2xl cursor-pointer hover:animate-shake" />
                </div>

                <ExpenseModal setExpenses={setExpenses}/>
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
                    name="fromDate"
                    value={filters.fromDate}
                    onChange={handleFilterChange}
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
                    name="toDate"
                    value={filters.toDate}
                    onChange={handleFilterChange}
                    className="h-10 border rounded px-4 bg-gray-50"
                  />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="sort-by-type" className="text-sm font-medium">
                    Sort by Expense Type
                  </label>
                  <select
                    id="sort-by-type"
                    name="expenseType"
                    value={filters.expenseType}
                    onChange={handleFilterChange}
                    className="h-10 border rounded px-4 bg-gray-50"
                  >
                    <option value="">Select Type</option>
                    {ExpenseType.map((type) => (
                      <option key={type} value={type.exp_type}>
                        {type.exp_type}
                      </option>
                    ))}
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
                    name="employee"
                    value={filters.employee}
                    onChange={handleFilterChange}
                    className="h-10 border rounded px-4 bg-gray-50"
                  >
                    <option value="">Select Employee</option>
                    {employees.map((emp) => (
                      <option key={emp} value={emp.employee_name}>
                        {emp.employee_name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            )}

            <Table>
              <TableCaption>A list of your expenses.</TableCaption>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[50px]">Select</TableHead>
                  <TableHead className="w-[50px]">SINO</TableHead>
                  <TableHead>Date</TableHead>
                  <TableHead>Expense Type</TableHead>
                  <TableHead className="text-right">Amount</TableHead>
                  {Array.isArray(expenses) &&
                    expenses.some((expense) => expense.expsub_type) && (
                      <TableHead className="text-right">Sub Expense</TableHead>
                    )}
                  <TableHead>Employee</TableHead>
                  <TableHead>Note</TableHead>
                  <TableHead className="text-center">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredExpenses.map((expense, index) => (
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
                          {expense.expsub_type || "N/A"}
                        </TableCell>
                      )}
                    <TableCell>{expense.exp_employee}</TableCell>
                    <TableCell>{expense.exp_note}</TableCell>
                    <TableCell className="flex justify-center gap-4">
                      <EditExpenseModal expense={expense} />
                      <BiSolidTrashAlt
                        onClick={() => handleDelete(expense.exp_id)}
                        className="cursor-pointer"
                      />
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
