import React, { useState } from "react";
import { RiCloseLargeLine } from "react-icons/ri";

function CustomerFilter({
  isFilterVisible,
  employees,
  onFilterChange,
  filters,
  setFilters,
}) {
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: value,
    }));
  };

  const resetFilters = () => {
    setFilters({
      fromDate: "",
      toDate: "",
      employeeName: "",
      status: "",
    });
  };

  return (
    <>
      {isFilterVisible && (
        <div className="flex flex-wrap gap-4 mb-4">
          <div className="flex flex-col">
            <label htmlFor="from-date" className="text-sm font-medium">
              From Date
            </label>
            <input
              type="date"
              id="from-date"
              name="fromDate"
              value={filters.fromDate}
              onChange={handleInputChange}
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
              name="toDate"
              value={filters.toDate}
              onChange={handleInputChange}
              className="h-10 border rounded px-4 bg-gray-50"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="sort-by-employee" className="text-sm font-medium">
              Sort by Employee Name
            </label>
            <select
              id="sort-by-employee"
              name="employeeName"
              value={filters.employeeName}
              onChange={handleInputChange}
              className="h-10 border rounded px-4 bg-gray-50"
            >
              <option value="">Select Employee</option>
              {employees.map((employee) => (
                <option key={employee.id} value={employee.name}>
                  {employee.employee_name}
                </option>
              ))}
            </select>
          </div>
          <div className="flex flex-col">
            <label htmlFor="sort-by-status" className="text-sm font-medium">
              Sort by Status
            </label>
            <select
              id="sort-by-status"
              name="status"
              value={filters.status}
              onChange={handleInputChange}
              className="h-10 border rounded px-4 bg-gray-50"
            >
              <option value="">Select Status</option>
              <option value="Pending">Pending</option>
              <option value="Completed">Completed</option>
              <option value="Delivered">Delivered</option>
            </select>
          </div>

          <div className="flex items-end">
            <button
              onClick={resetFilters}
              className="h-10 px-4 bg-[#D8E9E7] text-black rounded focus:outline-none focus:ring-2 focus:ring-black"
            >
              <RiCloseLargeLine className="text-2xl text-[#308E87]" />
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default CustomerFilter;
