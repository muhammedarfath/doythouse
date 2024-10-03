import React, { useState, useEffect } from "react";
import "jspdf-autotable";
import AddInvoice from "@/components/modal/AddInvoice";
import axios from "axios";
import { toast } from "react-hot-toast";
import InvoiceTable from "./InvoiceTable";
import Search from "@/components/Search/Search";
import { useOutletContext } from "react-router-dom";

function Invoice() {
  const [invoice, setInvoice] = useState([]);
  const { open } = useOutletContext();
  const [searchQuery, setSearchQuery] = useState("");

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
          <p>Are you sure you want to delete this invoice?</p>
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

  const filteredInvoice = invoice.filter(
    (invo) =>
      invo.status === "open" || invo.status === "pending" 
  ).filter(
    (invo) =>
      invo.cust_orderno?.toLowerCase().includes(searchQuery.toLowerCase()) 
  );
  



  return (
    <div className="flex items-center justify-center w-full">
      <div
        className={`w-full lg:max-w-screen-xl ${
          open ? "md:max-w-[32rem]" : "md:max-w-[40rem]"
        } max-w-[22rem] mx-auto`}
      >
        <div className="flex flex-col gap-6 mt-8">
          <h2 className="font-semibold text-xl text-black">Invoice List</h2>
          <div className="bg-white flex gap-5 flex-col rounded-2xl shadow-sm p-4 md:p-8 w-full">
            <div className="flex items-center justify-between mb-4 lg:flex-row gap-4 lg:gap-0 flex-col">
              <Search
                searchQuery={searchQuery}
                setSearchQuery={setSearchQuery}
                name={"work order number"}
              />
              <AddInvoice onchange={fetchInvoices}/>
            </div>

            <InvoiceTable
              invoice={filteredInvoice}
              handleDelete={handleDelete}
              fetchInvoices={fetchInvoices}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Invoice;
