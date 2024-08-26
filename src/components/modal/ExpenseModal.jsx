import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../../components/ui/dialog";
import { Button } from "../../components/ui/button";
import { FiPlus } from "react-icons/fi";
import NewExpenseModal from "./Expenses/NewExpenseModal";
import NewSubExpenseModal from "./Expenses/NewSubExpenseModal";
import ExpenseAddModal from "./Expenses/ExpenseAddModal";

function ExpenseModal() {
  const [newExpenseType, setNewExpenseType] = useState([]);
  const [newSubExpenseType, setNewSubExpenseType] = useState([]);
  const [ExpenseType,setExpenseType] = useState([])
  const [date, setDate] = useState("");
  const [amount, setAmount] = useState("");
  const [employees, setEmployees] = useState([]);
  const [selectedEmployee, setSelectedEmployee] = useState("");
  const [selectedExpense, setSelectedExpense] = useState("");
  const [selectedSubExpense, setSelecteSubdExpense] = useState("");
  const [note, setNote] = useState("");
  const [showNewTypeInput, setShowNewTypeInput] = useState(false);
  const [showNewSubTypeInput, setShowNewSubTypeInput] = useState(false);
  const [loading, setLoading] = useState(false);

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

  const handleAddNewExpenseType = async () => {
    setLoading(true);
    try {
      const response = await axios.post(
        "https://storeconvo.com/php/add_expensetype.php",
        new URLSearchParams({
          exp_type: newExpenseType,
        }),
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }
      );
      if (response.data) {
        console.log(response.data);
        alert("successs");
        setNewExpenseType("");
        setShowNewTypeInput(false);
      }
    } catch (error) {
      console.error("Error adding expense type:", error);
      alert("Failed to add expense type");
    } finally {
      setLoading(false);
    }
  };

  const handleAddNewSubExpenseType = async () => {
    setLoading(true);

    try {
      const response = await axios.post(
        "https://storeconvo.com/php/add_subexpensetype.php",
        new URLSearchParams({
          subexp_name: newSubExpenseType,
          exp_id:selectedExpense,
        }),
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }
      );
      if (response.data) {
        console.log(response.data);
        alert("successs");
        setNewSubExpenseType("");
        setShowNewTypeInput(false);
      }
    } catch (error) {
      console.error("Error adding expense type:", error);
      alert("Failed to add expense type");
    } finally {
      setLoading(false);
    }
  };

  const handleSave = async () => {
    setLoading(true);


    // console.log(date);
    // console.log(selectedExpense);
    // console.log(selectedSubExpense);
    // console.log(amount);
    // console.log(selectedEmployee);
    // console.log(note);

    try {
      const response = await axios.post(
        "https://storeconvo.com/php/add_expense.php",
        new URLSearchParams({
          exp_date: date,
          exp_expense:selectedExpense,
          exp_subexpense:selectedSubExpense,
          exp_amount: amount,
          exp_employee: selectedEmployee,
          exp_note: note,
        }),
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }
      );
      if (response.data.success) {
        console.log(response.data.message);
        alert("success");
        setDate("");

        setAmount("");
        setSelectedEmployee("");
        setNote("");
      }
    } catch (error) {
      console.error("Error saving expense:", error);
      alert("Failed to save expense");
    } finally {
      setLoading(false);
    }
  };

  const handleShowNewTypeInput = () => {
    setShowNewTypeInput(true);
  };

  const handleShowNewSubTypeInput = () => {
    setShowNewSubTypeInput(true);
  };

  const handleHideNewTypeInput = () => {
    setShowNewTypeInput(false);
  };

  const handleHideSubNewTypeInput = () => {
    setShowNewSubTypeInput(false);
  };


  const handleEmployeeChange = (e) => {
    setSelectedEmployee(e.target.value);
  };


  const handleExpenseChange = (e) => {
    setSelectedExpense(e.target.value);
  };

  
  return (
    <div>
      <Dialog>
        <DialogTrigger asChild>
          <Button className="bg-[#308E87] hover:bg-[#308E87]">
            <FiPlus className="text-white text-xl" />
            Create New Expense
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[900px]">
          <DialogHeader>
            <DialogTitle>
              {showNewTypeInput
                ? "Add New Expense Type"
                : showNewSubTypeInput
                ? "Add New Sub Expense Type"
                : "Add Expense"}
            </DialogTitle>
            <DialogDescription>
              {showNewTypeInput
                ? "Enter the new expense type and sub expense type you want to add."
                : showNewSubTypeInput
                ? "Enter the new sub expense type and sub expense type you want to add."
                : "Fill out the details of the expense"}
            </DialogDescription>
          </DialogHeader>

          {showNewTypeInput ? (
            <NewExpenseModal
              newExpenseType={newExpenseType}
              setNewExpenseType={setNewExpenseType}
              handleAddNewExpenseType={handleAddNewExpenseType}
              loading={loading}
              handleHideNewTypeInput={handleHideNewTypeInput}
            />
          ) : showNewSubTypeInput ? (
            <NewSubExpenseModal
              newSubExpenseType={newSubExpenseType}
              setNewSubExpenseType={setNewSubExpenseType}
              handleAddNewSubExpenseType={handleAddNewSubExpenseType}
              loading={loading}
              ExpenseType={ExpenseType}
              handleHideSubNewTypeInput={handleHideSubNewTypeInput}
              selectedExpense={selectedExpense}
              handleExpenseChange={handleExpenseChange}
            />
          ) : (
            <ExpenseAddModal
              handleShowNewTypeInput={handleShowNewTypeInput}
              handleShowNewSubTypeInput={handleShowNewSubTypeInput}
              setDate={setDate}
              date={date}
              ExpenseType={ExpenseType}
              handleExpenseChange={handleExpenseChange}
              amount={amount}
              setAmount={setAmount}
              selectedEmployee={selectedEmployee}
              selectedExpense={selectedExpense}
              setSelectedExpense={setSelectedExpense}
              employees={employees}
              handleEmployeeChange={handleEmployeeChange}
              setNote={setNote}
              note={note}
              handleSave={handleSave}
              setSelecteSubdExpense={setSelecteSubdExpense}
              selectedSubExpense={selectedSubExpense}
              loading={loading}
            />
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default ExpenseModal;
