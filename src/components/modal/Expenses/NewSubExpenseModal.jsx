import React from "react";
import { Input } from "../../../components/ui/input";
import { Label } from "../../../components/ui/label";
import { Button } from "../../../components/ui/button";

function NewSubExpenseModal({
  setNewSubExpenseType,
  newSubExpenseType,
  handleAddNewSubExpenseType,
  loading,
  handleHideSubNewTypeInput,
  selectedExpenseTypes,
  handleExpenseTypeChange,
}) {
  return (
    <div className="grid gap-4 py-4">
      <div className="grid grid-cols-4 items-center gap-4">
        <Label htmlFor="new-type" className="text-right">
          New Sub Expense Type
        </Label>
        <Input
          id="new-type"
          value={newSubExpenseType}
          onChange={(e) => setNewSubExpenseType(e.target.value)}
          placeholder="Enter new expense type"
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
          value={selectedExpenseTypes}
          onChange={handleExpenseTypeChange}
          multiple
        >
          <option value="" disabled>
            Select expense type
          </option>
          {expenseTypes.map((type, index) => (
            <option key={index} value={type.subexp_id}>
              {type.subexp_name}
            </option>
          ))}
        </select>
      </div>
      <div className="flex gap-2">
        <Button
          className="bg-[#308E87] text-white hover:bg-[#308E87]"
          onClick={handleAddNewSubExpenseType}
          disabled={loading}
        >
          {loading ? "Adding..." : "Add"}
        </Button>
        <Button variant="secondary" onClick={handleHideSubNewTypeInput}>
          Cancel
        </Button>
      </div>
    </div>
  );
}

export default NewSubExpenseModal;
