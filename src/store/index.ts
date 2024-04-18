import { configureStore } from "@reduxjs/toolkit";
import { userSlice } from "./userSlice";
import { menuCategorySlice } from "./menuCategorySlice";

export const store = configureStore({
  reducer: {
    user: userSlice.reducer,
    menuCategory: menuCategorySlice.reducer,
  },
});
