import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TFiltersSlice } from "../../../types";

const initialState: TFiltersSlice = {
  searchTerm: "",
  sort: "",
};

export const filterSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setSearchTerm: (state, action: PayloadAction<string>) => {
      state.searchTerm = action.payload;
    },

    setSort: (state, action: PayloadAction<string>) => {
      state.sort = action.payload;
    },

    clearFilters: (state) => {
      state.searchTerm = "";
      state.sort = "";
    },
  },
});

export const { setSearchTerm, setSort, clearFilters } = filterSlice.actions;

export default filterSlice.reducer;
