import React, { useState, useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../../components/ui/dialog";
import { Button } from "../../components/ui/button";
import { AiFillEdit } from "react-icons/ai";
import { Input } from "../../components/ui/input";
import { Label } from "../../components/ui/label";
import axios from "axios";
import { toast } from "react-hot-toast";

function EditStockModal({ stock, onSuccess }) {
  const [isOpen, setIsOpen] = useState(false);
  const [stockItem, setStockItem] = useState(stock?.items || "");
  const [stockValue, setStockValue] = useState(stock?.stockvalue || "");
  const [stockMrp, setStockMrp] = useState(stock?.mrp || "");
  const [loading, setLoading] = useState(false);
  const [unit, setUnit] = useState([]);
  const [selectedUnit, setSelectedUnit] = useState(stock?.unit || "");

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

  const handleSave = async () => {
    setLoading(true);
    try {
      const response = await axios.post(
        "https://storeconvo.com/php/edit.php",
        {
          id: stock.stock_id,
          items: stockItem,
          unit: selectedUnit,
          stockvalue: stockValue,
          stockmrp: stockMrp,
          typ: "stock",
        },
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }
      );
      console.log(response.data);
      if (response.data) {
        toast.success("Stock edited successfully!");
        setIsOpen(false);
        if (onSuccess) onSuccess();
      } else {
        toast.error("Something went wrong");
      }
    } catch (error) {
      toast.error("Failed to edit stock!");
      console.error("Edit stock error:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleUnitChange = (e) => {
    setSelectedUnit(e.target.value);
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <AiFillEdit
          className="text-[#495057] text-xl transition-transform transform hover:scale-110 cursor-pointer"
          onClick={() => setIsOpen(true)}
        />
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle>Edit Stock</DialogTitle>
          <DialogDescription>
            Update the details of the stock item.
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
            <Label htmlFor="unit" className="text-right">
              Unit
            </Label>
            <select
              id="unit"
              className="col-span-3 h-10 border mt-1 rounded px-4 w-full bg-white focus:ring-2 focus:ring-[#000] focus:ring-offset-0 outline-none"
              value={selectedUnit}
              onChange={handleUnitChange}
            >
              <option value="">Choose Unit</option>
              {unit.length > 0 ? (
                unit.map((u) => (
                  <option key={u.unitid} value={u.unitid}>
                    {u.unitname}
                  </option>
                ))
              ) : (
                <option value="">No units available</option>
              )}
            </select>
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="stockValue" className="text-right">
              Stock Quantity
            </Label>
            <Input
              id="stockValue"
              className="col-span-3"
              placeholder="Enter stock value"
              value={stockValue}
              onChange={(e) => setStockValue(e.target.value)}
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="stockValue" className="text-right">
              MRP
            </Label>
            <Input
              id="mrp"
              className="col-span-3"
              placeholder="Enter stock mrp"
              value={stockMrp}
              onChange={(e) => setStockMrp(e.target.value)}
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

export default EditStockModal;
