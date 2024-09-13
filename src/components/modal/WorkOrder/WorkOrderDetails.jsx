import React from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "../../../components/ui/dialog";
import { AiFillEye } from "react-icons/ai";

function WorkOrderDetails({ cust }) {
  const imageUrl = cust.image ? `https://storeconvo.com/php/uploads/${cust.image}` : '';


  return (
    <div>
      <Dialog>
        <DialogTrigger asChild>
          <AiFillEye className="text-[#495057] text-xl transition-transform transform hover:scale-110 cursor-pointer" />
        </DialogTrigger>
        <DialogContent className="sm:max-w-[1200px] max-h-[900px] overflow-scroll lg:mt-0 mt-40">
          <DialogHeader>
            <DialogTitle>Product Details</DialogTitle>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="pt-6">
              <div className="mx-auto mt-6 max-w-2xl sm:px-6 lg:max-w-7xl lg:grid lg:grid-cols-1 lg:gap-x-8 lg:px-8">
                {imageUrl && (
                  <div className="aspect-h-5 aspect-w-4 lg:aspect-h-4 lg:aspect-w-3 sm:overflow-hidden sm:rounded-lg">
                    <img
                      src={imageUrl}
                      alt="Product Image"
                      className="h-full w-full object-cover object-center"
                    />
                  </div>
                )}

                <div className="mx-auto max-w-2xl px-4 pb-16 pt-10 sm:px-6 lg:max-w-7xl lg:grid lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pb-24 lg:pt-16">
                  <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
                    <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
                      {cust.cust_name}
                    </h1>
                    <p className="text-base text-gray-900">Phone: {cust.cust_phone}</p>
                    <p className="text-base text-gray-900">Trial Date: {cust.cust_trialdate}</p>
                    <p className="text-base text-gray-900">Expected Delivery: {cust.cust_expecteddelivery}</p>
                  </div>

                  <div className="mt-4 flex flex-col gap-10 lg:row-span-3 lg:mt-0">
                    <h2 className="">Measurements</h2>
                    <hr />
                    <ul role="list" className="list-disc space-y-2 pl-4 text-sm">
                      {Object.entries(cust).map(([key, value], idx) => (
                        <li key={idx} className="text-gray-400">
                          <span className="text-gray-600">{`${key.replace(/_/g, ' ').toUpperCase()}: ${value}`}</span>
                        </li>
                      ))}
                    </ul>
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

export default WorkOrderDetails;
