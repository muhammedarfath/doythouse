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

function ShopInformationModal({shopInformation}) {
  const [loading, setLoading] = useState(false);
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

  console.log(shopInformation,"this is one data");

  const handleChange = (e) => {
    const { id, value } = e.target;
    setShopInfo((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    try {
      const response = await axios.post(
        "https://storeconvo.com/php/edit.php",
        new URLSearchParams({
    
          shop_name: shopInfo.shop_name,
          shop_email: shopInfo.shop_email,
          shop_phone: shopInfo.shop_phone,
          shop_manager: shopInfo.shop_manager,
          shop_gstno: shopInfo.shop_gstno,
          shop_state: shopInfo.shop_state,
          shop_bank: shopInfo.shop_bank,
          shop_branch: shopInfo.shop_branch,
          shop_bankacno: shopInfo.shop_bankacno,
          shop_bankifsc: shopInfo.shop_bankifsc,
        }),
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }
      );

      if (response) {
        toast.success("Shop information updated successfully!");
      } else {
        toast.error("Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Error updating shop information:", error);
      toast.error("Failed to update shop information.");
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
        <DialogContent className="sm:max-w-[900px]">
          <DialogHeader>
            <DialogTitle>Edit Shop Information</DialogTitle>
            <DialogDescription>Update your shop details</DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            {Object.keys(shopInfo).map((key) => (
              <div className="grid grid-cols-4 items-center gap-4" key={key}>
                <Label htmlFor={key} className="text-right">
                  {key.replace(/_/g, " ")}
                </Label>
                <Input
                  id={key}
                  value={shopInfo[key]}
                  onChange={handleChange}
                  className="col-span-3"
                />
              </div>
            ))}
          </div>
          <DialogFooter>
            <Button type="button" onClick={handleSubmit} disabled={loading}>
              {loading ? "Saving..." : "Save"}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default ShopInformationModal;
