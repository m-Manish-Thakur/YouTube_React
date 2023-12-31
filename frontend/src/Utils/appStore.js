import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./themeSlice";
import sideBarReducer from "./sideBarSlice";

const store = configureStore({
  reducer: {
    theme: themeReducer,
    sideBar: sideBarReducer,
  },
});

export default store;
