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
import { toast } from "react-hot-toast";

function ProductEditModal({ product, onSuccess }) {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedSubcategory, setSelectedSubcategory] = useState("");
  const [categories, setCategories] = useState([]);
  const [subcategories, setSubcategories] = useState([]);
  const [units, setUnits] = useState([]);
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
      setSelectedCategory(product.cat_id || "");
      setSelectedSubcategory(product.subcat_id || "");
      setMrp(product.mrp || "");
      setPurchasePrice(product.purchaseprice || "");
      setRetailPrice(product.retailprice || "");
      setWholesalePrice(product.wholesaleprice || "");
      setSpecialPrice(product.specialprice || "");
      setDealerPrice(product.dealerprice || "");
      setOpenQty(product.openqty || "");
    }
  }, [product]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get(
          "https://storeconvo.com/php/fetch.php?typ=category"
        );
        setCategories(response.data);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    const fetchSubCategories = async () => {
      try {
        const response = await axios.get(
          "https://storeconvo.com/php/fetch.php?typ=subcategory"
        );
        setSubcategories(response.data);
      } catch (error) {
        console.error("Error fetching subcategories:", error);
      }
    };

    const fetchUnits = async () => {
      try {
        const response = await axios.get(
          "https://storeconvo.com/php/fetch.php?typ=unit"
        );
        setUnits(response.data);
      } catch (error) {
        console.error("Error fetching units:", error);
      }
    };

    fetchCategories();
    fetchSubCategories();
    fetchUnits();
  }, []);

  const handleSave = async () => {
    setLoading(true);
    try {
      const response = await axios.post(
        "https://storeconvo.com/php/edit.php",
        {
          id: product.productid,
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
          cateoryid: selectedCategory,
          subcategoryid: selectedSubcategory,
          mrp: mrp,
          purchaseprice: purchasePrice,
          retailprice: retailPrice,
          wholesaleprice: wholesalePrice,
          specialprice: specialPrice,
          dealerprice: dealerPrice,
          openqty: openQty,
          typ: "productt",
        },
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }
      );

      if (response.status === 200) {
        toast.success("Product Edit Successful");
        setOpen(false);
        onSuccess();
      }
    } catch (error) {
      console.error("Error updating Product:", error);
      toast.error("Failed to update Product");
    } finally {
      setLoading(false);
    }
  };

  const handleCategoryChange = (e) => {
    const newCategory = e.target.value;
    setSelectedCategory(newCategory);
    setSelectedSubcategory(""); 
  };

  const handleSubcategoryChange = (e) => {
    setSelectedSubcategory(e.target.value);
  };

  const handleUnitChange = (e) => {
    setUnitId(e.target.value);
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
            <DialogDescription>
              Update your product details below.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
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
              <Label htmlFor="description" className="text-right">
                Description
              </Label>
              <textarea
                id="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="col-span-3 p-2 border rounded"
              />
            </div>

            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="userCode" className="text-right">
                Product User Code
              </Label>
              <Input
                id="userCode"
                value={userCode}
                onChange={(e) => setUserCode(e.target.value)}
                className="col-span-3"
              />
            </div>

            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="unitId" className="text-right">
                Unit
              </Label>
              <select
                id="unitId"
                value={unitId}
                onChange={handleUnitChange}
                className="col-span-3 border rounded p-2"
              >
                <option value="">Select Unit</option>
                {units.map((unit) => (
                  <option key={unit.unitid} value={unit.unitid}>
                    {unit.unitname}
                  </option>
                ))}
              </select>
            </div>

            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="reorderLevel" className="text-right">
                Reorder Level
              </Label>
              <Input
                id="reorderLevel"
                value={reorderLevel}
                onChange={(e) => setReorderLevel(e.target.value)}
                className="col-span-3"
              />
            </div>

            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="hsnAcs" className="text-right">
                HSN/ACS Code
              </Label>
              <Input
                id="hsnAcs"
                value={hsnAcs}
                onChange={(e) => setHsnAcs(e.target.value)}
                className="col-span-3"
              />
            </div>

            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="cgst" className="text-right">
                CGST
              </Label>
              <Input
                id="cgst"
                value={cgst}
                onChange={(e) => setCgst(e.target.value)}
                className="col-span-3"
              />
            </div>

            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="sgst" className="text-right">
                SGST
              </Label>
              <Input
                id="sgst"
                value={sgst}
                onChange={(e) => setSgst(e.target.value)}
                className="col-span-3"
              />
            </div>

            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="salesUnit" className="text-right">
                Sales Unit
              </Label>
              <Input
                id="salesUnit"
                value={salesUnit}
                onChange={(e) => setSalesUnit(e.target.value)}
                className="col-span-3"
              />
            </div>

            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="packSize" className="text-right">
                Pack Size
              </Label>
              <Input
                id="packSize"
                value={packSize}
                onChange={(e) => setPackSize(e.target.value)}
                className="col-span-3"
              />
            </div>

            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="category" className="text-right">
                Category
              </Label>
              <select
                id="category"
                value={selectedCategory}
                onChange={handleCategoryChange}
                className="col-span-3 border rounded p-2"
              >
                <option value="">Select Category</option>
                {categories.map((cat) => (
                  <option key={cat.cat_id} value={cat.cat_id}>
                    {cat.cat_name}
                  </option>
                ))}
              </select>
            </div>

            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="subcategory" className="text-right">
                SubCategory
              </Label>
              <select
                id="subcategory"
                value={selectedSubcategory}
                onChange={handleSubcategoryChange}
                className="col-span-3 border rounded p-2"
              >
                <option value="">Select SubCategory</option>
                {subcategories
                  .filter((sub) => sub.cat_id === selectedCategory)
                  .map((sub) => (
                    <option key={sub.cat_id} value={sub.subcat_id}>
                      {sub.subcat_name}
                    </option>
                  ))}
              </select>
            </div>

            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="mrp" className="text-right">
                MRP
              </Label>
              <Input
                id="mrp"
                value={mrp}
                onChange={(e) => setMrp(e.target.value)}
                className="col-span-3"
              />
            </div>

            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="purchasePrice" className="text-right">
                Purchase Price
              </Label>
              <Input
                id="purchasePrice"
                value={purchasePrice}
                onChange={(e) => setPurchasePrice(e.target.value)}
                className="col-span-3"
              />
            </div>

            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="retailPrice" className="text-right">
                Retail Price
              </Label>
              <Input
                id="retailPrice"
                value={retailPrice}
                onChange={(e) => setRetailPrice(e.target.value)}
                className="col-span-3"
              />
            </div>

            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="wholesalePrice" className="text-right">
                Wholesale Price
              </Label>
              <Input
                id="wholesalePrice"
                value={wholesalePrice}
                onChange={(e) => setWholesalePrice(e.target.value)}
                className="col-span-3"
              />
            </div>

            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="specialPrice" className="text-right">
                Special Price
              </Label>
              <Input
                id="specialPrice"
                value={specialPrice}
                onChange={(e) => setSpecialPrice(e.target.value)}
                className="col-span-3"
              />
            </div>

            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="dealerPrice" className="text-right">
                Dealer Price
              </Label>
              <Input
                id="dealerPrice"
                value={dealerPrice}
                onChange={(e) => setDealerPrice(e.target.value)}
                className="col-span-3"
              />
            </div>

            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="openQty" className="text-right">
                Open Quantity
              </Label>
              <Input
                id="openQty"
                value={openQty}
                onChange={(e) => setOpenQty(e.target.value)}
                className="col-span-3"
              />
            </div>
          </div>
          <DialogFooter>
            <Button
              type="button"
              variant="outline"
              onClick={() => setOpen(false)}
              disabled={loading}
            >
              Cancel
            </Button>
            <Button
              type="button"
              onClick={handleSave}
              disabled={loading}
              className="ml-2"
            >
              {loading ? "Saving..." : "Save Changes"}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default ProductEditModal;
