import React, { useState } from "react";
import { Button } from "../../components/ui/button";
import { AiFillEdit } from "react-icons/ai";
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

function ProductEditModal({ product }) {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSave = async () => {
    setLoading(true);
    // Add your save logic here
    setLoading(false);
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
        <DialogContent className="sm:max-w-[900px] mt-3 overflow-scroll h-full">
          <DialogHeader>
            <DialogTitle>Edit Product</DialogTitle>
            <DialogDescription>Update your product details below.</DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            {/* Product Name */}
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="productName" className="text-right">
                Product Name
              </Label>
              <Input
                id="productName"
                // value={productName}
                // onChange={(e) => setProductName(e.target.value)}
                className="col-span-3"
              />
            </div>
            {/* Description */}
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="description" className="text-right">
                Description
              </Label>
              <textarea
                id="description"
                // value={description}
                // onChange={(e) => setDescription(e.target.value)}
                className="col-span-3 p-2 border rounded"
              />
            </div>
            {/* Product User Code */}
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="userCode" className="text-right">
                Product User Code
              </Label>
              <Input
                id="userCode"
                // value={userCode}
                // onChange={(e) => setUserCode(e.target.value)}
                className="col-span-3"
              />
            </div>
            {/* Unit ID */}
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="unitId" className="text-right">
                Unit ID
              </Label>
              <Input
                id="unitId"
                // value={unitId}
                // onChange={(e) => setUnitId(e.target.value)}
                className="col-span-3"
              />
            </div>
            {/* Reorder Level */}
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="reorderLevel" className="text-right">
                Reorder Level
              </Label>
              <Input
                id="reorderLevel"
                // value={reorderLevel}
                // onChange={(e) => setReorderLevel(e.target.value)}
                className="col-span-3"
              />
            </div>
            {/* HSN ACS */}
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="hsnAcs" className="text-right">
                HSN ACS
              </Label>
              <Input
                id="hsnAcs"
                // value={hsnAcs}
                // onChange={(e) => setHsnAcs(e.target.value)}
                className="col-span-3"
              />
            </div>
            {/* CGST */}
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="cgst" className="text-right">
                CGST
              </Label>
              <Input
                id="cgst"
                // value={cgst}
                // onChange={(e) => setCgst(e.target.value)}
                className="col-span-3"
              />
            </div>
            {/* SGST */}
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="sgst" className="text-right">
                SGST
              </Label>
              <Input
                id="sgst"
                // value={sgst}
                // onChange={(e) => setSgst(e.target.value)}
                className="col-span-3"
              />
            </div>
            {/* Sales Unit */}
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="salesUnit" className="text-right">
                Sales Unit
              </Label>
              <Input
                id="salesUnit"
                // value={salesUnit}
                // onChange={(e) => setSalesUnit(e.target.value)}
                className="col-span-3"
              />
            </div>
            {/* Pack Size */}
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="packSize" className="text-right">
                Pack Size
              </Label>
              <Input
                id="packSize"
                // value={packSize}
                // onChange={(e) => setPackSize(e.target.value)}
                className="col-span-3"
              />
            </div>
            {/* Category */}
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="category" className="text-right">
                Category
              </Label>
              <Input
                id="category"
                // value={category}
                // onChange={(e) => setCategory(e.target.value)}
                className="col-span-3"
              />
            </div>
            {/* Subcategory */}
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="subCategory" className="text-right">
                Subcategory
              </Label>
              <Input
                id="subCategory"
                // value={subCategory}
                // onChange={(e) => setSubCategory(e.target.value)}
                className="col-span-3"
              />
            </div>
            {/* MRP */}
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="mrp" className="text-right">
                MRP
              </Label>
              <Input
                id="mrp"
                // value={mrp}
                // onChange={(e) => setMrp(e.target.value)}
                className="col-span-3"
              />
            </div>
            {/* Purchase Price */}
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="purchasePrice" className="text-right">
                Purchase Price
              </Label>
              <Input
                id="purchasePrice"
                // value={purchasePrice}
                // onChange={(e) => setPurchasePrice(e.target.value)}
                className="col-span-3"
              />
            </div>
            {/* Retail Price */}
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="retailPrice" className="text-right">
                Retail Price
              </Label>
              <Input
                id="retailPrice"
                // value={retailPrice}
                // onChange={(e) => setRetailPrice(e.target.value)}
                className="col-span-3"
              />
            </div>
            {/* Wholesale Price */}
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="wholesalePrice" className="text-right">
                Wholesale Price
              </Label>
              <Input
                id="wholesalePrice"
                // value={wholesalePrice}
                // onChange={(e) => setWholesalePrice(e.target.value)}
                className="col-span-3"
              />
            </div>
            {/* Special Price */}
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="specialPrice" className="text-right">
                Special Price
              </Label>
              <Input
                id="specialPrice"
                // value={specialPrice}
                // onChange={(e) => setSpecialPrice(e.target.value)}
                className="col-span-3"
              />
            </div>
            {/* Dealer Price */}
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="dealerPrice" className="text-right">
                Dealer Price
              </Label>
              <Input
                id="dealerPrice"
                // value={dealerPrice}
                // onChange={(e) => setDealerPrice(e.target.value)}
                className="col-span-3"
              />
            </div>
            {/* Opening Quantity */}
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="openQty" className="text-right">
                Opening Quantity
              </Label>
              <Input
                id="openQty"
                // value={openQty}
                // onChange={(e) => setOpenQty(e.target.value)}
                className="col-span-3"
              />
            </div>
          </div>
          <DialogFooter>
            <Button
              onClick={handleSave}
              disabled={loading}
              className={`bg-[#308E87] hover:bg-[#308E87] ${
                loading ? "cursor-not-allowed" : ""
              }`}
            >
              {loading ? "Saving..." : "Save changes"}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default ProductEditModal;
