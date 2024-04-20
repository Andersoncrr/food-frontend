import { axiosApp } from "@/axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const deleteMenuCategoryById = createAsyncThunk(
  "menuCategory/deleteMenuCategoryById",
  async (idMenuCategory: any) => {
    const { data } = await axiosApp.delete(`/menu-category/${idMenuCategory}`);
    return data;
  }
);
