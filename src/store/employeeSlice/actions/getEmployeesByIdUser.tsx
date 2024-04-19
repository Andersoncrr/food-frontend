import { axiosApp } from "@/axios";
import { RootState } from "@/types/redux";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getEmployeesByIdUser = createAsyncThunk(
  "employee/getEmployeesByIdUser",
  async (_arg, { getState }) => {
    const {
      user: { userInfo },
    } = getState() as RootState;

    const { data } = await axiosApp.get(`/employee/${userInfo._id}`);
    return data;
  }
);
