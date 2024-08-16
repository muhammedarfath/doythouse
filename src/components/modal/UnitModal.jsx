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
  
  function UnitModal() {
    return (
      <div>
        <Dialog>
          <DialogTrigger asChild>
            <Button className="bg-[#308E87] hover:bg-[#308E87]">
              <FiPlus className="text-white text-xl mr-2" />
              Add New Unit
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[600px]">
            <DialogHeader>
              <DialogTitle>Add New Unit</DialogTitle>
              <DialogDescription>Fill out the details to add a new unit.</DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="unitName" className="text-right">
                  Unit Name
                </Label>
                <Input id="unitName" className="col-span-3" placeholder="Enter unit name" />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="unitCode" className="text-right">
                  Unit Code
                </Label>
                <Input id="unitCode" className="col-span-3" placeholder="Enter unit code" />
              </div>
            </div>
            <DialogFooter>
              <Button type="submit" className="bg-[#308E87] hover:bg-[#26756b]">
                Save Unit
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    );
  }
  
  export default UnitModal;
  