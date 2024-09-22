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
import { FiPlus } from "react-icons/fi";
import toast from "react-hot-toast";

function SubModal({ setSubCategory, onChange }) {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [subCategoryName, setSubCategoryName] = useState("");
  const [hsn, setHsn] = useState("");
  const [cgst, setCgst] = useState("");
  const [sgst, setSgst] = useState("");
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);

  const validateFields = () => {
    if (!selectedCategory) {
      toast.error("Category is required.");
      return false;
    }
    if (!subCategoryName) {
      toast.error("Subcategory name is required.");
      return false;
    }
    if (!hsn) {
      toast.error("HSN ACS is required.");
      return false;
    }
    if (!cgst) {
      toast.error("CGST is required.");
      return false;
    }
    if (!sgst) {
      toast.error("SGST is required.");
      return false;
    }
    return true; // All validations passed
  };

  const handleSave = async () => {
    if (!validateFields()) return; // Validate before proceeding

    setLoading(true);
    try {
      const response = await axios.post(
        "https://storeconvo.com/php/add_subcategory.php",
        new URLSearchParams({
          cat_id: selectedCategory,
          subcat_name: subCategoryName,
          hsnacs: hsn,
          cgst: cgst,
          sgst: sgst,
        }),
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }
      );
      if (response.status === 200) {
        toast.success("Subcategory added successfully!");
        setOpen(false);
        onChange();
      }
    } catch (error) {
      toast.error("Failed to add subcategory.");
    } finally {
      setLoading(false);
    }
  };

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

  return (
    <div>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button
            className="bg-[#308E87] hover:bg-[#308E87]"
            onClick={() => setOpen(true)}
          >
            <FiPlus className="text-white text-xl" />
            Create New Sub Category
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[900px]">
          <DialogHeader>
            <DialogTitle>Add Sub Category</DialogTitle>
            <DialogDescription>Add your Sub Category</DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="category" className="text-right">
                Category
              </Label>
              <select
                id="category"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="col-span-3 p-2 border rounded focus:outline-none focus:ring-2 focus:ring-black"
              >
                <option value="">Choose Category</option>
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
                placeholder="subcategory name"
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
                placeholder="HSN ACS"
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
                placeholder="CGST"
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
                placeholder="SGST"
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

export default SubModal;
