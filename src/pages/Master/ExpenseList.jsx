import React, { useEffect, useState } from "react";
import ExpenseModal from "@/components/modal/ExpenseModal";
import { CiFilter } from "react-icons/ci";
import axios from "axios";
import { toast } from "react-hot-toast";
import Search from "@/components/Search/Search";
import ExpenseTable from "./ExpenseTable";
import ExpenseFilter from "./ExpenseFilter";
import { useOutletContext } from "react-router-dom";

function ExpenseList() {
  const { open } = useOutletContext();
  const [isFilterVisible, setIsFilterVisible] = useState(false);
  const [expenses, setExpenses] = useState([]);
  const [ExpenseType, setExpenseType] = useState([]);
  const [employees, setEmployees] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [filters, setFilters] = useState({
    fromDate: "",
    toDate: "",
    expenseType: "",
    employee: "",
  });
  const handleClearFilters = () => {
    setFilters({
      fromDate: "",
      toDate: "",
      expenseType: "",
      employee: "",
    });
  };
  useEffect(() => {
    fetchExpenseList();
  }, []);
  const fetchExpenseList = async () => {
    try {
      const response = await axios.get(
        "https://storeconvo.com/php/fetch.php?typ=expense"
      );
      setExpenses(Array.isArray(response.data) ? response.data : []);
    } catch (error) {
      console.error("Error fetching expenses:", error);
    }
  };
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

    const isMatchingEmployee = !employee || expense.employee_name === employee;

    const isMatchingSearchQuery =
      expense.exp_type?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      expense.employee_name
        ?.toLowerCase()
        .includes(searchQuery.toLowerCase()) ||
      expense.exp_note?.toLowerCase().includes(searchQuery.toLowerCase());

    return (
      isWithinDateRange &&
      isMatchingType &&
      isMatchingEmployee &&
      isMatchingSearchQuery
    );
  });



  return (
    <div className="flex items-center justify-center w-full ">
      <div className={`w-full lg:max-w-screen-xl ${open ? "md:max-w-[32rem]" : "md:max-w-[40rem]"} max-w-[22rem] mx-auto`}>
        <div className="flex flex-col gap-6 mt-8 ">
          <h2 className="font-semibold text-xl text-black">Expense List</h2>
          <div className="bg-white flex gap-5 flex-col rounded-2xl shadow-sm p-4 md:p-8 lg:w-full">
            <div className="flex items-center justify-between mb-4 lg:flex-row gap-4 lg:gap-0  flex-col">
              <Search
                searchQuery={searchQuery}
                setSearchQuery={setSearchQuery}
                name={"expense"}
              />
              <div className="flex items-center gap-5">
                <div
                  className="border rounded-md p-2 bg-[#D8E9E7] text-[#308E87] "
                  onClick={toggleFilter}
                >
                  <CiFilter className="text-2xl cursor-pointer hover:animate-shake" />
                </div>
                <ExpenseModal
                  setExpenses={setExpenses}
                  onChange={fetchExpenseList}
                />
              </div>
            </div>
            {isFilterVisible && (
              <ExpenseFilter
                filters={filters}
                handleFilterChange={handleFilterChange}
                employees={employees}
                ExpenseType={ExpenseType}
                handleClearFilters={handleClearFilters}
              />
            )}
            <ExpenseTable
              expenses={expenses}
              filteredExpenses={filteredExpenses}
              fetchExpenseList={fetchExpenseList}
              handleDelete={handleDelete}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ExpenseList;
