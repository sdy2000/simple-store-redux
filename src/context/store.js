import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./features/product/product-slice";
import cartReducer from "./features/cart/cart-slice";
import modalReducer from "./features/modal/modal-slice";

export const store = configureStore({
  reducer: {
    product: productReducer,
    cart: cartReducer,
    modal: modalReducer,
  },
});
