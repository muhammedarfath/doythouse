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

function SubModal() {
  return (
    <div>
      <Dialog>
        <DialogTrigger asChild>
          <Button>
            <FiPlus />
            Create New SubCategory{" "}
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[900px] ">
          <DialogHeader>
            <DialogTitle>Add SubCategory</DialogTitle>
            <DialogDescription>Add your SubCategory</DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="category" className="text-right">
                Category Name
              </Label>
              <select id="category" className="col-span-3 p-2 border rounded">
                <option value="">Select a category</option>
                <option value="category1">Category 1</option>
                <option value="category2">Category 2</option>
                <option value="category3">Category 3</option>
              </select>
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="category" className="text-right">
                SubCategory Name
              </Label>
              <Input id="category" className="col-span-3" />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="HSN" className="text-right">
                HSN ACS
              </Label>
              <Input id="hsn" className="col-span-3" />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="cgst" className="text-right">
                CGST
              </Label>
              <Input id="cgst" className="col-span-3" />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="sgst" className="text-right">
                SGST
              </Label>
              <Input id="sgst" className="col-span-3" />
            </div>
          </div>
          <DialogFooter>
            <Button type="submit">Save changes</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default SubModal;
