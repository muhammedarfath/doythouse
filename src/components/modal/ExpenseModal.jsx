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
import { Input } from "../../components/ui/input";
import { Label } from "../../components/ui/label";
import { Button } from "../../components/ui/button";
import { FiPlus } from "react-icons/fi";

function ExpenseModal() {
  const [expenseTypes, setExpenseTypes] = useState([]);
  const [newExpenseType, setNewExpenseType] = useState("");
  const [newSubExpenseType, setNewSubExpenseType] = useState("");
  const [selectedExpenseType, setSelectedExpenseType] = useState("");
  const [selectedSubExpenseType, setSelectedSubExpenseType] = useState("");
  const [date, setDate] = useState("");
  const [amount, setAmount] = useState("");
  const [employees, setEmployees] = useState([]);
  const [selectedEmployee, setSelectedEmployee] = useState("");
  const [note, setNote] = useState("");
  const [showNewTypeInput, setShowNewTypeInput] = useState(false);
  const [loading, setLoading] = useState(false);

  // Fetch expense types on component mount
  useEffect(() => {
    const fetchExpenseTypes = async () => {
      try {
        const response = await axios.get(
          "https://storeconvo.com/php/fetch.php?typ=expensetype"
        );
        setExpenseTypes(response.data);
      } catch (error) {
        console.error("Error fetching expense types:", error);
      }
    };
    fetchExpenseTypes();
  }, []);

  // Fetch employees on component mount
  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        const response = await axios.get(
          "https://storeconvo.com/php/fetch.php?typ=employee"
        );
        console.log(response.data,"this is employee");
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
          newExpenseType,
          newSubExpenseType,
        }),
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }
      );
      if (response.data.success) {
        console.log(response.data.message);
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

  // Handle saving the expense
  const handleSave = async () => {
    setLoading(true);

    try {
      const response = await axios.post(
        "https://storeconvo.com/php/add_expense.php",
        new URLSearchParams({
          date,
          selectedExpenseType,
          selectedSubExpenseType,
          amount,
          selectedEmployee,
          note,
        }),
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }
      );
      if (response.data.success) {
        console.log(response.data.message);
        // Clear form fields after successful save
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

  // Hide the input form for adding a new expense type
  const handleHideNewTypeInput = () => {
    setShowNewTypeInput(false);
  };

  // Handle changes to the selected expense type
  const handleExpenseTypeChange = (e) => {
    setSelectedExpenseType(e.target.value);
    setSelectedSubExpenseType(""); // Reset sub expense type when changing main type
  };

  // Handle changes to the selected sub expense type
  const handleSubExpenseTypeChange = (e) => {
    setSelectedSubExpenseType(e.target.value);
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
              {showNewTypeInput ? "Add New Expense Type" : "Add Expense"}
            </DialogTitle>
            <DialogDescription>
              {showNewTypeInput
                ? "Enter the new expense type and sub expense type you want to add."
                : "Fill out the details of the expense"}
            </DialogDescription>
          </DialogHeader>

          {showNewTypeInput ? (
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="new-type" className="text-right">
                  New Expense Type
                </Label>
                <Input
                  id="new-type"
                  value={newExpenseType}
                  onChange={(e) => setNewExpenseType(e.target.value)}
                  placeholder="Enter new expense type"
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="new-subtype" className="text-right">
                  Sub Expense Type
                </Label>
                <Input
                  id="new-subtype"
                  value={newSubExpenseType}
                  onChange={(e) => setNewSubExpenseType(e.target.value)}
                  placeholder="Enter new sub expense type"
                  className="col-span-3"
                />
              </div>
              <div className="flex gap-2">
                <Button
                  className="bg-[#308E87] text-white hover:bg-[#308E87]"
                  onClick={handleAddNewExpenseType}
                  disabled={loading}
                >
                  {loading ? "Adding..." : "Add"}
                </Button>
                <Button variant="secondary" onClick={handleHideNewTypeInput}>
                  Cancel
                </Button>
              </div>
            </div>
          ) : (
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="date" className="text-right">
                  Date
                </Label>
                <Input
                  id="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  type="date"
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="type" className="text-right">
                  Expense Type
                </Label>
                <select
                  id="type"
                  className="col-span-3 p-2 border rounded"
                  value={selectedExpenseType}
                  onChange={handleExpenseTypeChange}
                >
                  <option value="">Select expense type</option>
                  {expenseTypes.map((type, index) => (
                    <option key={index} value={type.type}>
                      {type.type}
                    </option>
                  ))}
                </select>
              </div>
              {selectedExpense?.subTypes.length > 0 && (
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="sub-type" className="text-right">
                    Sub Expense Type
                  </Label>
                  <select
                    id="sub-type"
                    className="col-span-3 p-2 border rounded"
                    value={selectedSubExpenseType}
                    onChange={handleSubExpenseTypeChange}
                  >
                    <option value="">Select sub expense type</option>
                    {selectedExpense.subTypes.map((subType, index) => (
                      <option key={index} value={subType}>
                        {subType}
                      </option>
                    ))}
                  </select>
                </div>
              )}
              <Button
                className="col-span-4 text-left bg-[#308E87] text-white hover:bg-[#308E87] "
                onClick={handleShowNewTypeInput}
              >
                Add New Expense Type
              </Button>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="amount" className="text-right">
                  Amount
                </Label>
                <Input
                  id="amount"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  type="number"
                  placeholder="Enter amount"
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="employee" className="text-right">
                  Employee
                </Label>
                <select
                  id="employee"
                  className="col-span-3 p-2 border rounded"
                  value={selectedEmployee}
                  onChange={handleEmployeeChange}
                >
                  <option value="">Select employee</option>
                  {employees.map((employee, index) => (
                    <option key={index} value={employee.employee_name}>
                      {employee.employee_name}
                    </option>
                  ))}
                </select>
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="note" className="text-right">
                  Note
                </Label>
                <Input
                  id="note"
                  value={note}
                  onChange={(e) => setNote(e.target.value)}
                  placeholder="Enter note (optional)"
                  className="col-span-3"
                />
              </div>
              <DialogFooter>
                <Button
                  className="bg-[#308E87] text-white hover:bg-[#308E87]"
                  onClick={handleSave}
                  disabled={loading}
                >
                  {loading ? "Saving..." : "Save"}
                </Button>
              </DialogFooter>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default ExpenseModal;
