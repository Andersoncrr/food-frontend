import { axiosApp } from "@/axios";
import { RootState } from "@/types/redux";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const createMenuCategoryByIdUser = createAsyncThunk(
  "menuCategory/createMenuCategoryByIdUser",
  async (menuCategory: any, { getState }) => {
    const {
      user: { userInfo },
    } = getState() as RootState;

    const { data } = await axiosApp.post("/menu-category", {
      ...menuCategory,
      idUser: userInfo._id,
    });
    return data;
  }
);
