import React from "react";
import Body from "./Components/Body";
import Header from "./Components/Header/Header";
import { useSelector } from "react-redux";
import { selectIsDarkMode } from "./Utils/themeSlice";

const App = () => {
  const isDarkMode = useSelector(selectIsDarkMode);
  return (
    <div className={isDarkMode ? "" : "darkmode"}>
      <Header />
      <Body />
    </div>
  );
};

export default App;
