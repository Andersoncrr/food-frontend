import { axiosApp } from "@/axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const updateMenuProductById = createAsyncThunk(
  "menuProduct/updateMenuProductById",
  async (menuProduct: any) => {
    const { data } = await axiosApp.put(
      `/menu-product/${menuProduct._id}`,
      menuProduct
    );
    return data;
  }
);
