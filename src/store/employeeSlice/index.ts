import { createSlice } from "@reduxjs/toolkit";
import {
  createEmployeesByIdUser,
  getEmployeesByIdUser,
  updateEmployeeById,
} from "./actions";
import { toast } from "react-toastify";
import { deleteEmployeeById } from "./actions/deleteEmployeeById";

const initialState = {
  loading: false,
  employees: [],
};

export const employeesSlice = createSlice({
  name: "employee",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getEmployeesByIdUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(getEmployeesByIdUser.fulfilled, (state, action) => {
        state.loading = false;
        state.employees = action.payload;
      })
      .addCase(createEmployeesByIdUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(createEmployeesByIdUser.fulfilled, (state, action) => {
        state.employees.push(action.payload);
        state.loading = false;
        toast.success("¡Empleado creado con éxito!");
      })
      .addCase(updateEmployeeById.pending, (state) => {
        state.loading = true;
      })
      .addCase(updateEmployeeById.fulfilled, (state, action) => {
        const newEmployees = state.employees.map((employee) =>
          employee._id === action.payload._id ? action.payload : employee
        );
        state.employees = newEmployees;
        state.loading = false;
        toast.success("¡Empleado editado con éxito!");
      })
      .addCase(deleteEmployeeById.pending, (state) => {
        state.loading = true;
      })
      .addCase(deleteEmployeeById.fulfilled, (state, action) => {
        const newEmployees = state.employees.filter(
          (employee) => employee._id !== action.payload._id
        );
        state.employees = newEmployees;
        state.loading = false;
        toast.success("¡Empleado eliminado con éxito!");
      });
  },
});

export const {} = employeesSlice.actions;
