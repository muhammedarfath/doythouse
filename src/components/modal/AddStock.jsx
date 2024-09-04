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

function AddStock() {
  const [isOpen, setIsOpen] = useState(false);
  const [stockItem, setStockItem] = useState("");
  const [totalItems, setTotalItems] = useState("");
  const [stockValue, setStockValue] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSave = async () => {
    setLoading(true);
    try {
      // Replace with your API endpoint
      await axios.post("/api/stock", {
        stockItem,
        totalItems,
        stockValue,
      });
      toast.success("Stock added successfully!");
      setIsOpen(false);
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
            <Label htmlFor="totalItems" className="text-right">
              Total Items
            </Label>
            <Input
              id="totalItems"
              className="col-span-3"
              placeholder="Enter total items"
              value={totalItems}
              onChange={(e) => setTotalItems(e.target.value)}
            />
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
