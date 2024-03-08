import { configureStore } from "@reduxjs/toolkit";
import SnackBarSlice from "./Slice/snackBarSlice";
import navBarSlice from "./Slice/navBarSlice";

export const store = configureStore({
  reducer: {
    snack_bar: SnackBarSlice,
    nav_bar: navBarSlice,
  },
});
