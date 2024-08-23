import React from "react";
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

function NewPurchaseEntryModal() {
  return (
    <div>
      <Dialog>
        <DialogTrigger asChild>
          <Button className="bg-[#308E87] hover:bg-[#308E87]">
            <FiPlus className="text-white text-xl" />
            Create New Purchase Entry
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[900px]">
          <DialogHeader>
            <DialogTitle>Add Purchase Entry</DialogTitle>
            <DialogDescription>Enter the details of your new purchase entry</DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            {/* First Row */}
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="billNumber" className="text-right">
                Bill Number
              </Label>
              <Input id="billNumber" className="col-span-1" />

              <Label htmlFor="supplierName" className="text-right">
                Supplier Name
              </Label>
              <select id="supplierName" className="col-span-1 p-2 border rounded">
                <option value="">Select Supplier</option>
                <option value="Supplier1">Supplier 1</option>
                <option value="Supplier2">Supplier 2</option>
              </select>

              <Label htmlFor="purchaseDate" className="text-right">
                Purchase Date
              </Label>
              <Input id="purchaseDate" type="date" className="col-span-1" />
            </div>

            {/* Second Row */}
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="productName" className="text-right">
                Product Name
              </Label>
              <select id="productName" className="col-span-1 p-2 border rounded">
                <option value="">Select Product</option>
                <option value="Product1">Product 1</option>
                <option value="Product2">Product 2</option>
              </select>

              <Label htmlFor="mrp" className="text-right">
                MRP
              </Label>
              <Input id="mrp" className="col-span-1" />

              <Label htmlFor="qty" className="text-right">
                QTY
              </Label>
              <Input id="qty" className="col-span-1" />

              <Label htmlFor="rate" className="text-right">
                Rate
              </Label>
              <Input id="rate" className="col-span-1" />

              <Label htmlFor="discount" className="text-right">
                Discount (%)
              </Label>
              <Input id="discount" className="col-span-1" />

              <Label htmlFor="total" className="text-right">
                Total
              </Label>
              <Input id="total" className="col-span-1" />

              <Label htmlFor="cgst" className="text-right">
                CGST (%)
              </Label>
              <Input id="cgst" className="col-span-1" />

              <Label htmlFor="sgst" className="text-right">
                SGST (%)
              </Label>
              <Input id="sgst" className="col-span-1" />

              <Label htmlFor="igst" className="text-right">
                IGST (%)
              </Label>
              <Input id="igst" className="col-span-1" />

              <Label htmlFor="corePrice" className="text-right">
                Core Price
              </Label>
              <Input id="corePrice" className="col-span-1" />

              <Label htmlFor="retail" className="text-right">
                Retail
              </Label>
              <Input id="retail" className="col-span-1" />

              <Label htmlFor="wholesale" className="text-right">
                Wholesale
              </Label>
              <Input id="wholesale" className="col-span-1" />

              <Label htmlFor="dealer" className="text-right">
                Dealer
              </Label>
              <Input id="dealer" className="col-span-1" />

              <Label htmlFor="special" className="text-right">
                Special
              </Label>
              <Input id="special" className="col-span-1" />

              <Button type="submit" className="col-span-4 bg-[#308E87] hover:bg-[#308E87]">
                Add Entry
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default NewPurchaseEntryModal;
