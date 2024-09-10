import React, { useState } from "react";
import { FaFileInvoice } from "react-icons/fa";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

function PreInvoice() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div>
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger asChild>
            <FaFileInvoice
              className="text-[#495057] text-xl transition-transform transform hover:scale-110 cursor-pointer"
              onClick={() => setOpen(true)}
            />
          </DialogTrigger>
          <DialogContent className="lg:max-w-[50%] overflow-auto lg:max-h-[90%] h-full  mt-3 sm:max-w-[900px]">
            <div class="max-w-[85rem] px-4 sm:px-6 lg:px-8 mx-auto my-4 sm:my-10">
              <div class="sm:w-11/12 lg:w-4/5 mx-auto">
                <div class="flex flex-col p-4 sm:p-10 bg-white shadow-md rounded-xl dark:bg-neutral-800">
                  <div class="flex justify-between">
                    <div>
                      <svg
                        class="size-10"
                        width="26"
                        height="26"
                        viewBox="0 0 26 26"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M1 26V13C1 6.37258 6.37258 1 13 1C19.6274 1 25 6.37258 25 13C25 19.6274 19.6274 25 13 25H12"
                          class="stroke-blue-600 dark:stroke-white"
                          stroke="currentColor"
                          stroke-width="2"
                        />
                        <path
                          d="M5 26V13.16C5 8.65336 8.58172 5 13 5C17.4183 5 21 8.65336 21 13.16C21 17.6666 17.4183 21.32 13 21.32H12"
                          class="stroke-blue-600 dark:stroke-white"
                          stroke="currentColor"
                          stroke-width="2"
                        />
                        <circle
                          cx="13"
                          cy="13.0214"
                          r="5"
                          fill="currentColor"
                          class="fill-blue-600 dark:fill-white"
                        />
                      </svg>
                      <h1 class="mt-2 text-lg md:text-xl font-semibold text-blue-600 dark:text-white">
                        Preline Inc.
                      </h1>
                    </div>
                    <div class="text-end">
                      <h2 class="text-2xl md:text-3xl font-semibold text-gray-800 dark:text-neutral-200">
                        Invoice #
                      </h2>
                      <span class="mt-1 block text-gray-500 dark:text-neutral-500">
                        3682303
                      </span>
                      <address class="mt-4 not-italic text-gray-800 dark:text-neutral-200">
                        45 Roker Terrace
                        <br />
                        Latheronwheel
                        <br />
                        KW5 8NW, London
                        <br />
                        United Kingdom
                        <br />
                      </address>
                    </div>
                  </div>

                  <div class="mt-8 grid sm:grid-cols-2 gap-3">
                    <div>
                      <h3 class="text-lg font-semibold text-gray-800 dark:text-neutral-200">
                        Bill to:
                      </h3>
                      <h3 class="text-lg font-semibold text-gray-800 dark:text-neutral-200">
                        Sara Williams
                      </h3>
                      <address class="mt-2 not-italic text-gray-500 dark:text-neutral-500">
                        280 Suzanne Throughway,
                        <br />
                        Breannabury, OR 45801,
                        <br />
                        United States
                        <br />
                      </address>
                    </div>

                    <div class="sm:text-end space-y-2">
                      <div class="grid grid-cols-2 sm:grid-cols-1 gap-3 sm:gap-2">
                        <dl class="grid sm:grid-cols-5 gap-x-3">
                          <dt class="col-span-3 font-semibold text-gray-800 dark:text-neutral-200">
                            Invoice date:
                          </dt>
                          <dd class="col-span-2 text-gray-500 dark:text-neutral-500">
                            03/10/2018
                          </dd>
                        </dl>
                        <dl class="grid sm:grid-cols-5 gap-x-3">
                          <dt class="col-span-3 font-semibold text-gray-800 dark:text-neutral-200">
                            Due date:
                          </dt>
                          <dd class="col-span-2 text-gray-500 dark:text-neutral-500">
                            03/11/2018
                          </dd>
                        </dl>
                      </div>
                    </div>
                  </div>

                  <div class="mt-6">
                    <div class="border border-gray-200 p-4 rounded-lg space-y-4 dark:border-neutral-700">
                      <div class="hidden sm:grid sm:grid-cols-5">
                        <div class="sm:col-span-2 text-xs font-medium text-gray-500 uppercase dark:text-neutral-500">
                          Item
                        </div>
                        <div class="text-start text-xs font-medium text-gray-500 uppercase dark:text-neutral-500">
                          Qty
                        </div>
                        <div class="text-start text-xs font-medium text-gray-500 uppercase dark:text-neutral-500">
                          Rate
                        </div>
                        <div class="text-end text-xs font-medium text-gray-500 uppercase dark:text-neutral-500">
                          Amount
                        </div>
                      </div>
                      <div class="hidden sm:block border-b border-gray-200 dark:border-neutral-700"></div>

                      <div class="grid grid-cols-3 sm:grid-cols-5 gap-2">
                        <div class="col-span-full sm:col-span-2">
                          <p class="font-medium text-gray-800 dark:text-neutral-200">
                            Design UX and UI
                          </p>
                        </div>
                        <div>
                          <p class="text-gray-800 dark:text-neutral-200">1</p>
                        </div>
                        <div>
                          <p class="text-gray-800 dark:text-neutral-200">5</p>
                        </div>
                        <div>
                          <p class="sm:text-end text-gray-800 dark:text-neutral-200">
                            $500
                          </p>
                        </div>
                      </div>

                      <div class="grid grid-cols-3 sm:grid-cols-5 gap-2">
                        <div class="col-span-full sm:col-span-2">
                          <p class="font-medium text-gray-800 dark:text-neutral-200">
                            Web project
                          </p>
                        </div>
                        <div>
                          <p class="text-gray-800 dark:text-neutral-200">1</p>
                        </div>
                        <div>
                          <p class="text-gray-800 dark:text-neutral-200">24</p>
                        </div>
                        <div>
                          <p class="sm:text-end text-gray-800 dark:text-neutral-200">
                            $1250
                          </p>
                        </div>
                      </div>

                      <div class="grid grid-cols-3 sm:grid-cols-5 gap-2">
                        <div class="col-span-full sm:col-span-2">
                          <p class="font-medium text-gray-800 dark:text-neutral-200">
                            SEO
                          </p>
                        </div>
                        <div>
                          <p class="text-gray-800 dark:text-neutral-200">1</p>
                        </div>
                        <div>
                          <p class="text-gray-800 dark:text-neutral-200">6</p>
                        </div>
                        <div>
                          <p class="sm:text-end text-gray-800 dark:text-neutral-200">
                            $2000
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="mt-8 flex sm:justify-end">
                    <div class="w-full max-w-2xl sm:text-end space-y-2">
                      <div class="grid grid-cols-2 sm:grid-cols-1 gap-3 sm:gap-2">
                        <dl class="grid sm:grid-cols-5 gap-x-3">
                          <dt class="col-span-3 font-semibold text-gray-800 dark:text-neutral-200">
                            Subtotal:
                          </dt>
                          <dd class="col-span-2 text-gray-500 dark:text-neutral-500">
                            $2750.00
                          </dd>
                        </dl>
                        <dl class="grid sm:grid-cols-5 gap-x-3">
                          <dt class="col-span-3 font-semibold text-gray-800 dark:text-neutral-200">
                            Total:
                          </dt>
                          <dd class="col-span-2 text-gray-500 dark:text-neutral-500">
                            $2750.00
                          </dd>
                        </dl>
                        <dl class="grid sm:grid-cols-5 gap-x-3">
                          <dt class="col-span-3 font-semibold text-gray-800 dark:text-neutral-200">
                            Tax:
                          </dt>
                          <dd class="col-span-2 text-gray-500 dark:text-neutral-500">
                            $39.00
                          </dd>
                        </dl>
                        <dl class="grid sm:grid-cols-5 gap-x-3">
                          <dt class="col-span-3 font-semibold text-gray-800 dark:text-neutral-200">
                            Amount paid:
                          </dt>
                          <dd class="col-span-2 text-gray-500 dark:text-neutral-500">
                            $2789.00
                          </dd>
                        </dl>
                        <dl class="grid sm:grid-cols-5 gap-x-3">
                          <dt class="col-span-3 font-semibold text-gray-800 dark:text-neutral-200">
                            Due balance:
                          </dt>
                          <dd class="col-span-2 text-gray-500 dark:text-neutral-500">
                            $0.00
                          </dd>
                        </dl>
                      </div>
                    </div>
                  </div>

                  <div class="mt-8 sm:mt-12">
                    <h4 class="text-lg font-semibold text-gray-800 dark:text-neutral-200">
                      Thank you!
                    </h4>
                    <p class="text-gray-500 dark:text-neutral-500">
                      If you have any questions concerning this invoice, use the
                      following contact information:
                    </p>
                    <div class="mt-2">
                      <p class="block text-sm font-medium text-gray-800 dark:text-neutral-200">
                        hello@preline.co
                      </p>
                    </div>
                  </div>

                  <div class="mt-8 sm:mt-12 print:hidden">
                    <div class="flex gap-x-3">
                      <a
                        href="#"
                        class="py-2 px-3 inline-flex justify-center items-center gap-2 rounded-md border font-semibold bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 focus:ring-offset-gray-800 transition-all text-sm dark:bg-neutral-900 dark:hover:bg-neutral-800 dark:text-neutral-300 dark:hover:text-white dark:focus:ring-gray-700 dark:hover:bg-white/20"
                      >
                        Print Invoice
                      </a>

                      <select class="py-2 px-3 inline-flex justify-center items-center gap-2 rounded-md border font-semibold bg-[#308E87] text-white shadow-sm align-middle hover:bg-[#308E87] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#308E87] focus:ring-offset-gray-800 transition-all text-sm dark:bg-neutral-900 dark:hover:bg-neutral-800 dark:text-neutral-300 dark:hover:text-white dark:focus:ring-gray-700 dark:hover:bg-white/20">
                        <option value="" disabled selected>
                          Change Status
                        </option>
                        <option value="closed">Closed</option>
                        <option value="pending">Pending</option>
                        <option value="open">Open</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </>
  );
}

export default PreInvoice;
