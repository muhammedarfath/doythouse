import React, { useEffect, useState } from "react";
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

function AddStock({ onSuccess }) {
  const [isOpen, setIsOpen] = useState(false);
  const [stockItem, setStockItem] = useState("");
  const [stockValue, setStockValue] = useState("");
  const [loading, setLoading] = useState(false);
  const [unit, setUnit] = useState([]); 
  const [selectedUnit, setSelectedUnit] = useState("");

  useEffect(() => {
    fetchUnits();
  }, []);

  const fetchUnits = async () => {
    try {
      const response = await axios.get(
        "https://storeconvo.com/php/fetch.php?typ=unit"
      );
      if (Array.isArray(response.data)) {
        setUnit(response.data);
      } else {
        console.error("Unexpected response format:", response.data);
      }
    } catch (error) {
      console.error("Error fetching units:", error);
    }
  };
  

  const handlUnitChange = (e) => {
    const newUnit = e.target.value;
    setSelectedUnit(newUnit);
  };

  const handleSave = async () => {
    setLoading(true);
    try {
      const response = await axios.post(
        "https://storeconvo.com/php/add_stock.php",
        {
          items: stockItem,
          unit:selectedUnit,
          stockvalue: stockValue,
        },
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }
      );
      console.log(response.data);
      if (response.data) {
        toast.success("Stock added successfully!");
        setIsOpen(false);
        onSuccess();
      } else {
        toast.error("Something went wrong");
      }
    } catch (error) {
      toast.error("Failed to add stock!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button className="bg-[#308E87] hover:bg-[#308E87]">
          <FiPlus className="text-white text-xl mr-2" />
          Add New Stock
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle>Add New Stock</DialogTitle>
          <DialogDescription>
            Fill out the details to add a new stock item.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="stockItem" className="text-right">
              Stock Item
            </Label>
            <Input
              id="stockItem"
              className="col-span-3"
              placeholder="Enter stock item"
              value={stockItem}
              onChange={(e) => setStockItem(e.target.value)}
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <label htmlFor="SubCategory">SubCategory</label>
            <select
              name="unit"
              id="unit"
              className="h-10 border mt-1 rounded px-4 w-full bg-[#fff]"
              value={selectedUnit}
              onChange={handlUnitChange}
            >
              <option value="">Choose Subcategory</option>
              {unit.length > 0 ? (
                unit.map((unit) => (
                  <option key={unit.unitid} value={unit.unitid}>
                    {unit.unitname}
                  </option>
                ))
              ) : (
                <option value="">No units available</option>
              )}
            </select>
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="stockValue" className="text-right">
              Stock Value
            </Label>
            <Input
              id="stockValue"
              className="col-span-3"
              placeholder="Enter stock value"
              value={stockValue}
              onChange={(e) => setStockValue(e.target.value)}
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
            {loading ? "Saving..." : "Save Stock"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export default AddStock;
