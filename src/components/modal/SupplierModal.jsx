import React, { useState, useEffect } from "react";
import axios from "axios";
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
import { toast } from "react-hot-toast";
import { FiCheckCircle } from "react-icons/fi"; 

function SupplierModal({ setSupplier }) {
  const [supplierName, setSupplierName] = useState("");
  const [email, setEmail] = useState("");
  const [contactPerson, setContactPerson] = useState("");
  const [address, setAddress] = useState("");
  const [mobile1, setMobile1] = useState("");
  const [mobile2, setMobile2] = useState("");
  const [phone, setPhone] = useState("");
  const [pincode, setPincode] = useState("");
  const [gstNumber, setGstNumber] = useState("");
  const [state, setState] = useState("");
  const [creditedMoney, setCreditedMoney] = useState("");
  const [paidMoney, setPaidMoney] = useState("");
  const [balancedMoney, setBalancedMoney] = useState("");
  const [loading, setLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const credited = parseFloat(creditedMoney) || 0;
    const paid = parseFloat(paidMoney) || 0;
    const balance = credited - paid;
    setBalancedMoney(balance >= 0 ? balance : 0); 
  }, [creditedMoney, paidMoney]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await axios.post(
        "https://storeconvo.com/php/add_supplier.php",
        {
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
        },
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }
      );
      if (response.data) {
        toast.success("Supplier added successfully");
        setSupplier((prevSupplier) => [...prevSupplier, response.data]);
  
        // Clear the form fields after successful submission
        setSupplierName("");
        setEmail("");
        setContactPerson("");
        setAddress("");
        setMobile1("");
        setMobile2("");
        setPhone("");
        setPincode("");
        setGstNumber("");
        setState("");
        setCreditedMoney("");
        setPaidMoney("");
        setBalancedMoney("");
  
        setIsOpen(false); 
      } else {
        toast.error("Failed to add supplier");
      }
    } catch (error) {
      toast.error("Failed to add supplier");
    } finally {
      setLoading(false);
    }
  };
  
  return (
    <div>
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogTrigger asChild>
          <Button className="bg-[#308E87] hover:bg-[#308E87]">
            <FiPlus className="text-white text-xl" />
            Add New Supplier
          </Button>
        </DialogTrigger>
        <DialogContent className="lg:max-w-[900px] overflow-auto lg:max-h-[90%] h-full mt-3 sm:max-w-[900px]">
          <DialogHeader>
            <DialogTitle>Add New Supplier</DialogTitle>
            <DialogDescription>Add Your Supplier Details</DialogDescription>
          </DialogHeader>
          <form onSubmit={handleSubmit}>
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
                <Input
                  id="state"
                  value={state}
                  onChange={(e) => setState(e.target.value)}
                  className="col-span-3"
                />
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
                  readOnly
                  className="col-span-3"
                />
                {balancedMoney === 0 && (
                  <FiCheckCircle className="text-green-500 text-2xl ml-2" />
                )}
              </div>
            </div>
            <DialogFooter>
              <Button type="submit" disabled={loading} className="bg-[#308E87] hover:bg-[#308E87">
                {loading ? "Adding Supplier..." : "Add Supplier"}
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default SupplierModal;
