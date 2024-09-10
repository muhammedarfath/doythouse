import React from "react";
import { Input } from "../../../components/ui/input";
import { Label } from "../../../components/ui/label";
import axios from "axios";

function Userinfo({
  section1Ref,
  setCustomerName,
  setContactNumber,
  setTrialDate,
  setExpectedDelivery,
  setDesignerName,
  setOrderNumber,
  setOrderDate,
  setEmergency,
  setStatus,
  customerName,
  contactNumber,
  trialDate,
  expectedDelivery,
  selectedCategory,
  handleCategoryChange,
  categories,
  designerName,
  orderNumber,
  orderDate,
  emergency,
  status,
}) {
  const handleOrderNumberChange = async (e) => {
    const newOrderNumber = e.target.value;
    setOrderNumber(newOrderNumber);
    console.log(newOrderNumber);

    try {
      const response = await axios.post(
        "https://storeconvo.com/php/fetch_post.php",
        new URLSearchParams({
          id: newOrderNumber,
          typ: "checkorderno",
        })
      );
      console.log(response);
    } catch (error) {
      console.error("API call error:", error);
    }
  };

  return (
    <div className="p-4 sm:p-6 lg:p-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6" ref={section1Ref}>
        <div className="flex flex-col gap-4">
          <Label htmlFor="order-number" className="text-md font-bold">
            Work-Order Number
          </Label>
          <Input
            id="order-number"
            value={orderNumber}
            onChange={handleOrderNumberChange}
            className="w-full"
          />
          <Label htmlFor="customerName" className="text-md font-bold">
            Customer Name
          </Label>
          <Input
            id="customerName"
            name="customerName"
            value={customerName}
            onChange={(e) => setCustomerName(e.target.value)}
            className="w-full"
          />

          <Label htmlFor="contact-number" className="text-md font-bold">
            Contact Number
          </Label>
          <Input
            id="contact-number"
            value={contactNumber}
            onChange={(e) => setContactNumber(e.target.value)}
            className="w-full"
          />

          <Label htmlFor="trial-date" className="text-md font-bold">
            Trial Date
          </Label>
          <Input
            id="trial-date"
            value={trialDate}
            onChange={(e) => setTrialDate(e.target.value)}
            type="date"
            className="w-full"
          />

          <Label htmlFor="expected-delivery" className="text-md font-bold">
            Expected Delivery
          </Label>
          <Input
            id="expected-delivery"
            value={expectedDelivery}
            onChange={(e) => setExpectedDelivery(e.target.value)}
            type="date"
            className="w-full"
          />
        </div>

        <div className="flex flex-col gap-4">
          <Label htmlFor="item-category" className="text-md font-bold">
            Item Category
          </Label>
          <select
            name="Category"
            id="Category"
            className="h-10 border mt-1 rounded px-4 w-full bg-[#fff]"
            value={selectedCategory}
            onChange={handleCategoryChange}
          >
            <option value="">Choose Category</option>
            {categories.map((cat) => (
              <option key={cat.cat_id} value={cat.cat_id}>
                {cat.cat_name}
              </option>
            ))}
          </select>

          <Label htmlFor="designer-name" className="text-md font-bold">
            Designer Name
          </Label>
          <Input
            id="designer-name"
            value={designerName}
            onChange={(e) => setDesignerName(e.target.value)}
            className="w-full"
          />

          <Label htmlFor="order-date" className="text-md font-bold">
            Order Date
          </Label>
          <Input
            id="order-date"
            value={orderDate}
            onChange={(e) => setOrderDate(e.target.value)}
            type="date"
            className="w-full"
          />

          <Label htmlFor="emergency" className="text-md font-bold">
            Emergency
          </Label>
          <Input
            id="emergency"
            value={emergency}
            onChange={(e) => setEmergency(e.target.value)}
            className="w-full"
          />
          <Label htmlFor="status" className="text-md font-bold">
            Status
          </Label>
          <select
            id="status"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            className="w-full p-2 border rounded"
          >
            <option value="">Select Status</option>
            <option value="Delivered">Delivered</option>
            <option value="Pending">Pending</option>
            <option value="Completed">Completed</option>
          </select>
        </div>
      </div>
    </div>
  );
}

export default Userinfo;
