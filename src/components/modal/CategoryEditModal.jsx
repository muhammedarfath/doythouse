import React, { useState } from "react";
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
import axios from "axios";
import { AiFillEdit } from "react-icons/ai";
import toast, { Toaster } from "react-hot-toast";

function CategoryEditModal({ category,onSuccess }) {
  const [catName, setCatName] = useState(category.cat_name || "");
  const [catDescription, setCatDescription] = useState(
    category.cat_description || ""
  );
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false); 
  const [searchTerm, setSearchTerm] = useState(""); 

  
  const handleSave = async () => {
    setLoading(true);
    try {
      const response = await axios.post(
        "https://storeconvo.com/php/edit.php/",
        {
          id:category.cat_id,
          category_name: catName,
          category_description: catDescription,
          typ:"cat"
        },
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }
      );
      console.log(response.data);
      if (response.status === 200) {
        toast.success("Category updated successfully");
        setOpen(false); 
        onSuccess()
      }
    } catch (error) {
      toast.error("Error updating category");
      console.error("Error updating category:", error);
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
            <DialogTitle>Edit Category</DialogTitle>
            <DialogDescription>Update your category details.</DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="category" className="text-right">
                Category Name
              </Label>
              <Input
                id="category"
                value={catName}
                onChange={(e) => setCatName(e.target.value)}
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="description" className="text-right">
                Description
              </Label>
              <textarea
                id="description"
                value={catDescription}
                onChange={(e) => setCatDescription(e.target.value)}
                className="col-span-3 p-2 border rounded focus:outline-none focus:ring-2 focus:ring-black"
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

export default CategoryEditModal;
