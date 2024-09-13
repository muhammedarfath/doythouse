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
import { AiFillEdit } from "react-icons/ai";
import axios from "axios";
import { toast } from "react-hot-toast";

function EditSupplierModal({ supplier, onSuccess }) {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const [supplierName, setSupplierName] = useState(supplier.supplier_name || "");
  const [email, setEmail] = useState(supplier.supplier_email || "");
  const [contactPerson, setContactPerson] = useState(supplier.supplier_contactperson || "");
  const [address, setAddress] = useState(supplier.supplier_address || "");
  const [mobile1, setMobile1] = useState(supplier.supplier_mobile1 || "");
  const [mobile2, setMobile2] = useState(supplier.supplier_mobile2 || "");
  const [phone, setPhone] = useState(supplier.supplier_phone || "");
  const [pincode, setPincode] = useState(supplier.supplier_pin || "");
  const [gstNumber, setGstNumber] = useState(supplier.supplier_gst || "");
  const [state, setState] = useState(supplier.supplier_state || "");
  const [creditedMoney, setCreditedMoney] = useState(supplier.supplier_creditedmoney || "");
  const [paidMoney, setPaidMoney] = useState(supplier.supplier_paidmoney || "");
  const [balancedMoney, setBalancedMoney] = useState(supplier.supplier_balancedmoney || "");

  const handleSave = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await axios.post(
        "https://storeconvo.com/php/edit.php/",
        {
          id:supplier.supplier_id,
          supplier_name: supplierName,
          supplier_email: email,
          supplier_contactperson: contactPerson,
          supplier_address: address,
          supplier_mobile1: mobile1,
          supplier_mobile2: mobile2,
          supplier_phone: phone,
          supplier_pin: pincode,
          supplier_gst: gstNumber,
          supplier_state: state,
          supplier_creditedmoney: creditedMoney,
          supplier_paidmoney: paidMoney,
          supplier_balancedmoney: balancedMoney,
          typ: "supplier",
        },
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }
      );
      console.log(response.data);
      if (response.status === 200) {
        toast.success("Supplier details updated successfully");
        setOpen(false);
        onSuccess();
      }
    } catch (error) {
      toast.error("Error updating supplier details");
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
        <DialogContent className="lg:max-w-[900px] overflow-auto lg:max-h-[90%] h-full mt-3 sm:max-w-[900px]">
          <DialogHeader>
            <DialogTitle>Edit Supplier</DialogTitle>
            <DialogDescription>Edit Supplier Details</DialogDescription>
          </DialogHeader>
          <form onSubmit={handleSave}>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="supplierName" className="text-right">
                  Supplier Name
                </Label>
                <Input
                  id="supplierName"
                  value={supplierName}
                  onChange={(e) => setSupplierName(e.target.value)}
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="email" className="text-right">
                  Email ID
                </Label>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="contactPerson" className="text-right">
                  Contact Person Name
                </Label>
                <Input
                  id="contactPerson"
                  value={contactPerson}
                  onChange={(e) => setContactPerson(e.target.value)}
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
                <Label htmlFor="mobile1" className="text-right">
                  Mobile Number 1
                </Label>
                <Input
                  id="mobile1"
                  type="tel"
                  value={mobile1}
                  onChange={(e) => setMobile1(e.target.value)}
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="mobile2" className="text-right">
                  Mobile Number 2
                </Label>
                <Input
                  id="mobile2"
                  type="tel"
                  value={mobile2}
                  onChange={(e) => setMobile2(e.target.value)}
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="phone" className="text-right">
                  Phone
                </Label>
                <Input
                  id="phone"
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="pincode" className="text-right">
                  Pincode
                </Label>
                <Input
                  id="pincode"
                  type="text"
                  value={pincode}
                  onChange={(e) => setPincode(e.target.value)}
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="gstNumber" className="text-right">
                  GST Number
                </Label>
                <Input
                  id="gstNumber"
                  value={gstNumber}
                  onChange={(e) => setGstNumber(e.target.value)}
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="state" className="text-right">
                  State
                </Label>
                <select
                  id="state"
                  value={state}
                  onChange={(e) => setState(e.target.value)}
                  className="col-span-3 p-2 border rounded"
                >
                  <option value="">Select a state</option>
                  <option value="state1">State 1</option>
                  <option value="state2">State 2</option>
                  <option value="state3">State 3</option>
                </select>
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="creditedMoney" className="text-right">
                  Credited Money
                </Label>
                <Input
                  id="creditedMoney"
                  type="number"
                  value={creditedMoney}
                  onChange={(e) => setCreditedMoney(e.target.value)}
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="paidMoney" className="text-right">
                  Paid Money
                </Label>
                <Input
                  id="paidMoney"
                  type="number"
                  value={paidMoney}
                  onChange={(e) => setPaidMoney(e.target.value)}
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="balancedMoney" className="text-right">
                  Balanced Money
                </Label>
                <Input
                  id="balancedMoney"
                  type="number"
                  value={balancedMoney}
                  onChange={(e) => setBalancedMoney(e.target.value)}
                  className="col-span-3"
                />
              </div>
            </div>
            <DialogFooter>
              <Button type="button" variant="outline" onClick={() => setOpen(false)}>
                Cancel
              </Button>
              <Button type="submit" disabled={loading}>
                {loading ? "Saving..." : "Save"}
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default EditSupplierModal;
