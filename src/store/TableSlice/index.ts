import { createSlice } from "@reduxjs/toolkit";
import { getTablesByIdUser } from "./actions/getTablesByIdUser";

const initialState = {
  loading: false,
  tables: [],
};

export const tablesSlice = createSlice({
  name: "table",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getTablesByIdUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(getTablesByIdUser.fulfilled, (state, action) => {
        state.loading = false;
        state.tables = action.payload;
      });
  },
});
