import React from "react";
import LightDarkMode from "./LightDarkMode";
import SearchBar from "./SearchBar";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../../Utils/sideBarSlice";
import { Link } from "react-router-dom";

const Header = () => {
  const dispatch = useDispatch();

  return (
    <div id="header">
      <div className="left">
        <span className="material-symbols-outlined menu" onClick={() => dispatch(toggleMenu())}>
          menu
        </span>
        <Link to="/" style={{ textDecoration: "none" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/e/ef/Youtube_logo.png?20220706172052"
              alt="logo"
              height="20px"
            />
            <h2>YouTube</h2>
          </div>
        </Link>
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
      <div id="reponsive_menu">
        <a href="#">
          <span className="material-symbols-outlined">home</span>
          Home
        </a>
        <a href="#">
          <span className="material-symbols-outlined">search</span>
          Search
        </a>
        <a href="#">
          <span className="material-symbols-outlined">subscriptions</span>
          Subscriptions
        </a>
        <a href="#">
          <span className="material-symbols-outlined">video_library</span>
          Library
        </a>
      </div>
    </div>
  );
};

export default Header;
