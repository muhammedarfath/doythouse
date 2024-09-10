import React from "react";

function CustomerFilter({isFilterVisible}) {
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
            <label htmlFor="sort-by-employee" className="text-sm font-medium">
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
    </>
  );
}

export default CustomerFilter;
