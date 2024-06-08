import { createSlice } from "@reduxjs/toolkit";
import {
  createAndUpdateBusinessHour,
  getBusinessHourByIdUser,
} from "./actions";
import { toast } from "react-toastify";

const initialState = {
  loading: false,
  businessHours: null,
};

export const businessHourSlice = createSlice({
  name: "businessHour",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(createAndUpdateBusinessHour.pending, (state) => {
        state.loading = true;
      })
      .addCase(createAndUpdateBusinessHour.fulfilled, (state, action) => {
        state.businessHours = action.payload;
        state.loading = false;
        toast.success("¡Horarios guardados con éxito!");
      })
      .addCase(getBusinessHourByIdUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(getBusinessHourByIdUser.fulfilled, (state, action) => {
        state.businessHours = action.payload;
        state.loading = false;
      });
  },
});

export const {} = businessHourSlice.actions;
