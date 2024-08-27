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
  
  function SupplierModal() {
    return (
      <div>
        <Dialog>
          <DialogTrigger asChild>
            <Button className="bg-[#308E87] hover:bg-[#308E87]">
              <FiPlus className="text-white text-xl" />
              Add New Supplier
            </Button>
          </DialogTrigger>
          <DialogContent className="lg:max-w-[900px] overflow-auto lg:max-h-[90%] h-full  mt-3 sm:max-w-[900px]">
            <DialogHeader>
              <DialogTitle>Add New Supplier</DialogTitle>
              <DialogDescription>Add Your Supplier Details</DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="supplierName" className="text-right">
                  Supplier Name
                </Label>
                <Input id="supplierName" className="col-span-3" />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="email" className="text-right">
                  Email ID
                </Label>
                <Input id="email" type="email" className="col-span-3" />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="contactPerson" className="text-right">
                  Contact Person Name
                </Label>
                <Input id="contactPerson" className="col-span-3" />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="address" className="text-right">
                  Address
                </Label>
                <Input id="address" className="col-span-3" />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="mobile1" className="text-right">
                  Mobile Number 1
                </Label>
                <Input id="mobile1" type="tel" className="col-span-3" />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="mobile2" className="text-right">
                  Mobile Number 2
                </Label>
                <Input id="mobile2" type="tel" className="col-span-3" />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="phone" className="text-right">
                  Phone
                </Label>
                <Input id="phone" type="tel" className="col-span-3" />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="pincode" className="text-right">
                  Pincode
                </Label>
                <Input id="pincode" type="text" className="col-span-3" />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="gstNumber" className="text-right">
                  GST Number
                </Label>
                <Input id="gstNumber" className="col-span-3" />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="state" className="text-right">
                  State
                </Label>
                <select id="state" className="col-span-3 p-2 border rounded">
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
                <Input id="creditedMoney" type="number" className="col-span-3" />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="paidMoney" className="text-right">
                  Paid Money
                </Label>
                <Input id="paidMoney" type="number" className="col-span-3" />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="balancedMoney" className="text-right">
                  Balanced Money
                </Label>
                <Input id="balancedMoney" type="number" className="col-span-3" />
              </div>
            </div>
            <DialogFooter>
              <Button className="bg-[#308E87] hover:bg-[#308E87] text-white" type="submit">
                Save Details
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    );
  }
  
  export default SupplierModal;
  