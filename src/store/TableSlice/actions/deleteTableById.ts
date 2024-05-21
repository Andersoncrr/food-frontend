import { axiosApp } from "@/axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const deleteTableById = createAsyncThunk(
  "table/deleteTableById",
  async (idTable: any) => {
    const { data } = await axiosApp.delete(`/table/${idTable}`);
    return data;
  }
);
