import { createSlice } from "@reduxjs/toolkit";
import { authUser, createUser } from "./actions";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    loading: false,
    token: null,
  },
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(authUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(authUser.fulfilled, (state, action) => {
        state.loading = false;
        state.token = action.payload.token;
      })
      .addCase(createUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(createUser.fulfilled, (state, action) => {
        state.loading = false;
        state.token = action.payload.token;
      });
  },
});

export const {} = userSlice.actions;
