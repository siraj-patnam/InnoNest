// SearchBar.js
import React, { useState } from "react";

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleChange = (e) => {
    setQuery(e.target.value); // Update the query state with the input value
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior
    onSearch(query); // Call the onSearch function passed as a prop with the current query
  };

  return (
    <form onSubmit={handleSubmit} className="search-bar form-inline d-flex ml-5 mr-5 p-5">
      <input
        class="form-control mr-sm-2"
        type="search"
        placeholder="Search...."
        aria-label="Search" 
        onChange={handleChange}
      />
      <button class="btn btn-success  my-2 my-sm-0 m-2" type="submit">
        Search
      </button>
    </form>
  );
};

export default SearchBar;
