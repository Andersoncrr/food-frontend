import { axiosApp } from "@/axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const updateTableById = createAsyncThunk(
  "table/updateTableById",
  async (table: any) => {
    const { data } = await axiosApp.put(`/table`, table);
    return data;
  }
);
