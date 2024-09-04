import React, { useEffect, useState } from "react";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../components/ui/table";
import { BiSolidTrashAlt } from "react-icons/bi";
import CustomerInformationModal from "@/components/modal/CustomerInformationModal";
import { CiFilter } from "react-icons/ci";
import EditCustomerDetailsModal from "@/components/modal/EditCustomerDetailsModal";
import axios from "axios";

function CustomerList() {
  const [isFilterVisible, setIsFilterVisible] = useState(false);
  const [customer, setCustomer] = useState("");

  const toggleFilter = () => {
    setIsFilterVisible(!isFilterVisible);
  };

  useEffect(() => {
    fetchCustomer();
  }, []);

  const fetchCustomer = async () => {
    try {
      const response = await axios.get(
        "https://storeconvo.com/php/fetch.php?typ=customer"
      );
      setCustomer(response.data);
    } catch (error) {
      console.error("Error fetching Customers:", error);
    }
  };

  const handleChangeStatus = async (e, customerId) => {
    console.log(customerId);
    const newStatus = e.target.value;
    try {
    const response =   await axios.post(
        `https://storeconvo.com/php/edit.php/`,
        {
          id: customerId,
          typ: "status",
          status:newStatus
        },
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }
      );
      console.log(response.data);
    } catch (error) {
      console.error("Error deleting expense:", error);
      toast.error("Failed to delete expense", { id: toastId });
    }
  };


  return (
    <div className="flex items-center justify-center w-full">
      <div className="w-full lg:max-w-screen-xl md:max-w-[35rem] max-w-[22rem] mx-auto ">
        <div className="flex flex-col gap-6 mt-8">
          <h2 className="font-semibold text-xl text-black">Order List</h2>
          <div className="bg-white flex gap-5 flex-col rounded-2xl shadow-sm p-4 md:p-8 w-full">
            <div className="flex items-center justify-between mb-4 lg:flex-row gap-4 lg:gap-0 flex-col">
              <div className="flex gap-2">
                <span>Search</span>
                <input
                  type="text"
                  placeholder="Search..."
                  className="h-10 border rounded px-4 w-64 bg-[#fff] border-gray-300 text-gray-900 text-sm  focus:ring-black focus:border-black block pl-5 pr-3 py-4"
                />
              </div>
              <div className="flex items-center gap-5">
                <div
                  className="border rounded-md p-2 bg-[#D8E9E7] text-[#308E87] "
                  onClick={toggleFilter}
                >
                  <CiFilter className="text-2xl cursor-pointer hover:animate-shake" />
                </div>
                <CustomerInformationModal />
              </div>
            </div>

            {isFilterVisible && (
              <div className="flex flex-wrap gap-4 mb-4">
                <div className="flex flex-col">
                  <label htmlFor="from-date" className="text-sm font-medium">
                    From Date
                  </label>
                  <input
                    type="date"
                    id="from-date"
                    className="h-10 border rounded px-4 bg-gray-50"
                  />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="to-date" className="text-sm font-medium">
                    To Date
                  </label>
                  <input
                    type="date"
                    id="to-date"
                    className="h-10 border rounded px-4 bg-gray-50"
                  />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="sort-by-type" className="text-sm font-medium">
                    Sort by Employeer Name
                  </label>
                  <select
                    id="sort-by-type"
                    className="h-10 border rounded px-4 bg-gray-50"
                  >
                    <option value="">Select Employee</option>
                    <option value="Travel">sam</option>
                    <option value="Office Supplies">ran</option>
                    <option value="Meals">Meals</option>
                    <option value="Accommodation">log</option>
                  </select>
                </div>
                <div className="flex flex-col">
                  <label
                    htmlFor="sort-by-employee"
                    className="text-sm font-medium"
                  >
                    Sort by status
                  </label>
                  <select
                    id="sort-by-employee"
                    className="h-10 border rounded px-4 bg-gray-50"
                  >
                    <option value="">Select Status</option>
                    <option value="Jane Smith">Today New Order</option>
                    <option value="John Doe">Pending</option>
                    <option value="John Doe">Completed</option>
                    <option value="John Doe">Delivered</option>
                  </select>
                </div>
              </div>
            )}
            <Table className="w-full">
              <TableCaption>A list of your orders.</TableCaption>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[50px]">Select</TableHead>
                  <TableHead className="w-[50px]">SINO</TableHead>
                  <TableHead>Order No.</TableHead>
                  <TableHead>Customer Name</TableHead>
                  <TableHead>Expected Delivery</TableHead>
                  <TableHead>Item Category</TableHead>
                  <TableHead>Total Price</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="text-center w-[150px]">
                    Actions
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {customer.length === 0 ? (
                  <TableRow>
                    <TableCell colSpan={9} className="text-center">
                      No Data Available
                    </TableCell>
                  </TableRow>
                ) : (
                  customer.map((customer, index) => (
                    <TableRow key={customer.id}>
                      <TableCell>
                        <input type="checkbox" />
                      </TableCell>
                      <TableCell className="font-medium">{index + 1}</TableCell>
                      <TableCell>{customer.cust_orderno}</TableCell>
                      <TableCell>{customer.cust_name}</TableCell>
                      <TableCell>{customer.cust_expecteddelivery}</TableCell>
                      <TableCell>{customer.cust_itemcategory}</TableCell>
                      <TableCell>{customer.totalprice}</TableCell>
                      <TableCell>
                        <select
                          value={customer.status}
                          onChange={(e) => handleChangeStatus(e, customer.cust_id)}
                          className="bg-gray-200 p-1 rounded"
                        >
                          <option value="pending">Pending</option>
                          <option value="completed">Completed</option>
                          <option value="delivered">Delivered</option>
                        </select>
                      </TableCell>
                      <TableCell className="text-center">
                        <div className="flex justify-center gap-3">
                          <EditCustomerDetailsModal
                            customer={customer}
                            onSuccess={fetchCustomer}
                          />
                          <BiSolidTrashAlt className="text-[#495057] text-xl transition-transform transform hover:scale-110 cursor-pointer" />
                        </div>
                      </TableCell>
                    </TableRow>
                  ))
                )}
              </TableBody>
            </Table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CustomerList;
