import React from "react";
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "../../components/ui/table";
  import { BiSolidTrashAlt } from "react-icons/bi";
  import EditCustomerDetailsModal from "../../components/modal/EditCustomerDetailsModal";


function CustomerTable({customer,fetchCustomer,handleChangeStatus}) {
  return (
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
          <TableHead className="text-center w-[150px]">Actions</TableHead>
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
  );
}

export default CustomerTable;
