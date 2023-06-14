import React from "react";

const SearchBar = ({ onQueryChange }) => {
  return (
    <input
      type="text"
      placeholder="Search Users..."
      onChange={(e) => onQueryChange(e)}
      className="p-2 rounded-lg my-2 border-solid border-2 border-black"
    />
  );
};

export default SearchBar;
