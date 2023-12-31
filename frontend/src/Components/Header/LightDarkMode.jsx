import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleDarkMode, selectIsDarkMode } from "../../Utils/themeSlice";

const LightDarkMode = () => {
  const dispatch = useDispatch();
  const isDarkMode = useSelector(selectIsDarkMode);

  return (
    <div>
      <span className="material-symbols-outlined" onClick={() => dispatch(toggleDarkMode())}>
        {!isDarkMode ? "dark_mode" : "light_mode"}
      </span>
    </div>
  );
};

export default LightDarkMode;
