// menuSlice.js
import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "searchResults",
  initialState: {
    searchResults: [],
  },
  reducers: {
    addSearchResults: (state, actions) => {
      state.searchResults = actions.payload;
    },
  },
});

export const { addSearchResults, setSearchQuery } = searchSlice.actions;
export const getSearchResults = (state) => state.searchResults;
export default searchSlice.reducer;
