import { createSlice } from "@reduxjs/toolkit";

const initialState = () => {
  if (localStorage.getItem("cart") === null) {
    localStorage.setItem(
      "cart",
      JSON.stringify({
        cartItems: [],
        total_amount: 0,
        total_price: 0,
      })
    );
  }

  return JSON.parse(localStorage.getItem("cart"));
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, { payload }) => {
      const cartItem = state.cartItems.find((item) => item.id === payload.id);
      if (!cartItem) {
        state.cartItems.push({ ...payload, amount: 1 });
      } else {
        cartItem.amount = cartItem.amount + 1;
      }

      localStorage.setItem("cart", JSON.stringify(state));
    },
    clearCart: (state) => {
      state.cartItems = [];

      localStorage.setItem("cart", JSON.stringify(state));
    },
    removeItem: (state, { payload }) => {
      state.cartItems = state.cartItems.filter((item) => item.id !== payload);

      localStorage.setItem("cart", JSON.stringify(state));
    },
    increase: (state, { payload }) => {
      const cartItem = state.cartItems.find((item) => item.id === payload);
      cartItem.amount = cartItem.amount + 1;

      localStorage.setItem("cart", JSON.stringify(state));
    },
    decrease: (state, { payload }) => {
      const cartItem = state.cartItems.find((item) => item.id === payload);
      cartItem.amount = cartItem.amount - 1;

      localStorage.setItem("cart", JSON.stringify(state));
    },
    calculateTotals: (state) => {
      let totalAmount = 0;
      let totalPrice = 0;
      state.cartItems.forEach((item) => {
        totalAmount += item.amount;
        totalPrice += item.amount * item.price;
      });
      state.total_amount = totalAmount;
      state.total_price = totalPrice;

      localStorage.setItem("cart", JSON.stringify(state));
    },
  },
  extraReducers: (builder) => {},
});

export const {
  addToCart,
  clearCart,
  removeItem,
  increase,
  decrease,
  calculateTotals,
} = cartSlice.actions;

export default cartSlice.reducer;
