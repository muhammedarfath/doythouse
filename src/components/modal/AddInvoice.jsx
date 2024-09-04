import React, { useState } from "react";
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

function AddInvoice() {
  const [customerName, setCustomerName] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [address, setAddress] = useState("");
  const [balance, setBalance] = useState("");
  const [productName, setProductName] = useState("");
  const [total, setTotal] = useState("");
  const [qty, setQty] = useState("");
  const [cashMode, setCashMode] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await axios.post(
      "https://storeconvo.com/php/add_invoice.php",
      new URLSearchParams({
        date: "2024-08-02",
        cust_id: 1,
        phone: mobileNumber,
        gst: 312,
        address: address,
        balance: balance,
        product_id:1,
        part_number: "PN123",
        mrp: 123,
        qty:qty, 
        rate: 134,
        discount: 32,
        cgst: 32,
        sgst: 42,
        total: 432,
        cash_option: cashMode,
        paid_amount: 4121,
        notes:"note",
      }),
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }
    );
      console.log(response,"new addedddddddd");
      if (response.status === 200) {
        toast.success("invoice added successfully");
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
        <DialogContent className="lg:max-w-[900px] overflow-auto lg:max-h-[70%] h-full mt-3 sm:max-w-[900px]">
          <DialogHeader>
            <DialogTitle>Add New Invoice</DialogTitle>
            <DialogDescription>Add Invoice Details</DialogDescription>
          </DialogHeader>
          <form onSubmit={handleSubmit}>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="customerName" className="text-right">
                  Customer Name
                </Label>
                <Input
                  id="customerName"
                  value={customerName}
                  onChange={(e) => setCustomerName(e.target.value)}
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="mobileNumber" className="text-right">
                  Mobile Number
                </Label>
                <Input
                  id="mobileNumber"
                  type="tel"
                  value={mobileNumber}
                  onChange={(e) => setMobileNumber(e.target.value)}
                  className="col-span-3"
                />
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
                <Label htmlFor="balance" className="text-right">
                  Balance
                </Label>
                <Input
                  id="balance"
                  type="number"
                  value={balance}
                  onChange={(e) => setBalance(e.target.value)}
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
                <Label htmlFor="total" className="text-right">
                  Total
                </Label>
                <Input
                  id="total"
                  type="number"
                  value={total}
                  onChange={(e) => setTotal(e.target.value)}
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="qty" className="text-right">
                  Quantity (Qty)
                </Label>
                <Input
                  id="qty"
                  type="number"
                  value={qty}
                  onChange={(e) => setQty(e.target.value)}
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
                  <option value="">Select cash mode</option>
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
