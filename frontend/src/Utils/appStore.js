import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./themeSlice";
import sideBarReducer from "./sideBarSlice";
import videosReducer from "./videoSlice";

const store = configureStore({
  reducer: {
    videos: videosReducer,
    theme: themeReducer,
    sideBar: sideBarReducer,
  },
});

export default store;
