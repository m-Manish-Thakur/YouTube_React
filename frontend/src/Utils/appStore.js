import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./themeSlice";
import sideBarReducer from "./sideBarSlice";
import videosReducer from "./videoSlice";
import searchReducer from "./searchSlice";
const store = configureStore({
  reducer: {
    videos: videosReducer,
    theme: themeReducer,
    sideBar: sideBarReducer,
    searchResults: searchReducer,
  },
});

export default store;
