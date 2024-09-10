import React from "react";

function Search() {
  return (
    <div className="flex gap-2">
      <span>Search</span>
      <input
        type="text"
        placeholder="Search..."
        className="h-10 border rounded px-4 w-64 bg-[#fff] border-gray-300 text-gray-900 text-sm  focus:ring-black focus:border-black block pl-5 pr-3 py-4"
      />
    </div>
  );
}

export default Search;
