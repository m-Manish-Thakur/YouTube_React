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
    closeMenu: (state, actions) => {
      state.isOpen = false;
    },
  },
});

export const { toggleMenu, closeMenu } = sideBar.actions;
export default sideBar.reducer;
