import { axiosApp } from "@/axios";
import { AuthCredentials } from "@/types/user";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const authUser = createAsyncThunk(
  "user/authUser",
  async (values: AuthCredentials) => {
    const { data } = await axiosApp.post("/user/auth", values);
    localStorage.setItem("token", data.token);
    return data;
  }
);
