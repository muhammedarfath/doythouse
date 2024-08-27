import React, { useState } from "react";
import { Button } from "../../components/ui/button";
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
import axios from "axios";
import { AiFillEdit } from "react-icons/ai";
import toast from "react-hot-toast";

function UnitEditModal({ unit, onSuccess }) {
  const [unitName, setUnitName] = useState(unit.unitname || "");
  const [unitCode, setUnitCode] = useState(unit.unitcode || "");
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const handleSave = async () => {
    if (!unitName || !unitCode) {
      toast.error("Please fill out all fields");
      return;
    }

    setLoading(true);
    
    try {
      const response = await axios.post(
        "https://storeconvo.com/php/edit.php", 
        new URLSearchParams({
          id: unit.unitid,
          unit_name: unitName,
          unit_code: unitCode,
          typ:"unit"
        }),
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }
      );
      console.log(response);
      if (response.status === 200) {
        toast.success("Unit updated successfully");
        setOpen(false);
        onSuccess(); 
      } else {
        toast.error("Failed to update unit");
      }
    } catch (error) {
      toast.error("Error updating unit");
      console.error("Error updating unit:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <AiFillEdit
            className="text-[#495057] text-xl transition-transform transform hover:scale-110 cursor-pointer"
            onClick={() => setOpen(true)}
          />
        </DialogTrigger>
        <DialogContent className="sm:max-w-[900px]">
          <DialogHeader>
            <DialogTitle>Edit Unit</DialogTitle>
            <DialogDescription>Update your unit details.</DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="unitName" className="text-right">
                Unit Name
              </Label>
              <Input
                id="unitName"
                value={unitName}
                onChange={(e) => setUnitName(e.target.value)}
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="unitCode" className="text-right">
                Unit Code
              </Label>
              <Input
                id="unitCode"
                value={unitCode}
                onChange={(e) => setUnitCode(e.target.value)}
                className="col-span-3"
              />
            </div>
          </div>
          <DialogFooter>
            <Button
              onClick={handleSave}
              disabled={loading}
              className={`bg-[#308E87] hover:bg-[#26756b] ${
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

export default UnitEditModal;
