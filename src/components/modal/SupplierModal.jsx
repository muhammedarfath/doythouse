import React, { useState } from "react";
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    console.log(supplierName);
    console.log(email);
    console.log(contactPerson);
    console.log(address);
    console.log(mobile1);
    console.log(mobile2);
    console.log(phone);
    console.log(pincode);
    console.log(gstNumber);
    console.log(state);
    console.log(creditedMoney);
    console.log(paidMoney);
    console.log(balancedMoney);

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
          supplier_state: "clt",
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
      console.log(response);
      if (response.data) {
        console.log(response.data);
        setSupplier((prevSupplier) => [...prevSupplier, response.data]);
        toast.success("Supplier added successfully");
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
              {/* Supplier Name */}
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
              {/* Email ID */}
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
              {/* Contact Person Name */}
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
              {/* Address */}
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
              {/* Mobile Number 1 */}
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
              {/* Mobile Number 2 */}
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
              {/* Phone */}
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
              {/* Pincode */}
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
              {/* GST Number */}
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
              {/* State */}
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
              {/* Credited Money */}
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
              {/* Paid Money */}
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

export default SupplierModal;
