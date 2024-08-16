import React, { useState } from "react";
import { Button } from "../../components/ui/button";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../components/ui/table";
import { AiFillEdit } from "react-icons/ai";
import { MdOutlineDelete } from "react-icons/md";
import { FiPlus } from "react-icons/fi";
import { Link } from "react-router-dom";
import EmployeeModal from "@/components/modal/EmployeeModal";
import { BiSolidTrashAlt } from "react-icons/bi";

// Sample data for employees
const employees = [
  {
    id: 1,
    name: "John Doe",
    department: "HR",
    mobile: "123-456-7890",
    address: "123 Main St, Cityville",
    username: "johndoe",
  },
  {
    id: 2,
    name: "Jane Smith",
    department: "Marketing",
    mobile: "098-765-4321",
    address: "456 Elm St, Townsville",
    username: "janesmith",
  },
];

function EmployeeList() {
  return (
    <div className="flex items-center justify-center w-full">
      <div className="w-full max-w-screen-xl mx-auto">
        <div className="flex flex-col gap-6 mt-8">
          <h2 className="font-semibold text-xl text-black">Employee List</h2>
          <div className="bg-white flex gap-5 flex-col rounded-2xl shadow-sm p-4 md:p-8 w-full">
            <div className="flex items-center justify-between mb-4">
              <div className="flex gap-2">
                <span>Search</span>
                <input
                  type="text"
                  placeholder="Search..."
                  className="h-10 border rounded px-4 w-64 bg-gray-50"
                />
              </div>
              <EmployeeModal />
            </div>

            <Table className="w-full">
              <TableCaption>A list of your employees.</TableCaption>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[50px]">Select</TableHead>
                  <TableHead className="w-[50px]">SINO</TableHead>
                  <TableHead>Employee Name</TableHead>
                  <TableHead>Department</TableHead>
                  <TableHead>Mobile No</TableHead>
                  <TableHead>Address</TableHead>
                  <TableHead>Username</TableHead>
                  <TableHead className="text-center w-[150px]">
                    Actions
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {employees.map((employee, index) => (
                  <TableRow key={employee.id}>
                    <TableCell>
                      <input type="checkbox" />
                    </TableCell>
                    <TableCell className="font-medium">{index + 1}</TableCell>
                    <TableCell>{employee.name}</TableCell>
                    <TableCell>{employee.department}</TableCell>
                    <TableCell>{employee.mobile}</TableCell>
                    <TableCell>{employee.address}</TableCell>
                    <TableCell>{employee.username}</TableCell>
                    <TableCell className="text-center">
                      <div className="flex justify-center gap-4">
                        <AiFillEdit className="text-[#495057] text-xl transition-transform transform hover:scale-110  cursor-pointer" />
                        <BiSolidTrashAlt className="text-[#495057] text-xl transition-transform transform hover:scale-110 cursor-pointer" />
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EmployeeList;
