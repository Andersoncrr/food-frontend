import { configureStore } from "@reduxjs/toolkit";
import { userSlice } from "./userSlice";
import { menuCategorySlice } from "./menuCategorySlice";
import { employeesSlice } from "./employeeSlice";
import { productsSlice } from "./ProductsSlice";
import { tablesSlice } from "./TableSlice";
import { businessHourSlice } from "./businessHourSlice";

export const store = configureStore({
  reducer: {
    user: userSlice.reducer,
    menuCategory: menuCategorySlice.reducer,
    employee: employeesSlice.reducer,
    product: productsSlice.reducer,
    table: tablesSlice.reducer,
    businessHour: businessHourSlice.reducer,
  },
});
