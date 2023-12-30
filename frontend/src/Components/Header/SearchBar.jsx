import React from "react";

const SearchBar = () => {
  return (
    <>
      <div>
        <input type="text" placeholder="Search" />
        <span class="material-symbols-outlined">search</span>
      </div>
      <span class="material-symbols-outlined" id="mic">
        mic
      </span>
    </>
  );
};

export default SearchBar;
