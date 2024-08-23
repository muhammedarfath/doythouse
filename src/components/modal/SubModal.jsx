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
import toast from "react-hot-toast";

function SubModal() {
  const [category, setCategory] = useState("");
  const [subCategoryName, setSubCategoryName] = useState("");
  const [hsn, setHsn] = useState("");
  const [cgst, setCgst] = useState("");
  const [sgst, setSgst] = useState("");
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);

  const handleSave = async () => {
    
    setLoading(true);
    try {
      const response = await axios.post(
        "https://storeconvo.com/php/add_subcategory.php",
        new URLSearchParams({
          cat_id:4,
          subcat_name:subCategoryName,
          hsnacs:hsn,
          cgst:cgst,
          sgst:sgst
        }),
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }
      );
      if (response){
        console.log(response);
      }

      // if (response.data && response.status === 200) {
      //   setCategoryName("");
      //   setDescription("");
      //   alert("Category added successfully");
      // } else {
      //   alert("Something went wrong");
      // }
    } catch (error) {
      console.error("Error adding category:", error);
      alert("Failed to add category");
    } finally {
      setLoading(false);
    }
  };

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
        <DialogContent className="sm:max-w-[900px] ">
          <DialogHeader>
            <DialogTitle>Add Sub Category</DialogTitle>
            <DialogDescription>Add your Sub Category</DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="category" className="text-right">
                Category Name
              </Label>
              <select
                id="category"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="col-span-3 p-2 border rounded"
              >
                <option value="">Select a category</option>
                <option value="category1">Category 1</option>
                <option value="category2">Category 2</option>
                <option value="category3">Category 3</option>
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

export default SubModal;
