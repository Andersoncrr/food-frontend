import { axiosApp } from "@/axios";
import { RootState } from "@/types/redux";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getMenuCategoriesByIdUser = createAsyncThunk(
  "menuCategory/getMenuCategoriesByIdUser",
  async (_arg, { getState }) => {
    const {
      user: { userInfo },
    } = getState() as RootState;

    const { data } = await axiosApp.get(`/menu-category/${userInfo._id}`);
    return data;
  }
);
