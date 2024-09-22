import React, { useState, useEffect } from "react";
import { Input } from "../../../components/ui/input";
import { Label } from "../../../components/ui/label";
import axios from "axios";
import { Filter } from "lucide-react";

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
  designers,
  orderDate,
  emergency,
  status,
  designerName,
  orderNumber,
  setDesignerPhoneNumber,
  designerPhoneNumber,
}) {
  const [orderNumberError, setOrderNumberError] = useState("");
  const [orderNumberValid, setOrderNumberValid] = useState(true);

  const usedOrderNumbers = new Set();

  const generateOrderNumber = () => {
    let newOrderNumber;
    do {
      newOrderNumber = `#${Math.floor(
        10000 + Math.random() * 90000
      ).toString()}`;
    } while (usedOrderNumbers.has(newOrderNumber));

    usedOrderNumbers.add(newOrderNumber);
    return newOrderNumber;
  };

  useEffect(() => {
    setOrderNumber(generateOrderNumber());
  }, []);

  const handleOrderNumberChange = async (e) => {
    const newOrderNumber = e.target.value;
    setOrderNumber(newOrderNumber);

    if (!/^#\d{5}$/.test(newOrderNumber)) {
      setOrderNumberError(
        "Order number must start with # followed by 5 digits."
      );
      setOrderNumberValid(false);
      return;
    }

    setOrderNumberError("");
    setOrderNumberValid(true);

    try {
      const response = await axios.post(
        "https://storeconvo.com/php/fetch_post.php",
        new URLSearchParams({
          id: newOrderNumber.substring(1),
          typ: "checkorderno",
        })
      );

      if (response.data === 1) {
        setOrderNumberError("This order number is already in use.");
        setOrderNumberValid(false);
      } else {
        setOrderNumberError("");
        setOrderNumberValid(true);
      }
    } catch (error) {
      console.error("API call error:", error);
      setOrderNumberError("Error checking order number.");
      setOrderNumberValid(false);
    }
  };

  const handleDesignerChange = (e) => {
    const selectedDesignerId = e.target.value;
    setDesignerName(selectedDesignerId);
  
    const employee = designers.find((emp) => emp.employee_id === selectedDesignerId);
    console.log(employee);
    if (employee) {
      setDesignerPhoneNumber(employee.employee_phone);
    } else {
      setDesignerPhoneNumber(""); 
    }
  };
  
  console.log(designerPhoneNumber);

  return (
    <div className="p-4 sm:p-6 lg:p-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6" ref={section1Ref}>
        <div className="flex flex-col gap-3">
          <Label htmlFor="order-number" className="text-md font-bold">
            Work-Order Number
          </Label>
          <Input
            id="order-number"
            value={orderNumber}
            onChange={handleOrderNumberChange}
            className={`w-full ${!orderNumberValid ? "border-red-500" : ""}`}
            readOnly
            required
          />
          {orderNumberError && (
            <p className="text-red-500 mr-1 text-sm">{orderNumberError}</p>
          )}

          <Label htmlFor="customerName" className="text-md font-bold">
          <span className="text-red-500 mr-1">*</span>
            Customer Name
          </Label>
          <Input
            id="customerName"
            name="customerName"
            value={customerName}
            onChange={(e) => setCustomerName(e.target.value)}
            className="w-full"
            required
          />

          <Label htmlFor="contact-number" className="text-md font-bold">
          <span className="text-red-500 mr-1">*</span>
            Contact Number
          </Label>
          <Input
            id="contact-number"
            value={contactNumber}
            onChange={(e) => setContactNumber(e.target.value)}
            className="w-full"
            required
          />

          <Label htmlFor="trial-date" className="text-md font-bold">
          <span className="text-red-500 mr-1">*</span>
            Trial Date
          </Label>
          <Input
            id="trial-date"
            value={trialDate}
            onChange={(e) => setTrialDate(e.target.value)}
            type="date"
            className="w-full"
            required
          />

          <Label htmlFor="expected-delivery" className="text-md font-bold">
          <span className="text-red-500 mr-1">*</span>
            Expected Delivery
          </Label>
          <Input
            id="expected-delivery"
            value={expectedDelivery}
            onChange={(e) => setExpectedDelivery(e.target.value)}
            type="date"
            className="w-full"
            required
          />
        </div>

        <div className="flex flex-col gap-4">
          <Label htmlFor="item-category" className="text-md font-bold">
          <span className="text-red-500 mr-1">*</span>
            Item Category
          </Label>
          <select
            name="Category"
            id="Category"
            className="h-10 border mt-1 p-2 rounded px-4 w-full bg-[#fff] focus:outline-none focus:ring-2 focus:ring-black"
            value={selectedCategory}
            onChange={handleCategoryChange}
            required
          >
            <option value="">Choose Category</option>
            {categories.map((cat) => (
              <option key={cat.cat_id} value={cat.cat_id}>
                {cat.cat_name}
              </option>
            ))}
          </select>

          <div className="lg:flex flex flex-col lg:flex-row gap-4">
            <Label htmlFor="designer-name" className="text-md font-bold">
            <span className="text-red-500 mr-1">*</span>
              Designer Name
            </Label>
            <select
              id="designer-name"
              value={designerName}
              onChange={handleDesignerChange}
              className="h-10 border mt-1 p-2 rounded px-4 w-full bg-[#fff] focus:outline-none focus:ring-2 focus:ring-black"
              required
            >
              <option value="">Select Designer</option>
              {designers.map((designer) => (
                <option key={designer.employee_id} value={designer.employee_id}>
                  {designer.employee_name}
                </option>
              ))}
            </select>
            <Label htmlFor="designer-phone" className="text-md font-bold">
            <span className="text-red-500 mr-1">*</span>
              Designer Phone
            </Label>
            <Input
              id="designer-phone"
              value={designerPhoneNumber}
              readOnly
              className="w-full"
            />
          </div>

          <Label htmlFor="order-date" className="text-md font-bold">
          <span className="text-red-500 mr-1">*</span>
            Order Date
          </Label>
          <Input
            id="order-date"
            value={orderDate}
            onChange={(e) => setOrderDate(e.target.value)}
            type="date"
            className="w-full"
            required
          />

          <Label htmlFor="emergency" className="text-md font-bold">
          <span className="text-red-500 mr-1">*</span>
            Emergency
          </Label>
          <Input
            id="emergency"
            value={emergency}
            onChange={(e) => setEmergency(e.target.value)}
            className="w-full"
            required
          />

          <Label htmlFor="status" className="text-md font-bold">
          <span className="text-red-500 mr-1">*</span>
            Status
          </Label>
          <select
            id="status"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            className="w-full p-2 border rounded"
            required
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
