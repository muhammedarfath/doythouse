import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
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

  const [expenseTypes, setExpenseTypes] = useState([]);
  const [date, setDate] = useState("");
  const [amount, setAmount] = useState("");
  const [employees, setEmployees] = useState([]);
  const [selectedEmployee, setSelectedEmployee] = useState("");
  const [note, setNote] = useState("");
  const [showNewTypeInput, setShowNewTypeInput] = useState(false);
  const [showNewSubTypeInput, setShowNewSubTypeInput] = useState(false);
  const [loading, setLoading] = useState(false);

  // Fetch expense types on component mount
  useEffect(() => {
    const fetchExpenseTypes = async () => {
      try {
        const response = await axios.get(
          "https://storeconvo.com/php/fetch.php?typ=expense_type"
        );
        console.log(response);
        setExpenseTypes(response.data);
      } catch (error) {
        console.error("Error fetching expense types:", error);
      }
    };
    fetchExpenseTypes();
  }, []);

  // Fetch expense types on component mount
  useEffect(() => {
    const fetchSubExpenseTypes = async () => {
      try {
        const response = await axios.get(
          "https://storeconvo.com/php/fetch.php?typ=subexpense_type"
        );
        console.log(response, "this is sublist");
        setSubExpenseTypes(response.data);
      } catch (error) {
        console.error("Error fetching expense types:", error);
      }
    };
    fetchSubExpenseTypes();
  }, []);

  // Fetch employees on component mount
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

  // Handle adding a new expense type
  const handleAddNewExpenseType = async () => {
    setLoading(true);

    try {
      const response = await axios.post(
        "https://storeconvo.com/php/add_expensetype.php",
        new URLSearchParams({
          exp_type: newExpenseType,
          subexp_id: selectedSubExpenseTypes,
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
        setExpenseTypes((prev) => [
          ...prev,
          { type: newExpenseType, subTypes: [newSubExpenseType] },
        ]);
        setNewExpenseType("");
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

  const handleAddNewSubExpenseType = async () => {
    setLoading(true);

    try {
      const response = await axios.post(
        "https://storeconvo.com/php/add_subexpensetype.php",
        new URLSearchParams({
          subexp_name: newSubExpenseType,
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
        subexpenseTypes((prev) => [...prev, { type: newSubExpenseType }]);
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

  // Handle saving the expense
  const handleSave = async () => {
    setLoading(true);

    try {
      const response = await axios.post(
        "https://storeconvo.com/php/add_expense.php",
        new URLSearchParams({
          exp_date: date,
          exp_type: selectedExpenseType,
          expsub_type: selectedSubExpenseType,
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
        setSelectedExpenseType("");
        setSelectedSubExpenseType("");
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

  // Show the input form for adding a new expense type
  const handleShowNewTypeInput = () => {
    setShowNewTypeInput(true);
  };

  // Show the input form for adding a new sub expense type
  const handleShowNewSubTypeInput = () => {
    setShowNewSubTypeInput(true);
  };

  // Hide the input form for adding a new expense type
  const handleHideNewTypeInput = () => {
    setShowNewTypeInput(false);
  };

  // Hide the input form for adding a new sub expense type
  const handleHideSubNewTypeInput = () => {
    setShowNewSubTypeInput(false);
  };

  // Handle changes to the selected expense type
  const handleExpenseTypeChange = (e) => {
    setSelectedExpenseType(e.target.value);
  };

  // Handle changes to the selected sub expense type
  const handleSubExpenseTypeChange = (e) => {
    const options = e.target.options;
    const selectedValues = [];
    for (let i = 0; i < options.length; i++) {
      if (options[i].selected) {
        selectedValues.push(options[i].value);
      }
    }
    setSelectedSubExpenseTypes(selectedValues);
  };

  // Handle changes to the selected employee
  const handleEmployeeChange = (e) => {
    setSelectedEmployee(e.target.value);
  };

  // Get the selected expense type object from the list
  const selectedExpense = expenseTypes.find(
    (type) => type.type === selectedExpenseType
  );

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
              selectedExpenseTypes={selectedExpenseTypes}
              handleExpenseTypeChange={handleExpenseTypeChange}
              handleAddNewSubExpenseType={handleAddNewSubExpenseType}
              loading={loading}
              handleHideSubNewTypeInput={handleHideSubNewTypeInput}
            />
          ) : (
            <ExpenseAddModal
              handleShowNewTypeInput={handleShowNewTypeInput}
              handleShowNewSubTypeInput={handleShowNewSubTypeInput}
              setDate={setDate}
              date={date}
              selectedExpenseType={selectedExpenseType}
              handleExpenseTypeChange={handleExpenseTypeChange}
              expenseTypes={expenseTypes}
              selectedSubExpenseTypes={selectedSubExpenseTypes}
              handleSubExpenseTypeChange={handleSubExpenseTypeChange}
              selectedExpense={selectedExpense}
              amount={amount}
              setAmount={setAmount}
              selectedEmployee={selectedEmployee}
              employees={employees}
              handleEmployeeChange={handleEmployeeChange}
              setNote={setNote}
              note={note}
              handleSave={handleSave}
              loading={loading}
            />
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default ExpenseModal;
