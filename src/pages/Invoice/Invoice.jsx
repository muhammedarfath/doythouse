import React, { useState, useEffect } from "react";
import "jspdf-autotable";
import AddInvoice from "@/components/modal/AddInvoice";
import axios from "axios";
import { toast } from "react-hot-toast";
import InvoiceTable from "./InvoiceTable";

function Invoice() {
  const [invoice, setInvoice] = useState([]);
  useEffect(() => {
    fetchInvoices();
  }, []);
  const fetchInvoices = async () => {
    try {
      const response = await axios.get(
        "https://storeconvo.com/php/fetch.php?typ=invoice"
      );
      setInvoice(response.data);
    } catch (error) {
      console.error("Error fetching invoices:", error);
    }
  };


  const handleDelete = (InvoiceId) => {
    toast(
      (t) => (
        <div>
          <p>Are you sure you want to delete this product?</p>
          <div className="flex gap-2 mt-2">
            <button
              onClick={() => confirmDelete(InvoiceId, t.id)}
              className="bg-red-500 text-white px-4 py-1 rounded"
            >
              Delete
            </button>
            <button
              onClick={() => toast.dismiss(t.id)}
              className="bg-gray-300 text-black px-4 py-1 rounded"
            >
              Cancel
            </button>
          </div>
        </div>
      ),
      { duration: 4000 }
    );
  };

  const confirmDelete = async (InvoiceId, toastId) => {
    try {
      await axios.post(
        `https://storeconvo.com/php/delete.php/`,
        {
          id: InvoiceId,
          typ: "invoice",
        },
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }
      );
      setInvoice((prevInvoice) =>
        prevInvoice.filter((invoice) => invoice.invoice_id !== InvoiceId)
      );

      toast.success("Delete successful", { id: toastId });
    } catch (error) {
      console.error("Error deleting product:", error);
      toast.error("Failed to delete product", { id: toastId });
    }
  };
  return (
    <div className="flex items-center justify-center w-full">
      <div className="w-full lg:max-w-screen-xl md:max-w-[35rem] max-w-[22rem] mx-auto ">
        <div className="flex flex-col gap-6 mt-8">
          <h2 className="font-semibold text-xl text-black">Invoice List</h2>
          <div className="bg-white flex gap-5 flex-col rounded-2xl shadow-sm p-4 md:p-8 w-full">
            <div className="flex items-center justify-between mb-4 lg:flex-row gap-4 lg:gap-0 flex-col">
              <div className="flex gap-2">
                <span>Search</span>
                <input
                  type="text"
                  placeholder="Search..."
                  className="h-10 border rounded px-4 w-64 bg-[#fff] border-gray-300 text-gray-900 text-sm focus:ring-black focus:border-black block pl-5 pr-3 py-4"
                />
              </div>
              <AddInvoice />
            </div>

            <InvoiceTable invoice={invoice} handleDelete={handleDelete} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Invoice;
