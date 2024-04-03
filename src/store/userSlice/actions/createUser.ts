import { CreateCredentials } from "@/types/user";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const createUser = createAsyncThunk(
  "user/createUser",
  async (values: CreateCredentials) => {
    const { data } = await axios.post("http://localhost:5001/api/user", values);
    return data;
  }
);
