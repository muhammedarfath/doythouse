import React, { useEffect, useState } from "react";
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
import { AiFillEdit } from "react-icons/ai";
import toast from "react-hot-toast";

function SubCategoryEditModal({ subcategory }) {
  const [open, setOpen] = useState(false);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(subcategory.cat_id || "");
  const [subCategoryName, setSubCategoryName] = useState(subcategory.subcat_name || "");
  const [hsn, setHsn] = useState(subcategory.hsnacs || "");
  const [cgst, setCgst] = useState(subcategory.cgst || "");
  const [sgst, setSgst] = useState(subcategory.sgst || "");
  const [loading, setLoading] = useState(false);

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
    fetchCategories();
  }, []);

  const handleSave = async () => {
    setLoading(true);
    try {
      const response = await axios.put(
        "https://storeconvo.com/php/edit.php",
        new URLSearchParams({
          id: subcategory.subcat_id,
          category_id: selectedCategory, 
          subcategory_name: subCategoryName,
          hsn: hsn,
          cgst: cgst,
          sgst: sgst,
          typ: "subcategory",
        }),
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }
      );

      if (response.data.success) {
        toast.success("Subcategory updated successfully!");
        setOpen(false);
      } else {
        toast.error("Failed to update subcategory.");
      }
    } catch (error) {
      toast.error("Error updating subcategory");
      console.error("Error updating subcategory:", error);
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
        <DialogContent className="sm:max-w-[900px]">
          <DialogHeader>
            <DialogTitle>Edit Sub Category</DialogTitle>
            <DialogDescription>
              Update your Sub Category details
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="category" className="text-right">
                Category Name
              </Label>
              <select
                id="category"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="col-span-3 p-2 border rounded"
              >
                <option value="">Select a category</option>
                {categories.map((cat) => (
                  <option key={cat.cat_id} value={cat.cat_id}>
                    {cat.cat_name}
                  </option>
                ))}
              </select>
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="subcategory" className="text-right">
                SubCategory Name
              </Label>
              <Input
                id="subcategory"
                value={subCategoryName}
                onChange={(e) => setSubCategoryName(e.target.value)}
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="hsn" className="text-right">
                HSN ACS
              </Label>
              <Input
                id="hsn"
                value={hsn}
                onChange={(e) => setHsn(e.target.value)}
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

export default SubCategoryEditModal;
