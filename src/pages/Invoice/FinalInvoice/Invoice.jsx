import React, { useState, useEffect } from "react";
import "jspdf-autotable";
import axios from "axios";
import Search from "@/components/Search/Search";
import FinalInvoice from "./FinalInvoice";
import { useOutletContext } from "react-router-dom";

function FInvoice() {
  const { open } = useOutletContext();
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


  return (
    <div className="flex items-center justify-center w-full">
      <div className={`w-full lg:max-w-screen-xl ${open ? "md:max-w-[32rem]" : "md:max-w-[40rem]"} max-w-[22rem] mx-auto`}>
        <div className="flex flex-col gap-6 mt-8">
          <h2 className="font-semibold text-xl text-black">Closed Invoice List</h2>
          <div className="bg-white flex gap-5 flex-col rounded-2xl shadow-sm p-4 md:p-8 w-full">
            <div className="flex items-center justify-between mb-4 lg:flex-row gap-4 lg:gap-0 flex-col">
              <Search/>
            </div>

            <FinalInvoice invoice={invoice} fetchInvoices={fetchInvoices}/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FInvoice;
