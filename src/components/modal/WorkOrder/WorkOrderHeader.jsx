import React, { useState } from "react";
import axios from "axios";
import {
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "../../../components/ui/dialog";
import { Label } from "@/components/ui/label";

function WorkOrderHeader({
  activeSection,
  workOrders,
  setActiveSection,
  workOrder,
  handleWorkOrderChange,
}) {
  const [open, setOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState(""); 


  const filteredWorkOrders = workOrders.filter((order) =>
    order.cust_orderno.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <DialogHeader>
      <div className="flex gap-9">
        <div className="flex gap-8">
          <button
            className={`border p-5 rounded-xl ${
              activeSection === "userInformation" ? "bg-[#308E87] text-white" : ""
            }`}
            onClick={() => setActiveSection("userInformation")}
          >
            <DialogTitle>Customer Information</DialogTitle>
            <DialogDescription>Create New Information</DialogDescription>
          </button>
          <button
            className={`border p-5 rounded-xl ${
              activeSection === "materialInformation"
                ? "bg-[#308E87] text-white"
                : ""
            }`}
            onClick={() => setActiveSection("materialInformation")}
          >
            <DialogTitle>Material Information</DialogTitle>
            <DialogDescription>Enter Material Information</DialogDescription>
          </button>
          <button
            className={`border p-5 rounded-xl ${
              activeSection === "paymentInformation"
                ? "bg-[#308E87] text-white"
                : ""
            }`}
            onClick={() => setActiveSection("paymentInformation")}
          >
            <DialogTitle>Labour Payment Information</DialogTitle>
            <DialogDescription>Add New Information</DialogDescription>
          </button>
        </div>
        <div>
          <Label htmlFor="workOrder" className="text-right">
            Work Order
          </Label>
          <input
            type="text"
            placeholder="Search Work Order"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="col-span-3 p-2 mb-2 border rounded focus:ring-2 focus:ring-[#000] focus:ring-offset-0 outline-none"
          />

          <select
            id="workOrder"
            value={workOrder}
            onChange={handleWorkOrderChange}
            className="col-span-3 p-2 border rounded focus:ring-2 focus:ring-[#000] focus:ring-offset-0 outline-none"
          >
            <option value="">Select Work Order</option>
            {filteredWorkOrders.map((order) => (
              <option key={order.id} value={order.cust_orderno}>
                {order.cust_orderno}
              </option>
            ))}
          </select>
        </div>
      </div>
    </DialogHeader>
  );
}

export default WorkOrderHeader;
