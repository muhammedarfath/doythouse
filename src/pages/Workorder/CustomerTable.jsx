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
import WorkOrderDetails from "@/components/modal/WorkOrder/WorkOrderDetails";

function CustomerTable({
  customer,
  fetchCustomer,
  handleChangeStatus,
  handleDelete,
}) {
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
          customer.map((cust, index) => (
            <TableRow key={cust.cust_id}>
              <TableCell>
                <input type="checkbox" />
              </TableCell>
              <TableCell className="font-medium">{index + 1}</TableCell>
              <TableCell>{cust.cust_orderno}</TableCell>
              <TableCell>{cust.cust_name}</TableCell>
              <TableCell>{cust.cust_expecteddelivery}</TableCell>
              <TableCell>{cust.cat_name}</TableCell>
              <TableCell>
                <select
                  value={cust.status}
                  onChange={(e) => handleChangeStatus(e, cust.cust_id)}
                  className="bg-gray-200 p-1 rounded"
                >
                  <option value="pending">Pending</option>
                  <option value="completed">Completed</option>
                  <option value="delivered">Delivered</option>
                </select>
              </TableCell>
              <TableCell className="text-center">
                <div className="flex justify-center gap-3">
                  <WorkOrderDetails cust={cust} />
                  <EditCustomerDetailsModal
                    customer={cust}
                    onSuccess={fetchCustomer}
                  />
                  <BiSolidTrashAlt
                    className="text-[#495057] text-xl transition-transform transform hover:scale-110 cursor-pointer"
                    onClick={() => handleDelete(cust.cust_id)}
                  />
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
