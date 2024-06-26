import { createSlice } from "@reduxjs/toolkit";
import {
  createMenuCategoryByIdUser,
  deleteMenuCategoryById,
  getMenuCategoriesByIdUser,
  updateMenuCategoryById,
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
      })
      .addCase(updateMenuCategoryById.pending, (state) => {
        state.loading = true;
      })
      .addCase(updateMenuCategoryById.fulfilled, (state, action) => {
        const newMenuCategories = state.menuCategories.map((menuCategory) =>
          menuCategory._id === action.payload._id
            ? action.payload
            : menuCategory
        );
        state.menuCategories = newMenuCategories;
        state.loading = false;
        toast.success("¡Categoría del menú actualizada con éxito!");
      })
      .addCase(deleteMenuCategoryById.pending, (state) => {
        state.loading = true;
      })
      .addCase(deleteMenuCategoryById.fulfilled, (state, action) => {
        const newMenuCategories = state.menuCategories.filter(
          (menuCategory) => menuCategory._id !== action.payload._id
        );
        state.menuCategories = newMenuCategories;
        state.loading = false;
        toast.success("¡Categoría del menú eliminada con éxito!");
      });
  },
});

export const {} = menuCategorySlice.actions;
