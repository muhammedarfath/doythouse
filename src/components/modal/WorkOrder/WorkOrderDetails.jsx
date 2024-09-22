import React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../../../components/ui/dialog";
import { AiFillEye } from "react-icons/ai";

function WorkOrderDetails({ cust }) {
  const imageUrl = cust.image ? `https://storeconvo.com/php/uploads/${cust.image}` : '';

  return (
    <div>
      <Dialog>
        <DialogTrigger asChild>
          <AiFillEye className="text-[#495057] text-xl transition-transform transform hover:scale-110 cursor-pointer" />
        </DialogTrigger>
        <DialogContent className="sm:max-w-[1200px] max-h-[90vh] overflow-auto lg:mt-0 mt-40">
          <DialogHeader>
            <DialogTitle className="text-xl font-bold">Product Details</DialogTitle>
          </DialogHeader>
          <div className="grid gap-6 py-6">
            {imageUrl && (
              <div className="max-w-sm mx-auto">
                <img
                  src={imageUrl}
                  alt="Product Image"
                  className="w-full h-auto rounded-lg shadow-md"
                />
              </div>
            )}
            <div className="max-w-9xl mx-auto px-4 sm:px-6 lg:px-8">
              <h1 className="text-2xl font-semibold text-gray-900">Customer Details</h1>
              <table className="min-w-full border border-gray-300 mt-4">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="text-left py-2 px-4 border-b border-gray-300">Field</th>
                    <th className="text-left py-2 px-4 border-b border-gray-300">Value</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="py-2 px-4 border-b border-gray-300">Name</td>
                    <td className="py-2 px-4 border-b border-gray-300">{cust.cust_name}</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border-b border-gray-300">Phone</td>
                    <td className="py-2 px-4 border-b border-gray-300">{cust.cust_phone}</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border-b border-gray-300">Trial Date</td>
                    <td className="py-2 px-4 border-b border-gray-300">{cust.cust_trialdate}</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border-b border-gray-300">Expected Delivery</td>
                    <td className="py-2 px-4 border-b border-gray-300">{cust.cust_expecteddelivery}</td>
                  </tr>
                </tbody>
              </table>

              <div className="mt-6">
                <h2 className="text-lg font-semibold">Measurements</h2>
                <hr className="my-2" />
                <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                  {Object.entries(cust).map(([key, value], idx) => (
                    <React.Fragment key={idx}>
                      <div className="flex flex-col">
                        <label className="text-gray-700 font-medium mb-1">
                          {key.replace(/_/g, ' ').toUpperCase()}:
                        </label>
                        <input
                          type="text"
                          defaultValue={value}
                          readOnly
                          className="w-full border border-gray-300 rounded-md p-2"
                        />
                      </div>
                    </React.Fragment>
                  ))}
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
