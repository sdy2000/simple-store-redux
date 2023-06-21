import { createSlice } from "@reduxjs/toolkit";
import { getAllProduct, getProduct } from "./getProduct";

const initialState = {
  productItems: [],
  product: [],
  isLoading: true,
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    clearProduct: (state) => {
      state.product = [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllProduct.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAllProduct.fulfilled, (state, action) => {
        // console.log(action);
        state.isLoading = false;
        state.productItems = action.payload;
      })
      .addCase(getAllProduct.rejected, (state) => {
        state.isLoading = false;
      })
      .addCase(getProduct.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getProduct.fulfilled, (state, action) => {
        // console.log(action);
        state.isLoading = false;
        state.product = action.payload;
      })
      .addCase(getProduct.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export const { clearProduct } = productSlice.actions;

export default productSlice.reducer;
