import { createSlice } from "@reduxjs/toolkit";
import {
  createMenuCategoryByIdUser,
  getMenuCategoriesByIdUser,
} from "./actions";
import { toast } from "react-toastify";

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
        state.loading = false;
      })
      .addCase(createMenuCategoryByIdUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(createMenuCategoryByIdUser.fulfilled, (state, action) => {
        state.menuCategories.push(action.payload);
        state.loading = false;
        toast.success("¡Categoría del menú creada con éxito!");
      });
  },
});

export const {} = menuCategorySlice.actions;
