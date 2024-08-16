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
    { type: "Travel", subTypes: ["Local", "International"] },
    { type: "Office Supplies", subTypes: [] },
    { type: "Entertainment", subTypes: ["Movies", "Events"] },
  ]);
  const [newExpenseType, setNewExpenseType] = useState("");
  const [newSubExpenseType, setNewSubExpenseType] = useState("");
  const [selectedExpenseType, setSelectedExpenseType] = useState("");
  const [showNewTypeInput, setShowNewTypeInput] = useState(false);

  const handleAddNewExpenseType = () => {
    if (newExpenseType) {
      const newExpense = {
        type: newExpenseType,
        subTypes: newSubExpenseType ? [newSubExpenseType] : [],
      };
      setExpenseTypes([...expenseTypes, newExpense]);
      setNewExpenseType("");
      setNewSubExpenseType("");
      setShowNewTypeInput(false);
    }
  };

  const handleShowNewTypeInput = () => {
    setShowNewTypeInput(true);
  };

  const handleHideNewTypeInput = () => {
    setShowNewTypeInput(false);
  };

  const handleExpenseTypeChange = (e) => {
    setSelectedExpenseType(e.target.value);
  };

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
            <DialogTitle>{showNewTypeInput ? "Add New Expense Type" : "Add Expense"}</DialogTitle>
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
                >
                  Add
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
                <Input id="date" type="date" className="col-span-3" />
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
                  <select id="sub-type" className="col-span-3 p-2 border rounded">
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
              <Button className="bg-[#308E87] text-white hover:bg-[#308E87]" type="submit">Save Expense</Button>
            </DialogFooter>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default ExpenseModal;
