import { axiosApp } from "@/axios";
import { AuthEmployeeCredentials } from "@/types/employee";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const authEmployee = createAsyncThunk(
  "employee/authEmployee",
  async (values: AuthEmployeeCredentials) => {
    const { data } = await axiosApp.post("/employee/auth", values);
    localStorage.setItem("token", data.token);
    return data;
  }
);
