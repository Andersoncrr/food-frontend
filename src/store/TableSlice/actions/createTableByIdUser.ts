import { axiosApp } from "@/axios";
import { RootState } from "@/types/redux";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const createTableByIdUser = createAsyncThunk(
  "table/createTableByIdUser",
  async (table: any, { getState }) => {
    const {
      user: { userInfo },
    } = getState() as RootState;

    const tableData = {
      ...table,
      idUser: userInfo._id,
    };

    const { data } = await axiosApp.post(`/table`, tableData);
    return data;
  }
);
