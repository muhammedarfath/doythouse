import React, { useState, useEffect } from "react";
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

  const [productName, setProductName] = useState("");
  const [description, setDescription] = useState("");
  const [userCode, setUserCode] = useState("");
  const [unitId, setUnitId] = useState("");
  const [reorderLevel, setReorderLevel] = useState("");
  const [hsnAcs, setHsnAcs] = useState("");
  const [cgst, setCgst] = useState("");
  const [sgst, setSgst] = useState("");
  const [salesUnit, setSalesUnit] = useState("");
  const [packSize, setPackSize] = useState("");
  const [category, setCategory] = useState("");
  const [subCategory, setSubCategory] = useState("");
  const [mrp, setMrp] = useState("");
  const [purchasePrice, setPurchasePrice] = useState("");
  const [retailPrice, setRetailPrice] = useState("");
  const [wholesalePrice, setWholesalePrice] = useState("");
  const [specialPrice, setSpecialPrice] = useState("");
  const [dealerPrice, setDealerPrice] = useState("");
  const [openQty, setOpenQty] = useState("");

  useEffect(() => {
    if (product) {
      setProductName(product.productname || "");
      setDescription(product.productdescription || "");
      setUserCode(product.productusercode || "");
      setUnitId(product.unitid || "");
      setReorderLevel(product.reorderlevel || "");
      setHsnAcs(product.hsn || "");
      setCgst(product.cgst || "");
      setSgst(product.sgst || "");
      setSalesUnit(product.salesunit || "");
      setPackSize(product.packsize || "");
      setCategory(product.cateoryid || "");
      setSubCategory(product.subcategoryid || "");
      setMrp(product.mrp || "");
      setPurchasePrice(product.purchaseprice || "");
      setRetailPrice(product.retailprice || "");
      setWholesalePrice(product.wholesaleprice || "");
      setSpecialPrice(product.specialprice || "");
      setDealerPrice(product.dealerprice || "");
      setOpenQty(product.openqty || "");
    }
  }, [product]);

  const handleSave = async () => {
    setLoading(true);
    try {
      const response = await axios.post("https://storeconvo.com/php/edit.php", {
        id:product.productid,
        productname: productName,
        productdescription: description,
        productusercode: userCode,
        unitid: unitId,
        reorderlevel: reorderLevel,
        hsn: hsnAcs,
        cgst: cgst,
        sgst: sgst,
        salesunit: salesUnit,
        packsize: packSize,
        cateoryid: category,
        subcategoryid: subCategory,
        mrp: mrp,
        purchaseprice: purchasePrice,
        retailprice: retailPrice,
        wholesaleprice: wholesalePrice,
        specialprice: specialPrice,
        dealerprice: dealerPrice,
        openqty: openQty,
        typ:"product"
      });
      console.log(response.data);
      alert("succss")
    } catch (error) {
    } finally {
      setLoading(false);
      setOpen(false);
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
        <DialogContent className="sm:max-w-[900px] mt-3 overflow-scroll h-full">
          <DialogHeader>
            <DialogTitle>Edit Product</DialogTitle>
            <DialogDescription>Update your product details below.</DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            {[
              { label: "Product Name", id: "productName", value: productName, setter: setProductName },
              { label: "Description", id: "description", value: description, setter: setDescription, textarea: true },
              { label: "Product User Code", id: "userCode", value: userCode, setter: setUserCode },
              { label: "Unit ID", id: "unitId", value: unitId, setter: setUnitId },
              { label: "Reorder Level", id: "reorderLevel", value: reorderLevel, setter: setReorderLevel },
              { label: "HSN ACS", id: "hsnAcs", value: hsnAcs, setter: setHsnAcs },
              { label: "CGST", id: "cgst", value: cgst, setter: setCgst },
              { label: "SGST", id: "sgst", value: sgst, setter: setSgst },
              { label: "Sales Unit", id: "salesUnit", value: salesUnit, setter: setSalesUnit },
              { label: "Pack Size", id: "packSize", value: packSize, setter: setPackSize },
              { label: "Category", id: "category", value: category, setter: setCategory },
              { label: "Subcategory", id: "subCategory", value: subCategory, setter: setSubCategory },
              { label: "MRP", id: "mrp", value: mrp, setter: setMrp },
              { label: "Purchase Price", id: "purchasePrice", value: purchasePrice, setter: setPurchasePrice },
              { label: "Retail Price", id: "retailPrice", value: retailPrice, setter: setRetailPrice },
              { label: "Wholesale Price", id: "wholesalePrice", value: wholesalePrice, setter: setWholesalePrice },
              { label: "Special Price", id: "specialPrice", value: specialPrice, setter: setSpecialPrice },
              { label: "Dealer Price", id: "dealerPrice", value: dealerPrice, setter: setDealerPrice },
              { label: "Opening Quantity", id: "openQty", value: openQty, setter: setOpenQty },
            ].map(({ label, id, value, setter, textarea }) => (
              <div key={id} className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor={id} className="text-right">
                  {label}
                </Label>
                {textarea ? (
                  <textarea
                    id={id}
                    value={value}
                    onChange={(e) => setter(e.target.value)}
                    className="col-span-3 p-2 border rounded"
                  />
                ) : (
                  <Input
                    id={id}
                    value={value}
                    onChange={(e) => setter(e.target.value)}
                    className="col-span-3"
                  />
                )}
              </div>
            ))}
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
