import { axiosApp } from "@/axios";
import { RootState } from "@/types/redux";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getMenuProductsByIdUser = createAsyncThunk(
  "menuProduct/getMenuProductsByIdUser",
  async (_arg, { getState }) => {
    const {
      user: { userInfo },
    } = getState() as RootState;

    const { data } = await axiosApp.get(`/menu-product/all/${userInfo._id}`);
    return data;
  }
);
