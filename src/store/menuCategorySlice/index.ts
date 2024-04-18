import { createSlice } from "@reduxjs/toolkit";
import { getMenuCategoriesByIdUser } from "./actions";

const initialState = {
  loading: false,
  menuCategories: [],
};

export const menuCategorySlice = createSlice({
  name: "menuCategory",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getMenuCategoriesByIdUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(getMenuCategoriesByIdUser.fulfilled, (state, action) => {
        state.menuCategories = action.payload;
      });
  },
});

export const {} = menuCategorySlice.actions;
