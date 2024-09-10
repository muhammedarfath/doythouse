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
import { AiFillEdit } from "react-icons/ai";

function EditPurchaseEntryModal() {
    const [open, setOpen] = useState(false); 

  return (
    <div>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <AiFillEdit
            className="text-[#495057] text-xl transition-transform transform hover:scale-110 cursor-pointer"
            onClick={() => setOpen(true)}
          />
        </DialogTrigger>
        <DialogContent className="sm:max-w-[90%] md:max-w-[80%] lg:max-w-[70%] mx-auto mt-3 h-full overflow-scroll">
          <DialogHeader>
            <DialogTitle>Edit Purchase Entry</DialogTitle>
            <DialogDescription>Edit the details of your purchase entry</DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 items-center gap-4">
              <Label htmlFor="billNumber" className="text-left">
                Bill Number
              </Label>
              <Input id="billNumber" className="w-full" />

              <Label htmlFor="supplierName" className="text-left">
                Supplier Name
              </Label>
              <select id="supplierName" className="w-full p-2 border rounded">
                <option value="">Select Supplier</option>
                <option value="Supplier1">Supplier 1</option>
                <option value="Supplier2">Supplier 2</option>
              </select>

              <Label htmlFor="purchaseDate" className="text-left">
                Purchase Date
              </Label>
              <Input id="purchaseDate" type="date" className="w-full" />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-center gap-4">
              <Label htmlFor="productName" className="text-left">
                Product Name
              </Label>
              <select id="productName" className="w-full p-2 border rounded">
                <option value="">Select Product</option>
                <option value="Product1">Product 1</option>
                <option value="Product2">Product 2</option>
              </select>

              <Label htmlFor="mrp" className="text-left">
                MRP
              </Label>
              <Input id="mrp" className="w-full" />

              <Label htmlFor="qty" className="text-left">
                QTY
              </Label>
              <Input id="qty" className="w-full" />

              <Label htmlFor="rate" className="text-left">
                Rate
              </Label>
              <Input id="rate" className="w-full" />

              <Label htmlFor="discount" className="text-left">
                Discount (%)
              </Label>
              <Input id="discount" className="w-full" />

              <Label htmlFor="total" className="text-left">
                Total
              </Label>
              <Input id="total" className="w-full" />

              <Label htmlFor="cgst" className="text-left">
                CGST (%)
              </Label>
              <Input id="cgst" className="w-full" />

              <Label htmlFor="sgst" className="text-left">
                SGST (%)
              </Label>
              <Input id="sgst" className="w-full" />

              <Label htmlFor="igst" className="text-left">
                IGST (%)
              </Label>
              <Input id="igst" className="w-full" />

              <Label htmlFor="corePrice" className="text-left">
                Core Price
              </Label>
              <Input id="corePrice" className="w-full" />

              <Label htmlFor="retail" className="text-left">
                Retail
              </Label>
              <Input id="retail" className="w-full" />

              <Label htmlFor="wholesale" className="text-left">
                Wholesale
              </Label>
              <Input id="wholesale" className="w-full" />

              <Label htmlFor="dealer" className="text-left">
                Dealer
              </Label>
              <Input id="dealer" className="w-full" />

              <Label htmlFor="special" className="text-left">
                Special
              </Label>
              <Input id="special" className="w-full" />

              <Button type="submit" className="col-span-1 sm:col-span-2 md:col-span-3 lg:col-span-4 bg-[#308E87] hover:bg-[#308E87]">
                Add Entry
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default EditPurchaseEntryModal;
