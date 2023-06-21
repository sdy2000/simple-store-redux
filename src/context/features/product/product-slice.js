import { createSlice } from "@reduxjs/toolkit";
import { getProduct } from "./getProduct";

const initialState = {
  productItems: [],
  isLoading: true,
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getProduct.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getProduct.fulfilled, (state, action) => {
        // console.log(action);
        state.isLoading = false;
        state.productItems = action.payload;
      })
      .addCase(getProduct.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export default productSlice.reducer;
