import { axiosApp } from "@/axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const deleteEmployeeById = createAsyncThunk(
  "employee/deleteEmployeeById",
  async (idEmployee: any) => {
    const { data } = await axiosApp.delete(`/employee/${idEmployee}`);
    return data;
  }
);
