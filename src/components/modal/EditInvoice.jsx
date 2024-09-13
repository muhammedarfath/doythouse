import React, { useEffect, useState } from "react";
import axios from 'axios'; // Import axios for making API requests
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { AiFillEdit } from "react-icons/ai";
import { Input } from "../../components/ui/input";
import { Label } from "../../components/ui/label";
import { Button } from "../../components/ui/button";
import { toast } from 'react-hot-toast'; 

function EditInvoice({ entry, onSuccess }) { 
  const [open, setOpen] = useState(false);
  const [address, setAddress] = useState(entry?.address || "");
  const [cashMode, setCashMode] = useState(entry?.cash_option || "");
  const [loading, setLoading] = useState(false);
  const [workOrders, setWorkOrders] = useState([]);
  const [workOrder, setWorkOrder] = useState(entry.cust_orderno || ""); 
  const [productName, setProductName] = useState(entry.product || ""); 

  useEffect(() => {
    fetchOrderDetails();
  }, []);

  const fetchOrderDetails = async () => {
    try {
      const response = await axios.post(
        "https://storeconvo.com/php/fetch.php?typ=orderlist"
      );
      if (response.data) {
        setWorkOrders(response.data);
      } else {
        console.log("Something went wrong");
      }
    } catch (error) {
      console.log("Something went wrong", error);
    }
  };


  const handleSave = async (e) => {
    e.preventDefault(); 
    setLoading(true);

    try {
      const response = await axios.post(
        "https://storeconvo.com/php/edit.php",
        new URLSearchParams({
          id: entry.invoice_id, 
          address: address,
          cash_option: cashMode,
          product: productName,
          typ: "invoice"
        }),
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }
      );
      console.log(response.data);
      if (response.data) {
        toast.success("Edit successful");
        setOpen(false);
        if (onSuccess) onSuccess(); 
      }
    } catch (error) {
      console.error("Error updating invoice:", error);
      toast.error("Failed to update invoice"); 
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
        <DialogContent className="lg:max-w-[900px] overflow-auto lg:max-h-[40%] h-full mt-3 sm:max-w-[900px]">
          <DialogHeader>
            <DialogTitle>Edit Invoice</DialogTitle> 
            <DialogDescription>Update Invoice Details</DialogDescription> 
          </DialogHeader>
          <form onSubmit={handleSave}>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="workOrder" className="text-right">
                  Work Order
                </Label>
                <select
                  id="workOrder"
                  value={workOrder}
                  onChange={(e) => setWorkOrder(e.target.value)}
                  className="col-span-3 p-2 border rounded"
                >
                  <option value="">Select Work Order</option>
                  {workOrders.map((order) => (
                    <option key={order.id} value={order.cust_orderno}>
                      {order.cust_orderno}
                    </option>
                  ))}
                </select>
              </div>

              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="address" className="text-right">
                  Address
                </Label>
                <Input
                  id="address"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  className="col-span-3"
                />
              </div>

              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="productName" className="text-right">
                  Product Name
                </Label>
                <Input
                  id="productName"
                  value={productName}
                  onChange={(e) => setProductName(e.target.value)}
                  className="col-span-3"
                />
              </div>

              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="cashMode" className="text-right">
                  Cash Mode
                </Label>
                <select
                  id="cashMode"
                  value={cashMode}
                  onChange={(e) => setCashMode(e.target.value)}
                  className="col-span-3 p-2 border rounded"
                >
                  <option value="">Select Cash Mode</option>
                  <option value="cash">Cash</option>
                  <option value="online">Online</option>
                </select>
              </div>
            </div>
            <DialogFooter>
              <Button
                className="bg-[#308E87] hover:bg-[#308E87] text-white"
                type="submit"
                disabled={loading} 
              >
                {loading ? "Saving..." : "Save Details"}
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default EditInvoice;
