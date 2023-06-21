import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./features/product/product-slice";
import cartReducer from "./features/cart/cart-slice";

export const store = configureStore({
  reducer: {
    product: productReducer,
    cart: cartReducer,
  },
});
