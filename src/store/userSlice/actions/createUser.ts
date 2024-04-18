import { axiosApp } from "@/axios";
import { CreateCredentials } from "@/types/user";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const createUser = createAsyncThunk(
  "user/createUser",
  async (values: CreateCredentials) => {
    const { data } = await axiosApp.post("/user", values);
    localStorage.setItem("token", data.token);
    return data;
  }
);
