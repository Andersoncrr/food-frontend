import { axiosApp } from "@/axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const updateEmployeeById = createAsyncThunk(
  "employee/updateEmployeeById",
  async (employee: any) => {
    const { data } = await axiosApp.put(`/employee/${employee._id}`, employee);
    return data;
  }
);
