import { axiosApp } from "@/axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const updateMenuCategoryById = createAsyncThunk(
  "menuCategory/updateMenuCategoryById",
  async (menuCategory: any) => {
    const { data } = await axiosApp.put(
      `/menu-category/${menuCategory._id}`,
      menuCategory
    );
    return data;
  }
);
