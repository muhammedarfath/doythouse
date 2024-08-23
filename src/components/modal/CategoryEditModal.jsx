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

function CategoryEditModal({category}) {
  const [loading, setLoading] = useState(false);

  return (
    <div>
      <Dialog>
        <DialogTrigger asChild>
          <AiFillEdit
            className="text-[#495057] text-xl transition-transform transform hover:scale-110 cursor-pointer"
          />
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
                value={category.cat_name}
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="description" className="text-right">
                Description
              </Label>
              <textarea
                id="description"
                value={category.cat_description}
                className="col-span-3 p-2 border rounded"
              />
            </div>
          </div>
          <DialogFooter>
            <Button
              type="submit"
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
