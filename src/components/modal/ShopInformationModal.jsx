import React, { useState, useEffect } from "react";
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

function ShopInformationModal({ shopInformation,setShopInformation }) {
  console.log(shopInformation);
  const [loading, setLoading] = useState(false);

  const [shopName, setShopName] = useState("");
  const [shopEmail, setShopEmail] = useState("");
  const [shopPhone, setShopPhone] = useState("");
  const [shopManager, setShopManager] = useState("");
  const [shopGstno, setShopGstno] = useState("");
  const [shopState, setShopState] = useState("");
  const [shopBank, setShopBank] = useState("");
  const [shopBranch, setShopBranch] = useState("");
  const [shopBankacno, setShopBankacno] = useState("");
  const [shopBankifsc, setShopBankifsc] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (shopInformation && shopInformation.length > 0) {
      const data = shopInformation[0];
      setShopName(data.shop_name || "");
      setShopEmail(data.shop_email || "");
      setShopPhone(data.shop_phone || "");
      setShopManager(data.shop_manager || "");
      setShopGstno(data.shop_gstno || "");
      setShopState(data.shop_state || "");
      setShopBank(data.shop_bank || "");
      setShopBranch(data.shop_branch || "");
      setShopBankacno(data.shop_bankacno || "");
      setShopBankifsc(data.shop_bankifsc || "");
    }
  }, [shopInformation]);

  const handleChange = (e) => {
    const { id, value } = e.target;
    switch (id) {
      case "shop_name":
        setShopName(value);
        break;
      case "shop_email":
        setShopEmail(value);
        break;
      case "shop_phone":
        setShopPhone(value);
        break;
      case "shop_manager":
        setShopManager(value);
        break;
      case "shop_gstno":
        setShopGstno(value);
        break;
      case "shop_state":
        setShopState(value);
        break;
      case "shop_bank":
        setShopBank(value);
        break;
      case "shop_branch":
        setShopBranch(value);
        break;
      case "shop_bankacno":
        setShopBankacno(value);
        break;
      case "shop_bankifsc":
        setShopBankifsc(value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await axios.post(
        "https://storeconvo.com/php/edit.php",
        new URLSearchParams({
          id:2,
          shop_name: shopName,
          shop_email: shopEmail,
          shop_phone: shopPhone,
          shop_manager: shopManager,
          shop_gstno: shopGstno,
          shop_state: shopState,
          shop_bank: shopBank,
          shop_branch: shopBranch,
          shop_bankacno: shopBankacno,
          shop_bankifsc: shopBankifsc,
          typ:'shop'
        }),
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }
      );
      console.log(response);
      if (response.status === 200) {
      //   setShopInformation((prevInform) =>
      //   prevInform.filter((shop) => 2 !== prevInform)
      // );
        toast.success("Shop information updated successfully!");
        setIsOpen(false);

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
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
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
          <form onSubmit={handleSubmit}>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="shop_name" className="text-right">
                  Shop Name
                </Label>
                <Input
                  id="shop_name"
                  value={shopName}
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
                  value={shopEmail}
                  onChange={handleChange}
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="shop_phone" className="text-right">
                  Phone
                </Label>
                <Input
                  id="shop_phone"
                  value={shopPhone}
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
                  value={shopManager}
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
                  value={shopGstno}
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
                  value={shopState}
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
                  value={shopBank}
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
                  value={shopBranch}
                  onChange={handleChange}
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="shop_bankacno" className="text-right">
                  Bank Account Number
                </Label>
                <Input
                  id="shop_bankacno"
                  value={shopBankacno}
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
                  value={shopBankifsc}
                  onChange={handleChange}
                  className="col-span-3"
                />
              </div>
            </div>
            <DialogFooter>
              <Button type="submit" disabled={loading}>
                {loading ? "Saving..." : "Save"}
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default ShopInformationModal;
