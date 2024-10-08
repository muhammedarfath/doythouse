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
import axios from "axios";
import { toast } from "react-hot-toast";

function CategoryModal({ onchange }) {
  const [categoryName, setCategoryName] = useState("");
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const handleSave = async () => {
    if (!categoryName || !description) {
      toast.error("Please fill out all fields");
      return;
    }

    setLoading(true);
    try {
      const response = await axios.post(
        "https://storeconvo.com/php/add_category.php",
        new URLSearchParams({
          cat_name: categoryName,
          cat_description: description,
        }),
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }
      );

      if (response.data && response.data.cat_name) {
        toast.success("Category added successfully");
        setCategoryName("");
        setDescription("");
        setIsOpen(false);
        onchange();
      } else {
        toast.error("Failed to add category");
      }
    } catch (error) {
      console.error("Error adding category:", error);
      toast.error("Failed to add category");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogTrigger asChild>
          <Button className="bg-[#308E87] hover:bg-[#308E87]">
            <FiPlus className="text-white text-xl" />
            Create New Category
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[900px]">
          <DialogHeader>
            <DialogTitle>Add Category</DialogTitle>
            <DialogDescription>Create your Category</DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="category" className="text-right">
                Category Name
              </Label>
              <Input
                id="category"
                value={categoryName}
                placeholder="Categoty Name"
                onChange={(e) => setCategoryName(e.target.value)}
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
                placeholder="description"
                onChange={(e) => setDescription(e.target.value)}
                className="col-span-3 p-2 border rounded focus:outline-none focus:ring-2 focus:ring-black"
              />
            </div>
          </div>
          <DialogFooter>
            <Button
              type="submit"
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

export default CategoryModal;
