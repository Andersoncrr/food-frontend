import { axiosApp } from "@/axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const deleteMenuProductById = createAsyncThunk(
  "menuProduct/deleteMenuProductById",
  async (idMenuProduct: any) => {
    const { data } = await axiosApp.delete(`/menu-product/${idMenuProduct}`);
    return data;
  }
);
