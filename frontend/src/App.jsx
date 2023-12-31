import React from "react";
import Body from "./Components/Body";
import Header from "./Components/Header/Header";
import { useSelector } from "react-redux";
import { selectIsDarkMode } from "./Utils/themeSlice";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const App = () => {
  const isDarkMode = useSelector(selectIsDarkMode);
  return (
    <div className={isDarkMode ? "darkmode" : ""}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Body />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
