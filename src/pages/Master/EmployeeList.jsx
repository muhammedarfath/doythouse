import React, { useEffect, useState } from "react";
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
import EmployeeModal from "@/components/modal/EmployeeModal";
import { BiSolidTrashAlt } from "react-icons/bi";
import axios from "axios";
import EditEmployeeModal from "@/components/modal/EditEmployeeModal";
import { toast } from "react-hot-toast";

function EmployeeList() {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    fetchEmployees();
  }, []);

  const fetchEmployees = async () => {
    try {
      const response = await axios.get(
        "https://storeconvo.com/php/fetch.php?typ=employee"
      );
      console.log(response.data, "this is employee");
      setEmployees(response.data);
    } catch (error) {
      console.error("Error fetching employees:", error);
    }
  };

  const handleDelete = (employeeId) => {
    toast(
      (t) => (
        <div>
          <p>Are you sure you want to delete this employee?</p>
          <div className="flex gap-2 mt-2">
            <button
              onClick={() => confirmDelete(employeeId, t.id)}
              className="bg-red-500 text-white px-4 py-1 rounded"
            >
              Delete
            </button>
            <button
              onClick={() => toast.dismiss(t.id)}
              className="bg-gray-300 text-black px-4 py-1 rounded"
            >
              Cancel
            </button>
          </div>
        </div>
      ),
      { duration: 4000 }
    );
  };

  const confirmDelete = async (employeeId, toastId) => {
    try {
      await axios.post(
        `https://storeconvo.com/php/delete.php/`,
        {
          id: employeeId,
          typ: "employee",
        },
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }
      );
      setEmployees((prevEmployees) =>
        prevEmployees.filter((employee) => employee.employee_id !== employeeId)
      );
      toast.success("Delete successful", { id: toastId });
    } catch (error) {
      console.error("Error deleting employee:", error);
      toast.error("Failed to delete employee", { id: toastId });
    }
  };

  console.log(employees);
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
                  className="h-10 border rounded px-4 w-64 bg-white "
                />
              </div>
              <EmployeeModal setEmployees={setEmployees} />
            </div>

            <Table className="w-full">
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
                {employees.length > 0 ? (
                  employees.map((employee, index) => (
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
                    <TableCell
                      colSpan="8"
                      className="text-center text-gray-500 py-4"
                    >
                      No employees found.
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EmployeeList;
