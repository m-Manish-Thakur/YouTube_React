// themeSlice.js
import { createSlice } from "@reduxjs/toolkit";

const videoSlice = createSlice({
  name: "videos",
  initialState: {
    videos: [],
  },
  reducers: {
    addVideos: (state, actions) => {
      state.videos = actions.payload;
    },
  },
});

export const { addVideos } = videoSlice.actions;
export const GetVideos = (state) => state.videos;
export default videoSlice.reducer;
