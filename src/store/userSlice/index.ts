import { createSlice } from "@reduxjs/toolkit";
import { authUser, createUser } from "./actions";
import { jwtDecode } from "jwt-decode";
import { InitialState, UserInfo } from "@/types/userSlice";

const token = localStorage.getItem("token");

const initialState: InitialState = {
  loading: false,
  token: token,
  userInfo: token ? jwtDecode(token) : ({} as UserInfo),
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(authUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(authUser.fulfilled, (state, action) => {
        const user: UserInfo = jwtDecode(action.payload.token);
        state.userInfo = user;
        state.token = action.payload.token;
        state.loading = false;
      })
      .addCase(createUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(createUser.fulfilled, (state, action) => {
        const user: UserInfo = jwtDecode(action.payload.token);
        state.userInfo = user;
        state.token = action.payload.token;
        state.loading = false;
      });
  },
});

export const {} = userSlice.actions;
