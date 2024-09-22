import React from "react";

function Search({ setSearchQuery, searchQuery, name }) {
  return (
    <div className="flex gap-2">
      <span>Search</span>
      <input
        type="text"
        placeholder={`Search by ${name}`}
        className="h-10 border rounded px-4 lg:w-64 bg-white focus:ring-2 focus:ring-[#000] focus:ring-offset-0 outline-none"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
    </div>
  );
}

export default Search;
