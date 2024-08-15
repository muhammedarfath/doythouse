import React, { useState } from "react";
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
  const [expenseTypes, setExpenseTypes] = useState([
    "Travel",
    "Office Supplies",
    "Entertainment",
  ]);
  const [newExpenseType, setNewExpenseType] = useState("");
  const [showNewTypeInput, setShowNewTypeInput] = useState(false);

  const handleAddNewExpenseType = () => {
    if (newExpenseType) {
      setExpenseTypes([...expenseTypes, newExpenseType]);
      setNewExpenseType("");
      setShowNewTypeInput(false);
    }
  };

  const handleShowNewTypeInput = () => {
    setShowNewTypeInput(true);
  };

  const handleHideNewTypeInput = () => {
    setShowNewTypeInput(false);
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
            <DialogTitle>{showNewTypeInput ? "Add New Expense Type" : "Add Expense"}</DialogTitle>
            <DialogDescription>
              {showNewTypeInput
                ? "Enter the new expense type you want to add."
                : "Fill out the details of the expense"}
            </DialogDescription>
          </DialogHeader>

          {showNewTypeInput ? (
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="new-type" className="text-right">
                  New Expense Type
                </Label>
                <div className="col-span-3 flex gap-2">
                  <Input
                    id="new-type"
                    value={newExpenseType}
                    onChange={(e) => setNewExpenseType(e.target.value)}
                    placeholder="Enter new expense type"
                  />
                  <Button onClick={handleAddNewExpenseType}>Add</Button>
                  <Button variant="secondary" onClick={handleHideNewTypeInput}>
                    Cancel
                  </Button>
                </div>
              </div>
            </div>
          ) : (
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="date" className="text-right">
                  Date
                </Label>
                <Input id="date" type="date" className="col-span-3" />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="type" className="text-right">
                  Expense Type
                </Label>
                <select id="type" className="col-span-3 p-2 border rounded">
                  <option value="">Select expense type</option>
                  {expenseTypes.map((type, index) => (
                    <option key={index} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
              </div>
              <Button
                className="col-span-4 text-left text-blue-500"
                onClick={handleShowNewTypeInput}
              >
                + Add New Expense Type
              </Button>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="amount" className="text-right">
                  Amount
                </Label>
                <Input id="amount" type="number" className="col-span-3" />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="employee" className="text-right">
                  Employee
                </Label>
                <select id="employee" className="col-span-3 p-2 border rounded">
                  <option value="">Select employee</option>
                  <option value="john">John Doe</option>
                  <option value="jane">Jane Smith</option>
                  <option value="alex">Alex Johnson</option>
                </select>
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="notes" className="text-right">
                  Notes
                </Label>
                <textarea id="notes" className="col-span-3 p-2 border rounded" rows="3" />
              </div>
            </div>
          )}
          {!showNewTypeInput && (
            <DialogFooter>
              <Button type="submit">Save Expense</Button>
            </DialogFooter>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default ExpenseModal;
