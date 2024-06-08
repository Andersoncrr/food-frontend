import { axiosApp } from "@/axios";
import { RootState } from "@/types/redux";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getBusinessHourByIdUser = createAsyncThunk(
  "businessHour/getBusinessHourByIdUser",
  async (_arg, { getState }) => {
    const {
      user: { userInfo },
    } = getState() as RootState;

    const { data } = await axiosApp.get(`/business-hour/${userInfo._id}`);
    return data;
  }
);
