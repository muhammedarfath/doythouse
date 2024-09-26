import React, { useEffect, useState } from "react";
import { FaFileInvoice } from "react-icons/fa";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import axios from "axios";
import logo from "../../../assets/logo.jpg";
function FinalInvoiceCard({ order_id, onSuccess, invoice }) {
  const [open, setOpen] = useState(false);
  const [status, setStatus] = useState("");
  const [currentInvoice, setCurrentInvoice] = useState();

  const handleIconClick = async () => {
    try {
      const response = await axios.get(
        `https://storeconvo.com/php/fetch.php?typ=invoicedetails&id=${order_id}`
      );

      const invoiceData =
        Array.isArray(response.data) && response.data.length > 0
          ? response.data[0]
          : {};

      setCurrentInvoice(invoiceData);
      console.log("Invoice Data:", invoiceData);
      setOpen(true);
    } catch (error) {
      console.error("Error fetching invoice data:", error);
    }
  };

  const handlePrint = () => {
    window.print();
  };

  const handleStatusChange = async (e) => {
    const newStatus = e.target.value;
    setStatus(newStatus);
    try {
      const response = await axios.post(
        "https://storeconvo.com/php/edit.php",
        {
          id: order_id,
          inv_status: newStatus,
          typ: "invoicestatus",
        },
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }
      );
      onSuccess();
    } catch (error) {
      console.error("Error updating status:", error);
    }
  };

  useEffect(() => {
    fetchInvoicesStatus();
  }, []);
  const fetchInvoicesStatus = async () => {
    try {
      const response = await axios.get(
        "https://storeconvo.com/php/fetch.php?typ=invoice"
      );
      console.log(response.data);
    } catch (error) {
      console.error("Error fetching invoices:", error);
    }
  };

  const chargesTotal =
    Number(currentInvoice?.cutting || 0) +
    Number(currentInvoice?.stiching || 0) +
    Number(currentInvoice?.handwork || 0) +
    Number(currentInvoice?.measurer || 0) +
    Number(currentInvoice?.checker || 0) +
    Number(currentInvoice?.tailor || 0);

  const finalTotal = chargesTotal + 300;

  return (
    <div>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <FaFileInvoice
            className="text-[#495057] text-xl transition-transform transform hover:scale-110 cursor-pointer"
            onClick={handleIconClick}
          />
        </DialogTrigger>
        <DialogContent className="lg:max-w-[50%] overflow-auto lg:max-h-[100%] h-full  mt-3 sm:max-w-[900px]">
          <div className="print:hidden">
            <div className="flex gap-x-3">
              <a
                onClick={handlePrint}
                className="py-2 px-3 cursor-pointer inline-flex justify-center items-center gap-2 rounded-md border font-semibold bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 focus:ring-offset-gray-800 transition-all text-sm dark:bg-neutral-900 dark:hover:bg-neutral-800 dark:text-neutral-300 dark:hover:text-white dark:focus:ring-gray-700 dark:hover:bg-white/20"
              >
                Print Invoice
              </a>

              <select
                className="py-2 px-3 inline-flex justify-center items-center gap-2 rounded-md border font-semibold bg-[#308E87] text-white shadow-sm align-middle hover:bg-[#308E87] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#308E87] focus:ring-offset-gray-800 transition-all text-sm dark:bg-neutral-900 dark:hover:bg-neutral-800 dark:text-neutral-300 dark:hover:text-white dark:focus:ring-gray-700 dark:hover:bg-white/20"
                value={status}
                onChange={handleStatusChange}
              >
                <option value="" disabled>
                  Change Status
                </option>
                <option value="closed">Closed</option>
                <option value="pending">Pending</option>
                <option value="open">Open</option>
              </select>
            </div>
          </div>
          <div class="max-w-[85rem] px-4 sm:px-6 lg:px-8 mx-auto sm:my-10">
            <div class="sm:w-11/12 lg:w-full mx-auto">
              <div class="flex flex-col p-4 sm:p-10 bg-white shadow-md rounded-xl dark:bg-neutral-800">
                <div class="flex justify-between">
                  <div>
                    <img src={logo} alt="" className="w-20 h-20 object-cover" />
                    <h1 class="mt-2 text-lg md:text-xl font-semibold text-[#21437B] dark:text-white">
                      DOYT HOUSE.
                    </h1>
                  </div>
                  <div class="text-end">
                    <h2 class="text-2xl md:text-3xl font-semibold text-gray-800 dark:text-neutral-200">
                      Invoice #
                    </h2>
                    <span class="mt-1 block text-gray-500 dark:text-neutral-500">
                      {currentInvoice?.cust_orderno}
                    </span>
                    <address class="mt-4 not-italic text-gray-800 dark:text-neutral-200 leading-relaxed">
                      Opposite G-Mart, Muthoor, <br />
                      Thiruvalla - Changanassery Rd, <br />
                      Thiruvalla, Kerala 689107
                    </address>
                  </div>
                </div>

                <div class="mt-4 grid sm:grid-cols-2 gap-3">
                  <div>
                    <h3 class="text-lg font-semibold text-gray-800 dark:text-neutral-200">
                      Bill to:
                    </h3>
                    <h3 class="text-lg font-semibold text-gray-800 dark:text-neutral-200">
                      {currentInvoice?.cust_name}
                    </h3>
                    <address class="mt-2 not-italic text-gray-500 dark:text-neutral-500">
                      {invoice.address}
                    </address>
                  </div>

                  <div class="sm:text-end space-y-2">
                    <div class="grid grid-cols-2 sm:grid-cols-1 gap-3 sm:gap-2">
                      <dl class="grid sm:grid-cols-5 gap-x-3">
                        <dt class="col-span-3 font-semibold text-gray-800 dark:text-neutral-200">
                          Invoice date:
                        </dt>
                        <dd class="col-span-2 text-gray-500 dark:text-neutral-500">
                          {invoice.date}
                        </dd>
                      </dl>
                      <dl class="grid sm:grid-cols-5 gap-x-3">
                        <dt class="col-span-3 font-semibold text-gray-800 dark:text-neutral-200">
                          Due date:
                        </dt>
                        <dd class="col-span-2 text-gray-500 dark:text-neutral-500">
                          {currentInvoice?.cust_expecteddelivery}
                        </dd>
                      </dl>
                    </div>
                  </div>
                </div>

                <div className="">
                  <div className="mt-2 border border-gray-200 p-4 rounded-lg space-y-4 dark:border-neutral-700">
                    <div className="text-lg font-medium text-gray-800 dark:text-neutral-200">
                      Labour Costs:
                    </div>
                    <div className="grid grid-cols-2 gap-1">
                      <div className="text-gray-800 dark:text-neutral-200">
                        Stitching:
                      </div>
                      <div className="text-end font-medium text-gray-800 dark:text-neutral-200">
                        {currentInvoice?.stiching || 0}
                      </div>
                      <div className="text-gray-800 dark:text-neutral-200">
                        Handwork:
                      </div>
                      <div className="text-end font-medium text-gray-800 dark:text-neutral-200">
                        {currentInvoice?.handwork || 0}
                      </div>
                    </div>
                    <div className="mt-4 border-t border-gray-200 pt-2">
                      <div className="text-lg font-bold text-gray-800 dark:text-neutral-200 text-end">
                        Total Labour Costs: ₹{chargesTotal}
                      </div>
                    </div>
                  </div>

                  <div className="mt-2 border border-gray-200 p-4 rounded-lg space-y-4 dark:border-neutral-700">
                    <div className="text-lg font-medium text-gray-800 dark:text-neutral-200">
                      Material Costs Total:
                    </div>
                    <div className="text-end font-medium text-gray-800 dark:text-neutral-200">
                      300
                    </div>
                  </div>

                  <div className="mt-2 border border-gray-200 p-4 rounded-lg space-y-4 dark:border-neutral-700">
                    <div className="text-lg font-bold text-gray-800 dark:text-neutral-200 text-end">
                      Final Total: ₹{finalTotal}
                    </div>
                  </div>
                </div>

                <div class="mt-8 flex sm:justify-end">
                  <div class="w-full max-w-2xl sm:text-end space-y-2">
                    <div class="grid grid-cols-2 sm:grid-cols-1 gap-3 sm:gap-2">
                      <dl class="grid sm:grid-cols-5 gap-x-3">
                        <dt class="col-span-3 font-semibold text-gray-800 dark:text-neutral-200">
                          Total:
                        </dt>
                        <dd class="col-span-2 text-gray-500 dark:text-neutral-500">
                          ₹2750.00
                        </dd>
                      </dl>
                      <dl class="grid sm:grid-cols-5 gap-x-3">
                        <dt class="col-span-3 font-semibold text-gray-800 dark:text-neutral-200">
                          Tax:
                        </dt>
                        <dd class="col-span-2 text-gray-500 dark:text-neutral-500">
                          ₹39.00
                        </dd>
                      </dl>
                      <dl class="grid sm:grid-cols-5 gap-x-3">
                        <dt class="col-span-3 font-semibold text-gray-800 dark:text-neutral-200">
                          Amount paid:
                        </dt>
                        <dd class="col-span-2 text-gray-500 dark:text-neutral-500">
                          ₹2789.00
                        </dd>
                      </dl>
                      <dl class="grid sm:grid-cols-5 gap-x-3">
                        <dt class="col-span-3 font-semibold text-gray-800 dark:text-neutral-200">
                          Due balance:
                        </dt>
                        <dd class="col-span-2 text-gray-500 dark:text-neutral-500">
                          ₹0.00
                        </dd>
                      </dl>
                    </div>
                  </div>
                </div>

                <div class="">
                  <h4 class="text-lg font-semibold text-gray-800 dark:text-neutral-200">
                    Thank you!
                  </h4>
                  <p class="text-gray-500 dark:text-neutral-500">
                    If you have any questions concerning this invoice, use the
                    following contact information:
                  </p>
                  <div class="mt-2">
                    <p class="block text-sm font-medium text-gray-800 dark:text-neutral-200">
                      096562 07211
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default FinalInvoiceCard;
