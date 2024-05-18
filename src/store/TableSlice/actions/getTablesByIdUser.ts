import { axiosApp } from "@/axios";
import { RootState } from "@/types/redux";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getTablesByIdUser = createAsyncThunk(
  "table/getTablesByIdUser",
  async (_arg, { getState }) => {
    const {
      user: { userInfo },
    } = getState() as RootState;

    const { data } = await axiosApp.get(`/table/all/${userInfo._id}`);
    return data;
  }
);
