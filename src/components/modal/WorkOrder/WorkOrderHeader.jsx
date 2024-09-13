import React from "react";
import {
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "../../../components/ui/dialog";

function WorkOrderHeader({ activeSection, setActiveSection }) {
  return (
    <DialogHeader>
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
    </DialogHeader>
  );
}

export default WorkOrderHeader;
