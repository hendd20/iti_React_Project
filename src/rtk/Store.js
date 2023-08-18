import { configureStore } from "@reduxjs/toolkit";
import SliceProduct from "./slices/Slice-product";

export const store = configureStore({
  reducer: {
    products: SliceProduct
  },
});
