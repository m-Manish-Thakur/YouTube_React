import React from "react";
import SideBar from "./Sidebar/SideBar";
import Main from "./Main/Main";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import WatchPage from "./Main/WatchPage";
import Header from "./Header/Header";
import SearchResultsPage from "./Main/SearchResultsPage";
import LiveStream from "./LiveStream/LiveStream";
import WatchLive from "./LiveStream/WatchLive";

const Body = () => {
  return (
    <BrowserRouter>
      <Header />
      <div id="body">
        <SideBar />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/videos/watch/:id/:likes" element={<WatchPage />} />
          <Route path="/search/results" element={<SearchResultsPage />} />
          <Route path="/live/videos" element={<LiveStream />} />
          <Route path="/live/videos/watch/:id" element={<WatchLive />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default Body;
