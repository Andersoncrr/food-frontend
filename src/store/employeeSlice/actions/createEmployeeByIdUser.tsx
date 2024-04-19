import { axiosApp } from "@/axios";
import { RootState } from "@/types/redux";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const createEmployeesByIdUser = createAsyncThunk(
  "create/createEmployeesByIdUser",
  async (employee: any, { getState }) => {
    const {
      user: { userInfo },
    } = getState() as RootState;

    const { data } = await axiosApp.post(`/employee`, {
      ...employee,
      idUser: userInfo._id,
    });
    return data;
  }
);
