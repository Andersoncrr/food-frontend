import { axiosApp } from "@/axios";
import { RootState } from "@/types/redux";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const createProductByIdUser = createAsyncThunk(
  "menuProduct/createProductByIdUser",
  async (product: any, { getState }) => {
    const {
      user: { userInfo },
    } = getState() as RootState;

    const productData = {
      ...product,
      idUser: userInfo._id,
    };

    const { data } = await axiosApp.post(`/menu-product`, productData);
    return data;
  }
);
