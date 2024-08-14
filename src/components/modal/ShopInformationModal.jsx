import React from "react";
import { Button } from "../../components/ui/button";
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

function ShopInformationModal() {
  return (
    <div>
      <Dialog>
        <DialogTrigger asChild>
          <Button className="bg-[#308E87] hover:bg-[#308E87]">
            Edit Information
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[900px] ">
          <DialogHeader>
            <DialogTitle>Edit Shop Information</DialogTitle>
            <DialogDescription>Update your shop details</DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="shopName" className="text-right">
                Shop Name
              </Label>
              <Input id="shopName" className="col-span-3" defaultValue="Doyt House - Boutique & Salon" />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="email" className="text-right">
                Email
              </Label>
              <Input id="email" className="col-span-3" defaultValue="doythouse@gmail.com" />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="phone" className="text-right">
                Phone Number
              </Label>
              <Input id="phone" className="col-span-3" defaultValue="+91 9876543210" />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="manager" className="text-right">
                Manager
              </Label>
              <Input id="manager" className="col-span-3" defaultValue="Mangername" />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="gstNumber" className="text-right">
                GST Number
              </Label>
              <Input id="gstNumber" className="col-span-3" defaultValue="29AAACZ1234A1Z5" />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="state" className="text-right">
                State
              </Label>
              <Input id="state" className="col-span-3" defaultValue="Kerala (KL)" />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="bank" className="text-right">
                Bank
              </Label>
              <Input id="bank" className="col-span-3" defaultValue="State Bank of India" />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="branch" className="text-right">
                Branch
              </Label>
              <Input id="branch" className="col-span-3" defaultValue="Thiruvalla" />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="accountNumber" className="text-right">
                Account Number
              </Label>
              <Input id="accountNumber" className="col-span-3" defaultValue="123456789012" />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="ifscCode" className="text-right">
                IFSC Code
              </Label>
              <Input id="ifscCode" className="col-span-3" defaultValue="SBIN0001234" />
            </div>
          </div>
          <DialogFooter>
            <Button type="submit">Save</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}



export default ShopInformationModal
