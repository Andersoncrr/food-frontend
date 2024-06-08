import { createSlice } from "@reduxjs/toolkit";
import { getMenuProductsByIdUser } from "./actions/getMenuProductsByIdUser";
import { createMenuProductByIdUser } from "./actions/createMenuProductByIdUser";
import { deleteMenuProductById } from "./actions/deleteMenuProductById";
import { toast } from "react-toastify";
import { getMenuProductById } from "./actions/getMenuProductById";
import { updateMenuProductById } from "./actions/updateMenuProductById";

const initialState = {
  loading: false,
  products: [],
  product: null,
};

export const productsSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    resetProduct: (state) => {
      state.product = null;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(getMenuProductsByIdUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(getMenuProductsByIdUser.fulfilled, (state, action) => {
        state.products = action.payload;
        state.loading = false;
      })
      .addCase(createMenuProductByIdUser.pending, (state) => {
        state.loading = false;
      })
      .addCase(createMenuProductByIdUser.fulfilled, (state, action) => {
        state.products.push(action.payload);
        state.loading = false;
        toast.success("¡Producto del menú creada con éxito!");
      })
      .addCase(deleteMenuProductById.pending, (state) => {
        state.loading = false;
      })
      .addCase(deleteMenuProductById.fulfilled, (state, action) => {
        const newMenuProduct = state.products.filter(
          (product) => product._id !== action.payload._id
        );
        state.products = newMenuProduct;
        state.loading = false;
        toast.success("¡Producto del menú eliminada con éxito!");
      })
      .addCase(getMenuProductById.pending, (state) => {
        state.loading = true;
      })
      .addCase(getMenuProductById.fulfilled, (state, action) => {
        state.product = action.payload;
        state.loading = false;
      })
      .addCase(updateMenuProductById.pending, (state) => {
        state.loading = true;
      })
      .addCase(updateMenuProductById.fulfilled, (state, action) => {
        const newMenuproducts = state.products.map((product) =>
          product._id === action.payload._id ? action.payload : product
        );
        state.products = newMenuproducts;
        state.loading = false;
        toast.success("¡Producto del menú actualizado con éxito!");
      });
  },
});

export const { resetProduct } = productsSlice.actions;
