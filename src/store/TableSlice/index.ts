import { createSlice } from "@reduxjs/toolkit";
import {
  updateTableById,
  createTableByIdUser,
  getTablesByIdUser,
} from "./actions";

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
      })
      .addCase(createTableByIdUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(createTableByIdUser.fulfilled, (state, action) => {
        state.tables.push(action.payload);
        state.loading = false;
      })
      .addCase(updateTableById.pending, (state) => {
        state.loading = true;
      })
      .addCase(updateTableById.fulfilled, (state, action) => {
        const newTables = state.tables.map((table) =>
          table._id === action.payload._id ? action.payload : table
        );
        state.tables = newTables;
        state.loading = false;
      });
  },
});
