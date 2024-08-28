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
import axios from "axios";
import toast from "react-hot-toast";

function UnitModal({setUnits}) {
  const [unitName, setUnitName] = useState("");
  const [unitCode, setUnitCode] = useState("");
  const [loading, setLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const handleSave = async () => {
    if (!unitName || !unitCode) {
      toast.error("Please fill out all fields");
      return;
    }

    setLoading(true);
    
    try {
      const response = await axios.post(
        "https://storeconvo.com/php/add_unit.php",
        new URLSearchParams({
          unit_name: unitName,
          unit_code: unitCode,
        }),
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }
      );
      if (response.status === 200) {
        toast.success("Unit added successfully");
        setUnits((prevUnit) => [...prevUnit, response.data]);
        setUnitName("");
        setUnitCode("");
        setIsOpen(false);

      } else {
        toast.error("Failed to add unit");
      }
    } catch (error) {
      toast.error("Failed to add unit");
    } finally {
      setLoading(false);
    }
  };



  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button className="bg-[#308E87] hover:bg-[#308E87]">
          <FiPlus className="text-white text-xl mr-2" />
          Add New Unit
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle>Add New Unit</DialogTitle>
          <DialogDescription>
            Fill out the details to add a new unit.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="unitName" className="text-right">
              Unit Name
            </Label>
            <Input
              id="unitName"
              className="col-span-3"
              placeholder="Enter unit name"
              value={unitName}
              onChange={(e) => setUnitName(e.target.value)}
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="unitCode" className="text-right">
              Unit Code
            </Label>
            <Input
              id="unitCode"
              className="col-span-3"
              placeholder="Enter unit code"
              value={unitCode}
              onChange={(e) => setUnitCode(e.target.value)}
            />
          </div>
        </div>
        <DialogFooter>
          <Button
            type="button"
            className="bg-[#308E87] hover:bg-[#26756b]"
            onClick={handleSave}
            disabled={loading}
          >
            {loading ? "Saving..." : "Save Unit"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export default UnitModal;
