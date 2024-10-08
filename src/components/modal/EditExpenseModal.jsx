import React, { useEffect, useState } from "react";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "../../components/ui/dialog";
import { AiFillEdit } from "react-icons/ai";
import { Input } from "../../components/ui/input";
import { Label } from "../../components/ui/label";
import { Button } from "../ui/button";
import axios from "axios";
import { toast } from "react-hot-toast";

function EditExpenseModal({ expense, onChange }) {
  const [open, setOpen] = useState(false);
  const [type, setType] = useState(expense.subtypexpid || "");
  const [subType, setSubType] = useState(expense.expsub_type || "");
  const [amount, setAmount] = useState(expense.exp_amount || "");
  const [selectedEmployee, setSelectedEmployee] = useState(
    expense.exp_employee || ""
  );
  const [employees, setEmployees] = useState([]);
  const [expenseTypes, setExpenseTypes] = useState([]);
  const [subTypes, setSubTypes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [note, setNote] = useState(expense.exp_note || "");

  useEffect(() => {
    const fetchEmployeesAndExpenseTypes = async () => {
      try {
        const [employeesResponse, typesResponse] = await Promise.all([
          axios.get("https://storeconvo.com/php/fetch.php?typ=employee"),
          axios.get("https://storeconvo.com/php/fetch.php?typ=expense_type"),
        ]);
        setEmployees(employeesResponse.data);
        setExpenseTypes(typesResponse.data);
      } catch (error) {
        toast.error("Error fetching data:", error);
      }
    };

    fetchEmployeesAndExpenseTypes();
  }, []);

  useEffect(() => {
    const fetchSubExpenseTypes = async () => {
      try {
        const response = await axios.get(
          "https://storeconvo.com/php/fetch.php?typ=subexpense_type"
        );
        setSubTypes(response.data);
      } catch (error) {
        toast.error("Error fetching sub expense types:", error);
      }
    };
    fetchSubExpenseTypes();
  }, []);

  const handleSave = async () => {
    setLoading(true);
    try {
      const response = await axios.post(
        "https://storeconvo.com/php/edit.php",
        new URLSearchParams({
          id: expense.exp_id,
          exp_date: expense.exp_date,
          exp_type: type,
          expsub_type: subType,
          exp_amount: amount,
          exp_employee: selectedEmployee,
          exp_note: note,
          typ: "exp",
        }),
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }
      );
      if (response.status === 200) {
        toast.success("Expense Edit successfully");
        setOpen(false);
        onChange();
      }
    } catch (error) {
      toast.error("Error saving expense:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <span>
            <AiFillEdit
              className="text-[#495057] text-xl transition-transform transform hover:scale-110 cursor-pointer"
              onClick={() => setOpen(true)}
            />
          </span>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[900px]">
          <DialogHeader>
            <DialogTitle>Edit Expense</DialogTitle>
            <DialogDescription>Update your expense details.</DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="type" className="text-right">
                Expense Type
              </Label>
              <select
                id="type"
                className="col-span-3 p-2 border rounded focus:outline-none focus:ring-2 focus:ring-black"
                value={type}
                onChange={(e) => setType(e.target.value)}
              >
                <option value="">Select expense type</option>
                {expenseTypes.map((expenseType, index) => (
                  <option key={index} value={expenseType.exp_id}>
                    {expenseType.exp_type}
                  </option>
                ))}
              </select>
            </div>

            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="subType" className="text-right">
                Sub Expense
              </Label>
              <select
                id="subType"
                className="col-span-3 p-2 border rounded focus:outline-none focus:ring-2 focus:ring-black"
                value={subType}
                onChange={(e) => setSubType(e.target.value)}
              >
                <option value="">Select sub expense</option>

                {subTypes
                  .filter((subexp) => subexp.exp_id === type)
                  .map((subexp) => (
                    <option key={subexp.subexp_id} value={subexp.subexp_id}>
                      {subexp.subexp_name}
                    </option>
                  ))}
              </select>
            </div>

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
                className="col-span-3 p-2 border rounded focus:outline-none focus:ring-2 focus:ring-black"
                value={selectedEmployee}
                onChange={(e) => setSelectedEmployee(e.target.value)}
              >
                <option value="">Select employee</option>
                {employees.map((employee, index) => (
                  <option key={index} value={employee.employee_id}>
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
          </div>
          <DialogFooter>
            <Button
              onClick={handleSave}
              disabled={loading}
              className={`bg-[#308E87] hover:bg-[#308E87] ${
                loading ? "cursor-not-allowed" : ""
              }`}
            >
              {loading ? "Saving..." : "Save changes"}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default EditExpenseModal;
