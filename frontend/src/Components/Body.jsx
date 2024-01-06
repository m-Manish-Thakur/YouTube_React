import React from "react";
import SideBar from "./Sidebar/SideBar";
import Main from "./Main/Main";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import WatchPage from "./Main/WatchPage";
import Header from "./Header/Header";

const Body = () => {
  return (
    <BrowserRouter>
      <Header />
      <div id="body">
        <SideBar />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/videos/watch/:id/:likes" element={<WatchPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default Body;
