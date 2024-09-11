import React from "react";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "../../components/ui/table";
  import EditEmployeeModal from "@/components/modal/EditEmployeeModal";
  import { BiSolidTrashAlt } from "react-icons/bi";

function EmployeeTable({filteredEmployees,handleDelete,fetchEmployees}) {
  return (
    <Table className="">
      <TableHeader>
        <TableRow>
          <TableHead className="w-[50px]">Select</TableHead>
          <TableHead className="w-[50px]">SINO</TableHead>
          <TableHead>Employee Name</TableHead>
          <TableHead>Department</TableHead>
          <TableHead>Mobile No</TableHead>
          <TableHead>Address</TableHead>
          <TableHead>Username</TableHead>
          <TableHead className="text-center w-[150px]">Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {filteredEmployees.length > 0 ? (
          filteredEmployees.map((employee, index) => (
            <TableRow key={employee.id}>
              <TableCell>
                <input type="checkbox" />
              </TableCell>
              <TableCell className="font-medium">{index + 1}</TableCell>
              <TableCell>{employee.employee_name}</TableCell>
              <TableCell>{employee.employee_department}</TableCell>
              <TableCell>{employee.employee_phone}</TableCell>
              <TableCell>{employee.employee_address}</TableCell>
              <TableCell>{employee.employee_username}</TableCell>
              <TableCell className="text-center">
                <div className="flex justify-center gap-4">
                  <EditEmployeeModal
                    onSuccess={fetchEmployees}
                    employee={employee}
                  />

                  <BiSolidTrashAlt
                    className="text-[#495057] text-xl transition-transform transform hover:scale-110 cursor-pointer"
                    onClick={() => handleDelete(employee.employee_id)}
                  />
                </div>
              </TableCell>
            </TableRow>
          ))
        ) : (
          <TableRow>
            <TableCell colSpan="8" className="text-center text-gray-500 py-4">
              No employees found.
            </TableCell>
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
}

export default EmployeeTable;
