import React, { useEffect, useState } from "react";
import { Button } from "../../components/ui/button";
import { FiPlus } from "react-icons/fi";
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
import { toast } from "react-hot-toast";

function AddInvoice({ onchange }) {
  const [workOrder, setWorkOrder] = useState("");
  const [address, setAddress] = useState("");
  const [productName, setProductName] = useState("");
  const [cashMode, setCashMode] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [workOrders, setWorkOrders] = useState([]);

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
        console.log("somthing went wrong");
      }
    } catch {
      console.log("somthing went wrong");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await axios.post(
      "https://storeconvo.com/php/add_invoice.php",
      new URLSearchParams({
        order_no: workOrder,
        address: address,
        product_id: productName,
        cash_option: cashMode,
      }),
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }
    );
    if (response.status === 200) {
      toast.success("Invoice added successfully");
      onchange();
      setIsOpen(false);
      setWorkOrder("");
      setAddress("");
      setProductName("");
      setCashMode("");
    } else {
      toast.error("Failed to add invoice");
    }
  };

  return (
    <div>
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogTrigger asChild>
          <Button className="bg-[#308E87] hover:bg-[#308E87]">
            <FiPlus className="text-white text-xl" />
            Add New Invoice
          </Button>
        </DialogTrigger>
        <DialogContent className="lg:max-w-[900px] overflow-auto lg:max-h-[40%] h-full mt-3 sm:max-w-[900px]">
          <DialogHeader>
            <DialogTitle>Add New Invoice</DialogTitle>
            <DialogDescription>Add Invoice Details</DialogDescription>
          </DialogHeader>
          <form onSubmit={handleSubmit}>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="workOrder" className="text-right">
                  Work Order
                </Label>
                <select
                  id="workOrder"
                  value={workOrder}
                  onChange={(e) => setWorkOrder(e.target.value)}
                  className="col-span-3 p-2 border rounded focus:ring-2 focus:ring-[#000] focus:ring-offset-0 outline-none"
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
                  className="col-span-3 p-2 border rounded focus:ring-2 focus:ring-[#000] focus:ring-offset-0 outline-none"
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
              >
                Save Details
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default AddInvoice;
