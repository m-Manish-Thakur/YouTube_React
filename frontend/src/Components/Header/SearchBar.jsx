import React from "react";

const SearchBar = () => {
  return (
    <div className="searchBar">
      <div>
        <input type="text" placeholder="Search" />
        <span class="material-symbols-outlined">search</span>
      </div>
      <span class="material-symbols-outlined" id="mic">
        mic
      </span>
    </div>
  );
};

export default SearchBar;
