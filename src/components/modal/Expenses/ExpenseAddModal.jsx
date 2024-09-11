import React, { useState } from "react";
import { Input } from "../../../components/ui/input";
import { Label } from "../../../components/ui/label";
import { Button } from "../../../components/ui/button";
import { DialogFooter } from "../../../components/ui/dialog";

function ExpenseAddModal({
  handleShowNewTypeInput,
  handleShowNewSubTypeInput,
  setDate,
  date,
  amount,
  setAmount,
  employees,
  selectedEmployee,
  handleEmployeeChange,
  setNote,
  note,
  handleSave,
  loading,
  selectedExpense,
  setSelectedExpense,
  ExpenseType,
  setSelecteSubdExpense,
  selectedSubExpense,
  subExpenseType,
}) {
  const handleExpenseChange = (e) => {
    const newExpense = e.target.value;
    setSelectedExpense(newExpense);
  };
  const handleSubExpenseChange = (e) => {
    const newSubExpense = e.target.value;
    setSelecteSubdExpense(newSubExpense);
  };
  return (
    <div className="-mb-20 lg:mb-0 md:mb-0 h-full">
      <div className="flex lg:flex-row md:flex-row flex-col gap-2 lg:gap-0 md:gap-0 justify-end lg:space-x-3 md:space-x-3 mb-4">
        <Button
          className="text-left bg-[#308E87] text-white hover:bg-[#308E87] w-full sm:w-auto"
          onClick={handleShowNewTypeInput}
        >
          Add New Expense Type
        </Button>
        <Button
          className="text-left bg-[#308E87] text-white hover:bg-[#308E87] w-full sm:w-auto"
          onClick={handleShowNewSubTypeInput}
        >
          Add New Sub Expense Type
        </Button>
      </div>
      <div className="grid gap-4 py-4">
        <div className="grid grid-cols-1 sm:grid-cols-4 items-center gap-4">
          <Label
            htmlFor="date"
            className="lg:text-right md:text-right text-left sm:col-span-1"
          >
            Date
          </Label>
          <Input
            id="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            type="date"
            className="col-span-3 sm:col-span-3"
          />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-4 items-center gap-4">
          <Label
            htmlFor="type"
            className="lg:text-right md:text-right text-left sm:col-span-1"
          >
            Expense Type
          </Label>
          <select
            id="type"
            className="col-span-3 sm:col-span-3 p-2 border rounded"
            value={selectedExpense}
            onChange={handleExpenseChange}
          >
            <option value="">Select expense type</option>
            {ExpenseType.map((type, index) => (
              <option key={index} value={type.exp_id}>
                {type.exp_type}
              </option>
            ))}
          </select>
        </div>
        {subExpenseType.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-4 items-center gap-4">
            <Label
              htmlFor="subtype"
              className="lg:text-right md:text-right text-left sm:col-span-1"
            >
              Sub Expense Type
            </Label>
            <select
              id="subtype"
              className="col-span-3 sm:col-span-3 p-2 border rounded"
              value={selectedSubExpense}
              onChange={handleSubExpenseChange}
            >
              <option value="">Select Sub Category</option>
              {subExpenseType
                .filter((subexp) => subexp.exp_id === selectedExpense)
                .map((subexp) => (
                  <option key={subexp.subexp_id} value={subexp.subexp_id}>
                    {subexp.subexp_name}
                  </option>
                ))}
            </select>
          </div>
        )}
        <div className="grid grid-cols-1 sm:grid-cols-4 items-center gap-4">
          <Label
            htmlFor="amount"
            className="lg:text-right md:text-right text-left sm:col-span-1"
          >
            Amount
          </Label>
          <Input
            id="amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            type="number"
            placeholder="Enter amount"
            className="col-span-3 sm:col-span-3"
          />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-4 items-center gap-4">
          <Label
            htmlFor="employee"
            className="lg:text-right md:text-right text-left sm:col-span-1"
          >
            Employee
          </Label>
          <select
            id="employee"
            className="col-span-3 sm:col-span-3 p-2 border rounded"
            value={selectedEmployee}
            onChange={handleEmployeeChange}
          >
            <option value="">Select employee</option>
            {employees.map((employee, index) => (
              <option key={index} value={employee.employee_id}>
                {employee.employee_name}
              </option>
            ))}
          </select>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-4 items-center gap-4">
          <Label
            htmlFor="note"
            className="lg:text-right md:text-right text-left sm:col-span-1"
          >
            Note
          </Label>
          <Input
            id="note"
            value={note}
            onChange={(e) => setNote(e.target.value)}
            placeholder="Enter note (optional)"
            className="col-span-3 sm:col-span-3"
          />
        </div>
        <DialogFooter>
          <Button
            className="bg-[#308E87] text-white hover:bg-[#308E87] w-full sm:w-auto"
            onClick={handleSave}
            disabled={loading}
          >
            {loading ? "Saving..." : "Save"}
          </Button>
        </DialogFooter>
      </div>
    </div>
  );
}

export default ExpenseAddModal;
