import { axiosApp } from "@/axios";
import { RootState } from "@/types/redux";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const updateUserById = createAsyncThunk(
  "user/updateUserById",
  async (user: any, { getState }) => {
    const {
      user: { userInfo },
    } = getState() as RootState;

    const { data } = await axiosApp.put(`/user/${userInfo._id}`, user);
    localStorage.setItem("token", data.token);
    return data;
  }
);
