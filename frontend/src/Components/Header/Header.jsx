import React, { useState } from "react";
import LightDarkMode from "./LightDarkMode";
import SearchBar from "./SearchBar";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../../Utils/sideBarSlice";
import { Link } from "react-router-dom";

const Header = () => {
  const dispatch = useDispatch();
  const [openSearch, setOpenSearch] = useState(false);

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
        <SearchBar openSearch={openSearch} />
      </div>
      <div className="right">
        <LightDarkMode />
        <Link to="/live/videos" style={{ textDecoration: "none" }}>
          <div className="new_video">
            <span class="material-symbols-outlined">live_tv</span>
            <p>Live</p>
          </div>
        </Link>
        <img src="https://cdn-icons-png.flaticon.com/512/3177/3177440.png" height="40px" />
      </div>
      <div id="reponsive_menu">
        <Link to="/">
          <span className="material-symbols-outlined" onClick={() => setOpenSearch(false)}>
            home
          </span>
          Home
        </Link>
        <a href="#">
          <span className="material-symbols-outlined" onClick={() => setOpenSearch(true)}>
            search
          </span>
          Search
        </a>
        <a href="#">
          <span className="material-symbols-outlined">subscriptions</span>
          Subscriptions
        </a>
        <Link to="/live/videos" style={{ textDecoration: "none" }}>
          <a href="#">
            <span class="material-symbols-outlined">live_tv</span>
            Live
          </a>
        </Link>
      </div>
    </div>
  );
};

export default Header;
