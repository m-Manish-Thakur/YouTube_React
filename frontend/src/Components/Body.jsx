import React from "react";
import SideBar from "./Sidebar/SideBar";
import Main from "./Main/Main";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import WatchPage from "./Main/WatchPage";

const Body = () => {
  return (
    <div id="body">
      <BrowserRouter>
        <SideBar />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/videos/watch/:id/:likes" element={<WatchPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Body;
