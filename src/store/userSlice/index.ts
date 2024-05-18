import { createSlice } from "@reduxjs/toolkit";
import { authUser, createUser, updateUserById } from "./actions";
import { jwtDecode } from "jwt-decode";
import { InitialState, UserInfo } from "@/types/userSlice";
import { toast } from "react-toastify";

const token = localStorage.getItem("token");

const initialState: InitialState = {
  loading: false,
  token: token,
  userInfo: token ? jwtDecode(token) : ({} as UserInfo),
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    resetUser: () => initialState,
  },
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
      })
      .addCase(updateUserById.pending, (state) => {
        state.loading = true;
      })
      .addCase(updateUserById.fulfilled, (state, action) => {
        const user: UserInfo = jwtDecode(action.payload.token);
        state.userInfo = user;
        state.token = action.payload.token;
        state.loading = false;
        toast.success("Usuario actualizado con éxito!");
      });
  },
});

export const { resetUser } = userSlice.actions;
