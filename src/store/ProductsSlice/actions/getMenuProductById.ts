import { axiosApp } from "@/axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getMenuProductById = createAsyncThunk(
  "menuProduct/getMenuProductById",
  async (idMenuProduct: string) => {
    const { data } = await axiosApp.get(`/menu-product/${idMenuProduct}`);
    return data;
  }
);
