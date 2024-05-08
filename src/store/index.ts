import { configureStore } from "@reduxjs/toolkit";
import { userSlice } from "./userSlice";
import { menuCategorySlice } from "./menuCategorySlice";
import { employeesSlice } from "./employeeSlice";
import { productsSlice } from "./ProductsSlice";

export const store = configureStore({
  reducer: {
    user: userSlice.reducer,
    menuCategory: menuCategorySlice.reducer,
    employee: employeesSlice.reducer,
    product: productsSlice.reducer,
  },
});
