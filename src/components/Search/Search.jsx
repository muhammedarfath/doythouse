import React from "react";

function Search({ setSearchQuery, searchQuery,name }) {
  return (
    <div className="flex gap-2">
      <span>Search</span>
      <input
        type="text"
        placeholder={`Search by ${name}`}
        className="h-10 border rounded px-4 w-64 bg-white"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
    </div>
  );
}

export default Search;
