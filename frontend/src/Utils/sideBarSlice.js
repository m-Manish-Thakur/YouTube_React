// menuSlice.js
import { createSlice } from "@reduxjs/toolkit";

const sideBar = createSlice({
  name: "menu",
  initialState: {
    isOpen: true,
  },
  reducers: {
    toggleMenu: (state, actions) => {
      state.isOpen = !state.isOpen;
    },
  },
});

export const { toggleMenu } = sideBar.actions;
export default sideBar.reducer;
