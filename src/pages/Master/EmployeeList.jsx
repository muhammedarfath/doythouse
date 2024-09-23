import React, { useEffect, useState } from "react";
import EmployeeModal from "@/components/modal/EmployeeModal";
import axios from "axios";
import { toast } from "react-hot-toast";
import EmployeeTable from "./EmployeeTable";
import Search from "@/components/Search/Search";
import { useOutletContext } from "react-router-dom";

function EmployeeList() {
  const [employees, setEmployees] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const { open } = useOutletContext();

  
  
  useEffect(() => {
    fetchEmployees();
  }, []);

  const fetchEmployees = async () => {
    try {
      const response = await axios.get(
        "https://storeconvo.com/php/fetch.php?typ=employee"
      );
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

  const filteredEmployees = employees.filter((employee) =>
    employee.employee_name?.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="flex items-center justify-center w-full">
  <div className={`w-full lg:max-w-screen-xl ${open ? "md:max-w-[32rem]" : "md:max-w-[40rem]"} max-w-[22rem] mx-auto`}>
        <div className="flex flex-col gap-6 mt-8">
          <h2 className="font-semibold text-xl text-black">Employee List</h2>
          <div className="bg-white flex gap-5 flex-col rounded-2xl shadow-sm p-4 md:p-8 w-full">
            <div className="flex items-center justify-between mb-4 lg:flex-row gap-4 lg:gap-0 flex-col">
              <Search
                searchQuery={searchQuery}
                setSearchQuery={setSearchQuery}
                name={"name"}
              />
              <EmployeeModal setEmployees={setEmployees} />
            </div>
            <EmployeeTable
              filteredEmployees={filteredEmployees}
              handleDelete={handleDelete}
              fetchEmployees={fetchEmployees}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default EmployeeList;
