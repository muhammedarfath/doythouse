import React from "react";
import { Input } from "../../../components/ui/input";
import { Label } from "../../../components/ui/label";
import { Button } from "../../../components/ui/button";
import { DialogFooter } from "../../../components/ui/dialog";
function ExpenseAddModal({
  handleShowNewTypeInput,
  handleShowNewSubTypeInput,
  setDate,
  date,
  selectedExpenseType,
  handleExpenseTypeChange,
  expenseTypes,
  selectedSubExpenseTypes,
  handleSubExpenseTypeChange,
  selectedExpense,
  amount,
  setAmount,
  employees,
  selectedEmployee,
  handleEmployeeChange,
  setNote,
  note,
  handleSave,
  loading,
}) {
  return (
    <>
      <div className="flex justify-end">
        <Button
          className="col-span-4 text-left  mr-3 bg-[#308E87] text-white hover:bg-[#308E87] "
          onClick={handleShowNewTypeInput}
        >
          Add New Expense Type
        </Button>
        <Button
          className="col-span-4 text-left  bg-[#308E87] text-white hover:bg-[#308E87] "
          onClick={handleShowNewSubTypeInput}
        >
          Add New Sub Expense Type
        </Button>
      </div>
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
                {type.exp_type}
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
              value={selectedSubExpenseTypes}
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
    </>
  );
}

export default ExpenseAddModal;
