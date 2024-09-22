import React from "react";
import { RiCloseLargeLine } from "react-icons/ri";

function ExpenseFilter({
  filters,
  handleFilterChange,
  handleClearFilters,
  employees,
  ExpenseType,
}) {
  return (
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
          onChange={handleFilterChange}
          className="h-10 border rounded px-4 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-black"
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
          onChange={handleFilterChange}
          className="h-10 border rounded px-4 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-black"
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="sort-by-type" className="text-sm font-medium">
          Sort by Expense Type
        </label>
        <select
          id="sort-by-type"
          name="expenseType"
          value={filters.expenseType}
          onChange={handleFilterChange}
          className="h-10 border rounded px-4 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-black"
        >
          <option value="">Select Type</option>
          {ExpenseType.map((type) => (
            <option key={type} value={type.exp_type}>
              {type.exp_type}
            </option>
          ))}
        </select>
      </div>
      <div className="flex flex-col">
        <label htmlFor="sort-by-employee" className="text-sm font-medium">
          Sort by Employee Name
        </label>
        <select
          id="sort-by-employee"
          name="employee"
          value={filters.employee}
          onChange={handleFilterChange}
          className="h-10 border rounded px-4 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-black"
        >
          <option value="">Select Employee</option>
          {employees.map((emp) => (
            <option key={emp} value={emp.employee_name}>
              {emp.employee_name}
            </option>
          ))}
        </select>
      </div>
      <div className="flex items-end">
        <button
          onClick={handleClearFilters}
          className="h-10 px-4 bg-[#D8E9E7] text-black rounded focus:outline-none focus:ring-2 focus:ring-black"
        >
          <RiCloseLargeLine className="text-2xl text-[#308E87]"/>
        </button>
      </div>
    </div>
  );
}

export default ExpenseFilter;
