import React, { useState } from "react";
import axios from "axios";
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
import { toast } from "react-hot-toast";

function ShopInformationModal() {
  const [loading,setLoading] =useState(false)
  const [shopInfo, setShopInfo] = useState({
    shop_name: "",
    shop_email: "",
    shop_phone: "",
    shop_manager: "",
    shop_gstno: "",
    shop_state: "",
    shop_bank: "",
    shop_branch: "",
    shop_bankacno: "",
    shop_bankifsc: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setShopInfo((prev) => ({ ...prev, [id]: value }));
  };









  const handleSubmit = async (e) => {
    e.preventDefault()

    setLoading(true);
    try {
      const response = await axios.post(
        "https://storeconvo.com/php/add_shop.php",
        new URLSearchParams({
          shopInfo
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
      <Dialog>
        <DialogTrigger asChild>
          <Button className="bg-[#308E87] hover:bg-[#308E87]">
            Edit Information
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[900px] ">
          <DialogHeader>
            <DialogTitle>Edit Shop Information</DialogTitle>
            <DialogDescription>Update your shop details</DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="shop_name" className="text-right">
                Shop Name
              </Label>
              <Input
                id="shop_name"
                value={shopInfo.shop_name}
                onChange={handleChange}
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="shop_email" className="text-right">
                Email
              </Label>
              <Input
                id="shop_email"
                value={shopInfo.shop_email}
                onChange={handleChange}
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="shop_phone" className="text-right">
                Phone Number
              </Label>
              <Input
                id="shop_phone"
                value={shopInfo.shop_phone}
                onChange={handleChange}
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="shop_manager" className="text-right">
                Manager
              </Label>
              <Input
                id="shop_manager"
                value={shopInfo.shop_manager}
                onChange={handleChange}
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="shop_gstno" className="text-right">
                GST Number
              </Label>
              <Input
                id="shop_gstno"
                value={shopInfo.shop_gstno}
                onChange={handleChange}
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="shop_state" className="text-right">
                State
              </Label>
              <Input
                id="shop_state"
                value={shopInfo.shop_state}
                onChange={handleChange}
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="shop_bank" className="text-right">
                Bank
              </Label>
              <Input
                id="shop_bank"
                value={shopInfo.shop_bank}
                onChange={handleChange}
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="shop_branch" className="text-right">
                Branch
              </Label>
              <Input
                id="shop_branch"
                value={shopInfo.shop_branch}
                onChange={handleChange}
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="shop_bankacno" className="text-right">
                Account Number
              </Label>
              <Input
                id="shop_bankacno"
                value={shopInfo.shop_bankacno}
                onChange={handleChange}
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="shop_bankifsc" className="text-right">
                IFSC Code
              </Label>
              <Input
                id="shop_bankifsc"
                value={shopInfo.shop_bankifsc}
                onChange={handleChange}
                className="col-span-3"
              />
            </div>
          </div>
          <DialogFooter>
            <Button type="button" onClick={handleSubmit}>
              Save
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default ShopInformationModal;
