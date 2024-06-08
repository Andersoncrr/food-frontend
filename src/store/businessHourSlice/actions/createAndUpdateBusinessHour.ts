import { axiosApp } from "@/axios";
import { RootState } from "@/types/redux";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const createAndUpdateBusinessHour = createAsyncThunk(
  "businessHour/createAndUpdateBusinessHour",
  async (businessHour: any, { getState }) => {
    const {
      user: { userInfo },
    } = getState() as RootState;

    const { data } = await axiosApp.post(`/business-hour`, {
      ...businessHour,
      idUser: userInfo._id,
    });
    return data;
  }
);
