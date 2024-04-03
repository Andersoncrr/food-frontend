import { AuthCredentials } from "@/types/user";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const authUser = createAsyncThunk(
  "user/authUser",
  async (values: AuthCredentials) => {
    const { data } = await axios.post(
      "http://localhost:5001/api/user/auth",
      values
    );
    return data;
  }
);
