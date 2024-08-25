import React from "react";
import { Input } from "../../../components/ui/input";
import { Label } from "../../../components/ui/label";
import { Button } from "../../../components/ui/button";

function NewExpenseModal(
  {
    newExpenseType,
    setNewExpenseType,
    handleAddNewExpenseType,
    loading,
    handleHideNewTypeInput
  }
) {
  return (
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

      <div className="flex gap-2">
        <Button
          className="bg-[#308E87] text-white hover:bg-[#308E87]"
          onClick={handleAddNewExpenseType}
          disabled={loading}
        >
          {loading ? "Adding..." : "Add"}
        </Button>
        <Button variant="secondary" 
        onClick={handleHideNewTypeInput}
        >
          Cancel
        </Button>
      </div>
    </div>
  );
}

export default NewExpenseModal;
