import React from "react";
import LightDarkMode from "./LightDarkMode";
import SearchBar from "./SearchBar";

const Header = () => {
  return (
    <div id="header">
      <div className="left">
        <span class="material-symbols-outlined menu">menu</span>
        <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/e/ef/Youtube_logo.png?20220706172052"
            alt="logo"
            height="20px"
          />
          <h2>YouTube</h2>
        </div>
        <SearchBar />
      </div>
      <div className="right">
        <LightDarkMode />
        <div className="new_video">
          <span class="material-symbols-outlined">library_add</span>
          <p>New Video</p>
        </div>
        <img src="https://cdn-icons-png.flaticon.com/512/3177/3177440.png" height="40px" />
      </div>
    </div>
  );
};

export default Header;
